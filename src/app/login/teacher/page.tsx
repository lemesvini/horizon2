"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/app/src/logofinalpreenchida.png";
import { auth } from "@/firebase"; // Import Google sign-in method
import {
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // Import necessary Firebase auth methods
import { Button } from "react-bootstrap";

export default function Login() {
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const firestore = getFirestore();

  const handleGoogleSignIn = async () => {
    setError("");

    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      const user = auth.currentUser;

      if (user) {
        const checkTeacherSubscription = async () => {
          const q = query(
            collection(firestore, "customers", user.uid, "subscriptions"),
            where("status", "in", ["trialing", "active"])
          );

          const unsubscribe = onSnapshot(q, (snapshot) => {
            if (!snapshot.empty) {
              const subscriptionData = snapshot.docs[0].data();
              const status = subscriptionData.status;

              if (status === "active") {
                router.push("/teacher/dashboard");
              } else {
                router.push("/checkout");
              }
            } else {
              router.push("/checkout");
            }
            unsubscribe(); // Unsubscribe after the first snapshot
          });
        };

        // Call the subscription check function
        await checkTeacherSubscription();
      } else {
        router.push("/checkout"); // Fallback if user is not defined
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred.");
      }
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div
      className="relative flex p-2 h-screen w-full bg-cover bg-center bg-no-repeat items-center justify-center bg-[#18477B]"
     
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
