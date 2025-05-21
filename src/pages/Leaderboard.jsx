import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import './Leaderboard.css';
import { useAuth } from '../context/Authcontext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Navigate, useNavigate } from 'react-router-dom';
import { BeatLoader } from "react-spinners";

const Leaderboard = () => {
    const [searchValue, setSearchValue] = useState('');
    const [nonempty, setNonempty] = useState(false);
    const [showAll, setShowAll] = useState(true);
    const [loading, setLoading]= useState(false);
    const [searchMember, setSearchMember] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    const auth = useAuth();
    const user = auth?.user;
    const [signedInUserRank, setSignedInUserRank] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await fetch('https://api.ieeesoc.xyz/api/users/allUserdata');
            const data = await res.json();

            if (!data.success) {
                console.error('Error fetching leaderboard data');
                setLoading(false);
                return;
            }

            const sorted = [...data.data].sort((a, b) => b.points - a.points);

            let rankedData = [];
            let currentRank = 1;
            let lastPoints = null;
            let count = 0;

            for (let i = 0; i < sorted.length; i++) {
                const item = sorted[i];
                if (item.points !== lastPoints) {
                    currentRank = count + 1;
                }
                rankedData.push({ ...item, rank: currentRank });
                lastPoints = item.points;
                count++;
            }

            setSortedData(rankedData);
        } catch (error) {
            console.error('Error during fetch:', error);
        }
        finally {
            setLoading(false);
        }
    };
    
    
    const rankFindOfSignedInUser = () => {
        if (!user || !sortedData.length) return;
        const userRank = sortedData.find((item) => item.isoc_id === user.isoc_id);
        if (userRank) {
            setSignedInUserRank(userRank.rank);
        }
    };

    const searchRank = () => {
        const value = searchValue.toLowerCase().trim();
        if (!value) {
            setShowAll(true);
            setSearchMember([]);
            return;
        }

        const filteredData = sortedData.filter((item) =>
            item.displayName.toLowerCase().includes(value)
        );

        if (filteredData.length > 0) {
            setSearchMember(filteredData);
            setNonempty(true);
            setShowAll(false);
        } else {
            setSearchMember([]);
            setNonempty(false);
            setShowAll(false);
        }
    };


    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

        fetchData();
        const interval = setInterval(() => {
            fetchData();
        }, 20 * 60 * 1000); // 20 mins
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        rankFindOfSignedInUser();
    }, [sortedData, user]);

    useEffect(() => {
        setCurrentPage(1); // Reset page on search
        if (searchValue.trim() === '') {
            setShowAll(true);
            setNonempty(false);
            setSearchMember([]);
        }
    }, [searchValue]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(sortedData.length / itemsPerPage);

    return (
      <>
      {!loading ? (
        <div className="bg-repeat" style={{
        backgroundImage: "url('/images/repopagebg2.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "200%",
      }}>
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
            <div className='main-container'>
                <div className='top-main-container1'>
                    <div className="top-3-container">
                        <div className="position-place-container1">
                            <div className="image-div">
                                <img src={sortedData[1]?.avatar} className='images1' />
                            </div>
                            <div className="text-container">
                                <p className='rankholder-name'>{sortedData[1]?.displayName}</p>
                                <p className='rank'> Points: {sortedData[1]?.points}</p>
                            </div>
                            <div className="rank-container-two">
                                <p>2</p>
                            </div>
                        </div>

                        <div className="position-place-container2">
                            <div className="image-div">
                                <img src={sortedData[0]?.avatar} className='images1' />
                            </div>
                            <div className="text-container">
                                <p className='rankholder-name'> {sortedData[0]?.displayName}</p>
                                <p className='rank'>Points: {sortedData[0]?.points}</p>
                            </div>
                            <div className="rank-container-one">
                                <p>1</p>
                            </div>
                        </div>

                        <div className="position-place-container3">
                            <div className="image-div">
                                <img src={sortedData[2]?.avatar} className='images1' />
                            </div>
                            <div className="text-container">
                                <p className='rankholder-name'>{sortedData[2]?.displayName}</p>
                                <p className='rank'>Points: {sortedData[2]?.points}</p>
                            </div>
                            <div className="rank-container-third">
                                <p>3</p>
                            </div>
                        </div>
                    </div>

                    <div className='user-info-container'>
                        <div className="rank-showcase">
                            <p className='rank-showcase-para'><span className='text-3xl'>#</span>{signedInUserRank || sortedData[0]?.rank}</p>
                        </div>
                        <div className="info-container">
                            <div className="user-img-container">
                                <img src={user ? user.avatar : sortedData[0]?.avatar} alt="" />
                            </div>
                            <p className='user-name'>{user ? user.displayName : sortedData[0]?.displayName}</p>
                            <p className='user-id'>{user ? user.isoc_id : sortedData[0]?.isoc_id}</p>
                            <div className="detail-containerz">
                                <div className="rrank">
                                    <p className='rrank-place'>{signedInUserRank || sortedData[0]?.rank}</p>
                                    <p className='rank-text'>Rank</p>
                                </div>
                                <div className='line-div'></div>
                                <div className="pointt">
                                    <p className='ppoint-total'>{user ? user.points : sortedData[0]?.points}</p>
                                    <p className='point-text'>Points</p>
                                </div>
                                
                            </div>
                            <button className="profile-button" onClick={() => window.open(`https://github.com/${user ? user.username : sortedData[0]?.username}`)}>Profile</button>
                        </div>
                    </div>
                </div>

                <div className="search-text-field">
                    <input
                        type="text"
                        placeholder='Search Name'
                        className='search-Bar'
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && searchRank()}
                    />
                    <FaSearch className='search-icon' onClick={searchRank} style={{ cursor: 'pointer' }} />
                </div>

                <div className="all-ranks-container">
                    <div className="rank-heading-container">
                        <div className="rank-heading">
                            <p>Position</p>
                        </div>
                        <div className="details-heading-container">
                            <div className="detail-heading">
                                <p className='rank-heading-Name'>Name</p>
                            </div>
                            <div className="points-heading-container">
                                <p className='p-heading'>Points</p>
                            </div>
                        </div>
                    </div>

                    {(showAll ? currentItems : searchMember).map((item, index) => (
                        <div className="rank-container" key={index}>
                            <div className="rank-number">
                                <div className='point'>#{item.rank}</div>
                            </div>
                            <div className="details-container" onClick={() => window.open(`https://github.com/${item.username}`)}>
                                <div className="detail">
                                    <div className="img-container">
                                        <img src={item.avatar} loading='lazy' />
                                    </div>
                                    <div className='rank-holderName'>{item.displayName}</div>
                                </div>
                                <div className="points-container">
                                    <p className='p-value'>{item.points}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {!showAll && !nonempty && searchMember.length === 0 && (
                    <div className="no-results">
                        <p className='no-result-para'>No results found for "<span>{searchValue}</span>"</p>
                    </div>
                )}

                {showAll && (
                    <div className="pagination-buttons">
                        <button
                        // style={{paddingBottom:'20px',paddingRight:'55px'}}
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button
                        // style={{paddingBottom:'20px',paddingRight:'55px'}}
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>

            <Footer/>
        </div>
      ) : (<div className="flex justify-center items-center min-h-screen gap-3">
        <p className='text-3xl'> Loading LeaderBoard</p>
        <BeatLoader color="#5972f1" size={20}/>
      </div>)}
      </>
    );
};

export default Leaderboard;
