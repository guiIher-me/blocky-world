import EKeyListener from "./EKeyListener"
import EscListener from "./EscListener";
import KeyNumberListener from "./KeyNumberListener";
import SaveListener from "./SaveListener";
import ScrollListener from './ScrollListener';
import SpacePressingListener from "./SpacePressingListener";


export default {
    KeyNumberListener: new KeyNumberListener(),
    SaveListener: new SaveListener(),
    ScrollListener: new ScrollListener(),
    EKeyListener: new EKeyListener(),
    EscListener: new EscListener(),
    SpacePressingListener: new SpacePressingListener(),
}