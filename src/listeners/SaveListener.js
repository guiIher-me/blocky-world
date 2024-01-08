
import Listener from "./Listener";

export default class SaveListener extends Listener {

    constructor() {
        super();
        window.addEventListener("keydown", this.notify.bind(this));
    }

    notify(event) {
        if (event.ctrlKey && event.key === 's') {
            Object.entries(this.subs).forEach(([key, fnCallback]) => {
                fnCallback(event);
            });
            
            event.preventDefault();
        }
        
    }

}