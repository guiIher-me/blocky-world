import HttpHandler from "./HttpHandler";
import methods from "./methods";

const handler = new HttpHandler();
const servicename = "worlds";

export const WorldService = {
    getAll: () => methods.getAllMethod(handler, servicename),
    getById: (id) => methods.getByIdMethod(handler, servicename, id),
    create: (data) => methods.createMethod(handler, servicename, data),
    updateById: (id) => methods.updateByIdMethod(handler, servicename, id),
    deleteById: (id) => methods.deleteByIdMethod(handler, servicename, id),
}