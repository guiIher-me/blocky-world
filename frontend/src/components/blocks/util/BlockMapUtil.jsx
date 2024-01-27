import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import BlockComponent from '../../../components/blocks/BlockComponent';

export default class blockMapUtil {

    static toComponents(blockPositionArray) {
        const components = blockPositionArray.map(({position, block, states = []}) => {
            return <BlockComponent key={uuidv4()} position={position} block={block} blockstates={states}></BlockComponent>
        });

        return components;
    }

}