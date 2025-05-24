import React, { useState, useEffect, useRef } from "react";
import { usePRContext } from "../../context/PRProvider";
import { toast } from "react-hot-toast";
import axios from "axios";

const Points = () => {
    const { prsByStatus } = usePRContext();
    const prs = prsByStatus.merged || [];

    const [userPRs, setUserPRs] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [editingPRId, setEditingPRId] = useState(null);
    const [newPoints, setNewPoints] = useState("");

    const saveInProgress = useRef(false);

    useEffect(() => {
        if (prs.length === 0) {
            setUserPRs([]);
            return;
        }

        const entries = prs
            .filter((pr) => pr.state === "closed")
            .map((pr) => ({
                prId: pr.id,
                username: pr.user?.login,
                avatar: pr.user?.avatar_url,
                prTitle: pr.title,
                prUrl: pr.html_url,
                points: pr.points || 0,
                isAssigned: pr.assigned || false,
            }))
            .filter((entry) => entry.username);

        setUserPRs(entries);
    }, [prs]);

    const handlePointsSave = async (prIdToUpdate) => {
        if (saveInProgress.current) return;
        saveInProgress.current = true;

        const updated = [...userPRs];
        const indexToUpdate = updated.findIndex((pr) => pr.prId === prIdToUpdate);
        if (indexToUpdate === -1) return;

        const parsedPoints = parseInt(newPoints, 10);
        const validPoints = isNaN(parsedPoints) ? 0 : parsedPoints;

        try {
            await axios.post(`https://api.ieeesoc.xyz/api/users/points/assign`, {
                prId: updated[indexToUpdate].prId,
                username: updated[indexToUpdate].username,
                prTitle: updated[indexToUpdate].prTitle,
                points: validPoints,
            });

            updated[indexToUpdate].points = validPoints;
            updated[indexToUpdate].isAssigned = validPoints > 0;
            setUserPRs(updated);
            toast.success("Points saved successfully!");
            setEditingPRId(null);
            setNewPoints("");
        } catch (err) {
            console.error("Error saving points:", err);
            toast.error("Failed to save points. Please try again.");
        } finally {
            saveInProgress.current = false;
        }
    };

    if (prs.length === 0) {
        return (
            <div className="min-h-screen bg-[#eeeeee] text-black flex flex-col items-center justify-center p-6 sm:p-8">
                <h1 className="text-xl font-bold mb-2">No PRs loaded yet</h1>
                <p className="text-gray-600 text-center">
                    Please go to the <strong>Check Submissions</strong> tab and load PRs first.
                </p>
            </div>
        );
    }

    return (
        <div
            className="bg-repeat"
            style={{
                backgroundImage: "url('/images/repopagebg2.png')",
                backgroundRepeat: "repeat",
                backgroundSize: "100%",
            }}
        >
            <div className="min-h-screen bg-transparent text-black px-6 py-7 pt-8 font-body">
                <h1
                    className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 text-center font-title text-[#ee540e]"
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
                    Points Assignment
                </h1>
                <p className="text-md text-gray-600 mb-4 sm:mb-6 text-left">
                    Assign points to contributors based on PRs
                </p>

                <input
                    type="text"
                    placeholder="Search users..."
                    className="w-full p-3 rounded-md bg-white text-black mb-6 focus:outline-none focus:ring-2 focus:ring-[#aa93ed] border border-gray-600"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {userPRs.length === 0 ? (
                    <div className="text-gray-400">No merged PRs found.</div>
                ) : (
                    <div className="w-full overflow-x-auto">
                        <table className="min-w-[600px] w-full text-left bg-white border border-gray-600 rounded-md">
                            <thead className="text-black bg-[#d7d7d7] border-b border-gray-600">
                                <tr>
                                    <th className="py-5 px-4">Username</th>
                                    <th className="py-5 px-4">PR Title</th>
                                    <th className="py-5 px-4">Points</th>
                                    <th className="py-5 px-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userPRs
                                    .filter((entry) =>
                                        entry.username.toLowerCase().includes(searchTerm.toLowerCase())
                                    )
                                    .map((entry) => (
                                        <tr
                                            key={entry.prId}
                                            className="border-b border-gray-700 hover:bg-[#eeeeee]"
                                        >
                                            <td className="py-4 px-4 font-semibold">
                                                <span className="flex items-center gap-2">
                                                    <img
                                                        src={entry.avatar}
                                                        alt="avatar"
                                                        className="h-5 rounded-full"
                                                    />
                                                    {entry.username}
                                                </span>
                                            </td>
                                            <td className="py-4 px-4 text-[#1e3ffa] max-w-xs truncate">
                                                <a
                                                    href={entry.prUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:underline block"
                                                >
                                                    {entry.prTitle}
                                                </a>
                                            </td>
                                            <td className="py-4 px-4 font-bold">
                                                {editingPRId === entry.prId ? (
                                                    <input
                                                        type="number"
                                                        value={newPoints}
                                                        onChange={(e) => setNewPoints(e.target.value)}
                                                        onKeyDown={(e) => {
                                                            if (e.key === "Enter")
                                                                handlePointsSave(entry.prId);
                                                            if (e.key === "Escape")
                                                                setEditingPRId(null);
                                                        }}
                                                        onBlur={() => handlePointsSave(entry.prId)}
                                                        autoFocus
                                                        className="bg-[#999999] text-white p-1 rounded w-20 focus:outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                                    />
                                                ) : (
                                                    <div
                                                        className="cursor-pointer flex items-center gap-2"
                                                        onClick={() => {
                                                            setEditingPRId(entry.prId);
                                                            setNewPoints(entry.points.toString());
                                                        }}
                                                    >
                                                        {entry.points}
                                                        {entry.isAssigned && entry.points > 0 && (
                                                            <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">
                                                                Assigned
                                                            </span>
                                                        )}
                                                    </div>
                                                )}
                                            </td>
                                            <td className="py-4 px-4">
                                                <button
                                                    className="bg-[#d7d7d7] px-4 py-2 rounded-md hover:bg-[#1e3ffa] hover:text-white transition"
                                                    onClick={() => {
                                                        setEditingPRId(entry.prId);
                                                        setNewPoints(entry.points.toString());
                                                    }}
                                                >
                                                    Edit Points
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Points;
