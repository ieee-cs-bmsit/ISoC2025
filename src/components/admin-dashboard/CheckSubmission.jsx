import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { GitPullRequest } from "lucide-react";
import { usePRContext } from "../../context/PRProvider";
import { BeatLoader } from "react-spinners";

const CheckSubmission = () => {
    const [sortOrder, setSortOrder] = useState("desc");
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("merged");

    const { prsByStatus, setPRs, loadingByStatus, setLoading } = usePRContext();
    const prs = prsByStatus[status] || [];
    const loading = loadingByStatus[status];

    const fetchPRs = async () => {
        if (prs.length > 0) return;

        setLoading(status, true);
        try {
            const res = await fetch(`http://localhost:5000/api/admin-dashboard?sort=${sortOrder}`, {
                credentials: "include",
            });
            const data = await res.json();
            setPRs(status, data.pullRequests || []);
        } catch (err) {
            console.error("Failed to fetch admin PRs:", err);
        } finally {
            setLoading(status, false);
        }
    };

    useEffect(() => {
        fetchPRs();
    }, [status, sortOrder]);

    const filtered = prs
        .filter((pr) =>
            status === "merged" ? pr.state === "closed" : pr.state === "open"
        )
        .filter(
            (pr) =>
                pr.title.toLowerCase().includes(search.toLowerCase()) ||
                pr.user?.login?.toLowerCase().includes(search.toLowerCase()) ||
                pr.repo.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) =>
            sortOrder === "asc"
                ? new Date(a.created_at) - new Date(b.created_at)
                : new Date(b.created_at) - new Date(a.created_at)
        );

    return (
        <div className="bg-repeat"
            style={{
                backgroundImage: "url('/images/repopagebg2.png')",
                backgroundRepeat: "repeat",
                backgroundSize: "100%",
            }}>
            <div className="px-4 sm:px-6 py-8 text-black font-body min-h-screen">
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
                    Check Submissions
                </h1>

                <input
                    type="text"
                    placeholder="Search by title, author, or repo..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-white border border-[#444] rounded-md px-4 py-3 my-5 w-full focus:ring-2 focus:ring-[#aa93ed]"
                />

                <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
                    <div className="flex gap-2 flex-wrap">
                        <button
                            onClick={() => setStatus("merged")}
                            className={`px-4 py-1 rounded ${status === "merged" ? "bg-[#1e3ffa] text-white" : "bg-white text-black"}`}
                        >
                            Closed
                        </button>
                        <button
                            onClick={() => setStatus("open")}
                            className={`px-4 py-1 rounded ${status === "open" ? "bg-[#1e3ffa] text-white" : "bg-white text-black"}`}
                        >
                            Open
                        </button>
                    </div>

                    <div className="flex gap-2 flex-wrap">
                        <button
                            onClick={() => setSortOrder("desc")}
                            className={`px-3 py-1 rounded ${sortOrder === "desc" ? "bg-[#1e3ffa] text-white" : "bg-white text-black"}`}
                        >
                            Newest First
                        </button>
                        <button
                            onClick={() => setSortOrder("asc")}
                            className={`px-3 py-1 rounded ${sortOrder === "asc" ? "bg-[#1e3ffa] text-white" : "bg-white text-black"}`}
                        >
                            Oldest First
                        </button>
                    </div>
                </div>

                {loading ? (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '10px',
                        alignItems: 'center',
                        height: '100%', // or a fixed height like '200px'
                        width: '100%',
                        //optional, helps if inside a small container
                    }}>
                        <p className="text-2xl font-bold" > Loading PR's</p>
                        <BeatLoader color="#5972f1" size={20} />
                    </div>
                ) : filtered.length > 0 ? (
                    <>
                        {/* Desktop Table */}
                        <div className="hidden sm:block">
                            <table className="min-w-full bg-white text-left text-sm">
                                <thead className="bg-[#d7d7d7] border border-gray-700">
                                    <tr>
                                        <th className="py-5 px-7">PR</th>
                                        <th className="py-5 px-2">Author</th>
                                        <th className="py-5 px-2">Repository</th>
                                        <th className="py-5 px-2">Created</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filtered.map((pr) => (
                                        <tr key={pr.id} className="border border-gray-700">
                                            <td className="py-5 px-7 text-[#1e3ffa]">
                                                <a href={pr.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2 text-md">
                                                    <GitPullRequest size={12} className="text-purple-500" />
                                                    {pr.title}
                                                </a>
                                            </td>
                                            <td className="py-5 px-2 flex items-center">
                                                <a href={pr.user.html_url} target="_blank" rel="noopener noreferrer">
                                                    <img src={pr.user.avatar_url} alt="avatar" className="h-5 w-5 rounded-full mr-2" />
                                                    {pr.user?.login}
                                                </a>
                                            </td>
                                            <td className="py-5 px-2">
                                                <div className="text-xs font-medium px-2 w-fit py-0.5 rounded bg-gray-100 text-gray-600 border border-gray-300">
                                                    {pr.repo.split('/')[1]}
                                                </div>
                                            </td>
                                            <td className="py-5 px-2 text-gray-400">
                                                {format(new Date(pr.created_at), "MMM d, yyyy, hh:mm a")}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile Card View */}
                        <div className="sm:hidden flex flex-col">
                            {filtered.map((pr) => (
                                <div key={pr.id} className="bg-white rounded shadow-md p-4 border border-gray-300">
                                    <a
                                        href={pr.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#1e3ffa] font-semibold flex items-center gap-2 mb-2"
                                    >
                                        <span className="inline-flex items-center justify-center h-5 w-5">
                                            <GitPullRequest className="text-purple-500 h-3 w-3" />
                                        </span>
                                        {pr.title}
                                    </a>
                                    <div className="flex items-center mb-1">
                                        <img src={pr.user.avatar_url} alt="avatar" className="h-5 w-5 rounded-full mr-2" />
                                        <span className="text-sm">{pr.user?.login}</span>
                                    </div>
                                    <div className="text-sm text-gray-700 mb-1">
                                        <strong>Repo:</strong> {pr.repo}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        <strong>{status === "merged" ? "Closed" : "Created"}:</strong>{" "}
                                        {format(new Date(pr.created_at), "MMM d, yyyy, hh:mm a")}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <p>No PRs found.</p>
                )}
            </div>
        </div>
    );
};

export default CheckSubmission;
