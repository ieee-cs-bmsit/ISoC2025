import React, { createContext, useContext, useState } from "react";

const PRContext = createContext();

export const PRProvider = ({ children }) => {
    // Store PRs separately by status
    const [prsByStatus, setPRsByStatus] = useState({
        merged: [],
        open: [],
    });

    const [loadingByStatus, setLoadingByStatus] = useState({
        merged: false,
        open: false,
    });

    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    // Update PRs for a specific status
    const setPRs = (status, prs) => {
        setPRsByStatus((prev) => ({ ...prev, [status]: prs }));
    };

    const setLoading = (status, isLoading) => {
        setLoadingByStatus((prev) => ({ ...prev, [status]: isLoading }));
    };

    return (
        <PRContext.Provider
            value={{
                prsByStatus,
                setPRs,
                loadingByStatus,
                setLoading,
                offset,
                setOffset,
                hasMore,
                setHasMore,
            }}
        >
            {children}
        </PRContext.Provider>
    );
};

export const usePRContext = () => useContext(PRContext);
