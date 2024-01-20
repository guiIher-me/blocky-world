import React, { Component } from 'react';
import BlockFaces from './faces/BlockFaces';
import BlockUtil from './util/BlockUtil';
import PropTypes from 'prop-types';

export default class BlockComponent extends Component {

    static propTypes = {
        position: PropTypes.string.isRequired,
        block: PropTypes.string.isRequired,
        blockstates: PropTypes.object,
        actions: PropTypes.object.isRequired,
        active: PropTypes.bool.isRequired
    }

    constructor(props) {
        super(props);
    }

    // eslint-disable-next-line no-unused-vars
    shouldComponentUpdate(nextProps, nextState) {
        return (this.props.active == true && nextProps.active == false)
    }
    
    render() {
        const { position, block, blockstates, actions } = this.props;
        const {x, y, z} = BlockUtil.getCoord(position);
        const name = block.getName();
        
        const style_coord = BlockUtil.getStyleFromCoord({x, y, z});
        const styles_blockstates = BlockUtil.getStylesFromStates(block, blockstates);
        const style = BlockUtil.prepareStyle([style_coord, ...styles_blockstates]);
        
       
        const deleteBlock = async (event) => {
            actions.deleteBlock({x, y, z});
            event.preventDefault();
        }

        return (
            <div className={`block ${this.props.active ? '' : 'removed'}`}
                data-name={name}
                data-coord={`${x} ${y} ${z}`}
                // onContextMenu={ infoBlock }
                style={style}>
                
                <BlockFaces
                    block={block}
                    coord={{x, y, z}}
                    actions={{
                        getNeighbors: actions.getNeighbors,
                        addBlock: actions.addBlock,
                        deleteBlock,
                    }} />
            </div>
        )
    }

}
