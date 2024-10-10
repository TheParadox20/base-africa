import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
//import Landingpage from "./pages/Landingpage";
import "./assets/styles/globals.css";
import Landingpage from "./pages/Landingpage";
//import Landingpage from "./pages/Landingpage";

export const metadata = {
  title: "CrowdFunding",
  description: "Onchain crowdfunding platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Landingpage />
        <Footer />
       
      </body>
    </html>
  );
}
