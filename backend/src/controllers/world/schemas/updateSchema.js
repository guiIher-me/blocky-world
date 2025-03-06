/* eslint-disable newline-per-chained-call */
const Joi = require('joi');

module.exports = Joi.object({

    rotation: Joi.object({
        x: Joi.number().min(0).max(365).required(),
        y: Joi.number().min(0).max(365).required(),
    }),

    position: Joi.object({
        top: Joi.number().positive().required(),
        left: Joi.number().positive().required(),
    }),

    hotbar: Joi.object({
        active: Joi.number().min(1).max(9).default(1).required(),
        slots: Joi.object({
            slot1: Joi.string().allow(null).default(null).required(),
            slot2: Joi.string().allow(null).default(null).required(),
            slot3: Joi.string().allow(null).default(null).required(),
            slot4: Joi.string().allow(null).default(null).required(),
            slot5: Joi.string().allow(null).default(null).required(),
            slot6: Joi.string().allow(null).default(null).required(),
            slot7: Joi.string().allow(null).default(null).required(),
            slot8: Joi.string().allow(null).default(null).required(),
            slot9: Joi.string().allow(null).default(null).required(),
        }).required(),
    }),

    blockmap: Joi.array().items(
        Joi.object({
            position: Joi.string()
                .regex(/^(-?\d+) (-?\d+) (-?\d+)$/)
                .message('Each "position" field must contain 3 integers separated by spaces').required(),

            block: Joi.string().required(),
        }),
    ).required(),
});
