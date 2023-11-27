import UI from "@material-tailwind/react";
import type { IUser } from "types/user.types";

const {
  Card,
  CardBody,
  Typography,
  Button,
} = UI;

interface IUserCardProps {
  user: IUser
}

function UserCard({ user }: IUserCardProps) {
  return (
    <Card className="w-full flex-row">
      <CardBody className="w-100 box-border">
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {user.id}
        </Typography>
        <Typography title={user.email} variant="h4" color="blue-gray" className="mb-2 text-ellipsis overflow-hidden ...">
          {user.email}
        </Typography>
        {/* <Typography color="gray" className="mb-8 font-normal">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses. Yet its own business model disruption is only part
          of the story
        </Typography> */}
        <a href="/" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}

export default UserCard;