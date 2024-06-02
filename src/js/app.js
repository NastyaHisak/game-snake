import { Game } from "./moduls/game.js";

class App {

    settings = {
        positionCount: 30,
        positionSize: 20
    }

    constructor() {
        const canvas = document.createElement('canvas');
        canvas.setAttribute('width', (this.settings.positionCount * this.settings.positionSize).toString());
        canvas.setAttribute('height', (this.settings.positionCount * this.settings.positionSize).toString());
        document.getElementById('container').appendChild(canvas);

        const context = canvas.getContext('2d');

        new Game(context, this.settings);

    }
}
(new App())