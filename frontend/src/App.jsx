import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer/Footer";
import { lazy, Profiler, Suspense } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { FaSpinner } from "react-icons/fa";
import BackToTop from "./components/BackToTop";
import ScrollToTopFunction from "./ScrollToTopFunction";

const ToggleMenu = lazy(() => import("./components/toggleMenu/ToggleMenu"));
const ArticoliSection = lazy(() =>
  import("./components/articoli/ArticoliSection")
);
const Territorio = lazy(() => import("./pages/homePageCOMPONENTS/Territorio"));
const IlConsiglio = lazy(() =>
  import("./pages/homePageCOMPONENTS/IlConsiglio")
);
const Servizi = lazy(() =>
  import("./pages/homePageCOMPONENTS/SERVIZI/Servizi")
);
const ContattaProgrammatore = lazy(() =>
  import("./pages/ContattaProgrammatore")
);

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
        <Header />
        <Helmet>
          {/* Metadati globali, specifici per l'intera applicazione */}
          <title>Bracciano Nuova CdQ</title>
          <meta
            name="description"
            content="This is a React application with Helmet integration."
          />
        </Helmet>
        <main className="relative flex-grow mt-44 sm:mt-36 xl:mt-56">
          <BackToTop />
          <ScrollToTopFunction />
          <Routes>
            <Route
              path="/"
              element={
                <Profiler id="HomePage" onRender={onRenderApp}>
                  <HomePage />
                </Profiler>
              }
            />
            <Route
              path="/articoli"
              element={
                <Suspense
                  fallback={
                    <div className="flex items-center justify-center h-screen bg-opacity-50">
                      <div className="flex flex-col items-center">
                        <FaSpinner className="animate-spin text-white text-4xl mb-4" />
                        <div className="text-white text-lg">
                          Loading Articoli...
                        </div>
                      </div>
                    </div>
                  }
                >
                  <Profiler id="Articoli" onRender={onRenderApp}>
                    <ArticoliSection />
                  </Profiler>
                </Suspense>
              }
            />
            <Route
              path="/consiglio"
              element={
                <Suspense
                  fallback={
                    <div className="flex items-center justify-center h-screen bg-opacity-50">
                      <div className="flex flex-col items-center">
                        <FaSpinner className="animate-spin text-white text-4xl mb-4" />
                        <div className="text-white text-lg">
                          Loading Il Consiglio...
                        </div>
                      </div>
                    </div>
                  }
                >
                  <Profiler id="consiglio" onRender={onRenderApp}>
                    <IlConsiglio />
                  </Profiler>
                </Suspense>
              }
            />
            <Route
              path="/territorio"
              element={
                <Suspense
                  fallback={
                    <div className="flex items-center justify-center h-screen bg-opacity-50">
                      <div className="flex flex-col items-center">
                        <FaSpinner className="animate-spin text-white text-4xl mb-4" />
                        <div className="text-white text-lg">
                          Loading Territorio...
                        </div>
                      </div>
                    </div>
                  }
                >
                  <Profiler id="Territorio" onRender={onRenderApp}>
                    <Territorio />
                  </Profiler>
                </Suspense>
              }
            />
            <Route
              path="/servizi"
              element={
                <Suspense
                  fallback={
                    <div className="flex items-center justify-center h-screen bg-opacity-50">
                      <div className="flex flex-col items-center">
                        <FaSpinner className="animate-spin text-white text-4xl mb-4" />
                        <div className="text-white text-lg">
                          Loading Servizi...
                        </div>
                      </div>
                    </div>
                  }
                >
                  <Profiler id="Servizi" onRender={onRenderApp}>
                    <Servizi />
                  </Profiler>
                </Suspense>
              }
            />
            <Route
              path="/contattaprogrammatore"
              element={
                <Suspense
                  fallback={
                    <div className="flex items-center justify-center h-screen bg-opacity-50">
                      <div className="flex flex-col items-center">
                        <FaSpinner className="animate-spin text-white text-4xl mb-4" />
                        <div className="text-white text-lg">
                          Loading Contatta il Programmatore...
                        </div>
                      </div>
                    </div>
                  }
                >
                  <Profiler id="Contatta-Programmatore" onRender={onRenderApp}>
                    <ContattaProgrammatore />
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
