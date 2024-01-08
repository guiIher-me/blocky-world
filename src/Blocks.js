import Block from './blocks/Block';
import BlockNatural from './blocks/BlockNatural';
import BlockBuilding from './blocks/BlockBuilding';
import blockModelsEnum from './blocks/models/blockModelsEnum';
import BlockWall from './blocks/BlockWall';
import BlockSlab from './blocks/BlockSlab';
import BlockX from './blocks/BlockX';
import BStates from './BlockStates';
import ItemCat from './ItemCategories';

export default {
    Air: ( new Block('air').setTransparency(true) ),
    Dirt: ( new BlockNatural('dirt') ),
    GrassBlock: ( new BlockNatural('grass-block').setModel(blockModelsEnum.Side)),
    Grass: ( new BlockX('grass') ),
    OakPlanks: ( new BlockBuilding('oak-planks') ),
    Stone: ( new Block('stone', ItemCat.NaturalBlocks) ),
    Cobblestone: ( new BlockBuilding('cobblestone') ),
    Bricks: ( new BlockBuilding('bricks') ),
    StoneBricks: ( new BlockBuilding('stone-bricks') ),
    CrackedStoneBricks: ( new BlockBuilding('cracked-stone-bricks') ),
    MossyStoneBricks: ( new BlockBuilding('mossy-stone-bricks') ),
    StoneBricksSlab: ( new BlockSlab('stone-bricks') ),
    StoneBricksWall: ( new BlockWall('stone-bricks') ),
    Leaves: ( new BlockNatural('leaves') ),
    MossBlock: ( new BlockNatural('moss-block') ),
    IronBars: ( new Block('iron-bars').setModel(blockModelsEnum.Bars).setTransparency(true).setStates([BStates.FacingXZ]) ),
    DioriteWall: ( new BlockWall('diorite') ),
    Dandelion: (new BlockX('flower--dandelion') )
}