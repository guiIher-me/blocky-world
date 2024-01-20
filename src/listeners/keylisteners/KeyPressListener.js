import Listener from "../Listener";

export default class KeyPressListener extends Listener {

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