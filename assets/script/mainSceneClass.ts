import { Button, Color, EventKeyboard, Input, KeyCode, Label, Node, Prefab, ScrollView, Sprite, UIOpacity, Vec2, Vec3, WebView, Widget, _decorator, input, instantiate, js, native, resources, sys } from "cc";
import { TWebGameClass } from "./rootScene";
import { ADDGAME, MAIN_STATUS, MYGAME, TSceneClass, TSceneManager, msToTime } from "./utils";
import { TGameDataClass } from "./gameDataClass";

const { ccclass, property } = _decorator;
@ccclass("mainSceneClass")

export class TMainSceneClass extends TSceneClass {
    mainScenePrefab: Prefab;

    webViewScenePrefab: Prefab;
    gameWebView: Node;

    gameItemPrefab: Prefab;
    addGameItemPrefab: Prefab;
    addCoinItemPrefab: Prefab;
    dailyPromotionPrefab: Prefab;
    gameRemovePopupPrefab: Prefab;
    messageBoxPrefab: Prefab;
    gameAddPopupPrefab: Prefab;
    gamePlayPopupPrefab: Prefab;
    watchVideoPopupPrefab: Prefab;

    status: MAIN_STATUS;
    owner: TWebGameClass;
    gameData: TGameDataClass;
    resourceCount: number;
    resourceCountMax: number;

    lblGameTitle: Label;
    lblGameCoin: Label;

    exitGameBtn: Button;
    myGameBtn: Button;
    addGameBtn: Button;
    // addCoinBtn: Button;

    myGameContent: Node;
    addGameContent: Node;
    addCoinContent: Node;

    myGameNode: Node;
    myGameScrollView: ScrollView;
    scrollOffset = new Vec2();

    addGameNode: Node;
    addCoinNode: Node;

    btnAddCoin1: Button;
    lblAddCoinTime1: Label;
    addCoinSize1 = 1;
    watchVideoStatus1 = false;

    btnAddCoin2: Button;
    lblAddCoinTime2: Label;
    addCoinSize2 = 2;
    watchVideoStatus2 = false;
    
    btnAddCoin3: Button;
    lblAddCoinTime3: Label;
    addCoinSize3 = 5;
    watchVideoStatus3 = false;

    addDailyPromotionCoinSize = 5;
    addGameCoinSize = 0;
    playGameCoinSize = 1;
    currentGameGame = '';

    // ============================================================================================================================
    // HammerOh 2023.06.28
    btnAddCoin4: Button;
    lblAddCoinTime4: Label;
    addCoinSize4 = 1;
    watchVideoStatus4 = false;

    btnAddCoin5: Button;
    lblAddCoinTime5: Label;
    addCoinSize5 = 2;
    watchVideoStatus5 = false;

    btnAddCoin6: Button;
    lblAddCoinTime6: Label;
    addCoinSize6 = 5;
    watchVideoStatus6 = false;
    // ============================================================================================================================

    gameTitle = 'BLOCK PUZZLE SAGA';

    constructor(root: Node, sceneManager: TSceneManager, owner: TWebGameClass) {
        super(root, sceneManager);
        this.owner = owner;
        this.gameData = this.owner.gameData;
        this.status = MAIN_STATUS.NONE;
        this.resourceCount = 0;
        this.resourceCountMax = 11;



        this.initBridgeFunction()

        // ============================================================================================================================
        // HammerOh 2023.06.28
        this.initAdmob();
        this.initVungle();
        // ============================================================================================================================
    }

    startScene(): void {
        if (this.status == MAIN_STATUS.MAIN_RUN) {
        } else {
            this.preload();
            this.status = MAIN_STATUS.PRELOAD_STAND;
        }
    }

    preload() {
        resources.load('prefab/scene/fabMainScene', Prefab, (err: Error, prefab: Prefab) => {
            if (err) {
                console.log(err);
            } else {
                this.mainScenePrefab = prefab;
                this.resourceCount++;
            }
        });

        resources.load('prefab/scene/fabWebViewScene', Prefab, (err: Error, prefab: Prefab) => {
            if (err) {
                console.log(err);
            } else {
                this.webViewScenePrefab = prefab;
                this.resourceCount++;
            }
        });

        resources.load('prefab/item/fabAddGameItem', Prefab, (err: Error, prefab: Prefab) => {
            if (err) {
                console.log(err);
            } else {
                this.addGameItemPrefab = prefab;
                this.resourceCount++;
            }
        });

        resources.load('prefab/item/fabGameItem', Prefab, (err: Error, prefab: Prefab) => {
            if (err) {
                console.log(err);
            } else {
                this.gameItemPrefab = prefab;
                this.resourceCount++;
            }
        });

        resources.load('prefab/item/fabCoinItem', Prefab, (err: Error, prefab: Prefab) => {
            if (err) {
                console.log(err);
            } else {
                this.addCoinItemPrefab = prefab;
                this.resourceCount++;
            }
        });

        resources.load('prefab/popup/fabDailyPromotion', Prefab, (err: Error, prefab: Prefab) => {
            if (err) {
                console.log(err);
            } else {
                this.dailyPromotionPrefab = prefab;
                this.resourceCount++;
            }
        });

        resources.load('prefab/popup/fabGameRemove', Prefab, (err: Error, prefab: Prefab) => {
            if (err) {
                console.log(err);
            } else {
                this.gameRemovePopupPrefab = prefab;
                this.resourceCount++;
            }
        });

        resources.load('prefab/popup/fabMessageBox', Prefab, (err: Error, prefab: Prefab) => {
            if (err) {
                console.log(err);
            } else {
                this.messageBoxPrefab = prefab;
                this.resourceCount++;
            }
        });

        resources.load('prefab/popup/fabGameAdd', Prefab, (err: Error, prefab: Prefab) => {
            if (err) {
                console.log(err);
            } else {
                this.gameAddPopupPrefab = prefab;
                this.resourceCount++;
            }
        });

        resources.load('prefab/popup/fabGamePlay', Prefab, (err: Error, prefab: Prefab) => {
            if (err) {
                console.log(err);
            } else {
                this.gamePlayPopupPrefab = prefab;
                this.resourceCount++;
            }
        });

        resources.load('prefab/popup/fabWatchVideo', Prefab, (err: Error, prefab: Prefab) => {
            if (err) {
                console.log(err);
            } else {
                this.watchVideoPopupPrefab = prefab;
                this.resourceCount++;
            }
        });
    }

