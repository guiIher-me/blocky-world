import Listener from "./Listener";

export default class WheelListener extends Listener {

    constructor() {
        super();
        this.ctrl = false;
        window.addEventListener("wheel", this.notify.bind(this), { passive: false });
    }

    listenCtrl(listen = true) {
        this.ctrl = listen;
        return this;
    }

    condition(event) {
        return event.ctrlKey == this.ctrl;
    }

    notify(event) {
        if (this.condition(event) && this.mustListenTarget(event)) {
            if (event.ctrlKey) event.preventDefault(); // Prevent browser zoom

            Object.values(this.subs).forEach((fnCallback) => {
                fnCallback(event);
            });
        }
    }

}
