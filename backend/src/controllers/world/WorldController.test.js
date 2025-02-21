const { WorldController } = require('./WorldController');
const { HttpResponse } = require('../../http/HttpResponse');
const { World } = require('../../models/World');

jest.mock('../../models/world', () => ({
    World: {
        create: jest.fn(),
        find: jest.fn(),
        findById: jest.fn(),
        findByIdAndUpdate: jest.fn(),
        findByIdAndDelete: jest.fn(),
    },
}));

const VALID_ID_MOCK = '602e363ca2a0d1157018cb9f';
const WORLD_PROPS_MOCK = {
    name: 'Mocky World',
    blockmap: [],
};
const WORLD_DOCUMENT_MOCK = {
    _id: VALID_ID_MOCK,
    ...WORLD_PROPS_MOCK,
};

describe('WorldController', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('create', () => {
        it('should create a new world', async () => {
            const body = { name: 'Mocky World' };

            const newWorldData = WORLD_DOCUMENT_MOCK;
            World.create.mockResolvedValue(newWorldData);

            const response = await WorldController.create({}, body);
            expect(response).toEqual(HttpResponse.created(newWorldData));
        });
    });

    describe('getAll', () => {
        it('should get all worlds', async () => {
            const worldsData = [WORLD_DOCUMENT_MOCK];
            World.find.mockResolvedValue(worldsData);

            const response = await WorldController.getAll({}, {});
            expect(response).toEqual(HttpResponse.ok(worldsData));
        });
    });

    describe('getById', () => {
        it('should get world by id', async () => {
            const params = { id: VALID_ID_MOCK };
            const worldData = WORLD_DOCUMENT_MOCK;
            World.findById.mockResolvedValue(worldData); // id found

            const response = await WorldController.getById(params, {});
            expect(response).toEqual(HttpResponse.ok(worldData));
        });

        it('should return not found if world not found', async () => {
            const params = { id: VALID_ID_MOCK };
            World.findById.mockResolvedValue(null); // id not found

            const response = await WorldController.getById(params, {});
            expect(response).toEqual(HttpResponse.notFound('World not found!'));
        });
    });

    describe('update', () => {
        it('should update world by id', async () => {
            const id = VALID_ID_MOCK;
            const name = 'Mocky World Updated';

            const params = { id };
            const body = { ...WORLD_PROPS_MOCK, name };
            const updatedWorldData = { ...WORLD_DOCUMENT_MOCK, name };
            World.findByIdAndUpdate.mockResolvedValue(updatedWorldData); // found id

            const response = await WorldController.update(params, body);
            expect(response).toEqual(HttpResponse.ok(updatedWorldData));
        });

        it('should return not found if world not found', async () => {
            const params = { id: VALID_ID_MOCK };
            const body = { ...WORLD_PROPS_MOCK, name: 'Mocky World Updated' };
            World.findByIdAndUpdate.mockResolvedValue(null); // id not found

            const response = await WorldController.update(params, body);
            expect(response).toEqual(HttpResponse.notFound('World not found!'));
        });
    });

    describe('delete', () => {
        it('should delete world by id', async () => {
            const params = { id: VALID_ID_MOCK };
            const deletedWorldData = {};
            World.findByIdAndDelete.mockResolvedValue(deletedWorldData);

            const response = await WorldController.delete(params, {}); // id found
            expect(response).toEqual(HttpResponse.okNoContent());
        });

        it('should return not found if world not found', async () => {
            const params = { id: VALID_ID_MOCK };
            World.findByIdAndDelete.mockResolvedValue(null); // id not found

            const response = await WorldController.delete(params, {});
            expect(response).toEqual(HttpResponse.notFound('World not found!'));
        });
    });
});
