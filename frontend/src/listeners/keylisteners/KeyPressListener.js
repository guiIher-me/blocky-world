import Listener from "../Listener";

export default class KeyPressListener extends Listener {

    constructor() {
        super();
        window.addEventListener("keypress", this.notify.bind(this));
    }

    condition() {
        return true;
    }

}