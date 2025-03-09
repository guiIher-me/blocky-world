import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BlockyHttpAuth from "../http/BlockyHttpAuth";
import AlertError from "../errors/AlertError";

const WorldSelectionPage = () => {
    const [worlds, setWorlds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchWorlds = async () => {
            try {
                const HttpAuth = new BlockyHttpAuth();
                const response = await HttpAuth.get('/worlds');
                setWorlds(response.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError(err instanceof AlertError ? err.message : "Internal Server Error!");
                setLoading(false);
            }
        };

        fetchWorlds();
    }, []);

    const handleWorldClick = (worldId) => {
        navigate(`/worlds/${worldId}`);
    };

    return (
        <div>
            <h1>World Selection</h1>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {!loading && !error && (
                <ul>
                    {worlds.map(world => (
                        <li key={world._id}>
                            <button onClick={() => handleWorldClick(world._id)}>
                                {world.name} - Created at: {new Date(world.createdAt).toLocaleString()}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default WorldSelectionPage;
