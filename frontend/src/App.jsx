import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer/Footer";
import Shop from "./components/shop/Shop";
import { lazy, Profiler, Suspense } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

const ToggleMenu = lazy(() => import("./components/toggleMenu/ToggleMenu"));
const AboutUs = lazy(() => import("./components/aboutUs/AboutUs"));
const ContactUs = lazy(() => import("./components/contactUs/ContactUs"));

function App() {
  const onRenderApp = (
    id, //Identificatore del profiler
    phase, //Mount o update phase
    actualDuration, //Durata reale del rendering
    baseDuration, //Durata stimata senza ottimizzazioni
    startTime, //Timestamp inizio rendering
    commitTime, //Timestamp commit del rendering
    interactions //Interazioni tracciate
  ) => {
    console.log(`Profilo: ${id}`);
    console.log(`Fase: ${phase}`);
    console.log(`Durata effettiva: ${actualDuration}`);
    console.log(`Durata stimata: ${baseDuration}`);
    console.log(`Inizio del render: ${startTime}`);
    console.log(`Tempo di commit: ${commitTime}`);
    console.log(`Interazioni tracciate: ${interactions}`);
  };

  return (
    <HelmetProvider>
      {/* HelmetProvider avvolge l'intera app per gestire i metadati */}
      <div className="flex flex-col min-h-screen">
        <Helmet>
          {/* Metadati globali, specifici per l'intera applicazione */}
          <title>4DevShop</title>
          <meta
            name="description"
            content="This is a React application with Helmet integration."
          />
        </Helmet>

        <Header />

        <main className="relative flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <Profiler id="HomePage" onRender={onRenderApp}>
                  <Helmet>
                    {/* Metadati specifici per la HomePage */}
                    <title>Home Page - 4DevShop</title>
                    <meta
                      name="description"
                      content="Welcome to the homepage of our React app."
                    />
                  </Helmet>
                  <HomePage />
                </Profiler>
              }
            />
            <Route
              path="/shop"
              element={
                <Suspense fallback={<div>Loading Shop...</div>}>
                  <Profiler id="Shop" onRender={onRenderApp}>
                    <Helmet>
                      {/* Metadati specifici per la pagina Shop */}
                      <title>Shop - 4Dev Shop</title>
                      <meta
                        name="description"
                        content="Browse through our shop."
                      />
                    </Helmet>
                    <Shop />
                  </Profiler>
                </Suspense>
              }
            />
            <Route
              path="/aboutus"
              element={
                <Suspense fallback={<div>Loading About Us...</div>}>
                  <Profiler id="About Us" onRender={onRenderApp}>
                    <Helmet>
                      {/* Metadati specifici per la pagina About Us */}
                      <title>About Us - 4Dev Shop</title>
                      <meta
                        name="description"
                        content="Browse through out about us"
                      />
                    </Helmet>
                    <AboutUs />
                  </Profiler>
                </Suspense>
              }
            />
            <Route
              path="/contactus"
              element={
                <Suspense fallback={<div>Loading Contact Us...</div>}>
                  <Profiler id="Contact Us" onRender={onRenderApp}>
                    <Helmet>
                      {/* Metadati specifici per la pagina Contact Us */}
                      <title>Contact Us - 4Dev Shop</title>
                      <meta
                        name="description"
                        content="Browse through out contact us"
                      />
                    </Helmet>
                    <ContactUs />
                  </Profiler>
                </Suspense>
              }
            />
          </Routes>

          {/* Suspense per ToggleMenu */}
          <Suspense fallback={<div>Loading Menu...</div>}>
            <Profiler id="ToggleMenu" onRender={onRenderApp}>
              <ToggleMenu />
            </Profiler>
          </Suspense>
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
