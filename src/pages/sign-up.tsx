import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center border-2">
      <SignUp path="/sign-up" signInUrl="/" afterSignInUrl="/" />
    </div>
  );
};

export default SignUpPage;
