import Listener from "../Listener";

export default class KeyDownListener extends Listener {

    constructor() {
        super();
        window.addEventListener("keydown", this.notify.bind(this));
    }

    condition() {
        return true;
    }

}