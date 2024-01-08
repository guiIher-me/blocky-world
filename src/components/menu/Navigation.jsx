import React, { Component } from "react";
import MCButton from "../action/MCButton";
import MCInput from "../action/MCInput";
import listeners from "../../listeners/";

export default class Navigation extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        listeners.EscListener.subscribe("navigation", this.props.actions.view360.off);
    }

    componentWillUnmount() {
        listeners.SaveListener.unsubscribe("navigation");
    }

    shouldComponentUpdate(nextProps, nextState) {
        const {actions} = this.props;
        return actions.view360.value !== nextProps.actions.view360.value;
    }

    render() {
        const {worldName, actions} = this.props;

        const hiddenInView360 = `${actions.view360.value == true ? 'removed' : ''}`;
        const showInView360 = `${actions.view360.value == true ? '' : 'removed'}`;

        return (
            <nav role="navigation" className="navigation">
                <> {/* Show In View 360 */}
                    <MCButton title="Esc" classes={showInView360} onClick={actions.view360.off} />
                </>

                <>  {/* Hidden In View 360 */}
                    <MCButton title="View 360" classes={hiddenInView360} onClick={actions.view360.on} />
                    <MCInput value={worldName} name="world-name" classes={`world-name ${hiddenInView360}`}  onFocusOut={actions.updateWorldName} placeholder="World Name" />
                    <MCButton title="Save" classes={hiddenInView360}  onClick={actions.save} />
                    <MCButton title="Save and Quit" classes={hiddenInView360}  onClick={actions.goToMainMenu} />
                </>
            </nav>
        );
    }

}