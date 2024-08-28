"use client";
import { app } from "@/firebase";
import { rejects } from "assert";
import { FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
    addDoc, 
    collection,
    getFirestore,
    onSnapshot,
} from "firebase/firestore"

export const getCheckoutUrl = async (
    app: FirebaseApp, 
    priceId: string
): Promise<string> => {
    const auth = getAuth(app);
    const userId = auth.currentUser?.uid;
    if (!userId) throw new Error("User is not authenticated");

    const db = getFirestore(app);
    const checkoutSessionRef = collection(
        db, 
        "customers",
        userId,
        "checkout_sessions"
    );

    const docRef = await addDoc(checkoutSessionRef, {
        price: priceId, 
        sucess_url: window.location.origin, 
        cancel_url: window.location.origin,
    });

    return new Promise<string>((resolve, reject) => {
        const unsubscribe = onSnapshot(docRef, (snap) => {
            const { error, url } = snap.data() as {
                error?: { message:string };
                url?: string;
            };
            if (error) {
                unsubscribe();
                reject(new Error('An error occurred: ${error.message}'));
            }
            if (url) {
                console.log("Stripe Checkout URL:", url)
                unsubscribe();
                resolve(url);
            }
        })
    }) 
}