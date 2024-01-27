import D from './direction/directionEnum';
import BlockStateFacing from './blockstates/BlockStateFacing';
import BlockStateOpen from './blockstates/BlockStateOpen';

export default {
    Facing: ( new BlockStateFacing([D.up, D.down, D.north, D.south, D.east, D.west], D.up) ),
    FacingXZ: ( new BlockStateFacing([D.north, D.south, D.east, D.west], D.north) ),
    Open: ( new BlockStateOpen() ),
}