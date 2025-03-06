import blockTemplateEnum from "./blockTemplateEnum";

export default (blockname) => {
    return {
        template: blockTemplateEnum.stairs,
        faces: {
            'top-up': `${blockname}_top`,
            'top-down': `${blockname}_top`,
            'north': `${blockname}_side`,
            'south-up': `${blockname}_side`,
            'south-down': `${blockname}_side`,
            'west-up': `${blockname}_side`,
            'west-down': `${blockname}_side`,
            'east-up': `${blockname}_side`,
            'east-down': `${blockname}_side`,
            'down': `${blockname}_bottom`
        }
    };
}
