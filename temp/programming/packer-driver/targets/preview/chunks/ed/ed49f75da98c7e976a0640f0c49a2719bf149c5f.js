System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, game, WebView, TGameClass, TPreloadSceneClass, TGameDataClass, TMainSceneClass, TWebGameClass, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, rootScene;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfTGameClass(extras) {
    _reporterNs.report("TGameClass", "./utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTPreloadSceneClass(extras) {
    _reporterNs.report("TPreloadSceneClass", "./preloadSceneClass", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTGameDataClass(extras) {
    _reporterNs.report("TGameDataClass", "./gameDataClass", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTMainSceneClass(extras) {
    _reporterNs.report("TMainSceneClass", "./mainSceneClass", _context.meta, extras);
  }

  _export("TWebGameClass", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      game = _cc.game;
      WebView = _cc.WebView;
    }, function (_unresolved_2) {
      TGameClass = _unresolved_2.TGameClass;
    }, function (_unresolved_3) {
      TPreloadSceneClass = _unresolved_3.TPreloadSceneClass;
    }, function (_unresolved_4) {
      TGameDataClass = _unresolved_4.TGameDataClass;
    }, function (_unresolved_5) {
      TMainSceneClass = _unresolved_5.TMainSceneClass;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6663ejSWPNKr6QSyChKvJHL", "rootScene", undefined);

      __checkObsolete__(['_decorator', 'Component', 'game', 'Node', 'SpriteFrame', 'WebView']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("rootScene", rootScene = (_dec = ccclass('rootScene'), _dec2 = property(WebView), _dec(_class = (_class2 = class rootScene extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "webView", _descriptor, this);

          this.webGame = void 0;
        }

        start() {
          this.webGame = new TWebGameClass(this.node, this.webView);
          this.webView.setJavascriptInterfaceScheme(this.webGame.gameData.WEBVIEW_SCHEME); //@ts-ignore

          this.webView.setOnJSCallback((target, url) => {
            console.log(url);
            console.log('setOnJSCallback url :', url);
            var str = url.replace(this.webGame.gameData.WEBVIEW_SCHEME + '://', ''); // str === 'a=1&b=2'

            str = atob(str);
            console.log('setOnJSCallback str :', str);
            var jsonStr;
            var command;
            var data;

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

        update(deltaTime) {
          try {
            this.webGame.loop(deltaTime);
          } catch (error) {
            console.log(error);
            game.pause();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "webView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _export("TWebGameClass", TWebGameClass = class TWebGameClass extends (_crd && TGameClass === void 0 ? (_reportPossibleCrUseOfTGameClass({
        error: Error()
      }), TGameClass) : TGameClass) {
        constructor(root, webView) {
          super(root);
          this.gameImageLists = void 0;
          this.gameData = void 0;
          this.preloadScene = void 0;
          this.mainScene = void 0;
          this.webView = void 0;
          this.webView = webView;
          this.webView.node.removeFromParent();
          this.gameImageLists = new Map();
          this.gameData = new (_crd && TGameDataClass === void 0 ? (_reportPossibleCrUseOfTGameDataClass({
            error: Error()
          }), TGameDataClass) : TGameDataClass)(this);
          this.preloadScene = new (_crd && TPreloadSceneClass === void 0 ? (_reportPossibleCrUseOfTPreloadSceneClass({
            error: Error()
          }), TPreloadSceneClass) : TPreloadSceneClass)(this.root, this.sceneManager, this);
          this.mainScene = new (_crd && TMainSceneClass === void 0 ? (_reportPossibleCrUseOfTMainSceneClass({
            error: Error()
          }), TMainSceneClass) : TMainSceneClass)(this.root, this.sceneManager, this);
          this.sceneManager.addScene('PRELOAD', this.preloadScene);
          this.sceneManager.addScene('MAIN_SCENE', this.mainScene);
          this.sceneManager.setCurrentScene('PRELOAD');
        }

        loop(deltaTime) {
          this.sceneManager.loop(deltaTime);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ed49f75da98c7e976a0640f0c49a2719bf149c5f.js.map