import BlockState from "./BlockState";

const STATE_NAME = 'facing';

export default class BlockStateFacing extends BlockState {

    constructor(options, defaultValue) {
        super(STATE_NAME, options, defaultValue);
    }

    getStyle(state = this.defaultValue) {
        if(!this.options.includes(state))
            throw new Error(`[BlockStateFacing] '${state}' isn't a valid state!`);

        const styles = {
            up: {transform: 'rotateY(0)' },  // TODO
            down: {transform: 'rotateY(0)' }, // TODO
            north: {transform: 'rotateY(90deg)' },
            south: { transform: 'rotateY(270deg)' },
            west: { transform: 'rotateY(0)' },
            east: { transform: 'rotateY(180deg)' }
        }

        return styles[state];
    }

}