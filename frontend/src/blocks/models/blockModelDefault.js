import blockTemplateEnum from "./blockTemplateEnum";

export default (blockname) => {
    return {
        template: blockTemplateEnum.normal,
        faces: {
            up: `${blockname}_up`,
            north: `${blockname}_north`,
            south: `${blockname}_south`,
            east: `${blockname}_east`,
            west: `${blockname}_west`,
            down: `${blockname}_down`,
        }
    };
}
