System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Color, Input, KeyCode, Label, Prefab, ScrollView, Sprite, UIOpacity, Vec2, WebView, Widget, _decorator, input, instantiate, native, resources, sys, MAIN_STATUS, TSceneClass, msToTime, _dec, _class, _crd, ccclass, property, TMainSceneClass;

  function _reportPossibleCrUseOfTWebGameClass(extras) {
    _reporterNs.report("TWebGameClass", "./rootScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfADDGAME(extras) {
    _reporterNs.report("ADDGAME", "./utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMAIN_STATUS(extras) {
    _reporterNs.report("MAIN_STATUS", "./utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMYGAME(extras) {
    _reporterNs.report("MYGAME", "./utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTSceneClass(extras) {
    _reporterNs.report("TSceneClass", "./utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTSceneManager(extras) {
    _reporterNs.report("TSceneManager", "./utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmsToTime(extras) {
    _reporterNs.report("msToTime", "./utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTGameDataClass(extras) {
    _reporterNs.report("TGameDataClass", "./gameDataClass", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Color = _cc.Color;
      Input = _cc.Input;
      KeyCode = _cc.KeyCode;
      Label = _cc.Label;
      Prefab = _cc.Prefab;
      ScrollView = _cc.ScrollView;
      Sprite = _cc.Sprite;
      UIOpacity = _cc.UIOpacity;
      Vec2 = _cc.Vec2;
      WebView = _cc.WebView;
      Widget = _cc.Widget;
      _decorator = _cc._decorator;
      input = _cc.input;
      instantiate = _cc.instantiate;
      native = _cc.native;
      resources = _cc.resources;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      MAIN_STATUS = _unresolved_2.MAIN_STATUS;
      TSceneClass = _unresolved_2.TSceneClass;
      msToTime = _unresolved_2.msToTime;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6d23bhh5FtNGLLHJZfPs7DJ", "mainSceneClass", undefined);

      __checkObsolete__(['Button', 'Color', 'EventKeyboard', 'Input', 'KeyCode', 'Label', 'Node', 'Prefab', 'ScrollView', 'Sprite', 'UIOpacity', 'Vec2', 'Vec3', 'WebView', 'Widget', '_decorator', 'input', 'instantiate', 'js', 'native', 'resources', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TMainSceneClass", TMainSceneClass = (_dec = ccclass("mainSceneClass"), _dec(_class = class TMainSceneClass extends (_crd && TSceneClass === void 0 ? (_reportPossibleCrUseOfTSceneClass({
        error: Error()
      }), TSceneClass) : TSceneClass) {
        constructor(root, sceneManager, owner) {
          super(root, sceneManager);
          this.mainScenePrefab = void 0;
          this.webViewScenePrefab = void 0;
          this.gameWebView = void 0;
          this.gameItemPrefab = void 0;
          this.addGameItemPrefab = void 0;
          this.addCoinItemPrefab = void 0;
          this.dailyPromotionPrefab = void 0;
          this.gameRemovePopupPrefab = void 0;
          this.messageBoxPrefab = void 0;
          this.gameAddPopupPrefab = void 0;
          this.gamePlayPopupPrefab = void 0;
          this.watchVideoPopupPrefab = void 0;
          this.status = void 0;
          this.owner = void 0;
          this.gameData = void 0;
          this.resourceCount = void 0;
          this.resourceCountMax = void 0;
          this.lblGameTitle = void 0;
          this.lblGameCoin = void 0;
          this.exitGameBtn = void 0;
          this.myGameBtn = void 0;
          this.addGameBtn = void 0;
          // addCoinBtn: Button;
          this.myGameContent = void 0;
          this.addGameContent = void 0;
          this.addCoinContent = void 0;
          this.myGameNode = void 0;
          this.myGameScrollView = void 0;
          this.scrollOffset = new Vec2();
          this.addGameNode = void 0;
          this.addCoinNode = void 0;
          this.btnAddCoin1 = void 0;
          this.lblAddCoinTime1 = void 0;
          this.addCoinSize1 = 1;
          this.watchVideoStatus1 = false;
          this.btnAddCoin2 = void 0;
          this.lblAddCoinTime2 = void 0;
          this.addCoinSize2 = 2;
          this.watchVideoStatus2 = false;
          this.btnAddCoin3 = void 0;
          this.lblAddCoinTime3 = void 0;
          this.addCoinSize3 = 5;
          this.watchVideoStatus3 = false;
          this.addDailyPromotionCoinSize = 5;
          this.addGameCoinSize = 0;
          this.playGameCoinSize = 1;
          this.currentGameGame = '';
          // ============================================================================================================================
          // HammerOh 2023.06.28
          this.btnAddCoin4 = void 0;
          this.lblAddCoinTime4 = void 0;
          this.addCoinSize4 = 1;
          this.watchVideoStatus4 = false;
          this.btnAddCoin5 = void 0;
          this.lblAddCoinTime5 = void 0;
          this.addCoinSize5 = 2;
          this.watchVideoStatus5 = false;
          this.btnAddCoin6 = void 0;
          this.lblAddCoinTime6 = void 0;
          this.addCoinSize6 = 5;
          this.watchVideoStatus6 = false;
          // ============================================================================================================================
          this.gameTitle = 'BLOCK PUZZLE SAGA';
          this.owner = owner;
          this.gameData = this.owner.gameData;
          this.status = (_crd && MAIN_STATUS === void 0 ? (_reportPossibleCrUseOfMAIN_STATUS({
            error: Error()
          }), MAIN_STATUS) : MAIN_STATUS).NONE;
          this.resourceCount = 0;
          this.resourceCountMax = 11;
          this.initBridgeFunction(); // ============================================================================================================================
          // HammerOh 2023.06.28

          this.initAdmob();
          this.initVungle(); // ============================================================================================================================
        }

        startScene() {
          if (this.status == (_crd && MAIN_STATUS === void 0 ? (_reportPossibleCrUseOfMAIN_STATUS({
            error: Error()
          }), MAIN_STATUS) : MAIN_STATUS).MAIN_RUN) {} else {
            this.preload();
            this.status = (_crd && MAIN_STATUS === void 0 ? (_reportPossibleCrUseOfMAIN_STATUS({
              error: Error()
            }), MAIN_STATUS) : MAIN_STATUS).PRELOAD_STAND;
          }
        }

        preload() {
          resources.load('prefab/scene/fabMainScene', Prefab, (err, prefab) => {
            if (err) {
              console.log(err);
            } else {
              this.mainScenePrefab = prefab;
              this.resourceCount++;
            }
          });
          resources.load('prefab/scene/fabWebViewScene', Prefab, (err, prefab) => {
            if (err) {
              console.log(err);
            } else {
              this.webViewScenePrefab = prefab;
              this.resourceCount++;
            }
          });
          resources.load('prefab/item/fabAddGameItem', Prefab, (err, prefab) => {
            if (err) {
              console.log(err);
            } else {
              this.addGameItemPrefab = prefab;
              this.resourceCount++;
            }
          });
          resources.load('prefab/item/fabGameItem', Prefab, (err, prefab) => {
            if (err) {
              console.log(err);
            } else {
              this.gameItemPrefab = prefab;
              this.resourceCount++;
            }
          });
          resources.load('prefab/item/fabCoinItem', Prefab, (err, prefab) => {
            if (err) {
              console.log(err);
            } else {
              this.addCoinItemPrefab = prefab;
              this.resourceCount++;
            }
          });
          resources.load('prefab/popup/fabDailyPromotion', Prefab, (err, prefab) => {
            if (err) {
              console.log(err);
            } else {
              this.dailyPromotionPrefab = prefab;
              this.resourceCount++;
            }
          });
          resources.load('prefab/popup/fabGameRemove', Prefab, (err, prefab) => {
            if (err) {
              console.log(err);
            } else {
              this.gameRemovePopupPrefab = prefab;
              this.resourceCount++;
            }
          });
          resources.load('prefab/popup/fabMessageBox', Prefab, (err, prefab) => {
            if (err) {
              console.log(err);
            } else {
              this.messageBoxPrefab = prefab;
              this.resourceCount++;
            }
          });
          resources.load('prefab/popup/fabGameAdd', Prefab, (err, prefab) => {
            if (err) {
              console.log(err);
            } else {
              this.gameAddPopupPrefab = prefab;
              this.resourceCount++;
            }
          });
          resources.load('prefab/popup/fabGamePlay', Prefab, (err, prefab) => {
            if (err) {
              console.log(err);
            } else {
              this.gamePlayPopupPrefab = prefab;
              this.resourceCount++;
            }
          });
          resources.load('prefab/popup/fabWatchVideo', Prefab, (err, prefab) => {
            if (err) {
              console.log(err);
            } else {
              this.watchVideoPopupPrefab = prefab;
              this.resourceCount++;
            }
          });
        }

        initMainScene() {
          this.scene = instantiate(this.mainScenePrefab); // Game Title Update
          // should_hide_in_hierarchy/fabMainScene/mainScene/gameNode/topNode/lblGameTitle/Label

          this.lblGameTitle = this.scene.getChildByPath('mainScene/gameNode/topNode/lblGameTitle/Label').getComponent(Label);
          this.lblGameTitle.string = this.gameTitle; // User Coin Update
          // should_hide_in_hierarchy/fabMainScene/mainScene/gameNode/topNode/lblGameCoin/Label

          this.lblGameCoin = this.scene.getChildByPath('mainScene/gameNode/topNode/lblGameCoin/Label').getComponent(Label);
          this.updateGameCoin(); // Exit Button Update
          // should_hide_in_hierarchy/fabMainScene/mainScene/gameNode/topNode/exitGameBtn/Button

          this.exitGameBtn = this.scene.getChildByPath('mainScene/gameNode/topNode/exitGameBtn/Button').getComponent(Button);
          this.exitGameBtn.name = 'GameExitBtn';
          this.exitGameBtn.node.on(Button.EventType.CLICK, this.onGameExitBtnClick, this); // MyGame Button Update
          // should_hide_in_hierarchy/fabMainScene/mainScene/gameNode/bottpmNode/myGameBtn/Button

          this.myGameBtn = this.scene.getChildByPath('mainScene/gameNode/bottpmNode/myGameBtn/Button').getComponent(Button);
          this.myGameBtn.name = 'MyGameBtn';
          this.myGameBtn.node.on(Button.EventType.CLICK, this.onMyGameBtnClick, this); // AddGame Button Update

          this.addGameBtn = this.scene.getChildByPath('mainScene/gameNode/bottpmNode/addGameBtn/Button').getComponent(Button);
          this.addGameBtn.name = 'AddGameBtn';
          this.addGameBtn.node.on(Button.EventType.CLICK, this.onAddGameBtnClick, this); // AddCoin Button Update
          // should_hide_in_hierarchy/fabMainScene/mainScene/gameNode/bottpmNode/addCoinBtn/Button

          var addCoinBtn = this.scene.getChildByPath('mainScene/gameNode/bottpmNode/addCoinBtn/Button').getComponent(Button);
          addCoinBtn.name = 'AddCoinBtn';
          addCoinBtn.node.on(Button.EventType.CLICK, this.onAddCoinBtnClick, this); // Add MyGameItem
          // should_hide_in_hierarchy/fabMainScene/mainScene/gameNode/mainNode/myGameNode/ScrollView/view/myGameContent

          this.myGameContent = this.scene.getChildByPath('mainScene/gameNode/mainNode/myGameNode/ScrollView/view/myGameContent');
          this.initMyGameItem(); // Add AddGameItem
          // should_hide_in_hierarchy/fabMainScene/mainScene/gameNode/mainNode/addGameNode/ScrollView/view/addGameContent

          this.addGameContent = this.scene.getChildByPath('mainScene/gameNode/mainNode/addGameNode/ScrollView/view/addGameContent');
          this.initAddGameItem(); // Add AddCoinItem
          // should_hide_in_hierarchy/fabMainScene/mainScene/gameNode/mainNode/addCoinNode/ScrollView/view/addCoinContent

          this.addCoinContent = this.scene.getChildByPath('mainScene/gameNode/mainNode/addCoinNode/ScrollView/view/addCoinContent');
          this.initAddCoinItem(); // should_hide_in_hierarchy/fabMainScene/mainScene/gameNode/mainNode/myGameNode

          this.myGameNode = this.scene.getChildByPath('mainScene/gameNode/mainNode/myGameNode'); // should_hide_in_hierarchy/fabMainScene/mainScene/gameNode/mainNode/myGameNode/ScrollView

          this.myGameScrollView = this.scene.getChildByPath('mainScene/gameNode/mainNode/myGameNode/ScrollView').getComponent(ScrollView); // should_hide_in_hierarchy/fabMainScene/mainScene/gameNode/mainNode/addGameNode

          this.addGameNode = this.scene.getChildByPath('mainScene/gameNode/mainNode/addGameNode'); // should_hide_in_hierarchy/fabMainScene/mainScene/gameNode/mainNode/addCoinNode

          this.addCoinNode = this.scene.getChildByPath('mainScene/gameNode/mainNode/addCoinNode');
          this.myGameNode.active = true;
          this.addGameNode.active = false;
          this.addCoinNode.active = false;
          this.scene.addComponent(UIOpacity);
          this.root.addChild(this.scene);
        }

        initMyGameItem() {
          this.owner.gameData.myGameList.forEach((myGame, index) => {
            this.addMyGameItem(myGame); // let gameItem = instantiate(this.gameItemPrefab);
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
          });
        }

        addMyGameItem(myGame) {
          var gameItem = instantiate(this.gameItemPrefab); // gameImageSprite  게임 이미지
          // should_hide_in_hierarchy/fabGameItem/mainNode/gameInfoNode1/gameImage/gameImageSprite

          var gameImageSprite = gameItem.getChildByPath('mainNode/gameInfoNode1/gameImage/gameImageSprite').getComponent(Sprite);
          gameImageSprite.spriteFrame = this.owner.gameImageLists.get(myGame.gameName);
          var gameImageSpriteBtn = gameImageSprite.getComponent(Button);
          gameImageSpriteBtn.name = myGame.gameName;
          gameImageSpriteBtn.node.on(Button.EventType.CLICK, this.onGamePlayBtnClick, this); // lblGameName      게임 네임
          // should_hide_in_hierarchy/fabGameItem/mainNode/gameInfoNode1/gameInfo/lblGameName/Label

          var lblGameName = gameItem.getChildByPath('mainNode/gameInfoNode1/gameInfo/lblGameName/Label').getComponent(Label);
          lblGameName.name = myGame.gameName;
          lblGameName.string = myGame.gameName.replace(/_/g, ' '); // // lblGameRate      게임 레이트         =>  임시 삭제
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
            var btnGameRank = gameItem.getChildByPath('mainNode/gameInfoNode1/gameInfo/btnGameRank/Button').getComponent(Button);
            btnGameRank.node.active = true;
            btnGameRank.name = myGame.gameName;
            btnGameRank.node.on(Button.EventType.CLICK, () => {
              if (sys.os == sys.OS.ANDROID) {
                native.reflection.callStaticMethod("com/cocos/game/AppActivity", "showRank", "(Ljava/lang/String;)V", myGame.gameName);
              }
            }, this);
          } // btnGamePlay      게임 플레이
          // should_hide_in_hierarchy/fabGameItem/mainNode/gameInfoNode1/gameInfo/btnGamePlay/Button


          var btnGamePlay = gameItem.getChildByPath('mainNode/gameInfoNode1/gameInfo/btnGamePlay/Button').getComponent(Button);
          btnGamePlay.name = myGame.gameName;
          btnGamePlay.node.on(Button.EventType.CLICK, this.onGamePlayBtnClick, this); // btnGameRemove    게임 삭제
          // should_hide_in_hierarchy/fabGameItem/mainNode/gameInfoNode1/gameInfo/btnGameRemove/Button

          var btnGameRemove = gameItem.getChildByPath('mainNode/gameInfoNode1/gameInfo/btnGameRemove/Button').getComponent(Button);
          btnGameRemove.name = myGame.gameName;
          btnGameRemove.node.on(Button.EventType.CLICK, this.onGameRemoveBtnClick, this);
          this.myGameContent.addChild(gameItem);
        }

        initAddGameItem() {
          this.owner.gameData.addGameList.forEach((addGame, index) => {
            var addGameItem = instantiate(this.addGameItemPrefab); // mainNode

            var mainNodeOpacity = addGameItem.getChildByPath('mainNode').getComponent(UIOpacity);
            mainNodeOpacity.name = addGame.gameName;

            if (addGame.add) {
              mainNodeOpacity.opacity = 100;
            } else {
              mainNodeOpacity.opacity = 255;
            } // gameImageSprite
            // should_hide_in_hierarchy/fabAddGameItem/mainNode/addGameInfoNode/gameImage/gameImageSprite


            var gameImageSprite = addGameItem.getChildByPath('mainNode/addGameInfoNode/gameImage/gameImageSprite').getComponent(Sprite);
            gameImageSprite.spriteFrame = this.owner.gameImageLists.get(addGame.gameName); // lblGameName
            // should_hide_in_hierarchy/fabAddGameItem/mainNode/addGameInfoNode/gameInfo/lblGameName/Label

            var lblGameName = addGameItem.getChildByPath('mainNode/addGameInfoNode/gameInfo/lblGameName/Label').getComponent(Label);
            lblGameName.string = addGame.gameName.replace(/_/g, ' '); // btnAddGame
            // should_hide_in_hierarchy/fabAddGameItem/mainNode/addGameInfoNode/gameInfo/btnAddGame/Button

            var btnAddGame = addGameItem.getChildByPath('mainNode/addGameInfoNode/gameInfo/btnAddGame/Button').getComponent(Button);
            btnAddGame.name = addGame.gameName;
            btnAddGame.node.on(Button.EventType.CLICK, this.onGameAddBtnClick, this);
            this.addGameContent.addChild(addGameItem);
          });
        }

        initAddCoinItem() {
          var addCoinItem1 = instantiate(this.addCoinItemPrefab);
          this.btnAddCoin1 = addCoinItem1.getChildByPath('mainNode/coinInfoNode/coinInfo/btnAddCoin/Button').getComponent(Button);
          this.btnAddCoin1.name = 'COIN1';
          var lblBtnAddCoin1 = addCoinItem1.getChildByPath('mainNode/coinInfoNode/coinInfo/btnAddCoin/Button/Label').getComponent(Label);
          lblBtnAddCoin1.string = 'COIN 1';
          this.lblAddCoinTime1 = addCoinItem1.getChildByPath('mainNode/coinInfoNode/coinInfo/lblAddCoinTime/Label').getComponent(Label);
          this.addCoinContent.addChild(addCoinItem1);
          var addCoinItem2 = instantiate(this.addCoinItemPrefab);
          this.btnAddCoin2 = addCoinItem2.getChildByPath('mainNode/coinInfoNode/coinInfo/btnAddCoin/Button').getComponent(Button);
          this.btnAddCoin2.name = 'COIN2';
          var lblBtnAddCoin2 = addCoinItem2.getChildByPath('mainNode/coinInfoNode/coinInfo/btnAddCoin/Button/Label').getComponent(Label);
          lblBtnAddCoin2.string = 'COIN 2';
          this.lblAddCoinTime2 = addCoinItem2.getChildByPath('mainNode/coinInfoNode/coinInfo/lblAddCoinTime/Label').getComponent(Label);
          this.addCoinContent.addChild(addCoinItem2);
          var addCoinItem3 = instantiate(this.addCoinItemPrefab);
          this.btnAddCoin3 = addCoinItem3.getChildByPath('mainNode/coinInfoNode/coinInfo/btnAddCoin/Button').getComponent(Button);
          this.btnAddCoin3.name = 'COIN3';
          var lblBtnAddCoin3 = addCoinItem3.getChildByPath('mainNode/coinInfoNode/coinInfo/btnAddCoin/Button/Label').getComponent(Label);
          lblBtnAddCoin3.string = 'COIN 3';
          this.lblAddCoinTime3 = addCoinItem3.getChildByPath('mainNode/coinInfoNode/coinInfo/lblAddCoinTime/Label').getComponent(Label);
          this.addCoinContent.addChild(addCoinItem3); // ============================================================================================================================
          // HammerOh 2023.06.28

          var addCoinItem4 = instantiate(this.addCoinItemPrefab);
          this.btnAddCoin4 = addCoinItem4.getChildByPath('mainNode/coinInfoNode/coinInfo/btnAddCoin/Button').getComponent(Button);
          this.btnAddCoin4.name = 'COIN4';
          var lblBtnAddCoin4 = addCoinItem4.getChildByPath('mainNode/coinInfoNode/coinInfo/btnAddCoin/Button/Label').getComponent(Label);
          lblBtnAddCoin4.string = 'COIN 4';
          this.lblAddCoinTime4 = addCoinItem4.getChildByPath('mainNode/coinInfoNode/coinInfo/lblAddCoinTime/Label').getComponent(Label);
          this.addCoinContent.addChild(addCoinItem4);
          var addCoinItem5 = instantiate(this.addCoinItemPrefab);
          this.btnAddCoin5 = addCoinItem5.getChildByPath('mainNode/coinInfoNode/coinInfo/btnAddCoin/Button').getComponent(Button);
          this.btnAddCoin5.name = 'COIN5';
          var lblBtnAddCoin5 = addCoinItem5.getChildByPath('mainNode/coinInfoNode/coinInfo/btnAddCoin/Button/Label').getComponent(Label);
          lblBtnAddCoin5.string = 'COIN 5';
          this.lblAddCoinTime5 = addCoinItem5.getChildByPath('mainNode/coinInfoNode/coinInfo/lblAddCoinTime/Label').getComponent(Label);
          this.addCoinContent.addChild(addCoinItem5);
          var addCoinItem6 = instantiate(this.addCoinItemPrefab);
          this.btnAddCoin6 = addCoinItem6.getChildByPath('mainNode/coinInfoNode/coinInfo/btnAddCoin/Button').getComponent(Button);
          this.btnAddCoin6.name = 'COIN6';
          var lblBtnAddCoin6 = addCoinItem6.getChildByPath('mainNode/coinInfoNode/coinInfo/btnAddCoin/Button/Label').getComponent(Label);
          lblBtnAddCoin6.string = 'COIN 6';
          this.lblAddCoinTime6 = addCoinItem6.getChildByPath('mainNode/coinInfoNode/coinInfo/lblAddCoinTime/Label').getComponent(Label);
          this.addCoinContent.addChild(addCoinItem6);
          this.btnAddCoin4.node.on(Button.EventType.CLICK, this.onWatchVideoBtnClick, this);
          this.btnAddCoin5.node.on(Button.EventType.CLICK, this.onWatchVideoBtnClick, this);
          this.btnAddCoin6.node.on(Button.EventType.CLICK, this.onWatchVideoBtnClick, this); // ============================================================================================================================

          this.btnAddCoin1.node.on(Button.EventType.CLICK, this.onWatchVideoBtnClick, this);
          this.btnAddCoin2.node.on(Button.EventType.CLICK, this.onWatchVideoBtnClick, this);
          this.btnAddCoin3.node.on(Button.EventType.CLICK, this.onWatchVideoBtnClick, this);
        }

        initMyGameListScrollView() {
          var _scrollOffset = localStorage.getItem('myGameListOffset');

          if (_scrollOffset == null) return;
          _scrollOffset = JSON.parse(_scrollOffset); // @ts-ignore

          this.scrollOffset.set(_scrollOffset.x, _scrollOffset.y);
          console.log(this.scrollOffset);
          setTimeout(() => {
            this.myGameScrollView.scrollToOffset(new Vec2(Math.abs(this.scrollOffset.x), 0), 0.1, true);
          }, 1000);
        }

        setMyGameListScrollView() {
          this.scrollOffset = this.myGameScrollView.getScrollOffset();
          var _scrollOffset = {
            x: this.scrollOffset.x,
            y: this.scrollOffset.y
          };
          localStorage.setItem('myGameListOffset', JSON.stringify(_scrollOffset));
        }

        updateMyGameListScrollView() {
          console.log('updateMyGameListScrollView:', this.scrollOffset.x);
          this.myGameScrollView.scrollToOffset(new Vec2(Math.abs(this.scrollOffset.x), 0), 0.1, true);
        } // ============================================================================================================================


        initWebView() {
          this.gameWebView = instantiate(this.webViewScenePrefab); // should_hide_in_hierarchy/fabWebViewScene/webViewNode

          var webViewNode = this.gameWebView.getChildByPath('webViewNode');
          webViewNode.addChild(this.owner.webView.node);
          var widget = this.owner.webView.getComponent(Widget);

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

        onWebViewErrorEvent(webView) {
          // should_hide_in_hierarchy/fabWebViewScene/webViewNode/lblWebLoading
          var label = this.gameWebView.getChildByPath('webViewNode/lblWebLoading').getComponent(Label);
          label.string = 'LOAD ERROR ...';
          webView.enabled = false;
        }

        onWebViewLoadedEvent(webView) {
          var label = this.gameWebView.getChildByPath('webViewNode/lblWebLoading').getComponent(Label);
          label.string = 'LOADED ...';
          webView.enabled = true;
        }

        onWebViewLoadingEvent(webView) {
          var label = this.gameWebView.getChildByPath('webViewNode/lblWebLoading').getComponent(Label);
          label.string = 'LOADING ...';
          webView.enabled = true;
        }

        onWebViewNoneEvent(webView) {}

        onKeyDown(event) {
          console.log(event.keyCode);

          switch (event.keyCode) {
            case KeyCode.MOBILE_BACK:
              if (sys.os == sys.OS.ANDROID) {
                if (this.status == (_crd && MAIN_STATUS === void 0 ? (_reportPossibleCrUseOfMAIN_STATUS({
                  error: Error()
                }), MAIN_STATUS) : MAIN_STATUS).WEBVIEW_RUN) {
                  native.reflection.callStaticMethod("com/cocos/game/AppActivity", "showAlertDialog", "(Ljava/lang/String;Ljava/lang/String;)V", "NOTICE", "Are you game close?");
                } else {
                  native.reflection.callStaticMethod("com/cocos/game/AppActivity", "showAlertDialog", "(Ljava/lang/String;Ljava/lang/String;)V", "NOTICE", "Are you game exit?");
                }
              }

              break;

            case KeyCode.ESCAPE:
              if (sys.os == sys.OS.ANDROID) {} else {
                console.log('onKeyDown KeyCode.ESCAPE:', this.status);

                if (this.status == (_crd && MAIN_STATUS === void 0 ? (_reportPossibleCrUseOfMAIN_STATUS({
                  error: Error()
                }), MAIN_STATUS) : MAIN_STATUS).WEBVIEW_RUN) {
                  console.log('onKeyDown KeyCode.ESCAPE');
                  this.onWebViewGameExit();
                }
              }

              break;
          }
        }

        onWebViewGameLoad() {
          this.status = (_crd && MAIN_STATUS === void 0 ? (_reportPossibleCrUseOfMAIN_STATUS({
            error: Error()
          }), MAIN_STATUS) : MAIN_STATUS).WEBVIEW_RUN;
          this.scene.active = false;
          this.gameWebView.active = true; // should_hide_in_hierarchy/fabWebViewScene/webViewNode/WebView

          var webView = this.gameWebView.getChildByPath('webViewNode/WebView').getComponent(WebView); // webView.url = this.owner.gameData.GAME_URL + gameName;

          webView.url = this.owner.gameData.GAME_URL + this.currentGameGame; // webView.url = 'https://game.gameslot.win/saga/AGE_OF_EGYPT/?balance=1000000000000000000';

          if (sys.os == sys.OS.ANDROID) {// native.reflection.callStaticMethod("com/cocos/game/AppActivity", "admobBannerHide", "()V");
          }
        }

        onWebViewGameExit() {
          if (sys.os == sys.OS.ANDROID) {
            native.reflection.callStaticMethod("com/cocos/game/AppActivity", "showInterstitial", "()V");
          }

          this.owner.gameData.myCoin -= this.playGameCoinSize;
          this.owner.gameData.setUserInfoCoinAtLocalStorage();
          this.updateGameCoin();
          var webView = this.gameWebView.getChildByPath('webViewNode/WebView').getComponent(WebView);
          webView.url = 'about:blank';
          webView.enabled = false;
          this.scene.active = true;
          this.gameWebView.active = false;
          this.status = (_crd && MAIN_STATUS === void 0 ? (_reportPossibleCrUseOfMAIN_STATUS({
            error: Error()
          }), MAIN_STATUS) : MAIN_STATUS).MAIN_RUN;

          if (sys.os == sys.OS.ANDROID) {
            native.reflection.callStaticMethod("com/cocos/game/AppActivity", "changeLandscape", "()V");
            setTimeout(() => {
              // native.reflection.callStaticMethod("com/cocos/game/AppActivity", "admobBannerShow", "()V");
              this.updateMyGameListScrollView();
            }, 1000);
          }
        }

        onWebViewCommand(command, data) {
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
        } // ============================================================================================================================


        updateGameCoin() {
          this.lblGameCoin.string = 'COIN: ' + this.owner.gameData.myCoin.toString();
        } // ============================================================================================================================
        // onGameExit(event: Event, data: any) {


        onGameExitBtnClick(button) {
          console.log('onGameExit:', button.name);

          if (sys.os == sys.OS.ANDROID) {
            native.reflection.callStaticMethod("com/cocos/game/AppActivity", "showAlertDialog", "(Ljava/lang/String;Ljava/lang/String;)V", "NOTICE", "Are you game exit?");
          } // console.log('onGameExit:', data);

        } // ============================================================================================================================
        // ============================================================================================================================
        // 하단 페이지 선택 버턴


        onMyGameBtnClick(button) {
          this.myGameNode.active = true;
          this.addGameNode.active = false;
          this.addCoinNode.active = false;
          console.log('onMyGameBtnClick:', button.name);
        }

        onAddGameBtnClick(button) {
          this.myGameNode.active = false;
          this.addGameNode.active = true;
          this.addCoinNode.active = false;
          console.log('onAddGameBtnClick:', button.name);
        }

        onAddCoinBtnClick(button) {
          this.myGameNode.active = false;
          this.addGameNode.active = false;
          this.addCoinNode.active = true;
          console.log('onAddCoinBtnClick:', button.name);
        } // ============================================================================================================================
        // ============================================================================================================================


        onGamePlayBtnClick(button) {
          console.log('onGamePlayBtnClick:', button.name);
          this.setMyGameListScrollView();
          this.showGamePlayPopup(button.name);
        }

        showGamePlayPopup(gameName) {
          this.currentGameGame = gameName;

          if (this.owner.gameData.myCoin < this.playGameCoinSize) {
            this.showMessagePopup(this.gameTitle, 'Coin is not enough. Must be 1 or more.');
            return;
          }

          var gamePlayPopup = instantiate(this.gamePlayPopupPrefab);
          console.log(this.gamePlayPopupPrefab); // should_hide_in_hierarchy/fabGamePlay/gamePlayNode/bgGamePlay/playGameName/lblPlayGameName

          var lblPlayGameName = gamePlayPopup.getChildByPath('gamePlayNode/bgGamePlay/playGameName/lblPlayGameName').getComponent(Label);
          lblPlayGameName.string = gameName; // should_hide_in_hierarchy/fabGamePlay/gamePlayNode/bgGamePlay/playGameButtonNode/okNode/Button

          var okButton = gamePlayPopup.getChildByPath('gamePlayNode/bgGamePlay/playGameButtonNode/okNode/Button').getComponent(Button);
          okButton.node.on(Button.EventType.CLICK, () => {
            if (sys.os == sys.OS.ANDROID) {
              // native.reflection.callStaticMethod("com/cocos/game/AppActivity", "admobBannerHide", "()V");
              var screen = this.owner.gameData.getAddGameListScreenValue(gameName);
              console.log('screen:', screen);

              if (screen == 1) {
                this.onWebViewGameLoad();
              } else {
                native.reflection.callStaticMethod("com/cocos/game/AppActivity", "changePortrait", "()V");
                setTimeout(() => {
                  this.onWebViewGameLoad();
                }, 1000);
              }
            } else {
              this.onWebViewGameLoad();
            }

            gamePlayPopup.removeFromParent();
            gamePlayPopup.destroy();
            this.scene.getComponent(UIOpacity).opacity = 255;
          }, this); // should_hide_in_hierarchy/fabGamePlay/gamePlayNode/bgGamePlay/playGameButtonNode/cancelNode/Button

          var cancelButton = gamePlayPopup.getChildByPath('gamePlayNode/bgGamePlay/playGameButtonNode/cancelNode/Button').getComponent(Button);
          cancelButton.node.on(Button.EventType.CLICK, () => {
            gamePlayPopup.removeFromParent();
            gamePlayPopup.destroy();
            this.scene.getComponent(UIOpacity).opacity = 255;
          }, this);
          this.scene.getComponent(UIOpacity).opacity = 100;
          this.root.addChild(gamePlayPopup);
        } // ============================================================================================================================
        // 게임 REMOVE


        onGameRemoveBtnClick(button) {
          console.log('onGameRemoveBtnClick:', button.name); // this.onGameRemove(button.name);

          this.showGameRemovePopup(button.name);
        }

        onGameRemove(gameName) {
          // this.owner.gameData.myGameList Remove
          // this.owner.gameData.removeGameListUserByGameName(button.name);
          // this.myGameContent Remove
          var deleteNode = null;
          this.myGameContent.children.forEach((node, index) => {
            var lblGameName = node.getChildByPath('mainNode/gameInfoNode1/gameInfo/lblGameName/Label').getComponent(Label); // console.log(lblGameName.name);

            if (lblGameName.name == gameName) {
              deleteNode = node;
            }
          });

          if (deleteNode) {
            this.myGameContent.removeChild(deleteNode);
            this.owner.gameData.removeGameListUserByGameName(gameName); // addGameList add value change

            this.addGameContent.children.forEach((node, index) => {
              var mainNodeOpacity = node.getChildByPath('mainNode').getComponent(UIOpacity);

              if (mainNodeOpacity.name == gameName) {
                mainNodeOpacity.opacity = 255;
              }
            });
          }
        }

        showGameRemovePopup(gameName) {
          var removeGameRemovePopup = instantiate(this.gameRemovePopupPrefab); // should_hide_in_hierarchy/fabGameRemove/gameRemoveNode/bgGameRemove/removeGameName/lblRemoveGameName

          var lblRemoveGameName = removeGameRemovePopup.getChildByPath('gameRemoveNode/bgGameRemove/removeGameName/lblRemoveGameName').getComponent(Label);
          lblRemoveGameName.string = gameName; // should_hide_in_hierarchy/fabGameRemove/gameRemoveNode/bgGameRemove/removeGameButtonNode/okNode/Button

          var okButton = removeGameRemovePopup.getChildByPath('gameRemoveNode/bgGameRemove/removeGameButtonNode/okNode/Button').getComponent(Button);
          okButton.name = gameName;
          okButton.node.on(Button.EventType.CLICK, () => {
            this.onGameRemove(gameName);
            removeGameRemovePopup.removeFromParent();
            removeGameRemovePopup.destroy();
            this.scene.getComponent(UIOpacity).opacity = 255;
          }, this); // should_hide_in_hierarchy/fabGameRemove/gameRemoveNode/bgGameRemove/removeGameButtonNode/cancelNode/Button

          var cancelButton = removeGameRemovePopup.getChildByPath('gameRemoveNode/bgGameRemove/removeGameButtonNode/cancelNode/Button').getComponent(Button);
          cancelButton.node.on(Button.EventType.CLICK, () => {
            removeGameRemovePopup.removeFromParent();
            removeGameRemovePopup.destroy();
            this.scene.getComponent(UIOpacity).opacity = 255;
          }, this);
          this.scene.getComponent(UIOpacity).opacity = 100;
          this.root.addChild(removeGameRemovePopup);
        } // ============================================================================================================================
        // ============================================================================================================================


        onGameAddBtnClick(button) {
          console.log('onGameAddBtnClick:', button.name);
          this.showGameAddPopup(button.name);
        }

        onGameAdd(gameName) {
          // {gameName: 'SKYTRIP', gameRate: '-.-', gameUrl: 'SKYTRIP', screen: 2, vote: false};
          var screen = this.owner.gameData.getAddGameListScreenValue(gameName);
          var url = this.owner.gameData.getAddGameListUrlValue(gameName);
          var addGameList = {
            gameName: gameName,
            gameRate: '-.-',
            gameUrl: url,
            screen: screen,
            vote: false
          };
          this.owner.gameData.addGameListUser(addGameList);
          this.addMyGameItem(addGameList);
          this.addGameContent.children.forEach((node, index) => {
            var mainNodeOpacity = node.getChildByPath('mainNode').getComponent(UIOpacity);

            if (mainNodeOpacity.name == gameName) {
              mainNodeOpacity.opacity = 100;
            }
          });
          this.owner.gameData.myCoin -= this.addGameCoinSize;
          this.owner.gameData.setUserInfoCoinAtLocalStorage();
          this.updateGameCoin();
        }

        showGameAddPopup(gameName) {
          console.log('showGameAddPopup:', gameName, this.owner.gameData.myCoin, this.addGameCoinSize); // myCoin 사이즈 확인, isExistMyGameListByGameName

          if (this.owner.gameData.myCoin < this.addGameCoinSize) {
            this.showMessagePopup(this.gameTitle, 'Coin is not enough. Must be 10 or more.');
            return;
          }

          if (this.owner.gameData.isExistMyGameListByGameName(gameName)) {
            this.showMessagePopup(this.gameTitle, 'This game has already been added.');
            return;
          }

          var gameAddPopup = instantiate(this.gameAddPopupPrefab); // should_hide_in_hierarchy/fabGameAdd/gameAddNode/bgGameAdd/addGameName/lblAddGameName

          var addGameName = gameAddPopup.getChildByPath('gameAddNode/bgGameAdd/addGameName/lblAddGameName').getComponent(Label);
          addGameName.string = gameName; // should_hide_in_hierarchy/fabGameAdd/gameAddNode/bgGameAdd/addGameButtonNode/okNode/Button

          var okButton = gameAddPopup.getChildByPath('gameAddNode/bgGameAdd/addGameButtonNode/okNode/Button').getComponent(Button);
          okButton.node.on(Button.EventType.CLICK, () => {
            this.onGameAdd(gameName);
            gameAddPopup.removeFromParent();
            gameAddPopup.destroy();
            this.scene.getComponent(UIOpacity).opacity = 255;
          }, this); // should_hide_in_hierarchy/fabGameAdd/gameAddNode/bgGameAdd/addGameButtonNode/cancelNode/Button

          var cancelButton = gameAddPopup.getChildByPath('gameAddNode/bgGameAdd/addGameButtonNode/cancelNode/Button').getComponent(Button);
          cancelButton.node.on(Button.EventType.CLICK, () => {
            gameAddPopup.removeFromParent();
            gameAddPopup.destroy();
            this.scene.getComponent(UIOpacity).opacity = 255;
          }, this);
          this.scene.getComponent(UIOpacity).opacity = 100;
          this.root.addChild(gameAddPopup);
        } // ============================================================================================================================
        // ============================================================================================================================


        onWatchVideoBtnClick(button) {
          console.log('onGameAddBtnClick:', button.name);
          var name = button.name;

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

        setWatchVideoStatusTrue(index) {
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
        } // ============================================================================================================================
        // HammerOh 2023.06.28
        // ============================================================================================================================


        setVungleWatchVideoStatusTrue(index) {
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

        setWatchVideoStatusFalse(index) {
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
        } // ============================================================================================================================
        // HammerOh 2023.06.28
        // ============================================================================================================================


        setVungleWatchVideoStatusFalse(index) {
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
        } // ============================================================================================================================
        // HammerOh 2023.06.28
        // type 추가


        showWatchVideoPopup(coinSize, type) {
          // ============================================================================================================================
          var watchVideoPopup = instantiate(this.watchVideoPopupPrefab); // should_hide_in_hierarchy/fabWatchVideo/watchVideoNode/bgWatchVideo/watchVideoName/lblWatchVideoName

          var lblWatchVideoName = watchVideoPopup.getChildByPath('watchVideoNode/bgWatchVideo/watchVideoName/lblWatchVideoName').getComponent(Label);
          lblWatchVideoName.string = coinSize.toString() + ' COIN ADD'; // should_hide_in_hierarchy/fabWatchVideo/watchVideoNode/bgWatchVideo/watchVideoMessageNode/lblMessage

          var lblMessage = watchVideoPopup.getChildByPath('watchVideoNode/bgWatchVideo/watchVideoMessageNode/lblMessage').getComponent(Label);
          lblMessage.string = 'Do you want to earn coins after watching ads?' + '\r\n' + '(' + coinSize.toString() + ' coins are added.)'; // should_hide_in_hierarchy/fabWatchVideo/watchVideoNode/bgWatchVideo/watchVideoButtonNode/okNode/Button

          var okButton = watchVideoPopup.getChildByPath('watchVideoNode/bgWatchVideo/watchVideoButtonNode/okNode/Button').getComponent(Button);
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
          }, this); // should_hide_in_hierarchy/fabWatchVideo/watchVideoNode/bgWatchVideo/watchVideoButtonNode/cancelNode/Button

          var cancelButton = watchVideoPopup.getChildByPath('watchVideoNode/bgWatchVideo/watchVideoButtonNode/cancelNode/Button').getComponent(Button);
          cancelButton.node.on(Button.EventType.CLICK, () => {
            watchVideoPopup.removeFromParent();
            watchVideoPopup.destroy();
            this.scene.getComponent(UIOpacity).opacity = 255;
          }, this);
          this.scene.getComponent(UIOpacity).opacity = 100;
          this.root.addChild(watchVideoPopup);
        } // 보상형광고를 보고나서
        // 안드로이드에서 콜


        addSizeCoin(rewardCoin) {
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

        addVungleSizeCoin(rewardCoin) {
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
        } // ============================================================================================================================


        popupDailyPromotion() {
          var dailyPromotion = instantiate(this.dailyPromotionPrefab); // should_hide_in_hierarchy/fabDailyPromotion/dailyPromotionNode/bgDailyPromotion/gameTitleNode/lblGameName

          var lblGameName = dailyPromotion.getChildByPath('dailyPromotionNode/bgDailyPromotion/gameTitleNode/lblGameName').getComponent(Label);
          lblGameName.string = this.gameTitle; // should_hide_in_hierarchy/fabDailyPromotion/dailyPromotionNode/bgDailyPromotion/buttonNode/okNode/Button

          var button = dailyPromotion.getChildByPath('dailyPromotionNode/bgDailyPromotion/buttonNode/okNode/Button').getComponent(Button);
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
        } // ============================================================================================================================


        initBridgeFunction() {
          if (sys.os == sys.OS.ANDROID) {
            // ============================================================================================================================
            // HammerOh 2023.06.28
            native.jsbBridgeWrapper.addNativeEventListener("setVungleWatchVideoStatusTrue", rewardCoin => {
              console.log('[ADMOB]:setVungleWatchVideoStatusTrue:', rewardCoin);
              this.setVungleWatchVideoStatusTrue(parseInt(rewardCoin));
            });
            native.jsbBridgeWrapper.addNativeEventListener("setVungleWatchVideoStatusFalse", rewardCoin => {
              console.log('[ADMOB]:setVungleWatchVideoStatusFalse:', rewardCoin);
              this.setVungleWatchVideoStatusFalse(parseInt(rewardCoin));
            });
            native.jsbBridgeWrapper.addNativeEventListener("addVungleSizeCoin", rewardCoin => {
              this.addVungleSizeCoin(parseInt(rewardCoin));
            }); // ============================================================================================================================

            native.jsbBridgeWrapper.addNativeEventListener("addSizeCoin", rewardCoin => {
              this.addSizeCoin(parseInt(rewardCoin));
            });
            native.jsbBridgeWrapper.addNativeEventListener("setWatchVideoStatusTrue", rewardCoin => {
              console.log('[ADMOB]:setWatchVideoStatusTrue:', rewardCoin);
              this.setWatchVideoStatusTrue(parseInt(rewardCoin));
            });
            native.jsbBridgeWrapper.addNativeEventListener("setWatchVideoStatusFalse", rewardCoin => {
              console.log('[ADMOB]:setWatchVideoStatusFalse:', rewardCoin);
              this.setWatchVideoStatusFalse(parseInt(rewardCoin));
            });
            native.jsbBridgeWrapper.addNativeEventListener("setWebViewUrl", () => {
              this.onWebViewGameLoad();
            });
            native.jsbBridgeWrapper.addNativeEventListener("onGameClose", () => {
              this.onWebViewGameExit();
            });
          }
        } // ============================================================================================================================
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
        } // ============================================================================================================================


        updateWatchVideoTimeLabel() {
          var lastTime1 = this.owner.gameData.watchVideoCoinTime1 + this.owner.gameData.watchVideoCoinTimeRemain1;
          var lastTime2 = this.owner.gameData.watchVideoCoinTime2 + this.owner.gameData.watchVideoCoinTimeRemain2;
          var lastTime3 = this.owner.gameData.watchVideoCoinTime3 + this.owner.gameData.watchVideoCoinTimeRemain3;
          var nowTime = new Date().getTime();

          if (this.watchVideoStatus1) {
            if (lastTime1 - nowTime < 0) {
              this.lblAddCoinTime1.string = 'OK';
              this.lblAddCoinTime1.color = Color.YELLOW;
            } else {
              this.lblAddCoinTime1.string = 'REMAIN ' + (_crd && msToTime === void 0 ? (_reportPossibleCrUseOfmsToTime({
                error: Error()
              }), msToTime) : msToTime)(lastTime1 - nowTime);
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
              this.lblAddCoinTime2.string = 'REMAIN ' + (_crd && msToTime === void 0 ? (_reportPossibleCrUseOfmsToTime({
                error: Error()
              }), msToTime) : msToTime)(lastTime2 - nowTime);
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
              this.lblAddCoinTime3.string = 'REMAIN ' + (_crd && msToTime === void 0 ? (_reportPossibleCrUseOfmsToTime({
                error: Error()
              }), msToTime) : msToTime)(lastTime3 - nowTime);
              this.lblAddCoinTime3.color = Color.RED;
            }
          } else {
            this.lblAddCoinTime3.string = 'NOT LOADED';
            this.lblAddCoinTime3.color = Color.GRAY;
          } // ============================================================================================================================
          // HammerOh 2023.06.28


          var lastTime4 = this.owner.gameData.watchVideoCoinTime4 + this.owner.gameData.watchVideoCoinTimeRemain4;
          var lastTime5 = this.owner.gameData.watchVideoCoinTime5 + this.owner.gameData.watchVideoCoinTimeRemain5;
          var lastTime6 = this.owner.gameData.watchVideoCoinTime6 + this.owner.gameData.watchVideoCoinTimeRemain6;

          if (this.watchVideoStatus4) {
            if (lastTime4 - nowTime < 0) {
              this.lblAddCoinTime4.string = 'OK';
              this.lblAddCoinTime4.color = Color.YELLOW;
            } else {
              this.lblAddCoinTime4.string = 'REMAIN ' + (_crd && msToTime === void 0 ? (_reportPossibleCrUseOfmsToTime({
                error: Error()
              }), msToTime) : msToTime)(lastTime4 - nowTime);
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
              this.lblAddCoinTime5.string = 'REMAIN ' + (_crd && msToTime === void 0 ? (_reportPossibleCrUseOfmsToTime({
                error: Error()
              }), msToTime) : msToTime)(lastTime5 - nowTime);
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
              this.lblAddCoinTime6.string = 'REMAIN ' + (_crd && msToTime === void 0 ? (_reportPossibleCrUseOfmsToTime({
                error: Error()
              }), msToTime) : msToTime)(lastTime6 - nowTime);
              this.lblAddCoinTime6.color = Color.RED;
            }
          } else {
            this.lblAddCoinTime6.string = 'NOT LOADED';
            this.lblAddCoinTime6.color = Color.GRAY;
          } // ============================================================================================================================

        }

        updateDailyPromtion() {
          if (this.owner.gameData.checkDailyPromtion()) {
            this.popupDailyPromotion();
          }
        } // ============================================================================================================================
        // ============================================================================================================================


        showMessagePopup(title, msg) {
          var messageBox = instantiate(this.messageBoxPrefab); // should_hide_in_hierarchy/fabMessageBox/messageBoxNode/bgMessageBox/messageBoxTitle/lblMessageBoxTitle

          var lblMessageBoxTitle = messageBox.getChildByPath('messageBoxNode/bgMessageBox/messageBoxTitle/lblMessageBoxTitle').getComponent(Label);
          lblMessageBoxTitle.string = title; // should_hide_in_hierarchy/fabMessageBox/messageBoxNode/bgMessageBox/messageBoixMessageNode/lblMessageBoxMessage

          var lblMessageBoxMessage = messageBox.getChildByPath('messageBoxNode/bgMessageBox/messageBoixMessageNode/lblMessageBoxMessage').getComponent(Label);
          lblMessageBoxMessage.string = msg; // should_hide_in_hierarchy/fabMessageBox/messageBoxNode/bgMessageBox/messageBoxButtonNode/okNode/Button

          var okButton = messageBox.getChildByPath('messageBoxNode/bgMessageBox/messageBoxButtonNode/okNode/Button').getComponent(Button);
          okButton.node.on(Button.EventType.CLICK, () => {
            messageBox.removeFromParent();
            messageBox.destroy();
            this.scene.getComponent(UIOpacity).opacity = 255;
          }, this);
          this.scene.getComponent(UIOpacity).opacity = 100;
          this.root.addChild(messageBox);
        } // ============================================================================================================================


        update(deltaTime) {
          switch (this.status) {
            case (_crd && MAIN_STATUS === void 0 ? (_reportPossibleCrUseOfMAIN_STATUS({
              error: Error()
            }), MAIN_STATUS) : MAIN_STATUS).PRELOAD_STAND:
              if (this.resourceCount >= this.resourceCountMax) {
                this.status = (_crd && MAIN_STATUS === void 0 ? (_reportPossibleCrUseOfMAIN_STATUS({
                  error: Error()
                }), MAIN_STATUS) : MAIN_STATUS).INIT;
              }

              break;

            case (_crd && MAIN_STATUS === void 0 ? (_reportPossibleCrUseOfMAIN_STATUS({
              error: Error()
            }), MAIN_STATUS) : MAIN_STATUS).INIT:
              this.initMainScene();
              this.initWebView();
              this.status = (_crd && MAIN_STATUS === void 0 ? (_reportPossibleCrUseOfMAIN_STATUS({
                error: Error()
              }), MAIN_STATUS) : MAIN_STATUS).INIT_STAND;
              break;

            case (_crd && MAIN_STATUS === void 0 ? (_reportPossibleCrUseOfMAIN_STATUS({
              error: Error()
            }), MAIN_STATUS) : MAIN_STATUS).INIT_STAND:
              this.initMyGameListScrollView();
              this.status = (_crd && MAIN_STATUS === void 0 ? (_reportPossibleCrUseOfMAIN_STATUS({
                error: Error()
              }), MAIN_STATUS) : MAIN_STATUS).MAIN_RUN;
              break;

            case (_crd && MAIN_STATUS === void 0 ? (_reportPossibleCrUseOfMAIN_STATUS({
              error: Error()
            }), MAIN_STATUS) : MAIN_STATUS).MAIN_RUN:
              this.updateDailyPromtion();
              this.updateWatchVideoTimeLabel();
              break;

            case (_crd && MAIN_STATUS === void 0 ? (_reportPossibleCrUseOfMAIN_STATUS({
              error: Error()
            }), MAIN_STATUS) : MAIN_STATUS).WEBVIEW_RUN:
              break;
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9de63d4dff3e38a2e0cafe4efd25a78e640f7ebf.js.map