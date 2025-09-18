System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Prefab, SpriteFrame, instantiate, resources, PRELOAD_STATUS, TSceneClass, TPreloadSceneClass, _crd;

  function _reportPossibleCrUseOfPRELOAD_STATUS(extras) {
    _reporterNs.report("PRELOAD_STATUS", "./utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTSceneClass(extras) {
    _reporterNs.report("TSceneClass", "./utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTSceneManager(extras) {
    _reporterNs.report("TSceneManager", "./utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTWebGameClass(extras) {
    _reporterNs.report("TWebGameClass", "./rootScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTGameDataClass(extras) {
    _reporterNs.report("TGameDataClass", "./gameDataClass", _context.meta, extras);
  }

  _export("TPreloadSceneClass", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      Prefab = _cc.Prefab;
      SpriteFrame = _cc.SpriteFrame;
      instantiate = _cc.instantiate;
      resources = _cc.resources;
    }, function (_unresolved_2) {
      PRELOAD_STATUS = _unresolved_2.PRELOAD_STATUS;
      TSceneClass = _unresolved_2.TSceneClass;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f64b4/uWpBNvLke5LnKiGBU", "preloadSceneClass", undefined);

      __checkObsolete__(['Label', 'Node', 'Prefab', 'SpriteFrame', 'game', 'instantiate', 'resources']);

      _export("TPreloadSceneClass", TPreloadSceneClass = class TPreloadSceneClass extends (_crd && TSceneClass === void 0 ? (_reportPossibleCrUseOfTSceneClass({
        error: Error()
      }), TSceneClass) : TSceneClass) {
        constructor(root, sceneManager, owner) {
          super(root, sceneManager);
          this.preloadPrefab = void 0;
          this.lblResourceLoad = void 0;
          this.resourceCount = void 0;
          this.resourceCountMax = void 0;
          this.status = void 0;
          this.owner = void 0;
          this.gameData = void 0;
          this.status = (_crd && PRELOAD_STATUS === void 0 ? (_reportPossibleCrUseOfPRELOAD_STATUS({
            error: Error()
          }), PRELOAD_STATUS) : PRELOAD_STATUS).NONE;
          this.resourceCount = 0;
          this.resourceCountMax = 24;
          this.owner = owner;
          this.gameData = this.owner.gameData;
        }

        startScene() {
          this.preload();
        }

        preload() {
          resources.load('prefab/scene/fabPreloadScene', Prefab, (err, prefab) => {
            if (err) {
              console.log(err);
            } else {
              this.preloadPrefab = prefab;
              this.status = (_crd && PRELOAD_STATUS === void 0 ? (_reportPossibleCrUseOfPRELOAD_STATUS({
                error: Error()
              }), PRELOAD_STATUS) : PRELOAD_STATUS).INIT;
            }
          });
        }

        gameImageLoad(gameName) {
          resources.load('image/gameList/' + gameName + '/spriteFrame', SpriteFrame, (err, data) => {
            if (err) {
              console.log(err);
            } else {
              this.owner.gameImageLists.set(gameName, data);
              this.resourceCount++;
              this.updateResourceLoadCount();
            }
          });
        }

        init() {
          this.scene = instantiate(this.preloadPrefab);
          this.lblResourceLoad = this.scene.getChildByPath('preloadScene/lblResourceLoad').getComponent(Label);
          this.lblResourceLoad.string = 'RESOURCE LOAD (000/000)';
          this.root.addChild(this.scene);
        }

        updateResourceLoadCount() {
          var count = this.resourceCount.toString();
          count = ("00" + count).slice(-3);
          var countMax = this.resourceCountMax.toString();
          countMax = ("00" + countMax).slice(-3);
          this.lblResourceLoad.string = 'RESOURCE LOAD (' + count + '/' + countMax + ')';
        }

        update(deltaTime) {
          switch (this.status) {
            case (_crd && PRELOAD_STATUS === void 0 ? (_reportPossibleCrUseOfPRELOAD_STATUS({
              error: Error()
            }), PRELOAD_STATUS) : PRELOAD_STATUS).INIT:
              this.init();
              this.updateResourceLoadCount();
              this.status = (_crd && PRELOAD_STATUS === void 0 ? (_reportPossibleCrUseOfPRELOAD_STATUS({
                error: Error()
              }), PRELOAD_STATUS) : PRELOAD_STATUS).PRELOAD;
              break;

            case (_crd && PRELOAD_STATUS === void 0 ? (_reportPossibleCrUseOfPRELOAD_STATUS({
              error: Error()
            }), PRELOAD_STATUS) : PRELOAD_STATUS).INIT_STAND:
              break;

            case (_crd && PRELOAD_STATUS === void 0 ? (_reportPossibleCrUseOfPRELOAD_STATUS({
              error: Error()
            }), PRELOAD_STATUS) : PRELOAD_STATUS).PRELOAD:
              this.gameImageLoad('BOX_BOB');
              this.gameImageLoad('TETRA_BLOCKS');
              this.gameImageLoad('BLOCK_SLIDER');
              this.gameImageLoad('MONSTER_MATCH');
              this.gameImageLoad('HEAP_UP_BOX');
              this.gameImageLoad('PICO_TETRIS');
              this.gameImageLoad('MY_T3TR1S');
              this.gameImageLoad('BRICK_BLOCK_GAME');
              this.gameImageLoad('SLIDING_BRICKS');
              this.gameImageLoad('BLOCKS_TRIANGLE_PUZZLE');
              this.gameImageLoad('HEXAGON_FALL');
              this.gameImageLoad('BLOCKS_FILL');
              this.gameImageLoad('WOODEN_SLIDE');
              this.gameImageLoad('BLOCK_UP');
              this.gameImageLoad('MAGNETIC_BLOCKS');
              this.gameImageLoad('MAGIC_HEROBRINE');
              this.gameImageLoad('BLOCKS_MUST_FALL');
              this.gameImageLoad('STACKY_STACK');
              this.gameImageLoad('JELLY_BLOCKS');
              this.gameImageLoad('PUSH_OUT');
              this.gameImageLoad('ZERO_SQUARES');
              this.gameImageLoad('HEXA_JUNGLE');
              this.gameImageLoad('SPINNING_BLOCK');
              this.gameImageLoad('SWITCHWAYS_DIMENSIONS'); // this.gameData.getGameListAllAtServer();
              // this.gameData.getGameListAllAtLocalStorage();

              this.gameData.setGameListAllDefault();
              this.gameData.getGameListUserAtLocalStorage();
              this.gameData.getUserInfoCoinAtLocalStorate();
              this.gameData.getDailyPromotionAtLocalStorate();
              this.gameData.setAddGameListAddValueAll();
              this.gameData.getWatchVideoCoinTimeAll();
              this.gameData.setGameListRankAllDefault();
              this.status = (_crd && PRELOAD_STATUS === void 0 ? (_reportPossibleCrUseOfPRELOAD_STATUS({
                error: Error()
              }), PRELOAD_STATUS) : PRELOAD_STATUS).PRELOAD_STAND;
              break;

            case (_crd && PRELOAD_STATUS === void 0 ? (_reportPossibleCrUseOfPRELOAD_STATUS({
              error: Error()
            }), PRELOAD_STATUS) : PRELOAD_STATUS).PRELOAD_STAND:
              if (this.resourceCount >= this.resourceCountMax) {
                this.status = (_crd && PRELOAD_STATUS === void 0 ? (_reportPossibleCrUseOfPRELOAD_STATUS({
                  error: Error()
                }), PRELOAD_STATUS) : PRELOAD_STATUS).NONE;
                this.sceneManager.changeCurrentScene('MAIN_SCENE');
              }

              break;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=127a7ab032a1801b4bf3fb45f13e6a787dac35f4.js.map