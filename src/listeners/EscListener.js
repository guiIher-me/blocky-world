import Listener from "./Listener";

export default class EscListener extends Listener {

    constructor() {
        super();
        window.addEventListener("keyup", this.notify.bind(this));
    }

    notify(event) {
        if (event.key === 'Escape')
            Object.entries(this.subs).forEach(([key, fnCallback]) => {
                fnCallback(event);
            });
    }

}