    initMainScene() {
        this.scene = instantiate(this.mainScenePrefab);
        // Game Title Update
        // should_hide_in_hierarchy/fabMainScene/mainScene/gameNode/topNode/lblGameTitle/Label
        this.lblGameTitle = this.scene.getChildByPath('mainScene/gameNode/topNode/lblGameTitle/Label').getComponent(Label);
        this.lblGameTitle.string = this.gameTitle;
        // User Coin Update
        // should_hide_in_hierarchy/fabMainScene/mainScene/gameNode/topNode/lblGameCoin/Label
        this.lblGameCoin = this.scene.getChildByPath('mainScene/gameNode/topNode/lblGameCoin/Label').getComponent(Label);
        this.updateGameCoin();
        // Exit Button Update
        // should_hide_in_hierarchy/fabMainScene/mainScene/gameNode/topNode/exitGameBtn/Button
        this.exitGameBtn = this.scene.getChildByPath('mainScene/gameNode/topNode/exitGameBtn/Button').getComponent(Button);
        this.exitGameBtn.name = 'GameExitBtn';
        this.exitGameBtn.node.on(Button.EventType.CLICK, this.onGameExitBtnClick, this);
        // MyGame Button Update
        // should_hide_in_hierarchy/fabMainScene/mainScene/gameNode/bottpmNode/myGameBtn/Button
        this.myGameBtn = this.scene.getChildByPath('mainScene/gameNode/bottpmNode/myGameBtn/Button').getComponent(Button);
        this.myGameBtn.name = 'MyGameBtn';
        this.myGameBtn.node.on(Button.EventType.CLICK, this.onMyGameBtnClick, this);
        // AddGame Button Update
        this.addGameBtn = this.scene.getChildByPath('mainScene/gameNode/bottpmNode/addGameBtn/Button').getComponent(Button);
        this.addGameBtn.name = 'AddGameBtn';
        this.addGameBtn.node.on(Button.EventType.CLICK, this.onAddGameBtnClick, this);
        // AddCoin Button Update
        // should_hide_in_hierarchy/fabMainScene/mainScene/gameNode/bottpmNode/addCoinBtn/Button
        let addCoinBtn = this.scene.getChildByPath('mainScene/gameNode/bottpmNode/addCoinBtn/Button').getComponent(Button);
        addCoinBtn.name = 'AddCoinBtn';
        addCoinBtn.node.on(Button.EventType.CLICK, this.onAddCoinBtnClick, this);


        // Add MyGameItem
        // should_hide_in_hierarchy/fabMainScene/mainScene/gameNode/mainNode/myGameNode/ScrollView/view/myGameContent
        this.myGameContent = this.scene.getChildByPath('mainScene/gameNode/mainNode/myGameNode/ScrollView/view/myGameContent');
        this.initMyGameItem();

        // Add AddGameItem
        // should_hide_in_hierarchy/fabMainScene/mainScene/gameNode/mainNode/addGameNode/ScrollView/view/addGameContent
        this.addGameContent = this.scene.getChildByPath('mainScene/gameNode/mainNode/addGameNode/ScrollView/view/addGameContent');
        this.initAddGameItem();

        // Add AddCoinItem
        // should_hide_in_hierarchy/fabMainScene/mainScene/gameNode/mainNode/addCoinNode/ScrollView/view/addCoinContent
        this.addCoinContent = this.scene.getChildByPath('mainScene/gameNode/mainNode/addCoinNode/ScrollView/view/addCoinContent');
        this.initAddCoinItem();

        // should_hide_in_hierarchy/fabMainScene/mainScene/gameNode/mainNode/myGameNode
        this.myGameNode = this.scene.getChildByPath('mainScene/gameNode/mainNode/myGameNode');
        // should_hide_in_hierarchy/fabMainScene/mainScene/gameNode/mainNode/myGameNode/ScrollView
        this.myGameScrollView = this.scene.getChildByPath('mainScene/gameNode/mainNode/myGameNode/ScrollView').getComponent(ScrollView);
        


        // should_hide_in_hierarchy/fabMainScene/mainScene/gameNode/mainNode/addGameNode
        this.addGameNode = this.scene.getChildByPath('mainScene/gameNode/mainNode/addGameNode');
        // should_hide_in_hierarchy/fabMainScene/mainScene/gameNode/mainNode/addCoinNode
        this.addCoinNode = this.scene.getChildByPath('mainScene/gameNode/mainNode/addCoinNode');

        this.myGameNode.active = true;
        this.addGameNode.active = false;
        this.addCoinNode.active = false;


        this.scene.addComponent(UIOpacity);

        this.root.addChild(this.scene);
    }

    initMyGameItem() {
        this.owner.gameData.myGameList.forEach((myGame: MYGAME, index: number) => {
            this.addMyGameItem(myGame);
            // let gameItem = instantiate(this.gameItemPrefab);
            // // gameImageSprite  게임 이미지
            // // should_hide_in_hierarchy/fabGameItem/mainNode/gameInfoNode1/gameImage/gameImageSprite
            // let gameImageSprite = gameItem.getChildByPath('mainNode/gameInfoNode1/gameImage/gameImageSprite').getComponent(Sprite);
            // gameImageSprite.spriteFrame = this.owner.gameImageLists.get(myGame.gameName);
            // let gameImageSpriteBtn = gameImageSprite.getComponent(Button);
            // gameImageSpriteBtn.name = myGame.gameName;
            // gameImageSpriteBtn.node.on(Button.EventType.CLICK, this.onGamePlayBtnClick, this);
            // // lblGameName      게임 네임
            // // should_hide_in_hierarchy/fabGameItem/mainNode/gameInfoNode1/gameInfo/lblGameName/Label
            // let lblGameName = gameItem.getChildByPath('mainNode/gameInfoNode1/gameInfo/lblGameName/Label').getComponent(Label);
            // lblGameName.name = myGame.gameName;
            // lblGameName.string = myGame.gameName.replace(/_/g, ' ');
            // // lblGameRate      게임 레이트         =>  임시 삭제
            // // should_hide_in_hierarchy/fabGameItem/mainNode/gameInfoNode1/gameInfo/lblGameRate/Label
            // let lblGameRate = gameItem.getChildByPath('mainNode/gameInfoNode1/gameInfo/lblGameRate/Label').getComponent(Label);
            // lblGameRate.node.active = false;
            // // btnGameVoteRate  게임 레이트 버턴    =>  임시 삭제
            // // should_hide_in_hierarchy/fabGameItem/mainNode/gameInfoNode1/gameInfo/btnGameVoteRate/Button
            // let btnGameVoteRate = gameItem.getChildByPath('mainNode/gameInfoNode1/gameInfo/btnGameVoteRate/Button').getComponent(Button);
            // btnGameVoteRate.node.active = false;
            // // btnGamePlay      게임 플레이
            // // should_hide_in_hierarchy/fabGameItem/mainNode/gameInfoNode1/gameInfo/btnGamePlay/Button
            // let btnGamePlay = gameItem.getChildByPath('mainNode/gameInfoNode1/gameInfo/btnGamePlay/Button').getComponent(Button);
            // btnGamePlay.name = myGame.gameName;
            // btnGamePlay.node.on(Button.EventType.CLICK, this.onGamePlayBtnClick, this);
            // // btnGameRemove    게임 삭제
            // // should_hide_in_hierarchy/fabGameItem/mainNode/gameInfoNode1/gameInfo/btnGameRemove/Button
            // let btnGameRemove = gameItem.getChildByPath('mainNode/gameInfoNode1/gameInfo/btnGameRemove/Button').getComponent(Button);
            // btnGameRemove.name = myGame.gameName;
            // btnGameRemove.node.on(Button.EventType.CLICK, this.onGameRemoveBtnClick, this);

            // this.myGameContent.addChild(gameItem);
        })
    }

