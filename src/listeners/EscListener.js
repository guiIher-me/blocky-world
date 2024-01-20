import KeyUpListener from "./keylisteners/KeyUpListener";

export default class EscListener extends KeyUpListener {

    constructor() {
        super();
    }

    notify(event) {
        if (event.key === 'Escape')
            Object.entries(this.subs).forEach(([ , fnCallback]) => {
                fnCallback(event);
            });
    }

}