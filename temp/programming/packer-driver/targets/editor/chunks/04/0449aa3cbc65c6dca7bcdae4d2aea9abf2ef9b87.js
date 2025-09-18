System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, TGameClass, TSceneClass, TSceneManager, _crd, PRELOAD_STATUS, MAIN_STATUS;

  function msToTime(duration) {
    //@ts-ignore
    var milliseconds = parseInt(duration % 1000 / 100),
        seconds = Math.floor(duration / 1000 % 60),
        minutes = Math.floor(duration / (1000 * 60) % 60),
        hours = Math.floor(duration / (1000 * 60 * 60) % 24); //@ts-ignore

    hours = hours < 10 ? "0" + hours : hours; //@ts-ignore

    minutes = minutes < 10 ? "0" + minutes : minutes; //@ts-ignore

    seconds = seconds < 10 ? "0" + seconds : seconds; // return hours + ":" + minutes + ":" + seconds + "." + milliseconds;

    return hours + ":" + minutes + ":" + seconds; // return minutes + ":" + seconds;
  } // ====================================================================================================================================


  _export({
    TGameClass: void 0,
    TSceneClass: void 0,
    TSceneManager: void 0,
    msToTime: msToTime
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ed48aP83e9AKrk3LpTALgiW", "utils", undefined);

      __checkObsolete__(['Component', 'Node', 'Prefab']);

      _export("PRELOAD_STATUS", PRELOAD_STATUS = /*#__PURE__*/function (PRELOAD_STATUS) {
        PRELOAD_STATUS[PRELOAD_STATUS["NONE"] = 0] = "NONE";
        PRELOAD_STATUS[PRELOAD_STATUS["INIT"] = 1] = "INIT";
        PRELOAD_STATUS[PRELOAD_STATUS["INIT_STAND"] = 2] = "INIT_STAND";
        PRELOAD_STATUS[PRELOAD_STATUS["PRELOAD"] = 3] = "PRELOAD";
        PRELOAD_STATUS[PRELOAD_STATUS["PRELOAD_STAND"] = 4] = "PRELOAD_STAND";
        PRELOAD_STATUS[PRELOAD_STATUS["PRELOAD_FINISH"] = 5] = "PRELOAD_FINISH";
        return PRELOAD_STATUS;
      }({}));

      _export("MAIN_STATUS", MAIN_STATUS = /*#__PURE__*/function (MAIN_STATUS) {
        MAIN_STATUS[MAIN_STATUS["NONE"] = 0] = "NONE";
        MAIN_STATUS[MAIN_STATUS["INIT"] = 1] = "INIT";
        MAIN_STATUS[MAIN_STATUS["INIT_STAND"] = 2] = "INIT_STAND";
        MAIN_STATUS[MAIN_STATUS["PRELOAD"] = 3] = "PRELOAD";
        MAIN_STATUS[MAIN_STATUS["PRELOAD_STAND"] = 4] = "PRELOAD_STAND";
        MAIN_STATUS[MAIN_STATUS["PRELOAD_FINISH"] = 5] = "PRELOAD_FINISH";
        MAIN_STATUS[MAIN_STATUS["MAIN_RUN"] = 6] = "MAIN_RUN";
        MAIN_STATUS[MAIN_STATUS["WEBVIEW_RUN"] = 7] = "WEBVIEW_RUN";
        return MAIN_STATUS;
      }({})); // ====================================================================================================================================


      _export("TGameClass", TGameClass = class TGameClass {
        constructor(root) {
          this.root = void 0;
          this.sceneManager = void 0;
          this.root = root;
          this.sceneManager = new TSceneManager();
        }

      });

      _export("TSceneClass", TSceneClass = class TSceneClass {
        constructor(root, sceneManager) {
          this.root = void 0;
          this.scene = void 0;
          this.sceneManager = void 0;
          this.active = void 0;
          this.root = root;
          this.sceneManager = sceneManager;
          this.active = false;
        }

        startScene() {}

        restartScene() {}

        endScene() {}

        loop(deltaTime) {
          if (!this.active) return;
          this.animate(deltaTime);
          this.update(deltaTime);
          this.draw(deltaTime);
        }

        update(deltaTime) {}

        animate(deltaTime) {}

        draw(deltaTime) {}

      });

      _export("TSceneManager", TSceneManager = class TSceneManager {
        constructor() {
          this.sceneLists = void 0;
          this.currentScene = void 0;
          this.sceneLists = new Map();
        }

        addScene(sceneName, scene) {
          this.sceneLists.set(sceneName, scene);
        }

        setCurrentScene(sceneName) {
          this.currentScene = this.sceneLists.get(sceneName);
          this.currentScene.startScene();
          this.currentScene.active = true;
          console.log('setCurrentScene:', this.currentScene);
        }

        changeCurrentScene(sceneName) {
          this.currentScene.active = false;
          this.currentScene.scene.removeFromParent();
          this.setCurrentScene(sceneName);
        }

        loop(deltaTime) {
          this.currentScene.loop(deltaTime);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0449aa3cbc65c6dca7bcdae4d2aea9abf2ef9b87.js.map