import KeyDownListener from "./KeyDownListener";
import KeyUpListener from "./KeyUpListener";

export default class KeyPressingListener {

    constructor() {
        this.downListener = new KeyDownListener();
        this.upListener = new KeyUpListener();

        this.subActivated = {};
        this.notifyDown = this.notifyDown.bind(this);
        this.notifyUp = this.notifyUp.bind(this);
    }

    subscribe(id, {fnKeyDown, fnKeyUp}) {
        this.downListener.subscribe(`${id}--down`, (event) => this.notifyDown(event, id, fnKeyDown));
        this.upListener.subscribe(`${id}--up`, (event) => this.notifyUp(event, id, fnKeyUp));
        this.subActivated[id] = false;
    }

    unsubscribe(id) {
        this.downListener.unsubscribe(`${id}--down`);
        this.upListener.unsubscribe(`${id}--up`);
        delete this.subActivated[id];
    }

    // eslint-disable-next-line no-unused-vars
    conditionDown(event) {
        throw new Error(`[KeyPressingListener] Not implemented 'conditionDown' method!`);
    }

    // eslint-disable-next-line no-unused-vars
    conditionUp(event) {
        throw new Error(`[KeyPressingListener] Not implemented 'conditionUp' method!`);
    }

    notifyDown(event, id, fnKeyDown) {
        if (this.conditionDown(event) && !this.subActivated[id]) {
            fnKeyDown(event);
            this.subActivated[id] = true;
        }
    }

    notifyUp(event, id, fnKeyUp) {
        if (this.conditionUp(event) && this.subActivated[id]) {
            fnKeyUp(event);
            this.subActivated[id] = false;
        }
    }

}