import { FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";

export const getPortalUrl = async (app: FirebaseApp): Promise<string> => {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    return Promise.reject(new Error("User is not authenticated"));
  }

  try {
    const functions = getFunctions(app, "southamerica-east1");
    const functionRef = httpsCallable(
      functions,
      "ext-firestore-stripe-payments-createPortalLink"
    );
    const response = await functionRef({
      customerId: user.uid,
      returnUrl: window.location.origin,
    });

    // Ensure response and data exist
    if (!response || !response.data) {
      throw new Error("No response data returned from the function");
    }

    const dataWithUrl = response.data as { url: string };

    if (dataWithUrl.url) {
      console.log("Reroute to Stripe portal: ", dataWithUrl.url);
      return dataWithUrl.url;
    } else {
      throw new Error("No URL returned from the function");
    }
  } catch (error) {
    console.error("Error fetching portal URL: ", error);
    return Promise.reject(error);
  }
};
