// import React, { createContext, useContext, useState, useEffect } from "react";
// import { toast } from "react-hot-toast";

// const RepoContext = createContext();

// export const RepoProvider = ({ children }) => {
//   // Initialize state with data from localStorage if it exists
//   const [myRepos, setMyRepos] = useState(() => {
//     if (typeof window !== 'undefined') {
//       const savedRepos = localStorage.getItem('myRepos');
//       return savedRepos ? JSON.parse(savedRepos) : [];
//     }
//     return [];
//   });

//   // Update localStorage whenever myRepos changes
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       localStorage.setItem('myRepos', JSON.stringify(myRepos));
//     }
//   }, [myRepos]);

//   const addToMyRepos = (repo) => {
//     const alreadyExists = myRepos.some((r) => r.id === repo.id);
  
//     if (alreadyExists) {
//       toast.error("This repository is already in your contributions.");
//       return false;
//     }
  
//     if (myRepos.length >= 5) {
//       toast.error("You can only contribute to a maximum of 5 repositories.");
//       return false;
//     }
  
//     setMyRepos((prev) => [...prev, repo]);
//     return true;
//   };

//   return (
//     <RepoContext.Provider value={{ myRepos,setMyRepos, addToMyRepos }}>
//       {children}
//     </RepoContext.Provider>
//   );
// };

// export const useRepo = () => useContext(RepoContext);