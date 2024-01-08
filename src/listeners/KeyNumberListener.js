import KeyListener from "./KeyListener";

export default class KeyNumberListener extends KeyListener {

    constructor() {
        super();
    }

    notify(event) {
        if (/^[0-9]$/.test(event.key))
            Object.entries(this.subs).forEach(([key, fnCallback]) => {
                console.log(`notifying ${key}...`);
                fnCallback(event);
            });
    }

}