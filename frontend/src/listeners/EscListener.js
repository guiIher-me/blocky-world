import KeyUpListener from "./keylisteners/KeyUpListener";

export default class EscListener extends KeyUpListener {

    constructor() {
        super();
    }

    condition(event) {
        return event.key === 'Escape';
    }

}