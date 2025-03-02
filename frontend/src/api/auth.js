const API_URL = "http://localhost:3001/login";

export async function login(email, password) {
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error("Falha ao autenticar");
        }

        return await response.json();
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        throw error;
    }
}