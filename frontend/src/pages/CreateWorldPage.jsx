import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MCButton from "../components/action/MCButton";
import MCInput from "../components/action/MCInput";
import BlockyHttpAuth from "../http/BlockyHttpAuth";
import AlertError from "../errors/AlertError";

const CreateWorldPage = () => {
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleCreateWorld = async (event) => {
        event.preventDefault();
        setError("");
        setIsSubmitting(true);

        try {
            const httpAuth = new BlockyHttpAuth();
            await httpAuth.post('/worlds', { name });
            navigate('/worlds');
        } catch (err) {
            setError(err instanceof AlertError ? err.message : "Failed to create this world.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="hub-screen">
            <div className="hub-screen__backdrop"></div>
            <div className="hub-panel create-world-panel">
                <header className="create-world-panel__header">
                    <p className="world-hub__eyebrow">New Adventure</p>
                    <h1 className="world-hub__title">Create World</h1>
                    <p className="world-hub__subtitle">
                        Give your next world a strong name before stepping into the unknown.
                    </p>
                </header>

                <form className="create-world-form" onSubmit={handleCreateWorld}>
                    <label className="create-world-form__label" htmlFor="world-name">World Name</label>
                    <MCInput
                        name="world-name"
                        value={name}
                        classes="create-world-form__input"
                        placeholder="My Blocky Realm"
                        onValueChange={(_, value) => setName(value)}
                    />

                    {error && <p className="hub-message hub-message--error">{error}</p>}

                    <div className="create-world-form__actions">
                        <MCButton title={isSubmitting ? "Creating..." : "Create World"} onClick={handleCreateWorld} />
                        <MCButton title="Back to Worlds" onClick={() => navigate('/worlds')} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateWorldPage;
