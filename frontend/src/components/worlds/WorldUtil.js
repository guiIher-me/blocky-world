import Blocks from "../../Blocks";

export default class WorldUtil {

    static getBlock(blockMap, {x, y, z}) {
        return blockMap[`${x},${y},${z}`];
    }

    static getBlockOrAir(blockmap) {
        return blockmap?.active && blockmap?.block || Blocks.Air;
    }

    static getUp(blockMap, {x, y, z}) {
        return blockMap[`${x},${y+1},${z}`];
    }

    static getDown(blockMap, {x, y, z}) {
        return blockMap[`${x},${y-1},${z}`];
    }

    static getNorth(blockMap, {x, y, z}) {
        return blockMap[`${x},${y},${z-1}`];
    }

    static getSouth(blockMap, {x, y, z}) {
        return blockMap[`${x},${y},${z+1}`];
    }
    
    static getEast(blockMap, {x, y, z}) {
        return blockMap[`${x+1},${y},${z}`];
    }

    static getWest(blockMap, {x, y, z}) {
        return blockMap[`${x-1},${y},${z}`];
    }

    static getBlockUp(blockMap, coord) {
        const blockmap = WorldUtil.getUp(blockMap, coord);
        return WorldUtil.getBlockOrAir(blockmap);
    }

    static getBlockDown(blockMap, coord) {
        const blockmap = WorldUtil.getDown(blockMap, coord);
        return WorldUtil.getBlockOrAir(blockmap);
    }

    static getBlockNorth(blockMap, coord) {
        const blockmap = WorldUtil.getNorth(blockMap, coord);
        return WorldUtil.getBlockOrAir(blockmap);
    }

    static getBlockSouth(blockMap, coord) {
        const blockmap = WorldUtil.getSouth(blockMap, coord);
        return WorldUtil.getBlockOrAir(blockmap);
    }

    static getBlockEast(blockMap, coord) {
        const blockmap = WorldUtil.getEast(blockMap, coord);
        return WorldUtil.getBlockOrAir(blockmap);
    }

    static getBlockWest(blockMap, coord) {
        const blockmap = WorldUtil.getWest(blockMap, coord);
        return WorldUtil.getBlockOrAir(blockmap);
    }

    static getNeighbors(blockMap, coord) {
        const up = WorldUtil.getUp(blockMap, coord);
        const down = WorldUtil.getDown(blockMap, coord);
        const north = WorldUtil.getNorth(blockMap, coord);
        const south = WorldUtil.getSouth(blockMap, coord);
        const east = WorldUtil.getEast(blockMap, coord);
        const west = WorldUtil.getWest(blockMap, coord);

        return {
            ...(up && {up}),
            ...(down && {down}),
            ...(north && {north}),
            ...(south && {south}),
            ...(east && {east}),
            ...(west && {west})
        }
    }

    static getBlockNeighbors(blockMap, coord) {
        return {
            up: WorldUtil.getBlockUp(blockMap, coord),
            down: WorldUtil.getBlockDown(blockMap, coord),
            north: WorldUtil.getBlockNorth(blockMap, coord),
            south: WorldUtil.getBlockSouth(blockMap, coord),
            east: WorldUtil.getBlockEast(blockMap, coord),
            west: WorldUtil.getBlockWest(blockMap, coord),
        }
    }

    static getNonAirBlockNeighbors(blockMap, coord) {
        const neighbors = WorldUtil.getBlockNeighbors(blockMap, coord);

        const nonAirBlocks = {};
        Object.entries(neighbors).forEach(([key, block]) => {
            if(block !== Blocks.Air)
                nonAirBlocks[key] = block;
        });

        return nonAirBlocks;
    }

    static getTargetCoordByFace(face, coord) {
        const {x, y, z} = coord;

        const targetCoords = {
            up: {x, y: y+1, z},
            down: {x, y: y-1, z},
            north: {x, y, z: z-1},
            south: {x, y, z: z+1},
            east: {x: x+1, y, z},
            west: {x: x-1, y, z},
        }

        const target = targetCoords[face];
        if (!target) throw new Error(`[WorldUtil] Face ${face} is not a valid direction!`);
        return target;
    }

}