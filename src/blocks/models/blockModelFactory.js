import blockModelAll from './blockModelAll';
import blockModelBars from './blockModelBars';
import blockModelDefault from './blockModelDefault';
import blockModelSide from './blockModelSide';
import blockModelSlab from './blockModelSlab';
import blockModelWall from './blockModelWall'
import blockModelX from './blockModelX';
import blockModelsEnum from './blockModelsEnum';

export default (block) => {
    const blockname = block.getName();
    const model = block.getModel();

    if (model == blockModelsEnum.Default)
        return blockModelDefault(blockname);
    if (model == blockModelsEnum.All)
        return blockModelAll(blockname);
    if (model == blockModelsEnum.Side)
        return blockModelSide(blockname);
    if (model == blockModelsEnum.Slab)
        return blockModelSlab(blockname);
    if (model == blockModelsEnum.Wall)
        return blockModelWall(blockname);
    if (model == blockModelsEnum.X)
        return blockModelX(blockname);
    if (model == blockModelsEnum.Bars)
        return blockModelBars(blockname);

    throw new Error(`Block Model ${model} not found!`);
}