/* eslint-disable no-unused-vars */
require('../../utils/typedef');

const { HttpResponse } = require('../../http/HttpResponse');
const { WorldService } = require('../../services/WorldService');
const { validate } = require('../../validation/validate');
const { idSchema, createSchema, updateSchema } = require('./schemas');

class WorldController {
    /**
     * Create a new World
     * @param {Object} params
     * @param {Object} body
     * @returns {HttpResponseData}
     * @static
     */
    static async create(_, body) {
        validate(createSchema, body);
        const world = WorldService.create(body);
        return HttpResponse.created(world);
    }

    /**
     * Get all Worlds
     * @param {Object} params
     * @param {Object} body
     * @returns {HttpResponseData}
     * @static
     */
    static async getAll(params, body) {
        const worlds = await WorldService.getAll();
        return HttpResponse.ok(worlds);
    }

    /**
     * Get world by id
     * @param {Object} params
     * @param {Object} body
     * @returns {HttpResponseData}
     * @static
     */
    static async getById(params, body) {
        validate(idSchema, body);
        const world = await WorldService.getById(params.id);
        return HttpResponse.ok(world);
    }

    /**
     * Update world by id
     * @param {Object} params
     * @param {Object} body
     * @returns {HttpResponseData}
     * @static
     */
    static async update(params, body) {
        validate(idSchema, params);
        validate(updateSchema, body);
        const world = await WorldService.updateById(params.id, body);
        return HttpResponse.ok(world);
    }

    /**
     * Delete world by id
     * @param {Object} params
     * @param {Object} body
     * @returns {HttpResponseData}
     * @static
     */
    static async delete(params, _) {
        validate(idSchema, params);
        await WorldService.deleteById(params.id);
        return HttpResponse.okNoContent();
    }
}

module.exports = { WorldController };
