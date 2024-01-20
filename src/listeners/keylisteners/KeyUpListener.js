import Listener from "../Listener";

export default class KeyUpListener extends Listener {

    constructor() {
        super();
        window.addEventListener("keyup", this.notify.bind(this));
    }

    notify(event) {
        Object.entries(this.subs).forEach(([ , fnCallback]) => {
            fnCallback(event);
        });
    }

}