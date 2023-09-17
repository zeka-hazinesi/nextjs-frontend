// // pages/account.js
// import { useRouter } from "next/router";

// function AccountPage({ isAuthenticated }) {
//   const router = useRouter();

//   // Überprüfen, ob der Benutzer eingeloggt ist
//   if (!isAuthenticated) {
//     // Wenn nicht eingeloggt, umleiten
//     router.push("/");
//     return null; // Oder eine Ladeanzeige anzeigen
//   }

//   return (
//     <div>
//       <h2>Benutzerkonto</h2>
//     </div>
//   );
// }

// export async function getServerSideProps(context) {
//   // Hier können Sie den Authentifizierungsstatus überprüfen
//   // Wenn der Benutzer eingeloggt ist, setzen Sie isAuthenticated auf true
//   const isAuthenticated = true; // Hier sollte Ihre Authentifizierungslogik stehen

//   return {
//     props: { isAuthenticated },
//   };
// }

// export default AccountPage;
