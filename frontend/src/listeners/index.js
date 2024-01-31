import EKeyListener from "./EKeyListener"
import EscListener from "./EscListener";
import KeyNumberListener from "./KeyNumberListener";
import SaveListener from "./SaveListener";
import SpacePressingListener from "./SpacePressingListener";

export default {
    KeyNumberListener: new KeyNumberListener(),
    SaveListener: new SaveListener(),
    EKeyListener: new EKeyListener(),
    EscListener: new EscListener(),
    SpacePressingListener: new SpacePressingListener(),
}