// PRProvider.jsx
import React, { createContext, useContext, useState } from "react";

const PRContext = createContext();

export const PRProvider = ({ children }) => {
    const [prs, setPRs] = useState([]);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    return (
        <PRContext.Provider value={{ prs, setPRs, offset, setOffset, hasMore, setHasMore }}>
            {children}
        </PRContext.Provider>
    );
};

export const usePRContext = () => useContext(PRContext);
