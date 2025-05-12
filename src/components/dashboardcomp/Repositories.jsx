import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/Authcontext";
import axios from "axios";
import { useDashboard } from "../../context/Dashboardcontext";
import toast from "react-hot-toast";

const Repositories = () => {
  const { user } = useAuth();
  const [repos, setRepos] = useState([]);
  const { dashboardData, setDashboardData } = useDashboard();

  const handleRemoveRepo = async (repoId) => {
    try {
      const response = await axios.delete(
        `https://isoc-backend-s21v.onrender.com/api/users/${user._id}/repos/${repoId}`
      );
      const updatedRepos = repos.filter((repo) => repo._id !== repoId);
      setRepos(updatedRepos);
      toast.success("Repo removed successfully");
      console.log("Repo removed successfully:", response.data);
    } catch (error) {
      console.error("Failed to remove repo:", error);
    }
  };

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          `https://isoc-backend-s21v.onrender.com/api/users/${user._id}/repos`
        );
        const data = response.data.ongoingprojects;

        const enriched = data.map((repo) => ({
          ...repo,
          updated: "Recently",
          domain: repo.domain?.[0] || "N/A",
        }));

        setRepos(enriched);
      } catch (error) {
        console.error("Failed to fetch repos:", error);
      }
    };

    if (user) fetchRepos();
  }, [user]);

  return (
    <div
      className="bg-repeat"
      style={{
        backgroundImage: "url('/images/repopagebg2.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "200%",
      }}
    >
      <style>
        {`
          @media (min-width: 768px) {
            div.bg-repeat {
              background-size: 100% !important;
            }
          }
        `}
      </style>
      <div className="py-12 space-grotesk-regular px-10 bg-transparent min-h-screen text-[#ee540e]">
        <h2
          className="text-5xl text-center font-bold mb-10"
          style={{
            fontFamily: "CameraObscuraDEMO, sans-serif",
            letterSpacing: 2,
            textShadow: `
              -2px -2px 0 #fff,
              2px -2px 0 #fff,
              -2px 2px 0 #fff,
              2px 2px 0 #fff,
              0px 2px 0 #fff,
              2px 0px 0 #fff,
              0px -2px 0 #fff,
              -2px 0px 0 #fff
            `,
          }}
        >
          Ongoing Projects
        </h2>

        {/* Grid layout with 2 columns on md+ screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {repos.length === 0 ? (
    <p className="text-center col-span-2 text-xl text-gray-700">
      No ongoing projects found.
    </p>
  ) : (
    repos.map((repo) => (
      <div
        key={repo._id}
        className="bg-white border border-black p-2 rounded-sm overflow-hidden shadow-sm transform transition duration-300 hover:scale-100 hover:shadow-lg w-full flex flex-col"
      >
        <div className="p-4 flex-grow flex justify-between items-center">
          <h3 className="text-lg md:text-2xl font-semibold text-gray-900">
            {repo.name}
          </h3>
          <button
            onClick={() => handleRemoveRepo(repo._id)}
            className="text-gray-500 cursor-pointer hover:text-gray-700 focus:outline-none"
          >
            Remove
          </button>
        </div>

        <div className="p-4 flex-grow">
          <p className="text-sm text-gray-600 mt-2">
            {repo.shortDescription}
          </p>
        </div>

        <div className="mt-auto px-4 py-2 bg-gray-100 flex justify-between items-center">
          <span className="text-sm px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full font-medium">
            {repo.domain}
          </span>
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm md:text-lg hover:scale-105 transition duration-200"
          >
            View on GitHub
          </a>
        </div>
      </div>
    ))
  )}
</div>

      </div>
    </div>
  );
};

export default Repositories;
