import blockTemplateEnum from "./blockTemplateEnum";

export default (blockname) => {
    return {
        template: blockTemplateEnum.slab,
        faces: {
            up: `${blockname}`,
            north: `${blockname}_side`,
            south: `${blockname}_side`,
            east: `${blockname}_side`,
            west: `${blockname}_side`,
            down: `${blockname}`
        }
    };
}
