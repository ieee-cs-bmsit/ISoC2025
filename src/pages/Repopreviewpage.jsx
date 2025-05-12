import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import Header from "../components/Header";
import axios from "axios";
import { toast } from "react-hot-toast";
// import reposData from "../data/Reposdata";
// import { useRepo } from "../context/Repocontext";

const RepoPreview = () => {
  const { id } = useParams();
  const { user, login, fetchStatus } = useAuth();
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(true);
  // const { myRepos, addToMyRepos } = useRepo();

  useEffect(() => {
    fetchRepo();
  }, [id]);

  // useEffect(() => {
  //   console.log("Updated myRepos:", myRepos);
  // }, [myRepos]);

  const fetchRepo = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/repos/${id}`);
      setRepo(res.data);
    } catch (err) {
      console.error("Error fetching repo:", err);
      toast.error("Failed to load repository.");
    } finally {
      setLoading(false);
    }
  };

  const handleContribute = async () => {
    if (!user) {
      toast.error("Please Sign in to contribute!");
    } else {
      try {
        const res = await axios.post(
          `http://localhost:5000/api/users/${user._id}/contribute`,
          { repoId: repo._id },
          { withCredentials: true }
        );
        toast.success("Added to your ongoing projects!");
        fetchStatus(); // Refresh user data
      } catch (err) {
        const msg =
          err.response?.data?.message || "Could not add to ongoing projects.";
        toast.error(msg);
      }
    }
  };

  if (loading) {
    return <div className="px-6 py-8 max-w-4xl mx-auto">Loading...</div>;
  }

  if (!repo) {
    return (
      <div className="px-6  py-20 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Repository Not Found</h2>
        <p className="text-gray-600">
          The repository you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <>
      <div
        className="bg-repeat pb-10 h-full"
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
        <Header />
        <div className="px-8 pt-5 max-w-4xl mx-auto bg-[#eeeeee] ">
          <h2 className="text-3xl font-bold mb-6">{repo.name}</h2>
          <img
            src={repo.image}
            alt={repo.name}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <div className="my-5">
            <span
            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              repo.category === "Platinum"
                ? "bg-gray-100 text-gray-800 border border-gray-300"
                : repo.category === "Gold"
                ? "bg-yellow-100 text-yellow-800 border border-yellow-300"
                : repo.category === "Silver"
                ? "bg-gray-200 text-gray-800 border border-gray-400"
                : "bg-amber-400 text-amber-800 border border-amber-300"
            }`}
          >
            {repo.category} repository
          </span>
          </div>
          
          <p className="text-gray-700 mb-4">{repo.shortDescription}</p>
          <p className="text-gray-700 mb-6">{repo.longDescription}</p>
          <Link to={repo.url} target="_blank" rel="noopener noreferrer">
            Github Link: <span  className="text-blue-500">{repo.url}</span>
          </Link>
          <p className="mt-6">Maintainer: {repo.maintainer}</p>

          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
            <span className="bg-blue-100 text-[#1f3cfc] mt-5 px-2 py-1 rounded">
              {repo.domain.join(", ")}
            </span>
          </div>

          <button
            onClick={handleContribute}
            className="bg-[#1f3cfc] text-white py-2 px-4 rounded-sm hover:bg-blue-800 cursor-pointer transition-colors duration-200"
          >
            Contribute
          </button>
        </div>
      </div>
    </>
  );
};

export default RepoPreview;
