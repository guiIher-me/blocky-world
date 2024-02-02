
export default async function updateByIdMethod(httpHandler, servicename, id) {
    const url = `${servicename}/${id}`;
    return await httpHandler.put(url);
}