import BlockUtil from '../blocks/util/BlockUtil';
import { v4 as uuidv4 } from 'uuid';

export default class WorldBlockMap {

    static async setBlockMap(blockpositions) {
        const blockMap = {};
        blockpositions.forEach(({block, position, states = []}) => {
            const {x, y, z} = BlockUtil.getCoord(position);
            blockMap[`${x},${y},${z}`] = { randomkey: uuidv4(), position, block, states, active: true }
        });

        WorldBlockMap.blockMap = blockMap;
    }

    static getBlockMap() {
        return WorldBlockMap.blockMap;
    }

}