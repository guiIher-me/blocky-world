import React, { Component } from 'react';
import config from '../../config';
import WorldBlockMap from './WorldBlockMap';
import BlockComponent from '../blocks/BlockComponent';
import BlockUtil from '../blocks/util/BlockUtil';
import WorldUtil from './WorldUtil';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

export default class WorldComponent extends Component {

    static propTypes = {
        activeSlotBlock: PropTypes.object.isRequired,
        zoom: PropTypes.object.isRequired,
        rotation: PropTypes.number.isRequired,
        position: PropTypes.object.isRequired,
        classes: PropTypes.string,
        actions: PropTypes.object.isRequired
    }

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
        const position = `${x} ${y} ${z}`;

        const blockpos = {
            blockname: activeSlotBlock.name,
            position,
            states: [],
        }

        await this.setState((prevState) => {
            return {
                ...prevState,
                [key]: {
                    randomkey: uuidv4(),
                    active: true,

                    position,
                    block: activeSlotBlock,
                    states: [],
                },
            };
        });

        this.props.actions.addBlock(blockpos);
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
        const { zoom, rotation, position, classes } = this.props;
        
        const { WORLD_ID } = config;
        const world_style = {
            transform: `scale(${zoom}) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            top: position.top,
            left: position.left,
        };

        return (
            <div id={`${WORLD_ID}`} style={world_style} className={classes}>{

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
                })

            }</div>
        )
    }
}