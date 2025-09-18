import { Label, Node, Prefab, SpriteFrame, game, instantiate, resources } from "cc"
import { PRELOAD_STATUS, TSceneClass, TSceneManager } from "./utils";
import { TWebGameClass } from "./rootScene";
import { TGameDataClass } from "./gameDataClass";

export class TPreloadSceneClass extends TSceneClass {
    preloadPrefab: Prefab;
    lblResourceLoad: Label;
    resourceCount: number;
    resourceCountMax: number;
    status: PRELOAD_STATUS;
    owner: TWebGameClass;

    gameData: TGameDataClass;
    constructor(root: Node, sceneManager: TSceneManager, owner: TWebGameClass) {
        super(root, sceneManager);
        this.status = PRELOAD_STATUS.NONE;
        this.resourceCount = 0;
        this.resourceCountMax = 24;
        this.owner = owner;
        this.gameData = this.owner.gameData;
    }

    startScene(): void {
        this.preload();
    }

    preload() {
        resources.load('prefab/scene/fabPreloadScene', Prefab, (err: Error, prefab: Prefab) => {
            if (err) {
                console.log(err);
            } else {
                this.preloadPrefab = prefab;
                this.status = PRELOAD_STATUS.INIT;
            }
        });
    }

    gameImageLoad(gameName: string) {
        resources.load('image/gameList/' + gameName + '/spriteFrame', SpriteFrame, (err: Error, data: SpriteFrame) => {
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
        this.lblResourceLoad.string = 'RESOURCE LOAD (000/000)'
        this.root.addChild(this.scene);
    }

    updateResourceLoadCount() {
        let count = this.resourceCount.toString();
        count = ("00" + count).slice(-3);
        let countMax = this.resourceCountMax.toString();
        countMax = ("00" + countMax).slice(-3);
        this.lblResourceLoad.string = 'RESOURCE LOAD (' + count + '/' + countMax + ')';
    }

    update(deltaTime: number): void {
        switch (this.status) {
            case PRELOAD_STATUS.INIT:
                this.init();
                this.updateResourceLoadCount();
                this.status = PRELOAD_STATUS.PRELOAD;
                break;
            case PRELOAD_STATUS.INIT_STAND:
                break;
            case PRELOAD_STATUS.PRELOAD:

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
                this.gameImageLoad('SWITCHWAYS_DIMENSIONS');

                // this.gameData.getGameListAllAtServer();
                // this.gameData.getGameListAllAtLocalStorage();
                this.gameData.setGameListAllDefault();
                this.gameData.getGameListUserAtLocalStorage();
                this.gameData.getUserInfoCoinAtLocalStorate();
                this.gameData.getDailyPromotionAtLocalStorate();
                this.gameData.setAddGameListAddValueAll();
                this.gameData.getWatchVideoCoinTimeAll();
                this.gameData.setGameListRankAllDefault();
                this.status = PRELOAD_STATUS.PRELOAD_STAND;
                break;

            case PRELOAD_STATUS.PRELOAD_STAND:
                if (this.resourceCount >= this.resourceCountMax) {
                    this.status = PRELOAD_STATUS.NONE;
                    this.sceneManager.changeCurrentScene('MAIN_SCENE');
                }
                break;
        }
    }
}