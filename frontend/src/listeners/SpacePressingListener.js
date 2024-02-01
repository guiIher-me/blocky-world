import KeyPressingListener from "./keylisteners/KeyPressingListener";

export default class SpacePressingListener extends KeyPressingListener {

    constructor() { 
        super();
    }

    isSpace(event) {
        return (event.keyCode === 32);
    }

    conditionDown(event) {
       return this.isSpace(event);
    }

    conditionUp(event) {
        return this.isSpace(event);
    }

}