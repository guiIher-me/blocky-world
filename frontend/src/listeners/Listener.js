
export default class Listener {

    constructor(allowListenFieldTags = false) {
        this.subs = {};
        this.allowListenFieldTags = allowListenFieldTags;
    }

    subscribe(id, fnCallback) {
        if(this.subs[id] === undefined)
            this.subs[id] = fnCallback;
    }

    unsubscribe(id) {
        if(this.subs[id] !== undefined)
            delete this.subs[id];
    }

    getSubs() {
        return this.subs;
    }

    isFieldTarget(event) {
        const { target } = event;
        return target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA';
    }

    mustListenTarget(event) {
        const isFieldTarget = this.isFieldTarget(event);
        return !this.allowListenFieldTags && !isFieldTarget ||
                this.allowListenFieldTags &&  isFieldTarget;
    }

    // eslint-disable-next-line no-unused-vars
    condition(event) {
        throw new Error(`[Listener] Not implemented 'condition' method!`);
    }

    notify(event) {
        if (this.condition(event) && this.mustListenTarget(event)) {
            Object.entries(this.subs).forEach(([ , fnCallback]) => {
                fnCallback(event);
            });
        }
    }

}