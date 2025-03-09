import React, { Component } from "react";
import BlockyHttpAuth from "../http/BlockyHttpAuth";
import AlertError from "../errors/AlertError"

export default class WorldSelectionPage extends Component {
    state = {
        worlds: [],
        loading: true,
        error: null
    };

    async componentDidMount() {
        try {
            const HttpAuth = new BlockyHttpAuth();
            const response = await HttpAuth.get('/worlds');
            this.setState({ worlds: response.data, loading: false });
        } catch (err) {
            console.error(err);
            this.setState({
                error: err instanceof AlertError ? err.message : "Internal Server Error!",
                loading: false
            });
        }
    }

    render() {
        const { worlds, loading, error } = this.state;

        return (
            <div>
                <h1>World Selection</h1>
                {loading && <p>Loading...</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
                {!loading && !error && (
                    <ul>
                        {worlds.map(world => (
                            <li key={world._id}>
                                {world.name} - Created at: {new Date(world.createdAt).toLocaleString()}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}