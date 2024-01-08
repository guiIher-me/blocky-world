
export default class ItemCategory {

    constructor(title, illustrationSrc) {
        this.title = title;
        this.illustration = illustrationSrc;
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    getItems() {
        return this.items;
    }

    getTitle() {
        return this.title;
    }

    getIllustration() {
        return this.illustration;
    }
    
}