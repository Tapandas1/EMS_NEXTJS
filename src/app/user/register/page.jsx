import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <div className="p-10 flex justify-center">
      <div className="w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6">
          Register
        </h1>

        <RegisterForm />

      </div>
    </div>
  );
}