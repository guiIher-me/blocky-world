import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MCButton from "../components/action/MCButton";
import MCInput from "../components/action/MCInput";
import BlockyHttpAuth from "../http/BlockyHttpAuth";
import AlertError from "../errors/AlertError";
import AuthUtil from "../utils/AuthUtil";

const WorldSelectionPage = () => {
    const [worlds, setWorlds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [busyWorldId, setBusyWorldId] = useState("");
    const [editingWorldId, setEditingWorldId] = useState("");
    const [draftWorldName, setDraftWorldName] = useState("");
    const [logoutLoading, setLogoutLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchWorlds = async () => {
            try {
                const httpAuth = new BlockyHttpAuth();
                const response = await httpAuth.get('/worlds');
                setWorlds(response.data);
                setError("");
            } catch (err) {
                setError(err instanceof AlertError ? err.message : "Failed to load your worlds.");
            } finally {
                setLoading(false);
            }
        };

        fetchWorlds();
    }, []);

    const formatDate = (value) => new Date(value).toLocaleString();

    const handleOpenWorld = (worldId) => {
        navigate(`/worlds/${worldId}`);
    };

    const handleStartEditing = (world) => {
        setEditingWorldId(world._id);
        setDraftWorldName(world.name);
        setError("");
    };

    const handleCancelEditing = () => {
        setEditingWorldId("");
        setDraftWorldName("");
    };

    const handleDeleteWorld = async (worldId) => {
        setBusyWorldId(worldId);
        setError("");

        try {
            const httpAuth = new BlockyHttpAuth();
            await httpAuth.delete(`/worlds/${worldId}`);
            setWorlds((currentWorlds) => currentWorlds.filter((world) => world._id !== worldId));
        } catch (err) {
            setError(err instanceof AlertError ? err.message : "Failed to delete this world.");
        } finally {
            setBusyWorldId("");
        }
    };

    const handleSaveWorldName = async (worldId) => {
        setBusyWorldId(worldId);
        setError("");

        try {
            const httpAuth = new BlockyHttpAuth();
            const response = await httpAuth.patch(`/worlds/${worldId}/name`, { name: draftWorldName });
            const updatedWorld = response.data;

            setWorlds((currentWorlds) => currentWorlds.map((world) => (
                world._id === worldId ? { ...world, ...updatedWorld } : world
            )));
            handleCancelEditing();
        } catch (err) {
            setError(err instanceof AlertError ? err.message : "Failed to update this world name.");
        } finally {
            setBusyWorldId("");
        }
    };

    const handleLogout = async () => {
        setLogoutLoading(true);
        setError("");

        try {
            const httpAuth = new BlockyHttpAuth();
            await httpAuth.post('/logout');
            AuthUtil.clearSession();
            navigate('/login');
        } catch (err) {
            setError(err instanceof AlertError ? err.message : "Failed to logout right now.");
        } finally {
            setLogoutLoading(false);
        }
    };

    return (
        <div className="hub-screen">
            <div className="hub-screen__backdrop"></div>
            <div className="hub-panel world-hub">
                <header className="world-hub__header">
                    <p className="world-hub__eyebrow">Player Menu</p>
                    <h1 className="world-hub__title">Your Worlds</h1>
                    <p className="world-hub__subtitle">
                        Pick a realm to enter, rename it, or clear space for your next blocky adventure.
                    </p>
                </header>

                <section className="world-hub__actions">
                    <MCButton title="Create New World" onClick={() => navigate('/worlds/create')} />
                    <MCButton title="User Settings" onClick={() => navigate('/profile')} />
                    <MCButton title={logoutLoading ? "Logging out..." : "Logout"} onClick={handleLogout} />
                </section>

                {error && <p className="hub-message hub-message--error">{error}</p>}
                {loading && <p className="hub-message">Loading your worlds...</p>}

                {!loading && !error && worlds.length === 0 && (
                    <div className="empty-worlds">
                        <h2>No worlds created yet</h2>
                        <p>Start with a fresh seed and build your first blocky landscape.</p>
                        <MCButton title="Create Your First World" onClick={() => navigate('/worlds/create')} />
                    </div>
                )}

                {!loading && worlds.length > 0 && (
                    <section className="world-list">
                        {worlds.map((world) => {
                            const isEditing = editingWorldId === world._id;
                            const isBusy = busyWorldId === world._id;
                            const updatedAtChanged = world.updatedAt && world.updatedAt !== world.createdAt;

                            return (
                                <article key={world._id} className="world-card">
                                    <div className="world-card__meta">
                                        {isEditing ? (
                                            <div className="world-card__edit-row">
                                                <MCInput
                                                    name={`world-name-${world._id}`}
                                                    value={draftWorldName}
                                                    classes="world-card__input"
                                                    placeholder="World name"
                                                    onValueChange={(_, value) => setDraftWorldName(value)}
                                                />
                                                <div className="world-card__actions world-card__actions--inline">
                                                    <MCButton title={isBusy ? "Saving..." : "Save"} onClick={() => handleSaveWorldName(world._id)} />
                                                    <MCButton title="Cancel" onClick={handleCancelEditing} />
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <h2 className="world-card__title">{world.name}</h2>
                                                <p className="world-card__date">Created: {formatDate(world.createdAt)}</p>
                                                {updatedAtChanged && <p className="world-card__date">Updated: {formatDate(world.updatedAt)}</p>}
                                            </>
                                        )}
                                    </div>

                                    {!isEditing && (
                                        <div className="world-card__actions">
                                            <MCButton title="Open" onClick={() => handleOpenWorld(world._id)} />
                                            <MCButton title="Edit" onClick={() => handleStartEditing(world)} />
                                            <MCButton title={isBusy ? "Deleting..." : "Delete"} onClick={() => handleDeleteWorld(world._id)} />
                                        </div>
                                    )}
                                </article>
                            );
                        })}
                    </section>
                )}
            </div>
        </div>
    );
};

export default WorldSelectionPage;
