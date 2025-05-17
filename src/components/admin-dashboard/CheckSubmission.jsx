import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { GitPullRequest } from "lucide-react";
import { usePRContext } from "../../context/PRProvider";

const CheckSubmission = () => {
    const { prs, setPRs, offset, setOffset, hasMore, setHasMore } = usePRContext();

    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("merged");
    const [loading, setLoading] = useState(true);
    const [fetchingMore, setFetchingMore] = useState(false);
    const [noMorePRMessage, setNoMorePRMessage] = useState("");

    const fetchPRs = async (currentOffset, prStatus) => {
        try {
            const res = await fetch(`https://api.ieeesoc.xyz/api/admin-dashboard?offset=${currentOffset}&status=${prStatus}`, {
                credentials: "include",
            });
            const data = await res.json();
            if (data.pullRequests.length === 0) {
                setHasMore(false);
                if (currentOffset > 0) {
                    setNoMorePRMessage(`No additional PRs with #ieeesoc were found.`);
                }
            } else {
                if (currentOffset === 0) {
                    // Reset PRs when changing status or initial load
                    setPRs(data.pullRequests);
                } else {
                    // Append PRs when loading more
                    setPRs((prev) => [...prev, ...data.pullRequests]);
                }
            }
        } catch (err) {
            console.error(`Failed to fetch ${prStatus} PRs:`, err);
        } finally {
            if (currentOffset === 0) {
                setLoading(false);
            } else {
                setFetchingMore(false);
            }
        }
    };

    useEffect(() => {
        // Reset state when switching PR status
        setPRs([]);
        setOffset(0);
        setHasMore(true);
        setNoMorePRMessage("");
        setLoading(true);
        
        // Fetch PRs with the current status
        fetchPRs(0, status);
    }, [status]);

    const loadMore = () => {
        const nextOffset = offset + 1;
        setOffset(nextOffset);
        setFetchingMore(true);
        fetchPRs(nextOffset, status);
    };

    const filtered = prs
        .filter((pr) =>
            pr.title.toLowerCase().includes(search.toLowerCase()) ||
            pr.user?.login?.toLowerCase().includes(search.toLowerCase()) ||
            pr.repo.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
            const dateA = new Date(status === "merged" ? a.merged_at : a.created_at);
            const dateB = new Date(status === "merged" ? b.merged_at : b.created_at);
            return dateB - dateA; // Most recent first
        });

    return (
        <div
            className="bg-repeat"
            style={{
                backgroundImage: "url('/images/repopagebg2.png')",
                backgroundRepeat: "repeat",
                backgroundSize: "100%",
            }}
        >
            <div className="px-6 py-7 text-black font-body bg-transparent pt-8 min-h-screen">
                <h1
                    className="text-2xl md:text-5xl font-bold mb-8 text-center font-title text-[#ee540e]"
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

                <p className="text-gray-600 text-md">Review and process user submissions and PRs</p>

                <input
                    type="text"
                    placeholder="Search by title, author, or repo..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-white border border-[#444] rounded-md px-4 py-3 my-5 w-full focus:outline-none focus:ring-2 focus:ring-[#aa93ed]"
                />

                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                    <div className="flex gap-2">
                        <button
                            onClick={() => setStatus("merged")}
                            className={`px-4 py-1 hover:bg-[#d7d7d7] rounded ${status === "merged" ? "bg-[#1e3ffa] text-white" : "bg-white text-black"}`}
                        >
                            Merged
                        </button>
                        <button
                            onClick={() => setStatus("open")}
                            className={`px-4 py-1 rounded hover:bg-[#d7d7d7] ${status === "open" ? "bg-[#1e3ffa] text-white" : "bg-white text-black"}`}
                        >
                            Open/Closed
                        </button>
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <p className="text-black">Loading PRs...</p>
                    </div>
                ) : (
                    <>
                        {/* Desktop Table */}
                        <div className="hidden sm:block shadow">
                            {filtered.length > 0 ? (
                                <table className="min-w-full bg-white text-left text-sm">
                                    <thead className="bg-white border border-gray-700">
                                        <tr>
                                            <th className="py-5 px-7">PR</th>
                                            <th className="py-5 px-2">Author</th>
                                            <th className="py-5 px-2">Repository</th>
                                            <th className="py-5 px-2">{status === "merged" ? "Merged" : "Created"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filtered.map((pr) => (
                                            <tr key={pr.id} className="border border-gray-700 transition">
                                                <td className="py-5 px-7 flex items-center gap-3 text-[#1e3ffa]">
                                                    <GitPullRequest color="#a993ec" className="w-4 h-4" />
                                                    <a href={pr.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                                        {pr.title}
                                                    </a>
                                                </td>
                                                <td className="py-5 px-2">{pr.user?.login}</td>
                                                <td className="py-5 px-2 text-black">
                                                    <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 text-gray-600 border border-gray-300">
                                                        {pr.repo}
                                                    </span>
                                                </td>
                                                <td className="py-5 px-2 text-gray-400">
                                                    {status === "merged" && pr.merged_at
                                                        ? format(new Date(pr.merged_at), "MMM d, yyyy, hh:mm a")
                                                        : format(new Date(pr.created_at), "MMM d, yyyy, hh:mm a")}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <div className="p-4 text-center text-gray-500">
                                    {status === "merged" ? "No merged PRs found." : "No open PRs found."}
                                </div>
                            )}
                        </div>

                        {/* Mobile Cards */}
                        <div className="sm:hidden flex flex-col gap-4">
                            {filtered.length > 0 ? (
                                filtered.map((pr) => (
                                    <div key={pr.id} className="bg-white p-4 rounded-md shadow border border-gray-300">
                                        <div className="flex items-center gap-2 text-[#1e3ffa] mb-2">
                                            <GitPullRequest className="w-4 h-4 shrink-0 text-[#a993ec]" style={{ minWidth: "1rem", minHeight: "1rem" }} />
                                            <a
                                                href={pr.html_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-semibold hover:underline text-sm leading-tight"
                                            >
                                                {pr.title}
                                            </a>
                                        </div>
                                        <div className="text-sm text-gray-700 mb-1">
                                            <strong>Author:</strong> {pr.user?.login}
                                        </div>
                                        <div className="text-sm text-gray-700 mb-1">
                                            <strong>Repo:</strong>{" "}
                                            <span className="bg-gray-100 text-gray-600 px-2 py-1 text-xs rounded border border-gray-300">
                                                {pr.repo}
                                            </span>
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            <strong>{status === "merged" ? "Merged:" : "Created:"}</strong>{" "}
                                            {status === "merged" && pr.merged_at
                                                ? format(new Date(pr.merged_at), "MMM d, yyyy, hh:mm a")
                                                : format(new Date(pr.created_at), "MMM d, yyyy, hh:mm a")}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="p-4 text-center text-gray-500">
                                    {status === "merged" ? "No merged PRs found." : "No open PRs found."}
                                </div>
                            )}
                        </div>
                    </>
                )}

                <div className="p-4 flex flex-col items-center gap-2">
                    {hasMore ? (
                        <button
                            onClick={loadMore}
                            className="px-6 py-2 bg-[#d7d7d7] text-black rounded hover:bg-[#1e3ffa] hover:text-white transition"
                            disabled={fetchingMore}
                        >
                            {fetchingMore ? "Fetching..." : "Load More"}
                        </button>
                    ) : (
                        noMorePRMessage && <p className="text-gray-400">{noMorePRMessage}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CheckSubmission;