import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BlockyHttpAuth from "../http/BlockyHttpAuth";
import AlertError from "../errors/AlertError";

const WorldBuilderPage = () => {
    const { worldId } = useParams();
    const [world, setWorld] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWorld = async () => {
            try {
                const HttpAuth = new BlockyHttpAuth();
                const response = await HttpAuth.get(`/worlds/${worldId}`);
                setWorld(response.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError(err instanceof AlertError ? err.message : "Internal Server Error!");
                setLoading(false);
            }
        };

        fetchWorld();
    }, [worldId]);

    return (
        <div>
            <h1>World Builder - {world ? world.name : 'Loading'}</h1>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {world && !loading && !error && (
                <div>
                    <h2>World Details</h2>
                    <p>Created at: {new Date(world.createdAt).toLocaleString()}</p>
                </div>
            )}
        </div>
    );
};

export default WorldBuilderPage;