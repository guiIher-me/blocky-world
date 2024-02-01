import Listener from "./Listener";

export default class ScrollListener extends Listener {

    constructor() {
        super();
        window.addEventListener("scroll", this.notify.bind(this));
    }

    condition() {
        return true;
    }

}
