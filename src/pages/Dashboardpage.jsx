import React from "react";
import { useRepo } from "../context/Repocontext";

const Dashboard = () => {
  const { myRepos, addToMyRepos, setMyRepos } = useRepo();

  const handleRemoveRepo = (repoId) => {
    setMyRepos(prevRepos => prevRepos.filter(repo => repo.id !== repoId));
  };

  return (
    <div
      className="bg-repeat w-full h-full min-h-screen"
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

      <div className="w-full px-6 py-20 md:py-33 max-w-screen-xl mx-auto">
        <h2 className="md:text-6xl text-3xl sm:text-4xl font-bold mb-6 py-5 text-center text-[#1f3cfc]"
          style={{
            fontFamily: "CameraObscuraDEMO, sans-serif",
            textShadow: `-2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, 0px 2px 0 #fff, 2px 0px 0 #fff, 0px -2px 0 #fff, -3px 0px 0 #fff`,
            letterSpacing: "2px",
          }}
        >
          Your Ongoing Projects
        </h2>

        {myRepos.length === 0 ? (
          <div className="text-center p-8 bg-white/10 rounded-lg backdrop-blur-sm max-w-2xl mx-auto">
            <p className="text-gray-900 text-lg">
              You haven't added any repositories yet.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 w-full">
            {myRepos.map((repo) => (
              <div
                key={repo.id}
                className="bg-white rounded-lg shadow-lg p-6 border border-gray-500 w-full transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Left column - Description */}
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">{repo.name}</h3>
                    <p className="text-gray-600 mb-4">{repo.shortDescription}</p>
                    <div className="flex flex-wrap gap-2">
                      {repo.domain.map((domain, index) => (
                        <span 
                          key={index}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {domain}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right column - Status */}
                  <div className="md:w-1/2">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 h-full">
                      <div className="text-center sm:text-center p-2 sm:p-0 flex flex-col justify-center">
                        <h4 className="font-semibold text-gray-900 mb-2 sm:mb-6 text-sm sm:text-base">PR Status</h4>
                        <p className="text-gray-500 text-xl sm:text-2xl">TBD</p>
                      </div>
                      <div className="text-center sm:text-center p-2 sm:p-0 flex flex-col justify-center">
                        <h4 className="font-semibold text-gray-900 mb-2 sm:mb-6 text-sm sm:text-base">Points Awarded</h4>
                        <p className="text-gray-500 text-xl sm:text-2xl">TBD</p>
                      </div>
                      <div className="text-center sm:text-center p-2 sm:p-0 flex flex-col justify-center">
                        <button
                          onClick={() => handleRemoveRepo(repo.id)}
                          className="bg-gray-200 hover:bg-gray-300 text-black font-medium py-2 px-4 rounded-lg transition-colors duration-200 self-center cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;