/* eslint-disable no-unused-vars */
require('../../utils/typedef');

const { HttpResponse } = require('../../http/HttpResponse');
const { WorldService } = require('../../services/WorldService');
const { validate } = require('../../validation/validate');
const {
    idSchema, createSchema, updateSchema, nameSchema,
} = require('./schemas');

class WorldController {
    /**
     * Create a new World
     * @param {Object} body
     * @param {Object} user
     * @returns {HttpResponseData}
     * @static
     */
    static async create({ body, user }) {
        validate(createSchema, body);
        const world = await WorldService.create(body, user.id);
        return HttpResponse.created(world);
    }

    /**
     * Get all Worlds
     * @param {Object} user
     * @returns {HttpResponseData}
     * @static
     */
    static async getAll({ user }) {
        const worlds = await WorldService.getAllByUser(user.id);
        return HttpResponse.ok(worlds);
    }

    /**
     * Get world by id
     * @param {Object} params
     * @param {Object} user
     * @returns {HttpResponseData}
     * @static
     */
    static async getById({ params, user }) {
        validate(idSchema, params);
        const world = await WorldService.getById(params.id, user.id);
        return HttpResponse.ok(world);
    }

    /**
     * Update world by id
     * @param {Object} params
     * @param {Object} body
     * @param {Object} user
     * @returns {HttpResponseData}
     * @static
     */
    static async update({ params, body, user }) {
        validate(idSchema, params);
        validate(updateSchema, body);
        const world = await WorldService.updateById(params.id, body, user.id);
        return HttpResponse.ok(world);
    }

    /**
     * Update name world by id
     * @param {Object} params
     * @param {Object} body
     * @param {Object} user
     * @returns {HttpResponseData}
     * @static
     */
    static async updateName({ params, body, user }) {
        validate(idSchema, params);
        validate(nameSchema, body);
        const world = await WorldService.updateNameById(params.id, body, user.id);
        return HttpResponse.ok(world);
    }

    /**
     * Delete world by id
     * @param {Object} params
     * @param {Object} user
     * @returns {HttpResponseData}
     * @static
     */
    static async delete({ params, user }) {
        validate(idSchema, params);
        await WorldService.deleteById(params.id, user.id);
        return HttpResponse.okNoContent();
    }
}

module.exports = { WorldController };
