import React, { Component } from 'react';
import config from '../../config';
import WorldBlockMap from './WorldBlockMap';
import BlockComponent from '../blocks/BlockComponent';
import BlockUtil from '../blocks/util/BlockUtil';
import WorldUtil from './WorldUtil';
import { v4 as uuidv4 } from 'uuid';

export default class WorldComponent extends Component {

    constructor(props) {
        super(props);

        this.state = { ...WorldBlockMap.getBlockMap() };
        this.addBlock = this.addBlock.bind(this);
        this.deleteBlock = this.deleteBlock.bind(this);
        this.updateBlockNeighbors = this.updateBlockNeighbors.bind(this);
        this.getNeighbors = this.getNeighbors.bind(this);
    }

    getNeighbors(coordTarget) {
        return WorldUtil.getBlockNeighbors(this.state, coordTarget);
    }

    async addBlock(coordTarget) {
        const { activeSlotBlock } = this.props;
        console.log(activeSlotBlock);
        const {x, y, z} = coordTarget;
        const key = `${x},${y},${z}`;

        await this.setState((prevState) => {
            return {
                ...prevState,
                [key]: {
                    randomkey: uuidv4(),
                    position: `${x} ${y} ${z}`,
                    block: activeSlotBlock,
                    states: [],
                    active: true,
                },
            };
        });

        this.updateBlockNeighbors(coordTarget);
    }

    async deleteBlock(coordTarget) {
        const {x, y, z} = coordTarget;
        const key = `${x},${y},${z}`;

        await this.setState((prevState) => {
            return {
                ...prevState,
                [key]: {
                    ...prevState[key],
                    active: false,
                },
            };
        });

        this.updateBlockNeighbors(coordTarget);
    }

    updateBlockNeighbors(coordTarget) {
        const neighbors = WorldUtil.getNeighbors(this.state, coordTarget);

        Object.values(neighbors).forEach(({position}) => {
            const {x, y, z} = BlockUtil.getCoord(position);
            const key = `${x},${y},${z}`;

            this.setState((prevState) => {
                return {
                    ...prevState,
                    [key]: {
                        ...prevState[key],
                        randomkey: uuidv4(), // force update components
                    },
                };
            });

        });
    }

    render() {
        const { rotateY, classes } = this.props;
        const { WORLD_ID } = config;
        const world_style = {transform: `rotateX(338deg) rotateY(${rotateY}deg)`};

        return (
            <div id={`${WORLD_ID}`} style={world_style} className={classes}>{

                /*
                Object.values(this.state).map(({randomkey, position, block, states}) => {
                    const {x, y, z} = BlockUtil.getCoord(position);
                    const key = `${x},${y},${z}`;

                    return <BlockComponent
                        key={randomkey}
                        position={position}
                        block={block}
                        blockstates={states}
                        active={this.state[key].active}
                        actions={{
                            getNeighbors: this.getNeighbors,
                            addBlock: this.addBlock,
                            deleteBlock: this.deleteBlock
                        }}>
                    </BlockComponent>
                }) */

            }</div>
        )
    }
}