"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/firebase";
import {
  collection,
  addDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import Image from "next/image";
import logo from "@/app/src/logofinalpreenchida.png";

type Subscription = {
  planName: string;
  status: string;
};

export default function TPlans() {
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const currentUser = auth.currentUser;
  
  // Function to create the checkout session
  const createCheckoutSession = async () => {
    if (!currentUser) {
      setError("Please log in to start checkout");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const checkoutSessionRef = await addDoc(
        collection(
          doc(collection(db, "customers"), currentUser.uid),
          "checkout_sessions"
        ),
        {
          price: "price_1PrpXEA5LmQ8YZIWFp3U3Gq1",
          success_url: window.location.origin,
          cancel_url: window.location.origin,
        }
      );

      // Listen for the snapshot of the document to get the checkout URL
      const unsubscribe = onSnapshot(checkoutSessionRef, (snap) => {
        const data = snap.data();
        
        if (!data) return;
        
        if (data.error) {
          setError(`An error occurred: ${data.error.message}`);
          setIsLoading(false);
          unsubscribe();
        }
        
        if (data.url) {
          // Redirect to the Stripe Checkout URL
          window.location.assign(data.url);
        }
      });

      // Cleanup the listener after 10 seconds if no response
      setTimeout(() => {
        unsubscribe();
        setIsLoading(false);
        if (!error) {
          setError("Checkout session timed out. Please try again.");
        }
      }, 10000);
    } catch (err) {
      console.error("Error creating checkout session:", err);
      setError("Failed to start checkout process. Please try again.");
      setIsLoading(false);
    }
  };

  // Check for active subscriptions
  useEffect(() => {
    if (!currentUser) return;

    const q = query(
      collection(db, "customers", currentUser.uid, "subscriptions"),
      where("status", "in", ["trialing", "active"])
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const doc = snapshot.docs[0];
        const subscriptionData = doc.data() as Subscription;
        setSubscription({
          planName: subscriptionData.planName || "Standard Plan",
          status: subscriptionData.status,
        });
      } else {
        setSubscription(null);
      }
    });

    return () => unsubscribe();
  }, [currentUser]);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 flex flex-col gap-4 text-center">
        <Image
          src={logo}
          alt="Logo da Plataforma do Aluno"
          height={150}
          width={150}
          className="drop-shadow-lg self-center"
        />
        
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded">
            {error}
          </div>
        )}

        {subscription ? (
          <div className="mt-4">
            <p className="font-medium">
              You already have an active subscription: <span className="font-bold">{subscription.status}</span>
            </p>
          </div>
        ) : (
          <div className="mt-4">
            <p>No active subscription found. Click below to subscribe.</p>
          </div>
        )}

        <button
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-300 transition"
          onClick={createCheckoutSession}
          disabled={isLoading || !!subscription}
        >
          {isLoading ? "Processing..." : subscription ? "Already Subscribed" : "Start Checkout"}
        </button>
      </div>
    </div>
  );
}
