import React, { PureComponent } from 'react';
import styled from '@emotion/styled';
import WorldUtil from '../../worlds/WorldUtil';
import PropTypes from 'prop-types';

export default class BlockFace extends PureComponent {

    static propTypes = {
        face: PropTypes.string,
        coord: PropTypes.object,
        actions: PropTypes.object.isRequired,
        blockname: PropTypes.string,
        texture: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.addBlock = this.addBlock.bind(this);
    }

    addBlock(event) {
        const { face, coord, actions } = this.props;
        const targetCoord = WorldUtil.getTargetCoordByFace(face, coord);
        actions.addBlock(targetCoord);
        event.preventDefault();
    }

    render() {
        const {face, blockname, texture, actions} = this.props;
        const img = `src/textures/blocks/${blockname}/${texture}.png`;
        
        const StyledFace = styled.div`
            background-image: url(${img}) !important;
        `;

        return (
            <StyledFace
                onClick={ actions.deleteBlock }
                onContextMenu={ this.addBlock }
                className={`face face-${face}`} />
        );
    }

}