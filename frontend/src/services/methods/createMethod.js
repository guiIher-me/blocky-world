
export default async function createMethod(httpHandler, servicename, data) {
    const url = `${servicename}`;
    return await httpHandler.post(url, data);
}