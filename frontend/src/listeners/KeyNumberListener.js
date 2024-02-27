import KeyPressListener from "./keylisteners/KeyPressListener";

export default class KeyNumberListener extends KeyPressListener {

    constructor() {
        super();
    }

    condition(event) {
        return (/^[0-9]$/.test(event.key));
    }

}