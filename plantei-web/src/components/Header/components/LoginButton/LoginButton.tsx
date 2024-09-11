import './LoginButton.css';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const LoginButton = () => {
  return (
    <div className='login-button'>
      <SignedOut>
        <SignInButton>
        <button className="custom-signin-button">Sign In</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default LoginButton;