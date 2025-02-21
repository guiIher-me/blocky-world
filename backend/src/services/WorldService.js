const { World } = require('../models/World');
const { NotFound } = require('../errors/NotFound');
const { Unauthorized } = require('../errors/Unauthorized');

/**
 * Service responsible for managing "World" data.
 */
class WorldService {
    /**
     * Checks if the world exists.
     *
     * @param {Object} world - The world object to be checked.
     * @throws {NotFound} If the world is not found.
     * @returns {Object} The world object if found.
     */
    static assert(world) {
        if (!world) throw new NotFound('World not found!');
        return world;
    }

    /**
     * Checks if the user has permission to access or modify the world.
     *
     * @param {Object} world - The world object to be checked.
     * @param {string} userId - The ID of the authenticated user.
     * @throws {Unauthorized} If the user is not the owner of the world.
     */
    static assertUserPermission(world, userId) {
        if (world.user.id !== userId) {
            throw new Unauthorized('You do not have permission to access this world!');
        }
    }

    /**
     * Creates a new world.
     *
     * @param {Object} data - The data required to create the world.
     * @param {string} userId - The ID of the authenticated user.
     * @returns {Object} The newly created world object.
     */
    static async create(data, userId) {
        const world = await World.create({
            name: data.name,
            description: data.description,
            user: userId,
        });
        return world;
    }

    /**
     * Retrieves a world by its ID.
     *
     * @param {string} worldId - The ID of the world to retrieve.
     * @param {string} userId - The ID of the authenticated user.
     * @throws {Unauthorized} If the user is not the owner of the world.
     * @returns {Object} The world object.
     */
    static async getById(worldId, userId) {
        const world = await World.findById(worldId);
        WorldService.assert(world);
        WorldService.assertUserPermission(world, userId);

        return world;
    }

    /**
     * Retrieves all worlds.
     *
     * @returns {Array<Object>} An array of world objects.
     */
    static async getAll() {
        const worlds = await World.find({}, '_id name createdAt updatedAt').populate('user', 'firstname email');
        return worlds;
    }

    /**
     * Retrieves all worlds owned by a specific user.
     *
     * @param {string} userId - The ID of the user whose worlds to retrieve.
     * @returns {Array<Object>} An array of world objects owned by the user.
     */
    static async getAllByUser(userId) {
        const worlds = await World.find({ user: userId }, '_id name createdAt updatedAt');
        return worlds;
    }

    /**
     * Updates a world by its ID.
     *
     * @param {string} worldId - The ID of the world to update.
     * @param {Object} data - The data to update the world with.
     * @param {string} userId - The ID of the authenticated user.
     * @throws {Unauthorized} If the user is not the owner of the world.
     * @returns {Object} The updated world object.
     */
    static async updateById(worldId, data, userId) {
        const world = await World.findById(worldId);
        WorldService.assert(world);
        WorldService.assertUserPermission(world, userId);

        const updatedWorld = await World.findByIdAndUpdate(worldId, data, { new: true }).populate('user', 'firstname email');
        return updatedWorld;
    }

    /**
     * Deletes a world by its ID.
     *
     * @param {string} worldId - The ID of the world to delete.
     * @param {string} userId - The ID of the authenticated user.
     * @throws {Unauthorized} If the user is not the owner of the world.
     */
    static async deleteById(worldId, userId) {
        const world = await World.findById(worldId);
        WorldService.assert(world);
        WorldService.assertUserPermission(world, userId);

        await World.findByIdAndDelete(worldId);
    }
}

module.exports = { WorldService };
