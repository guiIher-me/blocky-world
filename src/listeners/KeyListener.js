import Listener from "./Listener";

export default class KeyListener extends Listener {

    constructor() {
        super();
        window.addEventListener("keypress", this.notify.bind(this));
    }

    notify(event) {
        Object.entries(this.subs).forEach(([key, fnCallback]) => {
            console.log(`notifying ${key}...`);
            fnCallback(event);
        });
    }

}