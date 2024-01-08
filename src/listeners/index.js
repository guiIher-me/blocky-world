import EscListener from "./EscListener";
import KeyListener from "./KeyListener";
import KeyNumberListener from "./KeyNumberListener";
import SaveListener from "./SaveListener";

export default {
    KeyListener: new KeyListener(),
    KeyNumberListener: new KeyNumberListener(),
    SaveListener: new SaveListener(),
    EscListener: new EscListener(),
}