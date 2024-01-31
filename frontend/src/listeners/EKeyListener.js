import KeyUpListener from "./keylisteners/KeyUpListener";

export default class EKeyListener extends KeyUpListener {

    constructor() {
        super();
    }

    notify(event) {
        if (event.key === 'e')
            Object.entries(this.subs).forEach(([ , fnCallback]) => {
                fnCallback(event);
            });
    }

}