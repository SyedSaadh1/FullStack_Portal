import { redirect } from "@vercel/remix";
import type { LoaderFunction, ActionFunctionArgs } from "@vercel/remix";
import UI from "@material-tailwind/react";


import { useFetcher } from "@remix-run/react";
import { getUser, register } from "utils/auth.server";
import { useState, useMemo, useEffect } from "react";
import { isValidEmail, isValidEmailOtp } from "utils/validators";


const {
  Card,
  CardBody,
  Typography,
  Button,
  Input,
  IconButton,
}: any = UI

export async function action({
  request,
}: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");

  if (email) {
    return await register({ email })
  }

  return {}
}

export const loader: LoaderFunction = async ({ request }) => {
  // If there's already a user in the session, redirect to the home page
  return await getUser(request) ? redirect('/') : null
}


export default function Login() {
  const fetcher = useFetcher({ key: 'login' })
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  const { registerId, token, error }: any = fetcher.data || {};

  useEffect(() => {
    if (!registerId || !token) {
      setOtp('')
    }
  }, [registerId, token])


  const handleLogin = async () => {
    if (!isValidEmail(email)) {
      return;
    }

    if (otp && !isValidEmailOtp(otp)) {
      return;
    }

    const isOtpVerification = isValidEmailOtp(otp);
    const payload: any = isOtpVerification ? { otp, registerId, token } : { email };
    const action = isOtpVerification ? '/verify' : '/login'
    fetcher.submit(payload, { action, method: "post" });
  };

  const resetEmail = async () => {
    fetcher.submit({ reset: true }, { action: '/login', method: "post" });
  }

  const canSubmit = useMemo(() => {
    if (!registerId) return isValidEmail(email);
    return isValidEmailOtp(otp);
  }, [otp, email, registerId])


  const showVericationUi = (isValidEmail(email) && registerId && token);

  return (
    <main className="mx-auto">

      <Card className="max-w-md mx-auto mt-48">
        <CardBody className="flex flex-col gap-8">
          <Typography variant="h4" className="font-medium">
            {showVericationUi ? 'Enter the code sent to your email' : 'Enter your email to start learning'}
          </Typography>

          <div className="flex gap-2 items-center">
            <Input
              label="Email"
              size="lg"
              value={email}
              type="email"
              disabled={showVericationUi}
              onChange={(e: any) => setEmail(e.target.value)} />
            {showVericationUi && <IconButton variant="text" onClick={resetEmail}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="m21.28 6.4-9.54 9.54c-.95.95-3.77 1.39-4.4.76-.63-.63-.2-3.45.75-4.4l9.55-9.55a2.58 2.58 0 1 1 3.64 3.65v0Z"
                />
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M11 4H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h11c2.21 0 3-1.8 3-4v-5"
                />
              </svg>
            </IconButton>}
          </div>


          {showVericationUi && <div className="flex flex-col gap-2">
            <Input
              label="Verification code"
              size="lg"
              value={otp}
              error={!!error}
              onChange={(e: any) => setOtp(e.target.value)} />
            {error && <Typography variant="small" className="text-red-500">
              {error}
            </Typography>}
          </div>}
          <div>
            <Button disabled={!canSubmit || fetcher.state === "submitting"} variant="gradient" fullWidth onClick={handleLogin} className="flex items-center justify-center">
              {fetcher.state === "submitting" && <svg
                className="animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeWidth={1.5}
                  d="M4.975 12H7.9M11.8 5v3M18.625 12H15.7M11.8 19v-3M6.974 16.95l2.068-2.121M6.974 7.05l2.068 2.121M16.626 7.05l-2.068 2.121M16.626 16.95l-2.068-2.121"
                />
              </svg>}
              {(showVericationUi) ? 'Verify' : 'Continue'}
            </Button>

            {canSubmit && !showVericationUi && <Typography variant="small" className="mt-2">
              By tapping continue, you agree to the Terms of Use and Privacy Policy
            </Typography>}

          </div>
        </CardBody>
      </Card>
    </main>
  );
}
