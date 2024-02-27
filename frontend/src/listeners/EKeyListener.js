import KeyUpListener from "./keylisteners/KeyUpListener";

export default class EKeyListener extends KeyUpListener {

    constructor() {
        super();
    }

    condition(event) {
        return event.key === 'e';
    }

}