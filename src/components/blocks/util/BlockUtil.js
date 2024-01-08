import Blocks from '../../../Blocks';
import config from '../../../config';

export default class BlockUtil {

    static getPresentationName(name) {
        const parts = name.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1));
        const word_parts = parts.filter((part) => part != '');
        const presentation = word_parts.reduce((cur, part) => cur + ' ' + part);
        
        return presentation;
    }

    static getCoord(str) {
        const [cx, cy, cz, ...rest] = str.split(' ');
        if (!cx || !cy || !cz || rest.length > 0) throw new Error(`[Block] Invalid position ${str}`);
        
        const [x, y, z] = [cx, cy, cz].map((coord) => parseInt(coord));
        if (isNaN(x) || isNaN(y) || isNaN(z)) throw new Error(`[Block] Invalid position ${str}`);
    
        return { x, y, z };
    }
    
    static getTranslation3d({x, y, z}) {
        const face_px_size = config.BLOCK_FACE_PX_SIZE;
        const translateX = +x * face_px_size;
        const translateY = -y * face_px_size;
        const translateZ = +z * face_px_size;

        return { tx: translateX, ty: translateY, tz: translateZ };
    }

    static getStyleFromCoord(coord) {
        const {tx, ty, tz} = BlockUtil.getTranslation3d(coord);
        return { transform: `translate3d(${tx}px, ${ty}px, ${tz}px)` };
    }

    static getStylesFromStates(block, blockstates) {
        const brute_styles = Object.entries(blockstates).map(([statename, statevalue]) => {
            const blockState = block.getState(statename);
            const style = blockState.getStyle(statevalue);
            
            return style;
        });

        return brute_styles;
    }

    static prepareStyle(styles) {
        let block_style = { };
        let transform_style = '';

        styles.forEach((style) => {
            const {transform, ...properties} = style;
            transform_style += `${transform} `;
            Object.entries(properties).forEach(([propname, propvalue]) => 
                block_style[`${propname}`] = propvalue
            );
        });

        block_style.transform = transform_style;
        return block_style;
    }

    static getRandomBlock() {
        const obj = Blocks;
        var keys = Object.keys(obj);
        return obj[keys[ keys.length * Math.random() << 0]];
    }

}