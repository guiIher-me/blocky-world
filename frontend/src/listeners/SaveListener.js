import KeyDownListener from "./keylisteners/KeyDownListener";

export default class SaveListener extends KeyDownListener {

    constructor() {
        super();
    }

    condition(event) {
        return event.ctrlKey && event.key === 's';
    }

}