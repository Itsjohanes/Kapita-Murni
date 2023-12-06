import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import DashboardContent from "./components/Dashboard/DashboardContent";
import QuizContent from "./components/Dashboard/QuizContent";
import QuizPernafasan from "./components/Dashboard/QuizPernafasanContent";
import QuizPenyakit from "./components/Dashboard/QuizPenyakitContent";
import AugmentedReality from "./components/Dashboard/AugmentedRealityContent";
import AugmentedRealityMenuContent from "./components/Dashboard/AugmentedRealityMenuContent";
import MateriTemplate from "./components/Dashboard/MateriTemplate";
import penyakitMateri from "./components/Dashboard/Data/PenyakitMateri";
import SistemPernafasanMateri from "./components/Dashboard/Data/SistemPernafasanMateri";
import Disclaimer from "./components/Dashboard/Disclaimer";
import Policy from "./components/Dashboard/Policy";

function App() {
  return (
    <div>
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route
            path="sistempernafasan"
            element={<MateriTemplate data={SistemPernafasanMateri} />}
          />
          <Route path="disclaimer" element={<Disclaimer />} />{" "}
          <Route path="policy" element={<Policy />} />{" "}
          <Route
            path="penyakit"
            element={<MateriTemplate data={penyakitMateri} />}
          />
          <Route path="overview" element={<DashboardContent />} />{" "}
          {/*Ini adalah rute untuk augmented reality*/}
          <Route path="ar" element={<AugmentedReality />}>
            <Route index element={<AugmentedRealityMenuContent />} />
          </Route>
          {/* Ini adalah rute untuk konten kursus */}
          <Route path="quiz" element={<QuizContent />} />
          <Route path="quiz-pernafasan" element={<QuizPernafasan />} />
          <Route path="quiz-penyakit" element={<QuizPenyakit />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
