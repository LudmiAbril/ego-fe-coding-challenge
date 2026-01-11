const apiUrl = import.meta.env.VITE_API_URL;
export const getModels = async () => {
    const response = await fetch(`${apiUrl}/api/models`);
    if (!response.ok) throw new Error("Error en la red");
    return await response.json();
}
export const getModelDetails = async (id: string) => {
    const response = await fetch(`${apiUrl}/api/models/${id}`);
    if (!response.ok) throw new Error("Error en la red");
    return await response.json();
}