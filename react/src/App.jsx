import "./App.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function App() {
  const phoneNumber = "310208932732";

  return (
    <>
      <Header phoneNumber={phoneNumber} />
      <main className="main">react router should go here</main>
      <Footer phoneNumber={phoneNumber} />
    </>
  );
}
