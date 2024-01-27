import blockTemplateEnum from "./blockTemplateEnum";

export default (blockname) => {
    return {
        template: blockTemplateEnum.normal,
        faces: {
            up: blockname,
            north: blockname,
            south: blockname,
            east: blockname,
            west: blockname,
            down: blockname
        }
    };
}