    addMyGameItem(myGame: MYGAME) {
        let gameItem = instantiate(this.gameItemPrefab);
        // gameImageSprite  게임 이미지
        // should_hide_in_hierarchy/fabGameItem/mainNode/gameInfoNode1/gameImage/gameImageSprite
        let gameImageSprite = gameItem.getChildByPath('mainNode/gameInfoNode1/gameImage/gameImageSprite').getComponent(Sprite);
        gameImageSprite.spriteFrame = this.owner.gameImageLists.get(myGame.gameName);
        let gameImageSpriteBtn = gameImageSprite.getComponent(Button);
        gameImageSpriteBtn.name = myGame.gameName;
        gameImageSpriteBtn.node.on(Button.EventType.CLICK, this.onGamePlayBtnClick, this);
        // lblGameName      게임 네임
        // should_hide_in_hierarchy/fabGameItem/mainNode/gameInfoNode1/gameInfo/lblGameName/Label
        let lblGameName = gameItem.getChildByPath('mainNode/gameInfoNode1/gameInfo/lblGameName/Label').getComponent(Label);
        lblGameName.name = myGame.gameName;
        lblGameName.string = myGame.gameName.replace(/_/g, ' ');

        // // lblGameRate      게임 레이트         =>  임시 삭제
        // // should_hide_in_hierarchy/fabGameItem/mainNode/gameInfoNode1/gameInfo/lblGameRate/Label
        // let lblGameRate = gameItem.getChildByPath('mainNode/gameInfoNode1/gameInfo/lblGameRate/Label').getComponent(Label);
        // lblGameRate.node.active = false;
        // // btnGameVoteRate  게임 레이트 버턴    =>  임시 삭제
        // // should_hide_in_hierarchy/fabGameItem/mainNode/gameInfoNode1/gameInfo/btnGameVoteRate/Button
        // let btnGameVoteRate = gameItem.getChildByPath('mainNode/gameInfoNode1/gameInfo/btnGameVoteRate/Button').getComponent(Button);
        // btnGameVoteRate.node.active = false;

        if (this.owner.gameData.isExistGameListRankByGameName(myGame.gameName)) {
            // btnGameRank      게임 랭크
            // should_hide_in_hierarchy/fabGameItem/mainNode/gameInfoNode1/gameInfo/btnGameRank/Button
            let btnGameRank = gameItem.getChildByPath('mainNode/gameInfoNode1/gameInfo/btnGameRank/Button').getComponent(Button);
            btnGameRank.node.active = true;
            btnGameRank.name = myGame.gameName;
            btnGameRank.node.on(Button.EventType.CLICK, () => {
                if (sys.os == sys.OS.ANDROID) {
                    native.reflection.callStaticMethod("com/cocos/game/AppActivity", "showRank", "(Ljava/lang/String;)V", myGame.gameName);
                }
            }, this);
        }


        // btnGamePlay      게임 플레이
        // should_hide_in_hierarchy/fabGameItem/mainNode/gameInfoNode1/gameInfo/btnGamePlay/Button
        let btnGamePlay = gameItem.getChildByPath('mainNode/gameInfoNode1/gameInfo/btnGamePlay/Button').getComponent(Button);
        btnGamePlay.name = myGame.gameName;
        btnGamePlay.node.on(Button.EventType.CLICK, this.onGamePlayBtnClick, this);
        // btnGameRemove    게임 삭제
        // should_hide_in_hierarchy/fabGameItem/mainNode/gameInfoNode1/gameInfo/btnGameRemove/Button
        let btnGameRemove = gameItem.getChildByPath('mainNode/gameInfoNode1/gameInfo/btnGameRemove/Button').getComponent(Button);
        btnGameRemove.name = myGame.gameName;
        btnGameRemove.node.on(Button.EventType.CLICK, this.onGameRemoveBtnClick, this);

        this.myGameContent.addChild(gameItem);
    }


    initAddGameItem() {
        this.owner.gameData.addGameList.forEach((addGame: ADDGAME, index: number) => {
            let addGameItem = instantiate(this.addGameItemPrefab);
            // mainNode
            let mainNodeOpacity = addGameItem.getChildByPath('mainNode').getComponent(UIOpacity);
            mainNodeOpacity.name = addGame.gameName;
            if (addGame.add) {
                mainNodeOpacity.opacity = 100;
            } else {
                mainNodeOpacity.opacity = 255;
            }
            // gameImageSprite
            // should_hide_in_hierarchy/fabAddGameItem/mainNode/addGameInfoNode/gameImage/gameImageSprite
            let gameImageSprite = addGameItem.getChildByPath('mainNode/addGameInfoNode/gameImage/gameImageSprite').getComponent(Sprite);
            gameImageSprite.spriteFrame = this.owner.gameImageLists.get(addGame.gameName);
            // lblGameName
            // should_hide_in_hierarchy/fabAddGameItem/mainNode/addGameInfoNode/gameInfo/lblGameName/Label
            let lblGameName = addGameItem.getChildByPath('mainNode/addGameInfoNode/gameInfo/lblGameName/Label').getComponent(Label);
            lblGameName.string = addGame.gameName.replace(/_/g, ' ');
            // btnAddGame
            // should_hide_in_hierarchy/fabAddGameItem/mainNode/addGameInfoNode/gameInfo/btnAddGame/Button
            let btnAddGame = addGameItem.getChildByPath('mainNode/addGameInfoNode/gameInfo/btnAddGame/Button').getComponent(Button);
            btnAddGame.name = addGame.gameName;
            btnAddGame.node.on(Button.EventType.CLICK, this.onGameAddBtnClick, this);

            this.addGameContent.addChild(addGameItem);
        })
    }

    initAddCoinItem() {
        let addCoinItem1 = instantiate(this.addCoinItemPrefab);
        this.btnAddCoin1 = addCoinItem1.getChildByPath('mainNode/coinInfoNode/coinInfo/btnAddCoin/Button').getComponent(Button);
        this.btnAddCoin1.name = 'COIN1';
        let lblBtnAddCoin1 = addCoinItem1.getChildByPath('mainNode/coinInfoNode/coinInfo/btnAddCoin/Button/Label').getComponent(Label);
        lblBtnAddCoin1.string = 'COIN 1';
        this.lblAddCoinTime1 = addCoinItem1.getChildByPath('mainNode/coinInfoNode/coinInfo/lblAddCoinTime/Label').getComponent(Label);
        this.addCoinContent.addChild(addCoinItem1);

        let addCoinItem2 = instantiate(this.addCoinItemPrefab);
        this.btnAddCoin2 = addCoinItem2.getChildByPath('mainNode/coinInfoNode/coinInfo/btnAddCoin/Button').getComponent(Button);
        this.btnAddCoin2.name = 'COIN2';
        let lblBtnAddCoin2 = addCoinItem2.getChildByPath('mainNode/coinInfoNode/coinInfo/btnAddCoin/Button/Label').getComponent(Label);
        lblBtnAddCoin2.string = 'COIN 2';
        this.lblAddCoinTime2 = addCoinItem2.getChildByPath('mainNode/coinInfoNode/coinInfo/lblAddCoinTime/Label').getComponent(Label);
        this.addCoinContent.addChild(addCoinItem2);

        let addCoinItem3 = instantiate(this.addCoinItemPrefab);
        this.btnAddCoin3 = addCoinItem3.getChildByPath('mainNode/coinInfoNode/coinInfo/btnAddCoin/Button').getComponent(Button);
        this.btnAddCoin3.name = 'COIN3';
        let lblBtnAddCoin3 = addCoinItem3.getChildByPath('mainNode/coinInfoNode/coinInfo/btnAddCoin/Button/Label').getComponent(Label);
        lblBtnAddCoin3.string = 'COIN 3';
        this.lblAddCoinTime3 = addCoinItem3.getChildByPath('mainNode/coinInfoNode/coinInfo/lblAddCoinTime/Label').getComponent(Label);
        this.addCoinContent.addChild(addCoinItem3);

        // ============================================================================================================================
        // HammerOh 2023.06.28
        let addCoinItem4 = instantiate(this.addCoinItemPrefab);
        this.btnAddCoin4 = addCoinItem4.getChildByPath('mainNode/coinInfoNode/coinInfo/btnAddCoin/Button').getComponent(Button);
        this.btnAddCoin4.name = 'COIN4';
        let lblBtnAddCoin4 = addCoinItem4.getChildByPath('mainNode/coinInfoNode/coinInfo/btnAddCoin/Button/Label').getComponent(Label);
        lblBtnAddCoin4.string = 'COIN 4';
        this.lblAddCoinTime4 = addCoinItem4.getChildByPath('mainNode/coinInfoNode/coinInfo/lblAddCoinTime/Label').getComponent(Label);
        this.addCoinContent.addChild(addCoinItem4);

        let addCoinItem5 = instantiate(this.addCoinItemPrefab);
        this.btnAddCoin5 = addCoinItem5.getChildByPath('mainNode/coinInfoNode/coinInfo/btnAddCoin/Button').getComponent(Button);
        this.btnAddCoin5.name = 'COIN5';
        let lblBtnAddCoin5 = addCoinItem5.getChildByPath('mainNode/coinInfoNode/coinInfo/btnAddCoin/Button/Label').getComponent(Label);
        lblBtnAddCoin5.string = 'COIN 5';
        this.lblAddCoinTime5 = addCoinItem5.getChildByPath('mainNode/coinInfoNode/coinInfo/lblAddCoinTime/Label').getComponent(Label);
        this.addCoinContent.addChild(addCoinItem5);

        let addCoinItem6 = instantiate(this.addCoinItemPrefab);
        this.btnAddCoin6 = addCoinItem6.getChildByPath('mainNode/coinInfoNode/coinInfo/btnAddCoin/Button').getComponent(Button);
        this.btnAddCoin6.name = 'COIN6';
        let lblBtnAddCoin6 = addCoinItem6.getChildByPath('mainNode/coinInfoNode/coinInfo/btnAddCoin/Button/Label').getComponent(Label);
        lblBtnAddCoin6.string = 'COIN 6';
        this.lblAddCoinTime6 = addCoinItem6.getChildByPath('mainNode/coinInfoNode/coinInfo/lblAddCoinTime/Label').getComponent(Label);
        this.addCoinContent.addChild(addCoinItem6);
        
        this.btnAddCoin4.node.on(Button.EventType.CLICK, this.onWatchVideoBtnClick, this);
        this.btnAddCoin5.node.on(Button.EventType.CLICK, this.onWatchVideoBtnClick, this);
        this.btnAddCoin6.node.on(Button.EventType.CLICK, this.onWatchVideoBtnClick, this);
        // ============================================================================================================================

        this.btnAddCoin1.node.on(Button.EventType.CLICK, this.onWatchVideoBtnClick, this);
        this.btnAddCoin2.node.on(Button.EventType.CLICK, this.onWatchVideoBtnClick, this);
        this.btnAddCoin3.node.on(Button.EventType.CLICK, this.onWatchVideoBtnClick, this);
    }

