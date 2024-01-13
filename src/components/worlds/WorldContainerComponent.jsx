import React, { Component } from 'react';
import config from '../../config';
import WorldComponent from './WorldComponent';
import listeners from '../../listeners';
import Navigation from '../menu/Navigation';
import Footer from '../menu/Footer';
import Inventory from '../guis/inventory/Inventory';

const { WORLD_CONTAINER_ID, WORLD_INITIAL_ROTATION_Y } = config;

export default class WorldContainerComponent extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            clicking: false,
            worldRotateY: WORLD_INITIAL_ROTATION_Y,
            activeSlotBlock: null,
            worldName: "Ancient Castle",
            viewmode: false,
            inventoryOpened: false,
            selectSlotsBlock: {
                "slot-1": null,
                "slot-2": null,
                "slot-3": null,
                "slot-4": null,
                "slot-5": null,
                "slot-6": null,
                "slot-7": null,
                "slot-8": null,
                "slot-9": null
            }
        }
        
        this.changeActiveBlock = this.changeActiveBlock.bind(this);
        this.changeSelectSlotsBlock = this.changeSelectSlotsBlock.bind(this);
        this.updateWorldName = this.updateWorldName.bind(this);
        this.view360On = this.view360On.bind(this);
        this.view360Off = this.view360Off.bind(this);
        this.openInventory = this.openInventory.bind(this);
        this.closeInventory = this.closeInventory.bind(this);
    }

    changeActiveBlock(block) {
        this.setState({activeSlotBlock: block});
    }

    changeSelectSlotsBlock(slotid, block) {
        this.setState({selectSlotsBlock: {
            ...this.state.selectSlotsBlock,
            [`slot-${slotid}`]: block
        }});
    }

    save(event) {
        console.log("saving...");
        event.preventDefault();
    }

    goToMainMenu(event) {
        console.log("going to main menu...");
        event.preventDefault();
    }

    openInventory(event) {
        if (this.state.inventoryOpened == false) {
            this.setState({ inventoryOpened: true });
            event.preventDefault();
        }
    }

    closeInventory(event) {
        if (this.state.inventoryOpened == true) {
            this.setState({ inventoryOpened: false });
            event.preventDefault();
        }
    }

    view360On(event) {
        if(this.state.viewmode == false) {
            this.setState({ viewmode: true });
            event.preventDefault();
        }
    }

    view360Off(event) {
        if(this.state.viewmode == true) {
            this.setState({ viewmode: false });
            event.preventDefault();
        }
    }

    updateWorldName(event, newWorldName) {
        this.setState({ worldName: newWorldName });
        event.preventDefault();
    }

    componentDidMount() {
        listeners.SaveListener.subscribe("worldcontainer", this.save);
    }

    componentWillUnmount() {
        listeners.SaveListener.unsubscribe("worldcontainer");
    }

    componentDidUpdate() {
        document.title = `${this.state.worldName} | Block World`
    }

    render() {
        const mouseUp = (event) => { this.setState({clicking: false}); }

        const mouseDown = (event) => { this.setState({clicking: true}); }

        const mouseMove = (event) => {
            if (!this.state.clicking || 
                (!["world", "world-container", "footerbar-container"].includes(event.target.id)) ||
                event.movementX == 0)
                    return;
        
            this.setState((prevState) => ({
                worldRotateY: prevState.worldRotateY + event.movementX,
            }));
        }

        return (
            <div id={`${WORLD_CONTAINER_ID}`}
                onMouseUp={ mouseUp }
                onMouseDown={ mouseDown }
                onMouseMove={ mouseMove }>
                
                <Navigation worldName={this.state.worldName}
                            actions={{goToMainMenu: this.goToMainMenu,
                                      save: this.save,
                                      view360: { on: this.view360On, off: this.view360Off, value: this.state.viewmode },
                                      updateWorldName: this.updateWorldName}}>
                </Navigation>

                <WorldComponent
                    classes={`${ this.state.viewmode ? 'infinite-rotating--animation' : ''}`}
                    rotateY={this.state.worldRotateY}
                    activeSlotBlock={this.state.activeSlotBlock}
                    >
                </WorldComponent>

                <Footer slots={this.state.selectSlotsBlock}
                        actions={{changeActiveBlock: this.changeActiveBlock,
                                  openInventory: this.openInventory,
                                  view360: {value: this.state.viewmode}}}>
                </Footer>

                <Inventory actions={{changeSlot: this.changeSelectSlotsBlock, open: this.openInventory, close: this.closeInventory, opened: this.state.inventoryOpened}}></Inventory>
            </div>
        )

    }
}