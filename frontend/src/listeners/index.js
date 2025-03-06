import EKeyListener from "./EKeyListener"
import EscListener from "./EscListener";
import KeyNumberListener from "./KeyNumberListener";
import SaveListener from "./SaveListener";
import WheelListener from './WheelListener';
import SpacePressingListener from "./SpacePressingListener";

export default {
    KeyNumberListener: new KeyNumberListener(),
    SaveListener: new SaveListener(),
    WheelListener: new WheelListener(),
    CtrlWheelListener: new WheelListener().listenCtrl(),
    EKeyListener: new EKeyListener(),
    EscListener: new EscListener(),
    SpacePressingListener: new SpacePressingListener(),
}
