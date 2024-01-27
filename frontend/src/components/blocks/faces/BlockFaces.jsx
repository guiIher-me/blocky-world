import React, { PureComponent } from 'react';
import blockModelFactory from '../../../blocks/models/blockModelFactory';
import BlockFace from './BlockFace';
import blockTemplateEnum from '../../../blocks/models/blockTemplateEnum';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

export default class BlockFaces extends PureComponent {

    static propTypes = {
        block: PropTypes.object.isRequired,
        coord: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired,
    }
    
    constructor() {
        super();
    }

    render() {
        const { block, coord, actions } = this.props;
        const blockname = block.getName();
        const {template, faces} = blockModelFactory(block);

        const neighbors = actions.getNeighbors(coord);

        var blockfaces;
        if (template == blockTemplateEnum.normal)
            blockfaces = Object.entries(faces).map(([face, texture]) => {
                return neighbors[face].isTransparent() &&
                    <BlockFace key={ uuidv4()} face={face} coord={coord} blockname={blockname} actions={actions} texture={`${texture}` } />
            });
        else
            blockfaces = Object.entries(faces).map(([face, texture]) => {
                return <BlockFace key={ uuidv4()} face={face} coord={coord} blockname={blockname} actions={actions} texture={`${texture}` } />
            });
            
        return <div className={ `faces faces-${template}` }>{ blockfaces }</div>;
    }    
}