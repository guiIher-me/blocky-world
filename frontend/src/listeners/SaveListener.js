
import KeyDownListener from "./keylisteners/KeyDownListener";

export default class SaveListener extends KeyDownListener {

    constructor() {
        super();
    }

    notify(event) {
        if (event.ctrlKey && event.key === 's') {
            Object.entries(this.subs).forEach(([ , fnCallback]) => {
                fnCallback(event);
            });
            
            event.preventDefault();
        }
        
    }

}