    initMyGameListScrollView() {
        let _scrollOffset = localStorage.getItem('myGameListOffset');
        if (_scrollOffset == null) return;
        _scrollOffset = JSON.parse(_scrollOffset);
        // @ts-ignore
        this.scrollOffset.set(_scrollOffset.x, _scrollOffset.y);
        console.log(this.scrollOffset);
        setTimeout(()=>{
            this.myGameScrollView.scrollToOffset(new Vec2(Math.abs(this.scrollOffset.x), 0), 0.1, true);
        }, 1000)
    }

    setMyGameListScrollView() {
        this.scrollOffset = this.myGameScrollView.getScrollOffset();
        let _scrollOffset = {
            x: this.scrollOffset.x,
            y: this.scrollOffset.y
        }
        localStorage.setItem('myGameListOffset', JSON.stringify(_scrollOffset));
    }

    updateMyGameListScrollView() {
        console.log('updateMyGameListScrollView:', this.scrollOffset.x);
        this.myGameScrollView.scrollToOffset(new Vec2(Math.abs(this.scrollOffset.x), 0), 0.1, true);
    }

    // ============================================================================================================================
    initWebView() {
        this.gameWebView = instantiate(this.webViewScenePrefab);

        // should_hide_in_hierarchy/fabWebViewScene/webViewNode
        let webViewNode = this.gameWebView.getChildByPath('webViewNode');
        webViewNode.addChild(this.owner.webView.node);
        let widget = this.owner.webView.getComponent(Widget);
        if (sys.os == sys.OS.ANDROID) {
            widget.top = 0;
        } else {
            widget.top = 0;
        }

        this.owner.webView.node.on(WebView.EventType.ERROR, this.onWebViewErrorEvent, this);
        this.owner.webView.node.on(WebView.EventType.LOADED, this.onWebViewLoadedEvent, this);
        this.owner.webView.node.on(WebView.EventType.LOADING, this.onWebViewLoadingEvent, this);
        this.owner.webView.node.on(WebView.EventType.NONE, this.onWebViewNoneEvent, this);

        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);

