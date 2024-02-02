
export default async function getAllMethod(httpHandler, servicename) {
    const url = `${servicename}`;
    return await httpHandler.get(url);
}