// src/app/login/page.js
import Navbar from '../../components/Navbar';
import LoginForm from '../../components/LoginForm';

export default function LoginPage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-white px-4">
        <LoginForm />
      </div>
    </div>
  );
}
