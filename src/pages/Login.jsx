import { Logo } from "../assets/icon";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="bg-light min-h-screen p-6 flex items-center justify-center text-secondary">
      <div className="bg-white p-6 gap-2 flex flex-col items-center max-w-md w-full">
        <Logo />
        <h1 className="font-semibold">
          Welcome to <span className="font-bold">JoBins</span>
        </h1>
        <div className="flex flex-wrap gap-3 text-sm text-secondary-light">
          <p>username: admin</p>
          <p>password: admin</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
