import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center border-2">
      <SignIn
        path="/sign-in"
        signUpUrl="/sign-in"
        afterSignInUrl="/dashboard"
      />
    </div>
  );
};

export default SignInPage;
