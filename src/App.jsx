import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Teampage from "./pages/Teampage";
import FAQpage from "./pages/FAQpage";
import Repospage from "./pages/Repospage";
import Sponsorspage from "./pages/Sponsorspage";
import { AuthProvider } from "./context/Authcontext";
import RepoPreview from "./pages/Repopreviewpage";
import Dashboard from "./pages/Dashboardpage";
import ADashboard from "./pages/ADashboard";
import ProtectedRoute from "./components/Protectedroutes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            iconTheme: {
              primary: 'blue',
              secondary: 'white',
            },
          },
          error: {
            iconTheme: {
              primary: 'blue',
              secondary: 'white',
            },
          },
          style: {
            fontSize: "1.1rem",
            fontWeight: "500",
            padding: "12px",
            borderRadius: "1px",
            background: "#fff",
            color: "#000",
          },
        }}
      />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* <Route path="/repos" element={<Repospage />} /> */}
          <Route path="/team" element={<Teampage />} />
          <Route path="/faqs" element={<FAQpage />} />
          <Route path="/sponsors" element={<Sponsorspage />} />
        </Routes>

        <AuthProvider>
          <Routes>
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/repos" element={<Repospage />} />
            <Route path="/repo/:id" element={<RepoPreview />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }

            />
            <Route
              path="/admin-dashboard"
              element={
                <ADashboard />
              }
            />
          </Routes>
        </AuthProvider>


      </main>
    </>
  );
};

export default App;
