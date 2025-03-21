import React, { Component } from 'react';
import config from '../../config';
import WorldComponent from './WorldComponent';
import listeners from '../../listeners';
import Navigation from '../menu/Navigation';
import Footer from '../menu/Footer';
import Inventory from '../guis/inventory/Inventory';

const { WORLD_CONTAINER_ID, WORLD_INITIAL_ZOOM, WORLD_INITIAL_ROTATION_X, WORLD_INITIAL_ROTATION_Y } = config;

export default class WorldContainerComponent extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            clicking: false,
            pressingSpace: false,
            world: {
                name: "Ancient Castle",
                active: true,
                actionAxis: null,
                zoom: WORLD_INITIAL_ZOOM,
                rotation: {
                    x: WORLD_INITIAL_ROTATION_X,
                    y: WORLD_INITIAL_ROTATION_Y
                },
                position: {
                    top: 245,
                    left: 70
                }
            },
            blockMap: {},
            activeSlotBlock: null,
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
        
        this.addBlock = this.addBlock.bind(this);
        this.changeActiveBlock = this.changeActiveBlock.bind(this);
        this.changeSelectSlotsBlock = this.changeSelectSlotsBlock.bind(this);
        this.setZoom = this.setZoom.bind(this);
        this.save = this.save.bind(this);
        this.updateWorldName = this.updateWorldName.bind(this);
        this.view360On = this.view360On.bind(this);
        this.view360Off = this.view360Off.bind(this);
        this.openInventory = this.openInventory.bind(this);
        this.closeInventory = this.closeInventory.bind(this);
    }

    setBlockMap() {
        // TODO
    }

    addBlock(blockpos) {
        console.log(blockpos)
        console.log('logging add block worldCointainerComponent');

        this.setState((prevState) => ({
            blockMap: {...prevState.blockMap, [blockpos.position]: blockpos}
        }));
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
        console.log(this.state.blockMap)
        event.preventDefault();
    }

    goToMainMenu(event) {
        console.log("going to main menu...");
        event.preventDefault();
    }

    openInventory(event) {
        if (this.state.inventoryOpened == false) {
            this.setState(this.setState((prevState) => ({
                world: {
                    ...prevState.world,
                    active: false
                },
                inventoryOpened: true,
            })));
            event.preventDefault();
        }
    }

    closeInventory(event) {
        if (this.state.inventoryOpened == true) {
            this.setState(this.setState((prevState) => ({
                world: {
                    ...prevState.world,
                    active: true
                },
                inventoryOpened: false,
            })));
            event.preventDefault();
        }
    }

    view360On(event) {
        if(this.state.viewmode == false) {
            this.setState(this.setState((prevState) => ({
                world: {
                    ...prevState.world,
                    active: false
                },
                viewmode: true,
            })));
            event.preventDefault();
        }
    }

    view360Off(event) {
        if (this.state.viewmode == true) {
            this.setState(this.setState((prevState) => ({
                world: {
                    ...prevState.world,
                    active: true
                },
                viewmode: false,
            })));
            event.preventDefault();
        }
    }

    isActive(event) {
        return (this.state.world.active &&
                this.state.clicking &&
                (["world", "world-container", "footerbar-container"].includes(event.target.id)));
    }

    isRotationAction(event) {
        return (!this.state.pressingSpace &&
               (event.movementX != 0 || event.movementY != 0));
    }

    isMovingAction() {
        return this.state.pressingSpace;
    }

    setActionAxis(actionAxis) {
        this.setState((prevState) => ({
            world: {
                ...prevState.world,
                actionAxis
        }}));
    }

    setActionAxisByEvent(event) {
        const actionAxis = Math.abs(event.movementY) >= Math.abs(event.movementX) ? 'Y' : 'X';
        this.setActionAxis(actionAxis);
    }

    setRotationX(rotation) {
        this.setState((prevState) => ({
            world: {
                ...prevState.world,
                rotation: {
                    ...prevState.world.rotation,
                    y: prevState.world.rotation.y + rotation
                }
            }
        }));
    }

    setRotationY(rotation) {
        this.setState((prevState) => ({
            world: {
                ...prevState.world,
                rotation: {
                    ...prevState.world.rotation,
                    x: prevState.world.rotation.x + rotation,
                }
            }
        }));
    }

    setZoom(event) {
        let ammount = 0.05;

        if (event.deltaY > 0) { //Zoom Out
            ammount = -0.05;
        }
        
        this.setState((prevState) => ({
            world: {
                ...prevState.world,
                zoom: prevState.world.zoom + ammount
            }
        }));
    }

    setRotation(event) {
        if (this.state.world.actionAxis == 'X')
            return this.setRotationX(event.movementX);
        
        if (this.state.world.actionAxis == 'Y')
            return this.setRotationY((event.movementY * -1.25));
    }

    setMovingX(offset) {
        this.setState((prevState) => ({
            world: {
                ...prevState.world,
                position: {
                    ...prevState.world.position,
                    left: prevState.world.position.left + offset,
                }
            }
        }));
    }

    setMovingY(offset) {
        this.setState((prevState) => ({
            world: {
                ...prevState.world,
                position: {
                    ...prevState.world.position,
                    top: prevState.world.position.top + offset,
                }
            }
        }));
    }

    setMoving(event) {
        if (this.state.world.actionAxis == 'X')
            return this.setMovingX(event.movementX);
        
        if (this.state.world.actionAxis == 'Y')
            return this.setMovingY((event.movementY));
    }

    updateWorldName(event, newWorldName) {
        this.setState(this.setState((prevState) => ({
            world: {
                ...prevState.world,
                name: newWorldName
            }
        })));
        event.preventDefault();
    }

    componentDidMount() {
        listeners.CtrlWheelListener.subscribe("worldcontainer-zoom", this.setZoom);
        listeners.EKeyListener.subscribe("worldcontainer-open-inventory", this.openInventory);
        listeners.EKeyListener.subscribe("worldcontainer-close-inventory", this.closeInventory);
        listeners.SaveListener.subscribe("worldcontainer-save", this.save);
        listeners.SpacePressingListener.subscribe("worldcontainer-space", {
            fnKeyDown: () => this.setState({pressingSpace: true}),
            fnKeyUp: () => this.setState({pressingSpace: false})
        });
    }

    componentWillUnmount() {
        listeners.CtrlWheelListener.unsubscribe("worldcontainer-zoom");
        listeners.EKeyListener.unsubscribe("worldcontainer-open-inventory");
        listeners.EKeyListener.unsubscribe("worldcontainer-close-inventory");
        listeners.SaveListener.unsubscribe("worldcontainer-save");
        listeners.SpacePressingListener.unsubscribe("worldcontainer-space");
    }

    componentDidUpdate() {
        document.title = `${this.state.world.name} | Blocky World`
    }

    render() {
        const mouseUp = () => {
            this.setState({clicking: false});
            this.setActionAxis(null);
        }

        const mouseDown = () => { this.setState({clicking: true}); }

        const mouseMove = (event) => {
            if (!this.isActive(event)) return;

            this.setActionAxisByEvent(event);

            if (this.isRotationAction(event))
                return this.setRotation(event);

            if (this.isMovingAction(event))
                return this.setMoving(event);
        }

        return (
            <div id={`${WORLD_CONTAINER_ID}`}
                 className={`${this.state.world.active && this.state.pressingSpace ?
                                (this.state.clicking ? 'cursor-grabbing' : 'cursor-grab') : ''}`
                }
                onMouseUp={ mouseUp }
                onMouseDown={ mouseDown }
                onMouseMove={ mouseMove }>
                
                <Navigation worldName={this.state.world.name}
                            actions={{goToMainMenu: this.goToMainMenu,
                                      save: this.save,
                                      view360: { on: this.view360On, off: this.view360Off, value: this.state.viewmode },
                                      updateWorldName: this.updateWorldName}}>
                </Navigation>

                <WorldComponent
                    classes={
                        `${this.state.viewmode ? 'infinite-rotating--animation' : ''}`
                    }

                    zoom={this.state.world.zoom}
                    rotation={this.state.world.rotation}
                    position={this.state.world.position}
                    activeSlotBlock={this.state.activeSlotBlock}
                    actions={{addBlock: this.addBlock}}>
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