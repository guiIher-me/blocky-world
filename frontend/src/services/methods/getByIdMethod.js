
export default async function getByIdMethod(httpHandler, servicename, id) {
    const url = `${servicename}/${id}`;
    return await httpHandler.get(url);
}