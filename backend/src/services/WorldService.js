const { World } = require('../models/world');
const { NotFoundError } = require('../errors/NotFoundError');

class WorldService {
    static assert(world) {
        if (!world) throw new NotFoundError('World not found!');
        return world;
    }

    static async create(data) {
        const world = await World.create(data);
        return world;
    }

    static async getById(id) {
        const world = await World.findById(id);
        return WorldService.assert(world);
    }

    static async getAll() {
        const worlds = await World.find({}, '_id name createdAt updatedAt');
        return worlds;
    }

    static async updateById(id, data) {
        const world = await World.findByIdAndUpdate(
            id,
            data,
            { new: true },
        );
        return WorldService.assert(world);
    }

    static async deleteById(id) {
        const world = await World.findByIdAndDelete(id);
        WorldService.assert(world);
    }
}

module.exports = { WorldService };
