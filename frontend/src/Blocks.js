import Block from './blocks/Block';
import BlockNatural from './blocks/BlockNatural';
import BlockBuilding from './blocks/BlockBuilding';
import blockModelsEnum from './blocks/models/blockModelsEnum';
import BlockWall from './blocks/BlockWall';
import BlockSlab from './blocks/BlockSlab';
import BlockStairs from './blocks/BlockStairs';
import BlockX from './blocks/BlockX';
import BStates from './BlockStates';
import ItemCat from './ItemCategories';

export default {
    Air: ( new Block('air').setTransparency(true) ),

    // Natural Blocks
    GrassBlock: ( new BlockNatural('grass-block').setModel(blockModelsEnum.Side)),
    Dirt: ( new BlockNatural('dirt') ),
    Grass: ( new BlockX('grass') ),
    Stone: ( new BlockNatural('stone') ),
    CoalOre: ( new BlockNatural('coal-ore')),
    IronOre: ( new BlockNatural('iron-ore')),
    CopperOre: ( new BlockNatural('copper-ore') ),
    GoldOre: ( new BlockNatural('gold-ore') ),
    RedstoneOre: ( new BlockNatural('redstone-ore') ),
    EmeraldOre: ( new BlockNatural('emerald-ore') ),
    LapisLazuliOre: ( new BlockNatural('lapis-lazuli-ore') ),
    DiamondOre: ( new Block('diamond-ore', ItemCat.NaturalBlocks) ),
    Leaves: ( new BlockNatural('leaves') ),
    MossBlock: ( new BlockNatural('moss-block') ),
    Dandelion: (new BlockX('flower--dandelion') ),

    // Building Blocks
    OakPlanks: ( new BlockBuilding('oak-planks') ),
    Cobblestone: ( new BlockBuilding('cobblestone') ),
    Bricks: ( new BlockBuilding('bricks') ),
    StoneBricks: ( new BlockBuilding('stone-bricks') ),
    ChiseledStoneBricks: ( new BlockBuilding('chiseled-stone-bricks') ),
    CrackedStoneBricks: ( new BlockBuilding('cracked-stone-bricks') ),
    MossyStoneBricks: ( new BlockBuilding('mossy-stone-bricks') ),
    StoneBricksSlab: ( new BlockSlab('stone-bricks') ),
    StoneBricksWall: ( new BlockWall('stone-bricks') ),
    DioriteWall: ( new BlockWall('diorite') ),
    StoneBricksStairs: ( new BlockStairs('stone-bricks') ),
    IronBars: ( new Block('iron-bars').setModel(blockModelsEnum.Bars).setTransparency(true).setStates([BStates.FacingXZ]) ),
}