import React, { useEffect, useState } from 'react';

const Points = ({ prs }) => {
    const [userPRs, setUserPRs] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [newPoints, setNewPoints] = useState('');

    useEffect(() => {
        const formattedPRs = prs.map((pr) => ({
            username: pr.user?.login,
            prTitle: pr.title,
            prUrl: pr.html_url,
            points: 0,
            isAssigned: false,
        }));
        setUserPRs(formattedPRs);
    }, [prs]);

    const handlePointsChange = (e) => {
        setNewPoints(e.target.value);
    };

    const handlePointsSave = async (index) => {
        const updated = [...userPRs];
        const parsedPoints = parseInt(newPoints, 10);
        const validPoints = isNaN(parsedPoints) ? 0 : parsedPoints;

        const username = updated[index].username;

        try {
            const response = await fetch(`https://api.ieeesoc.xyz/api/user/${username}/points`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ points: validPoints }),
            });

            if (!response.ok) {
                throw new Error('Failed to assign points');
            }

            updated[index].points = validPoints;
            updated[index].isAssigned = validPoints > 0;
            setUserPRs(updated);
            setEditingIndex(null);
            setNewPoints('');
        } catch (error) {
            console.error('Error assigning points:', error);
        }
    };

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Assign Points to PRs</h2>
            <ul className="space-y-4">
                {userPRs.map((pr, index) => (
                    <li
                        key={index}
                        className="bg-white p-4 rounded shadow flex justify-between items-center"
                    >
                        <div>
                            <p className="font-medium text-blue-700">{pr.username}</p>
                            <p>
                                <a
                                    href={pr.prUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 underline"
                                >
                                    {pr.prTitle}
                                </a>
                            </p>
                        </div>
                        <div className="flex items-center space-x-2">
                            {editingIndex === index ? (
                                <>
                                    <input
                                        type="number"
                                        className="border rounded px-2 py-1 w-20"
                                        value={newPoints}
                                        onChange={handlePointsChange}
                                    />
                                    <button
                                        className="bg-green-500 text-white px-3 py-1 rounded"
                                        onClick={() => handlePointsSave(index)}
                                    >
                                        Save
                                    </button>
                                </>
                            ) : (
                                <>
                                    <span className="text-gray-800">
                                        {pr.isAssigned ? `Points: ${pr.points}` : 'Not assigned'}
                                    </span>
                                    <button
                                        className="bg-blue-500 text-white px-3 py-1 rounded"
                                        onClick={() => {
                                            setEditingIndex(index);
                                            setNewPoints(pr.points.toString());
                                        }}
                                    >
                                        Assign
                                    </button>
                                </>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Points;
