import WebGLRenderingContext from "./WebGLRenderingContext";
import CanvasRenderingContext2D from "./CanvasRenderingContext2D";

export default class HTMLCanvasElement {
    constructor(width, height) {
        this.width = width || 100;
        this.height = height || 100;
    }

    getContext(arg) {
        switch(arg) {
            case "2d":
                return new CanvasRenderingContext2D(this);
            case "webgl":
            case "experimental-webgl":
                return new WebGLRenderingContext(this);
        }
    }
}
