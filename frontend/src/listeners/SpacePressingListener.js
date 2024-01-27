import KeyPressingListener from "./keylisteners/KeyPressingListener";

export default class SpacePressingListener extends KeyPressingListener {

    constructor() {
        super();
        this.down = false;
    }

    isSpace(event) {
        return (event.keyCode === 32);
    }

    notifyDown(event) {
        if (this.isSpace(event) && this.down == false) {
            this.down = true;
            const subs = this.downListener.getSubs();
            Object.entries(subs).forEach(([key, fnCallback]) => {
                console.log(`notifying down ${key}...`);
                fnCallback(event);
            });
        }
    }

    notifyUp(event) {
        if (this.isSpace(event)) {
            this.down = false;
            const subs = this.downListener.getSubs();
            Object.entries(subs).forEach(([key, fnCallback]) => {
                console.log(`notifying up ${key}...`);
                fnCallback(event);
            });
        }
    }

}