import { Component, Node, Prefab } from "cc";

export interface MYGAME {
    gameName: string;
    gameRate: string;
    gameUrl: string;
    screen: number;
    vote: boolean;
}

export interface ADDGAME {
    gameName: string;
    gameRate: string;
    gameUrl: string;
    screen: number;
    add: boolean;
}

export enum PRELOAD_STATUS {
    'NONE',
    'INIT',
    'INIT_STAND',
    'PRELOAD',
    'PRELOAD_STAND',
    'PRELOAD_FINISH'
}

export enum MAIN_STATUS {
    'NONE',
    'INIT',
    'INIT_STAND',
    'PRELOAD',
    'PRELOAD_STAND',
    'PRELOAD_FINISH',
    'MAIN_RUN',
    'WEBVIEW_RUN'
}

// ====================================================================================================================================

export class TGameClass {
    root: Node;
    sceneManager: TSceneManager;
    constructor(root: Node) {
        this.root = root;
        this.sceneManager = new TSceneManager();
    }
}


export class TSceneClass {
    root: Node;
    scene: Node;
    sceneManager: TSceneManager;
    active: boolean;
    constructor(root: Node, sceneManager: TSceneManager) {
        this.root = root;
        this.sceneManager = sceneManager;
        this.active = false;
    }

    startScene() {}
    restartScene() {}
    endScene() {}
    loop(deltaTime: number) {
        if (!this.active) return;
        this.animate(deltaTime);
        this.update(deltaTime);
        this.draw(deltaTime);
    }
    update(deltaTime: number) {}
    animate(deltaTime: number) {}
    draw(deltaTime: number) {}
}

export class TSceneManager {
    sceneLists: Map<string, TSceneClass>;
    currentScene: TSceneClass;
    constructor() {
        this.sceneLists = new Map();
    }

    addScene(sceneName: string, scene: TSceneClass) {
        this.sceneLists.set(sceneName, scene);
    }

    setCurrentScene(sceneName: string) {
        this.currentScene = this.sceneLists.get(sceneName);
        this.currentScene.startScene();
        this.currentScene.active = true;
        console.log('setCurrentScene:', this.currentScene);
    }

    changeCurrentScene(sceneName: string) {
        this.currentScene.active = false;
        this.currentScene.scene.removeFromParent();
        this.setCurrentScene(sceneName);
    }

    loop(deltaTime: number) {
        this.currentScene.loop(deltaTime);
    }
}

export function msToTime(duration): string {
    //@ts-ignore
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    //@ts-ignore
    hours = (hours < 10) ? "0" + hours : hours;
    //@ts-ignore
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    //@ts-ignore
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    return hours + ":" + minutes + ":" + seconds;
    // return minutes + ":" + seconds;
}
// ====================================================================================================================================
