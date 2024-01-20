import KeyDownListener from "./KeyDownListener";
import KeyUpListener from "./KeyUpListener";

export default class KeyPressingListener {

    constructor() {
        this.downListener = new KeyDownListener();
        this.upListener = new KeyUpListener();
    }

    subscribe(id, {fnKeyDown, fnKeyUp}) {
        this.downListener.subscribe(id, fnKeyDown);
        this.upListener.subscribe(id, fnKeyUp);
    }

    unsubscribe(id) {
        this.downListener.unsubscribe(id);
        this.upListener.unsubscribe(id);
    }

    notifyDown(event) {
        throw new Error(`[Listener] Not implemented 'notifyDown' method!`);
    }

    notifyUp(event) {
        throw new Error(`[Listener] Not implemented 'notifyUp' method!`);
    }

}