        this.root.addChild(this.gameWebView);
        this.gameWebView.active = false;
    }

    onWebViewErrorEvent(webView: WebView) {
        // should_hide_in_hierarchy/fabWebViewScene/webViewNode/lblWebLoading
        let label = this.gameWebView.getChildByPath('webViewNode/lblWebLoading').getComponent(Label);
        label.string = 'LOAD ERROR ...';
        webView.enabled = false;
    }
    onWebViewLoadedEvent(webView: WebView) {
        let label = this.gameWebView.getChildByPath('webViewNode/lblWebLoading').getComponent(Label);
        label.string = 'LOADED ...';
        webView.enabled = true;

    }
    onWebViewLoadingEvent(webView: WebView) {
        let label = this.gameWebView.getChildByPath('webViewNode/lblWebLoading').getComponent(Label);
        label.string = 'LOADING ...';
        webView.enabled = true;
    }
    onWebViewNoneEvent(webView: WebView) {}
    onKeyDown(event: EventKeyboard) {
        console.log(event.keyCode);
        switch(event.keyCode) {
            case KeyCode.MOBILE_BACK:
                if (sys.os == sys.OS.ANDROID) {
                    if (this.status == MAIN_STATUS.WEBVIEW_RUN) {
                        native.reflection.callStaticMethod("com/cocos/game/AppActivity", "showAlertDialog", "(Ljava/lang/String;Ljava/lang/String;)V", "NOTICE", "Are you game close?");
                    } else {
                        native.reflection.callStaticMethod("com/cocos/game/AppActivity", "showAlertDialog", "(Ljava/lang/String;Ljava/lang/String;)V", "NOTICE", "Are you game exit?");
                    }
                }
                break;
            case KeyCode.ESCAPE:
                if (sys.os == sys.OS.ANDROID) {
                } else {
                    console.log('onKeyDown KeyCode.ESCAPE:', this.status );
                    if (this.status == MAIN_STATUS.WEBVIEW_RUN) {
                        console.log('onKeyDown KeyCode.ESCAPE');
                        this.onWebViewGameExit();
                    }
                }
                break;
        }
    }
    onWebViewGameLoad() {
        this.status = MAIN_STATUS.WEBVIEW_RUN;
        this.scene.active = false;
        this.gameWebView.active = true;
        // should_hide_in_hierarchy/fabWebViewScene/webViewNode/WebView
        let webView = this.gameWebView.getChildByPath('webViewNode/WebView').getComponent(WebView);
        // webView.url = this.owner.gameData.GAME_URL + gameName;
        webView.url = this.owner.gameData.GAME_URL + this.currentGameGame;
        // webView.url = 'https://game.gameslot.win/saga/AGE_OF_EGYPT/?balance=1000000000000000000';
        if (sys.os == sys.OS.ANDROID) {
            // native.reflection.callStaticMethod("com/cocos/game/AppActivity", "admobBannerHide", "()V");
        }
    }

    onWebViewGameExit() {
        if (sys.os == sys.OS.ANDROID) {
            native.reflection.callStaticMethod("com/cocos/game/AppActivity", "showInterstitial", "()V");
        }

        this.owner.gameData.myCoin -= this.playGameCoinSize;
        this.owner.gameData.setUserInfoCoinAtLocalStorage();
        this.updateGameCoin();

        let webView = this.gameWebView.getChildByPath('webViewNode/WebView').getComponent(WebView);
        webView.url = 'about:blank';
        webView.enabled = false;
        this.scene.active = true;
        this.gameWebView.active = false;
        this.status = MAIN_STATUS.MAIN_RUN;

        if (sys.os == sys.OS.ANDROID) {
            native.reflection.callStaticMethod("com/cocos/game/AppActivity", "changeLandscape", "()V");
            setTimeout(()=>{
                // native.reflection.callStaticMethod("com/cocos/game/AppActivity", "admobBannerShow", "()V");
                this.updateMyGameListScrollView();
            },1000);
        }
    }

    onWebViewCommand(command: string, data: any) {
        console.log('onWebViewCommand:', command, data);
        switch (command) {
            case 'SHOW_LEADERBOARD':
                if (sys.os == sys.OS.ANDROID) {
                    console.log('SHOW_LEADERBOARD CALL:');
                    native.reflection.callStaticMethod("com/cocos/game/AppActivity", "showRank", "(Ljava/lang/String;)V", data.gameName);
                }
                break;
            case 'SUBMIT_SCORE':
                if (sys.os == sys.OS.ANDROID) {
                    console.log('SUBMIT_SCORE CALL:', data.gameName, data.score.toString());
                    native.reflection.callStaticMethod("com/cocos/game/AppActivity", "submitRanking", "(Ljava/lang/String;Ljava/lang/String;)V", data.gameName, data.score.toString());
                }
                break;
        }
    }
    // ============================================================================================================================

    updateGameCoin() {
        this.lblGameCoin.string = 'COIN: ' + this.owner.gameData.myCoin.toString();
    }

    // ============================================================================================================================
    // onGameExit(event: Event, data: any) {
    onGameExitBtnClick(button: Button) {
        console.log('onGameExit:', button.name);
        if (sys.os == sys.OS.ANDROID) {
            native.reflection.callStaticMethod("com/cocos/game/AppActivity", "showAlertDialog", "(Ljava/lang/String;Ljava/lang/String;)V", "NOTICE", "Are you game exit?");
        }
        // console.log('onGameExit:', data);
    }
    // ============================================================================================================================

    // ============================================================================================================================
    // 하단 페이지 선택 버턴
    onMyGameBtnClick(button: Button) {
        this.myGameNode.active = true;
        this.addGameNode.active = false;
        this.addCoinNode.active = false;
        console.log('onMyGameBtnClick:', button.name);
    }

    onAddGameBtnClick(button: Button) {
        this.myGameNode.active = false;
        this.addGameNode.active = true;
        this.addCoinNode.active = false;
        console.log('onAddGameBtnClick:', button.name);
    }

    onAddCoinBtnClick(button: Button) {
        this.myGameNode.active = false;
        this.addGameNode.active = false;
        this.addCoinNode.active = true;
        console.log('onAddCoinBtnClick:', button.name);
    }
    // ============================================================================================================================

    // ============================================================================================================================
    onGamePlayBtnClick(button: Button) {
        console.log('onGamePlayBtnClick:', button.name);
        this.setMyGameListScrollView();
        this.showGamePlayPopup(button.name);
    }

    showGamePlayPopup(gameName: string) {
        this.currentGameGame = gameName;
        if (this.owner.gameData.myCoin < this.playGameCoinSize) {
            this.showMessagePopup(this.gameTitle, 'Coin is not enough. Must be 1 or more.');
            return;
        }
        let gamePlayPopup = instantiate(this.gamePlayPopupPrefab);
        console.log(this.gamePlayPopupPrefab);
        // should_hide_in_hierarchy/fabGamePlay/gamePlayNode/bgGamePlay/playGameName/lblPlayGameName
        let lblPlayGameName = gamePlayPopup.getChildByPath('gamePlayNode/bgGamePlay/playGameName/lblPlayGameName').getComponent(Label);
        lblPlayGameName.string = gameName;
        // should_hide_in_hierarchy/fabGamePlay/gamePlayNode/bgGamePlay/playGameButtonNode/okNode/Button
        let okButton = gamePlayPopup.getChildByPath('gamePlayNode/bgGamePlay/playGameButtonNode/okNode/Button').getComponent(Button);
        okButton.node.on(Button.EventType.CLICK, () => {
            if (sys.os == sys.OS.ANDROID) {
                // native.reflection.callStaticMethod("com/cocos/game/AppActivity", "admobBannerHide", "()V");
                let screen = this.owner.gameData.getAddGameListScreenValue(gameName);
                console.log('screen:', screen);
                if (screen == 1) {
                    this.onWebViewGameLoad();
                } else {
                    native.reflection.callStaticMethod("com/cocos/game/AppActivity", "changePortrait", "()V");
                    setTimeout(()=>{this.onWebViewGameLoad();},1000)
                }
            } else {
                this.onWebViewGameLoad();
            }
            gamePlayPopup.removeFromParent();
            gamePlayPopup.destroy();
            this.scene.getComponent(UIOpacity).opacity = 255;
        }, this);
        // should_hide_in_hierarchy/fabGamePlay/gamePlayNode/bgGamePlay/playGameButtonNode/cancelNode/Button
        let cancelButton = gamePlayPopup.getChildByPath('gamePlayNode/bgGamePlay/playGameButtonNode/cancelNode/Button').getComponent(Button);
        cancelButton.node.on(Button.EventType.CLICK, () => {
            gamePlayPopup.removeFromParent();
            gamePlayPopup.destroy();
            this.scene.getComponent(UIOpacity).opacity = 255;
        }, this);

        this.scene.getComponent(UIOpacity).opacity = 100;
        this.root.addChild(gamePlayPopup);
    }

    // ============================================================================================================================
    // 게임 REMOVE
    onGameRemoveBtnClick(button: Button) {
        console.log('onGameRemoveBtnClick:', button.name);
        // this.onGameRemove(button.name);
        this.showGameRemovePopup(button.name);
    }

    onGameRemove(gameName: string) {
        // this.owner.gameData.myGameList Remove
        // this.owner.gameData.removeGameListUserByGameName(button.name);
        // this.myGameContent Remove
        let deleteNode = null;
        this.myGameContent.children.forEach((node: Node, index: number) => {
            let lblGameName = node.getChildByPath('mainNode/gameInfoNode1/gameInfo/lblGameName/Label').getComponent(Label);
            // console.log(lblGameName.name);
            if (lblGameName.name == gameName) {
                deleteNode = node;
            }
        });
        if (deleteNode){
            this.myGameContent.removeChild(deleteNode);
            this.owner.gameData.removeGameListUserByGameName(gameName);
            // addGameList add value change
            this.addGameContent.children.forEach((node: Node, index: number) => {
                let mainNodeOpacity = node.getChildByPath('mainNode').getComponent(UIOpacity);
                if (mainNodeOpacity.name == gameName) {
                    mainNodeOpacity.opacity = 255;
                }
            });
        }
    }

    showGameRemovePopup(gameName: string) {
        let removeGameRemovePopup = instantiate(this.gameRemovePopupPrefab);
        // should_hide_in_hierarchy/fabGameRemove/gameRemoveNode/bgGameRemove/removeGameName/lblRemoveGameName
        let lblRemoveGameName = removeGameRemovePopup.getChildByPath('gameRemoveNode/bgGameRemove/removeGameName/lblRemoveGameName').getComponent(Label);
        lblRemoveGameName.string = gameName;
        // should_hide_in_hierarchy/fabGameRemove/gameRemoveNode/bgGameRemove/removeGameButtonNode/okNode/Button
        let okButton = removeGameRemovePopup.getChildByPath('gameRemoveNode/bgGameRemove/removeGameButtonNode/okNode/Button').getComponent(Button);
        okButton.name = gameName;
        okButton.node.on(Button.EventType.CLICK, () => {
            this.onGameRemove(gameName);
            removeGameRemovePopup.removeFromParent();
            removeGameRemovePopup.destroy();
            this.scene.getComponent(UIOpacity).opacity = 255;
        }, this);
        // should_hide_in_hierarchy/fabGameRemove/gameRemoveNode/bgGameRemove/removeGameButtonNode/cancelNode/Button
        let cancelButton = removeGameRemovePopup.getChildByPath('gameRemoveNode/bgGameRemove/removeGameButtonNode/cancelNode/Button').getComponent(Button);
        cancelButton.node.on(Button.EventType.CLICK, () => {
            removeGameRemovePopup.removeFromParent();
            removeGameRemovePopup.destroy();
            this.scene.getComponent(UIOpacity).opacity = 255;
        }, this);

        this.scene.getComponent(UIOpacity).opacity = 100;
        this.root.addChild(removeGameRemovePopup);
    }
    // ============================================================================================================================

    // ============================================================================================================================
    onGameAddBtnClick(button: Button) {
        console.log('onGameAddBtnClick:', button.name);
        this.showGameAddPopup(button.name);
    }

    onGameAdd(gameName: string) {
        // {gameName: 'SKYTRIP', gameRate: '-.-', gameUrl: 'SKYTRIP', screen: 2, vote: false};
        let screen = this.owner.gameData.getAddGameListScreenValue(gameName);
        let url = this.owner.gameData.getAddGameListUrlValue(gameName);
        let addGameList = {gameName: gameName, gameRate: '-.-', gameUrl: url, screen: screen, vote: false};
        this.owner.gameData.addGameListUser(addGameList);
        this.addMyGameItem(addGameList);
        this.addGameContent.children.forEach((node: Node, index: number) => {
            let mainNodeOpacity = node.getChildByPath('mainNode').getComponent(UIOpacity);
            if (mainNodeOpacity.name == gameName) {
                mainNodeOpacity.opacity = 100;
            }
        });
        this.owner.gameData.myCoin -= this.addGameCoinSize;
        this.owner.gameData.setUserInfoCoinAtLocalStorage();
        this.updateGameCoin();
    }

    showGameAddPopup(gameName: string) {
        console.log('showGameAddPopup:', gameName, this.owner.gameData.myCoin, this.addGameCoinSize);
        // myCoin 사이즈 확인, isExistMyGameListByGameName
        if (this.owner.gameData.myCoin < this.addGameCoinSize) {
            this.showMessagePopup(this.gameTitle, 'Coin is not enough. Must be 10 or more.');
            return;
        }
        if (this.owner.gameData.isExistMyGameListByGameName(gameName)) {
            this.showMessagePopup(this.gameTitle, 'This game has already been added.');
            return;
        }
        let gameAddPopup = instantiate(this.gameAddPopupPrefab);
        // should_hide_in_hierarchy/fabGameAdd/gameAddNode/bgGameAdd/addGameName/lblAddGameName
        let addGameName = gameAddPopup.getChildByPath('gameAddNode/bgGameAdd/addGameName/lblAddGameName').getComponent(Label);
        addGameName.string = gameName;
        // should_hide_in_hierarchy/fabGameAdd/gameAddNode/bgGameAdd/addGameButtonNode/okNode/Button
        let okButton = gameAddPopup.getChildByPath('gameAddNode/bgGameAdd/addGameButtonNode/okNode/Button').getComponent(Button);
        okButton.node.on(Button.EventType.CLICK, () => {
            this.onGameAdd(gameName);
            gameAddPopup.removeFromParent();
            gameAddPopup.destroy();
            this.scene.getComponent(UIOpacity).opacity = 255;
        }, this);
        // should_hide_in_hierarchy/fabGameAdd/gameAddNode/bgGameAdd/addGameButtonNode/cancelNode/Button
        let cancelButton = gameAddPopup.getChildByPath('gameAddNode/bgGameAdd/addGameButtonNode/cancelNode/Button').getComponent(Button);
        cancelButton.node.on(Button.EventType.CLICK, () => {
            gameAddPopup.removeFromParent();
            gameAddPopup.destroy();
            this.scene.getComponent(UIOpacity).opacity = 255;
        }, this);

        this.scene.getComponent(UIOpacity).opacity = 100;
        this.root.addChild(gameAddPopup);

    }
    // ============================================================================================================================

    // ============================================================================================================================
    onWatchVideoBtnClick(button: Button) {
        console.log('onGameAddBtnClick:', button.name);
        let name = button.name;
        switch (name) {
            case 'COIN1':
                if (this.lblAddCoinTime1.string == 'OK') {
                    // this.owner.gameData.setWatchVideoCoinTime(1);
                    // this.owner.gameData.getWatchVideoCoinTime(1);
                    this.showWatchVideoPopup(this.addCoinSize1, 'ADMOB');
                }
                break;
            case 'COIN2':
                if (this.lblAddCoinTime2.string == 'OK') {
                    // this.owner.gameData.setWatchVideoCoinTime(2);
                    // this.owner.gameData.getWatchVideoCoinTime(2);
                    this.showWatchVideoPopup(this.addCoinSize2, 'ADMOB');
                }
                break;
            case 'COIN3':
                if (this.lblAddCoinTime3.string == 'OK') {
                    // this.owner.gameData.setWatchVideoCoinTime(3);
                    // this.owner.gameData.getWatchVideoCoinTime(3);
                    this.showWatchVideoPopup(this.addCoinSize3, 'ADMOB');
                }
                break;

            // ============================================================================================================================
            // HammerOh 2023.06.28
            case 'COIN4':
                if (this.lblAddCoinTime4.string == 'OK') {
                    this.showWatchVideoPopup(this.addCoinSize4, 'VUNGLE');
                }
                break;
            case 'COIN5':
                if (this.lblAddCoinTime5.string == 'OK') {
                    this.showWatchVideoPopup(this.addCoinSize5, 'VUNGLE');
                }
                break;
            case 'COIN6':
                if (this.lblAddCoinTime6.string == 'OK') {
                    this.showWatchVideoPopup(this.addCoinSize6, 'VUNGLE');
                }
                break;
            // ============================================================================================================================
        }
    }

    setWatchVideoStatusTrue(index: number) {
        switch (index) {
            case this.addCoinSize1:
                this.watchVideoStatus1 = true;
                break;
            case this.addCoinSize2:
                this.watchVideoStatus2 = true;
                break;
            case this.addCoinSize3:
                this.watchVideoStatus3 = true;
                break;
        }
    }
    // ============================================================================================================================
    // HammerOh 2023.06.28
    // ============================================================================================================================
    setVungleWatchVideoStatusTrue(index: number) {
        switch (index) {
            case this.addCoinSize4:
                this.watchVideoStatus4 = true;
                break;
            case this.addCoinSize5:
                this.watchVideoStatus5 = true;
                break;
            case this.addCoinSize6:
                this.watchVideoStatus6 = true;
                break;
        }
    }

    setWatchVideoStatusFalse(index: number) {
        switch (index) {
            case this.addCoinSize1:
                this.watchVideoStatus1 = false;
                break;
            case this.addCoinSize2:
                this.watchVideoStatus2 = false;
                break;
            case this.addCoinSize3:
                this.watchVideoStatus3 = false;
                break;
        }
    }

    // ============================================================================================================================
    // HammerOh 2023.06.28
    // ============================================================================================================================
    setVungleWatchVideoStatusFalse(index: number) {
        switch (index) {
            case this.addCoinSize4:
                this.watchVideoStatus4 = false;
                break;
            case this.addCoinSize5:
                this.watchVideoStatus5 = false;
                break;
            case this.addCoinSize6:
                this.watchVideoStatus6 = false;
                break;
        }
    }


    // ============================================================================================================================
    // HammerOh 2023.06.28
    // type 추가
    showWatchVideoPopup(coinSize: number, type: string) {
    // ============================================================================================================================
        let watchVideoPopup = instantiate(this.watchVideoPopupPrefab);
        // should_hide_in_hierarchy/fabWatchVideo/watchVideoNode/bgWatchVideo/watchVideoName/lblWatchVideoName
        let lblWatchVideoName = watchVideoPopup.getChildByPath('watchVideoNode/bgWatchVideo/watchVideoName/lblWatchVideoName').getComponent(Label);
        lblWatchVideoName.string = coinSize.toString() + ' COIN ADD';
        // should_hide_in_hierarchy/fabWatchVideo/watchVideoNode/bgWatchVideo/watchVideoMessageNode/lblMessage
        let lblMessage = watchVideoPopup.getChildByPath('watchVideoNode/bgWatchVideo/watchVideoMessageNode/lblMessage').getComponent(Label);
        lblMessage.string = 'Do you want to earn coins after watching ads?' + '\r\n' + '(' + coinSize.toString() + ' coins are added.)';
        // should_hide_in_hierarchy/fabWatchVideo/watchVideoNode/bgWatchVideo/watchVideoButtonNode/okNode/Button
        let okButton = watchVideoPopup.getChildByPath('watchVideoNode/bgWatchVideo/watchVideoButtonNode/okNode/Button').getComponent(Button);
        okButton.node.on(Button.EventType.CLICK, () => {
            if (sys.os == sys.OS.ANDROID) {
                switch (coinSize) {
                    case this.addCoinSize1:
                    case this.addCoinSize4:
                        if (type == 'ADMOB') {
                            native.reflection.callStaticMethod("com/cocos/game/AppActivity", "viewRewardedAd", "()V");
                        }
                        if (type == 'VUNGLE') {
                            native.reflection.callStaticMethod("com/cocos/game/AppActivity", "viewVungleRewardedAd", "()V");
                        }
                        break;
                    case this.addCoinSize2:
                    case this.addCoinSize5:
                        if (type == 'ADMOB') {
                            native.reflection.callStaticMethod("com/cocos/game/AppActivity", "viewRewardedAdMid", "()V");
                        }
                        if (type == 'VUNGLE') {
                            native.reflection.callStaticMethod("com/cocos/game/AppActivity", "viewVungleRewardedAdMid", "()V");
                        }
                        break;
                    case this.addCoinSize3:
                    case this.addCoinSize6:
                        if (type == 'ADMOB') {
                            native.reflection.callStaticMethod("com/cocos/game/AppActivity", "viewRewardedAdBig", "()V");
                        }
                        if (type == 'VUNGLE') {
                            native.reflection.callStaticMethod("com/cocos/game/AppActivity", "viewVungleRewardedAdBig", "()V");
                        }
                        break;
                }
            }
            watchVideoPopup.removeFromParent();
            watchVideoPopup.destroy();
            this.scene.getComponent(UIOpacity).opacity = 255;
        }, this);
        // should_hide_in_hierarchy/fabWatchVideo/watchVideoNode/bgWatchVideo/watchVideoButtonNode/cancelNode/Button
        let cancelButton = watchVideoPopup.getChildByPath('watchVideoNode/bgWatchVideo/watchVideoButtonNode/cancelNode/Button').getComponent(Button);
        cancelButton.node.on(Button.EventType.CLICK, () => {
            watchVideoPopup.removeFromParent();
            watchVideoPopup.destroy();
            this.scene.getComponent(UIOpacity).opacity = 255;
        }, this);

        this.scene.getComponent(UIOpacity).opacity = 100;
        this.root.addChild(watchVideoPopup);
    }

    // 보상형광고를 보고나서
    // 안드로이드에서 콜
    addSizeCoin(rewardCoin: number) {
        this.owner.gameData.myCoin += rewardCoin;
        this.owner.gameData.setUserInfoCoinAtLocalStorage();
        this.updateGameCoin();
        switch (rewardCoin) {
            case this.addCoinSize1:
                this.owner.gameData.setWatchVideoCoinTime(1);
                this.owner.gameData.getWatchVideoCoinTime(1);
                break;
            case this.addCoinSize2:
                this.owner.gameData.setWatchVideoCoinTime(2);
                this.owner.gameData.getWatchVideoCoinTime(2);
                break;
            case this.addCoinSize3:
                this.owner.gameData.setWatchVideoCoinTime(3);
                this.owner.gameData.getWatchVideoCoinTime(3);
                break;
        }
    }

    addVungleSizeCoin(rewardCoin: number) {
        this.owner.gameData.myCoin += rewardCoin;
        this.owner.gameData.setUserInfoCoinAtLocalStorage();
        this.updateGameCoin();
        switch (rewardCoin) {
            case this.addCoinSize4:
                this.owner.gameData.setWatchVideoCoinTime(4);
                this.owner.gameData.getWatchVideoCoinTime(4);
                break;
            case this.addCoinSize5:
                this.owner.gameData.setWatchVideoCoinTime(5);
                this.owner.gameData.getWatchVideoCoinTime(5);
                break;
            case this.addCoinSize6:
                this.owner.gameData.setWatchVideoCoinTime(6);
                this.owner.gameData.getWatchVideoCoinTime(6);
                break;
        }
    }


    // ============================================================================================================================
    popupDailyPromotion() {
        let dailyPromotion = instantiate(this.dailyPromotionPrefab);
        // should_hide_in_hierarchy/fabDailyPromotion/dailyPromotionNode/bgDailyPromotion/gameTitleNode/lblGameName
        let lblGameName = dailyPromotion.getChildByPath('dailyPromotionNode/bgDailyPromotion/gameTitleNode/lblGameName').getComponent(Label);
        lblGameName.string = this.gameTitle;
        // should_hide_in_hierarchy/fabDailyPromotion/dailyPromotionNode/bgDailyPromotion/buttonNode/okNode/Button
        let button = dailyPromotion.getChildByPath('dailyPromotionNode/bgDailyPromotion/buttonNode/okNode/Button').getComponent(Button);
        button.node.on(Button.EventType.CLICK, () => {
            this.owner.gameData.myCoin += this.addDailyPromotionCoinSize;
            this.owner.gameData.setUserInfoCoinAtLocalStorage();
            dailyPromotion.removeFromParent();
            dailyPromotion.destroy();
            this.updateGameCoin();
            this.scene.getComponent(UIOpacity).opacity = 255;
        }, this);

        this.scene.getComponent(UIOpacity).opacity = 100;
        this.root.addChild(dailyPromotion);
    }

    // ============================================================================================================================
    initBridgeFunction() {
        if (sys.os == sys.OS.ANDROID) {

            // ============================================================================================================================
            // HammerOh 2023.06.28
            native.jsbBridgeWrapper.addNativeEventListener("setVungleWatchVideoStatusTrue", (rewardCoin: string) => {
                console.log('[ADMOB]:setVungleWatchVideoStatusTrue:', rewardCoin)
                this.setVungleWatchVideoStatusTrue(parseInt(rewardCoin))
            });

            native.jsbBridgeWrapper.addNativeEventListener("setVungleWatchVideoStatusFalse", (rewardCoin: string) => {
                console.log('[ADMOB]:setVungleWatchVideoStatusFalse:', rewardCoin)
                this.setVungleWatchVideoStatusFalse(parseInt(rewardCoin))
            });

            native.jsbBridgeWrapper.addNativeEventListener("addVungleSizeCoin", (rewardCoin: string) => {
                this.addVungleSizeCoin(parseInt(rewardCoin))
            });
            // ============================================================================================================================

            native.jsbBridgeWrapper.addNativeEventListener("addSizeCoin", (rewardCoin: string) => {
                this.addSizeCoin(parseInt(rewardCoin))
            });

            native.jsbBridgeWrapper.addNativeEventListener("setWatchVideoStatusTrue", (rewardCoin: string) => {
                console.log('[ADMOB]:setWatchVideoStatusTrue:', rewardCoin);
                this.setWatchVideoStatusTrue(parseInt(rewardCoin))
            });

            native.jsbBridgeWrapper.addNativeEventListener("setWatchVideoStatusFalse", (rewardCoin: string) => {
                console.log('[ADMOB]:setWatchVideoStatusFalse:', rewardCoin);
                this.setWatchVideoStatusFalse(parseInt(rewardCoin))
            });

            native.jsbBridgeWrapper.addNativeEventListener("setWebViewUrl", () => {
                this.onWebViewGameLoad();
            });

            native.jsbBridgeWrapper.addNativeEventListener("onGameClose", () => {
                this.onWebViewGameExit();
            });
        }
    }
    // ============================================================================================================================

    // ============================================================================================================================
    // HammerOh 2023.06.28
    initAdmob() {
        if (sys.os == sys.OS.ANDROID) {
            native.reflection.callStaticMethod("com/cocos/game/AppActivity", "initAdmob", "()V");
        }
    }

    initVungle() {
        if (sys.os == sys.OS.ANDROID) {
            native.reflection.callStaticMethod("com/cocos/game/AppActivity", "initVungle", "()V");
        }
    }
    // ============================================================================================================================


    updateWatchVideoTimeLabel() {
        let lastTime1 = this.owner.gameData.watchVideoCoinTime1 + this.owner.gameData.watchVideoCoinTimeRemain1;
        let lastTime2 = this.owner.gameData.watchVideoCoinTime2 + this.owner.gameData.watchVideoCoinTimeRemain2;
        let lastTime3 = this.owner.gameData.watchVideoCoinTime3 + this.owner.gameData.watchVideoCoinTimeRemain3;
        let nowTime = new Date().getTime();
        if (this.watchVideoStatus1) {
            if (lastTime1 - nowTime < 0) {
                this.lblAddCoinTime1.string = 'OK';
                this.lblAddCoinTime1.color = Color.YELLOW;
            } else {
                this.lblAddCoinTime1.string = 'REMAIN ' + msToTime(lastTime1 - nowTime);
                this.lblAddCoinTime1.color = Color.RED;
            }
        } else {
            this.lblAddCoinTime1.string = 'NOT LOADED';
            this.lblAddCoinTime1.color = Color.GRAY;
        }

        if (this.watchVideoStatus2) {
            if (lastTime2 - nowTime < 0) {
                this.lblAddCoinTime2.string = 'OK';
                this.lblAddCoinTime2.color = Color.YELLOW;
            } else {
                this.lblAddCoinTime2.string = 'REMAIN ' + msToTime(lastTime2 - nowTime);
                this.lblAddCoinTime2.color = Color.RED;
            }
        } else {
            this.lblAddCoinTime2.string = 'NOT LOADED';
            this.lblAddCoinTime2.color = Color.GRAY;
        }

        if (this.watchVideoStatus3) {
            if (lastTime3 - nowTime < 0) {
                this.lblAddCoinTime3.string = 'OK';
                this.lblAddCoinTime3.color = Color.YELLOW;
            } else {
                this.lblAddCoinTime3.string = 'REMAIN ' + msToTime(lastTime3 - nowTime);
                this.lblAddCoinTime3.color = Color.RED;
            }
        } else {
            this.lblAddCoinTime3.string = 'NOT LOADED';
            this.lblAddCoinTime3.color = Color.GRAY;
        }

        // ============================================================================================================================
        // HammerOh 2023.06.28
        let lastTime4 = this.owner.gameData.watchVideoCoinTime4 + this.owner.gameData.watchVideoCoinTimeRemain4;
        let lastTime5 = this.owner.gameData.watchVideoCoinTime5 + this.owner.gameData.watchVideoCoinTimeRemain5;
        let lastTime6 = this.owner.gameData.watchVideoCoinTime6 + this.owner.gameData.watchVideoCoinTimeRemain6;

        if (this.watchVideoStatus4) {
            if (lastTime4 - nowTime < 0) {
                this.lblAddCoinTime4.string = 'OK';
                this.lblAddCoinTime4.color = Color.YELLOW;
            } else {
                this.lblAddCoinTime4.string = 'REMAIN ' + msToTime(lastTime4 - nowTime);
                this.lblAddCoinTime4.color = Color.RED;
            }
        } else {
            this.lblAddCoinTime4.string = 'NOT LOADED';
            this.lblAddCoinTime4.color = Color.GRAY;
        }

        if (this.watchVideoStatus5) {
            if (lastTime5 - nowTime < 0) {
                this.lblAddCoinTime5.string = 'OK';
                this.lblAddCoinTime5.color = Color.YELLOW;
            } else {
                this.lblAddCoinTime5.string = 'REMAIN ' + msToTime(lastTime5 - nowTime);
                this.lblAddCoinTime5.color = Color.RED;
            }
        } else {
            this.lblAddCoinTime5.string = 'NOT LOADED';
            this.lblAddCoinTime5.color = Color.GRAY;
        }

        if (this.watchVideoStatus6) {
            if (lastTime6 - nowTime < 0) {
                this.lblAddCoinTime6.string = 'OK';
                this.lblAddCoinTime6.color = Color.YELLOW;
            } else {
                this.lblAddCoinTime6.string = 'REMAIN ' + msToTime(lastTime6 - nowTime);
                this.lblAddCoinTime6.color = Color.RED;
            }
        } else {
            this.lblAddCoinTime6.string = 'NOT LOADED';
            this.lblAddCoinTime6.color = Color.GRAY;
        }
        // ============================================================================================================================
    }

    updateDailyPromtion() {
        if (this.owner.gameData.checkDailyPromtion()) {
            this.popupDailyPromotion();
        }
    }
    // ============================================================================================================================

    // ============================================================================================================================
    showMessagePopup(title: string, msg: string) {
        let messageBox = instantiate(this.messageBoxPrefab);
        // should_hide_in_hierarchy/fabMessageBox/messageBoxNode/bgMessageBox/messageBoxTitle/lblMessageBoxTitle
        let lblMessageBoxTitle = messageBox.getChildByPath('messageBoxNode/bgMessageBox/messageBoxTitle/lblMessageBoxTitle').getComponent(Label);
        lblMessageBoxTitle.string = title;
        // should_hide_in_hierarchy/fabMessageBox/messageBoxNode/bgMessageBox/messageBoixMessageNode/lblMessageBoxMessage
        let lblMessageBoxMessage = messageBox.getChildByPath('messageBoxNode/bgMessageBox/messageBoixMessageNode/lblMessageBoxMessage').getComponent(Label);
        lblMessageBoxMessage.string = msg;
        // should_hide_in_hierarchy/fabMessageBox/messageBoxNode/bgMessageBox/messageBoxButtonNode/okNode/Button
        let okButton = messageBox.getChildByPath('messageBoxNode/bgMessageBox/messageBoxButtonNode/okNode/Button').getComponent(Button);
        okButton.node.on(Button.EventType.CLICK, () => {
            messageBox.removeFromParent();
            messageBox.destroy();
            this.scene.getComponent(UIOpacity).opacity = 255;
        }, this);

        this.scene.getComponent(UIOpacity).opacity = 100;
        this.root.addChild(messageBox);
    }
    // ============================================================================================================================
    update(deltaTime: number): void {
        switch (this.status) {
            case MAIN_STATUS.PRELOAD_STAND:
                if (this.resourceCount >= this.resourceCountMax) {
                    this.status = MAIN_STATUS.INIT;
                }
                break;
            case MAIN_STATUS.INIT:
                this.initMainScene();
                this.initWebView();
                this.status = MAIN_STATUS.INIT_STAND;
                break;
            case MAIN_STATUS.INIT_STAND:
                this.initMyGameListScrollView();
                this.status = MAIN_STATUS.MAIN_RUN;
                break;
            case MAIN_STATUS.MAIN_RUN:
                this.updateDailyPromtion();
                this.updateWatchVideoTimeLabel();
                break;
            case MAIN_STATUS.WEBVIEW_RUN:
                break;
        }
    }
}
