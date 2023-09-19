// import { createContext, useContext, useState, useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";

// const StripeContext = createContext();

// export function useStripe() {
//   return useContext(StripeContext);
// }

// export function StripeProvider({ children }) {
//   const [stripe, setStripe] = useState(null);

//   useEffect(() => {
//     const initializeStripe = async () => {
//       const stripePromise = loadStripe(
//         "pk_test_51NqfmeAj48gV2T9uiCMLk2t6DaVHX9ARTCkNAKMIGoEy3TH1Pt8c2rDUfzK5m7EjvZXBRQYvQjO0aJTuJ8itdqIp00RWOfXb7c"
//       );
//       const stripeInstance = await stripePromise;
//       setStripe(stripeInstance);
//     };

//     initializeStripe();
//   }, []);

//   return (
//     <StripeContext.Provider value={stripe}>{children}</StripeContext.Provider>
//   );
// }
