const { HttpResponse } = require("../../http/HttpResponse");
const { World } = require("../../models/world");
const { Validator } = require("../../Validator");
const { idSchema, createSchema, updateSchema } = require("./schemas");

class WorldController {
    async create(params, body) {
        const validator = new Validator();
        if (!validator.validate(createSchema, body)) return validator.error();

        const newWorld = await World.create(body);
        return HttpResponse.created(newWorld);
    }

    async getAll(params, body) {
        const worlds = await World.find({}, "_id name createdAt updatedAt");
        return HttpResponse.ok(worlds);
    }

    async getById(params, body) {
        const validator = new Validator();
        if (!validator.validate(idSchema, params)) return validator.error();

        const world = await World.findById(params.id);

        if (world) return HttpResponse.ok(world);
        return HttpResponse.notFound("World not found!");
    }

    async update(params, body) {
        const validator = new Validator();
        if (!validator.validate(idSchema, params)) return validator.error();
        if (!validator.validate(updateSchema, body)) return validator.error();
        
        const updatedWorld = await World.findByIdAndUpdate(
            params.id,
            body,
            { new: true }
        );

        if (updatedWorld) return HttpResponse.ok(updatedWorld);
        return HttpResponse.notFound("World not found!");
    }

    async delete(params, body) {
        const validator = new Validator();
        if (!validator.validate(idSchema, params)) return validator.error();

        const deletedWorld = await World.findByIdAndDelete(params.id);

        if (deletedWorld) return HttpResponse.okNoContent();
        return HttpResponse.notFound("World not found!");
    }

}

module.exports = { WorldController };
