import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";

import "@/App.css";
import Header from "@/Header.jsx";
import Footer from "@/Footer.jsx";
import Loader from "@/components/Loader.jsx";

const LazyHome = lazy(() => import("@/pages/Home.jsx"));
const LazyAbout = lazy(() => import("@/pages/About.jsx"));
const LazySolutions = lazy(() => import("@/pages/Solutions.jsx"));
const LazyContact = lazy(() => import("@/pages/Contact.jsx"));
const LazyNotFound = lazy(() => import("@/pages/NotFound.jsx"));

export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<LazyHome />} />
            <Route path="/about/" element={<LazyAbout />} />
            <Route path="/solutions/" element={<LazySolutions />} />
            <Route path="/contact/" element={<LazyContact />} />
            <Route path="*" element={<LazyNotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
