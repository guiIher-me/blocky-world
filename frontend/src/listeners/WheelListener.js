import Listener from "./Listener";

export default class WheelListener extends Listener {

    constructor() {
        super();
        window.addEventListener("wheel", this.notify.bind(this));
    }

    condition() {
        return true;
    }

}
