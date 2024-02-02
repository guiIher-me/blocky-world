
export default async function deleteByIdMethod(httpHandler, servicename, id) {
    const url = `${servicename}/${id}`;
    return await httpHandler.delete(url);
}