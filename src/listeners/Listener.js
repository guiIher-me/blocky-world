
export default class Listener {

    constructor() {
        this.subs = {};
    }

    subscribe(id, fnCallback) {
        if(this.subs[id] === undefined)
            this.subs[id] = fnCallback;
    }

    unsubscribe(id) {
        if(this.subs[id] !== undefined)
            delete this.subs[id];
    }

    notify(event) {
        throw new Error(`[Listener] Not implemented 'notify' method!`);
    }

}