import blockTemplateEnum from "./blockTemplateEnum";

export default (blockname) => {
    return {
        template: blockTemplateEnum.normal,
        faces: {
            up: `${blockname}_up`,
            north: `${blockname}_side`,
            south: `${blockname}_side`,
            east: `${blockname}_side`,
            west: `${blockname}_side`,
            down: `${blockname}_down`,
        }
    };
}
