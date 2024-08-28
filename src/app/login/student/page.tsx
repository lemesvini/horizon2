"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "react-bootstrap";
import logo from "@/app/src/logofinalpreenchida.png";
import fundo from "../../../../public/src/fundo.png";
import { auth } from "@/firebase"; // Import Google sign-in method
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // Import necessary Firebase auth methods
import { getFirestore, doc, getDoc } from "firebase/firestore";

export default function Login() {
  const [error, setError] = useState("");
  const router = useRouter();
  const db = getFirestore();

  const handleGoogleSignIn = async () => {
    setError("");

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (!user.email) {
        throw new Error("User email is not available.");
      }

      // Fetch user data
      const userDoc = doc(db, "students", "user", "login", user.email); // Ensure email is not null
      const userSnap = await getDoc(userDoc);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        const { module } = userData || {}; // Ensure userData is defined

        if (module) {
          router.push(`/student/modules/${module}`);
        } else {
          alert("Módulo não encontrado! Entre em contato com o seu Teacher :)");
          router.push("/login");
        }
      } else {
        alert("User data not found, redirecting to login.");
        router.push("/login");
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      setError("Failed to sign in. Please try again.");
    }
  };

  return (
    <div
      className="relative flex p-2 h-screen w-full bg-cover bg-center bg-no-repeat items-center justify-center"
      style={{ backgroundImage: `url(${fundo.src})` }}
    >
      <div className="flex flex-col bg-white drop-shadow border rounded-xl h-fit w-fit py-12 px-12 justify-evenly items-center">
        <Image
          src={logo}
          alt="Logo da Plataforma do Aluno"
          height={150}
          width={150}
          className="drop-shadow"
        />
        <span className="py-2 border-b w-full text-center">
          Faça login com a sua conta Google:
        </span>
        <br />
        {error && (
          <div className="w-full text-red-500 text-center mb-4">{error}</div>
        )}
        <Button variant="primary" className="w-full py-2" onClick={handleGoogleSignIn}>
          Continuar com Google
        </Button>
      </div>
    </div>
  );
}
