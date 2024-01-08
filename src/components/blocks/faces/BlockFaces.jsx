import React from 'react';
import blockModelFactory from '../../../blocks/models/blockModelFactory';
import BlockFace from './BlockFace';
import blockTemplateEnum from '../../../blocks/models/blockTemplateEnum';

import { v4 as uuidv4 } from 'uuid';

export default ({block, coord, actions}) => {
    const blockname = block.getName();
    const {template, faces} = blockModelFactory(block);

    const neighbors = actions.getNeighbors(coord);

    if (template == blockTemplateEnum.normal)
        var blockfaces = Object.entries(faces).map(([face, texture]) => {
            return neighbors[face].isTransparent() &&
                   <BlockFace key={uuidv4()} face={face} coord={coord} blockname={blockname} actions={actions} texture={`${texture}`} />
        });

    else
        var blockfaces = Object.entries(faces).map(([face, texture]) => {
            return <BlockFace key={uuidv4()} face={face} coord={coord} blockname={blockname} actions={actions} texture={`${texture}`} />
        });
        
    return <div className={`faces faces-${template}`}>{ blockfaces }</div>;
}