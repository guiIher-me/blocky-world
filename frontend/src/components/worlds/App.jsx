import ReactDOM from 'react-dom/client';
import React from 'react';

import WorldBlockMap from './WorldBlockMap';
import config from '../../config';
import WorldContainerComponent from './WorldContainerComponent';

export default class App {

    static async render(blockpositions) {
        await WorldBlockMap.setBlockMap(blockpositions);
        App.renderWorld();
    }

    static renderWorld() {
        const { APP_ID } = config;

        const app_container = document.getElementById(APP_ID);
        const world_container = <WorldContainerComponent />       
        ReactDOM.createRoot(app_container).render(world_container);
    }
}