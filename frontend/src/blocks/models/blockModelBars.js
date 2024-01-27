import blockTemplateEnum from "./blockTemplateEnum";

export default (blockname) => {
    return {
        template: blockTemplateEnum.bars,
        faces: {
            part1: `${blockname}`,
        }
    };
}
