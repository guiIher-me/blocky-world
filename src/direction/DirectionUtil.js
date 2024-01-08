import directionEnum from "./directionEnum";

export default class DirectionUtil {
    static isDirection(direction) { return Object.keys(directionEnum).includes(direction); }
    static isUp(direction) { return direction == directionEnum.up; }
    static isDown(direction) { return direction == directionEnum.down; }
    static isNorth(direction) { return direction == directionEnum.north; }
    static isSouth(direction) { return direction == directionEnum.south; }
    static isWest(direction) { return direction == directionEnum.west; }
    static isEast(direction) { return direction == directionEnum.east; }
}