export function isValidEmail(email: string) {
  if (!email) return false;
  // Regular expression for email validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Test the email against the regex pattern
  return emailRegex.test(email);
}

export function isValidEmailOtp(otp: string) {
  if (!otp) return false;
  // Regular expression for email validation
  const otpRegex = /^[0-9]{6}$/;

  // Test the email against the regex pattern
  return otpRegex.test(otp);
}