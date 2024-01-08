import blockTemplateEnum from "./blockTemplateEnum";

export default (blockname) => {
    return {
        template: blockTemplateEnum.x,
        faces: {
            part1: `${blockname}`,
            part2: `${blockname}`
        }
    };
}
