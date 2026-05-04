import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MCButton from "../components/action/MCButton";
import BlockyHttpAuth from "../http/BlockyHttpAuth";
import AlertError from "../errors/AlertError";
import AuthUtil from "../utils/AuthUtil";

const ProfilePage = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [logoutLoading, setLogoutLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const httpAuth = new BlockyHttpAuth();
                const response = await httpAuth.get('/user');
                setProfile(response.data);
                setError("");
            } catch (err) {
                setError(err instanceof AlertError ? err.message : "Failed to load your profile.");
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

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
            <div className="hub-panel profile-panel">
                <header className="create-world-panel__header">
                    <p className="world-hub__eyebrow">Account</p>
                    <h1 className="world-hub__title">User Settings</h1>
                    <p className="world-hub__subtitle">
                        Review your explorer details and return to your saved worlds whenever you are ready.
                    </p>
                </header>

                {loading && <p className="hub-message">Loading your profile...</p>}
                {error && <p className="hub-message hub-message--error">{error}</p>}

                {!loading && profile && (
                    <section className="profile-panel__content">
                        <div className="profile-card">
                            <div className="profile-card__row">
                                <span className="profile-card__label">First name</span>
                                <span className="profile-card__value">{profile.firstname}</span>
                            </div>
                            <div className="profile-card__row">
                                <span className="profile-card__label">Last name</span>
                                <span className="profile-card__value">{profile.lastname}</span>
                            </div>
                            <div className="profile-card__row">
                                <span className="profile-card__label">Email</span>
                                <span className="profile-card__value">{profile.email}</span>
                            </div>
                            <div className="profile-card__row">
                                <span className="profile-card__label">Role</span>
                                <span className="profile-card__value">{profile.role}</span>
                            </div>
                        </div>

                        <div className="create-world-form__actions">
                            <MCButton title="Back to Worlds" onClick={() => navigate('/worlds')} />
                            <MCButton title={logoutLoading ? "Logging out..." : "Logout"} onClick={handleLogout} />
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
