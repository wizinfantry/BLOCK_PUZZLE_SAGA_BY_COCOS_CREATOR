import { _decorator, Component, game, Node, SpriteFrame, WebView } from 'cc';
import { ADDGAME, MYGAME, TGameClass } from './utils';
import { TPreloadSceneClass } from './preloadSceneClass';
import { TGameDataClass } from './gameDataClass';
import { TMainSceneClass } from './mainSceneClass';
const { ccclass, property } = _decorator;

@ccclass('rootScene')
export class rootScene extends Component {
    @property(WebView)
    public webView: WebView;
    webGame: TWebGameClass;
    start() {
        this.webGame = new TWebGameClass(this.node, this.webView);
        this.webView.setJavascriptInterfaceScheme(this.webGame.gameData.WEBVIEW_SCHEME);
        //@ts-ignore
        this.webView.setOnJSCallback((target, url) => {
            console.log(url);
            console.log('setOnJSCallback url :', url)
            let str = url.replace(this.webGame.gameData.WEBVIEW_SCHEME + '://', ''); // str === 'a=1&b=2'
            str = atob(str);
            console.log('setOnJSCallback str :', str);
            let jsonStr;
            let command;
            let data;
            try {
                jsonStr = JSON.parse(str);
                command = jsonStr.command;
                data = JSON.parse(jsonStr.data);
                this.webGame.mainScene.onWebViewCommand(command, data);
            } catch (error) {
                console.log(error.toString());
            }
        });
    }

    update(deltaTime: number) {
        try {
            this.webGame.loop(deltaTime);
        } catch (error) {
            console.log(error);
            game.pause();
        }
    }
}


export class TWebGameClass extends TGameClass {
    gameImageLists: Map<string, SpriteFrame>
    gameData: TGameDataClass;
    preloadScene: TPreloadSceneClass;
    mainScene: TMainSceneClass;
    webView: WebView;
    constructor(root: Node, webView: WebView) {
        super(root);
        this.webView = webView;
        this.webView.node.removeFromParent();
        this.gameImageLists = new Map();
        this.gameData = new TGameDataClass(this);

        this.preloadScene = new TPreloadSceneClass(this.root, this.sceneManager, this);
        this.mainScene = new TMainSceneClass(this.root, this.sceneManager, this);
        this.sceneManager.addScene('PRELOAD', this.preloadScene);
        this.sceneManager.addScene('MAIN_SCENE', this.mainScene);
        this.sceneManager.setCurrentScene('PRELOAD');
    }

    loop(deltaTime: number) {
        this.sceneManager.loop(deltaTime);
    }
}