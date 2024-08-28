"use client";

import { auth, db } from "@/firebase";
import {
  collection,
  addDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";

export default function TPlans() {
  type Subscription = {
    planName: string;
    status: string;
  };

  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const currentUser = auth.currentUser; // Get the current user

  // Function to create the checkout session
  const createCheckoutSession = async () => {
    if (!currentUser) {
      alert("User is not authenticated");
      return;
    }

    try {
      const checkoutSessionRef = await addDoc(
        collection(
          doc(collection(db, "customers"), currentUser.uid),
          "checkout_sessions"
        ),
        {
          price: "price_1PrSJCA5LmQ8YZIWr514GOSO",
          success_url: window.location.origin,
          cancel_url: window.location.origin,
        }
      );

      // Listen for the snapshot of the document to get the checkout URL
      onSnapshot(checkoutSessionRef, (snap: any) => {
        const { error, url } = snap.data();
        if (error) {
          alert(`An error occurred: ${error.message}`);
        }
        if (url) {
          // Redirect to the Stripe Checkout URL
          window.location.assign(url);
        }
      });
    } catch (error) {
      console.error("Error creating checkout session:", error);
      alert("An error occurred. Please try again.");
    }
  };

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
          planName: subscriptionData.planName, // Update this based on your actual Firestore data structure
          status: subscriptionData.status,
        });
      } else {
        console.log("No active or trialing subscription found.");
      }
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, [currentUser]);

  return (
    <>
      <div className="flex bg-slate-100">
        <NavBar />
        <Sidebar />
        <div className="ml-[240px] mt-[70px] text-black">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={createCheckoutSession}
          >
            Start Checkout
          </button>
          {subscription ? (
            <div className="mt-4">
              {/* <p>
                <strong>Current Plan:</strong> {subscription.planName}
              </p> */}
              <p>
                <strong>Plan Status:</strong> {subscription.status}
              </p>
            </div>
          ) : (
            <div className="mt-4">
              <p>No active or trialing subscription found.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
