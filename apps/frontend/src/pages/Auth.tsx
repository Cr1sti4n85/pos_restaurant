import { FC, useState } from "react";
import restaurant from "../assets/imgs/restaurant-img.jpg";
import logo from "../assets/imgs/logo.png";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";

const Auth: FC = () => {
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  return (
    <div className="flex min-h-screen w-full">
      {/* Left Section */}
      <div className="w-1/2 relative flex items-center justify-center bg-cover">
        {/* BG Image */}
        <img
          className="w-full h-full object-cover"
          src={restaurant}
          alt="Restaurant Image"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-75"></div>

        {/* Quote at bottom */}
        <blockquote className="absolute bottom-10 px-8 mb-10 text-2xl italic text-white">
          "Un buen servicio puede convertir una experiencia común en algo
          especial"
          <br />
          <span className="block mt-4 text-yellow-400">
            - Fundador de Restro
          </span>
        </blockquote>
      </div>

      {/* Right Section */}
      <div className="w-1/2 min-h-screen bg-[#1a1a1a] p-10">
        <div className="flex flex-col items-center gap-2">
          <img
            src={logo}
            alt="Restro Logo"
            className="h-14 w-14 border-2 rounded-full p-1"
          />
          <h1 className="text-lg font-semibold text-[#f5f5f5] tracking-wide">
            Restro
          </h1>
        </div>

        <h2 className="text-4xl text-center mt-10 font-semibold text-yellow-400 mb-10">
          {!isRegistered
            ? "Registro de empleados"
            : "Inicio de Sesión de empleados"}
        </h2>

        {/* Components */}
        {!isRegistered ? (
          <Register setIsRegistered={setIsRegistered} />
        ) : (
          <Login />
        )}

        <div className="flex justify-center mt-6">
          <p className="text-sm text-[#ababab]">
            {isRegistered ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}{" "}
            <a
              onClick={() => setIsRegistered(!isRegistered)}
              className="text-yellow-400 font-semibold hover:underline"
              href="#"
            >
              {!isRegistered ? "Inicia Sesión" : "Registrate"}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
