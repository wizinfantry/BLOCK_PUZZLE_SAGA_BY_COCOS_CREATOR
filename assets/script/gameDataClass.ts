import { TWebGameClass } from "./rootScene";
import { ADDGAME, MYGAME } from "./utils";

export class TGameDataClass {
    owner: TWebGameClass;
    myGameList: MYGAME[] = Array<MYGAME>();
    myCoin: number;
    addGameList: ADDGAME[] = Array<ADDGAME>();
    dailyPromotion: string;
    gameRankList: string[];

    watchVideoCoinTime1: number;
    watchVideoCoinTime2: number;
    watchVideoCoinTime3: number;
    watchVideoCoinTimeRemain1 = (1000 * 60 * 5);
    watchVideoCoinTimeRemain2 = (1000 * 60 * 10);
    watchVideoCoinTimeRemain3 = (1000 * 60 * 15);

    // ============================================================================================================================
    // HammerOh 2023.06.28
    watchVideoCoinTime4: number;
    watchVideoCoinTime5: number;
    watchVideoCoinTime6: number;
    watchVideoCoinTimeRemain4 = (1000 * 60 * 5);
    watchVideoCoinTimeRemain5 = (1000 * 60 * 10);
    watchVideoCoinTimeRemain6 = (1000 * 60 * 15);
    // ============================================================================================================================



    GAME_URL = 'https://game.gameslot.win/minigame/8323cf44a5755bd7c51bfc804c37a288a5e8d570/';
    // GAME_URL = 'http://138.0.0.3:1234/block/NEW_WWW/';
    GAME_LIST_URL = 'http://127.0.0.1:9301';
    GAME_LIST_NAME = 'blockpuzzlesaga:';

    MYGAME_KEY = this.GAME_LIST_NAME + 'my_game_list';
    ADDGAME_KEY = this.GAME_LIST_NAME + 'add_game_list';
    NO_LIST = 'NO_LIST';
    USER_COIN_KEY = this.GAME_LIST_NAME + 'user_coin';
    DAILY_PROMOTION_KEY = this.GAME_LIST_NAME + 'daily_promotion';

    WEBVIEW_SCHEME = 'blockpuzzlesaga';
    constructor(owner: TWebGameClass) {
        this.owner = owner;
        this.myGameList = [];
        this.addGameList = [];
        this.gameRankList = [];
        this.myCoin = 0;
    }

    // ============================================================================================================================
    // Player Unique Code Get, Set
    // KEY: UNIQUECODE
    getUserUniqueCode(): string {
        return localStorage.getItem('UNIQUECODE');
    }
    setUserUniqueCode(uniqueCode: string) {
        localStorage.setItem('UNIQUECODE', uniqueCode);
    }
    setUserUniqueCodeAtServer(uniqueCode: string) {}

    // ============================================================================================================================
    // GameList Get, Set
    // All, User (LocalStorage, Server)
    // All Game List Get
    getGameListAllAtLocalStorage() {
        let addGameList = null;
        addGameList = localStorage.getItem(this.ADDGAME_KEY);
        if (addGameList == null) {
            this.setGameListAllDefault();
        } else {
            try {
                this.addGameList = JSON.parse(addGameList);
            } catch (error) {
                this.setGameListAllDefault();
            }
        }
        this.setGameListAllAtLocalStorage();
        console.log(this.addGameList);
    }
    getGameListAllAtServer() {}
    setGameListAllDefault() {

        /*
        */

        this.addGameList = [];

        this.addGameList.push({gameName: 'BOX_BOB', gameRate: '-.-', gameUrl: 'BOX_BOB', screen: 2, add: false});
        this.addGameList.push({gameName: 'TETRA_BLOCKS', gameRate: '-.-', gameUrl: 'TETRA_BLOCKS', screen: 2, add: false});
        this.addGameList.push({gameName: 'BLOCK_SLIDER', gameRate: '-.-', gameUrl: 'BLOCK_SLIDER', screen: 2, add: false});
        
        this.addGameList.push({gameName: 'MONSTER_MATCH', gameRate: '-.-', gameUrl: 'MONSTER_MATCH', screen: 2, add: false});
        this.addGameList.push({gameName: 'HEAP_UP_BOX', gameRate: '-.-', gameUrl: 'HEAP_UP_BOX', screen: 2, add: false});

        this.addGameList.push({gameName: 'PICO_TETRIS', gameRate: '-.-', gameUrl: 'PICO_TETRIS', screen: 2, add: false});
        this.addGameList.push({gameName: 'MY_T3TR1S', gameRate: '-.-', gameUrl: 'MY_T3TR1S', screen: 2, add: false});

        this.addGameList.push({gameName: 'BRICK_BLOCK_GAME', gameRate: '-.-', gameUrl: 'BRICK_BLOCK_GAME', screen: 2, add: false});
        this.addGameList.push({gameName: 'SLIDING_BRICKS', gameRate: '-.-', gameUrl: 'SLIDING_BRICKS', screen: 2, add: false});

        this.addGameList.push({gameName: 'BLOCKS_TRIANGLE_PUZZLE', gameRate: '-.-', gameUrl: 'BLOCKS_TRIANGLE_PUZZLE', screen: 2, add: false});
        this.addGameList.push({gameName: 'HEXAGON_FALL', gameRate: '-.-', gameUrl: 'HEXAGON_FALL', screen: 2, add: false});
        this.addGameList.push({gameName: 'BLOCKS_FILL', gameRate: '-.-', gameUrl: 'BLOCKS_FILL', screen: 1, add: false});
        this.addGameList.push({gameName: 'WOODEN_SLIDE', gameRate: '-.-', gameUrl: 'WOODEN_SLIDE', screen: 2, add: false});
        // HammerOh 2023.06.29
        this.addGameList.push({gameName: 'BLOCK_UP', gameRate: '-.-', gameUrl: 'BLOCK_UP', screen: 2, add: false});

        this.addGameList.push({gameName: 'JELLY_BLOCKS', gameRate: '-.-', gameUrl: 'JELLY_BLOCKS', screen: 2, add: false});
        this.addGameList.push({gameName: 'SPINNING_BLOCK', gameRate: '-.-', gameUrl: 'SPINNING_BLOCK', screen: 2, add: false});
        this.addGameList.push({gameName: 'HEXA_JUNGLE', gameRate: '-.-', gameUrl: 'HEXA_JUNGLE', screen: 2, add: false});
        this.addGameList.push({gameName: 'PUSH_OUT', gameRate: '-.-', gameUrl: 'PUSH_OUT', screen: 2, add: false});
        this.addGameList.push({gameName: 'MAGNETIC_BLOCKS', gameRate: '-.-', gameUrl: 'MAGNETIC_BLOCKS', screen: 2, add: false});

        this.addGameList.push({gameName: 'ZERO_SQUARES', gameRate: '-.-', gameUrl: 'ZERO_SQUARES', screen: 1, add: false});
        this.addGameList.push({gameName: 'SWITCHWAYS_DIMENSIONS', gameRate: '-.-', gameUrl: 'SWITCHWAYS_DIMENSIONS', screen: 1, add: false});
        this.addGameList.push({gameName: 'STACKY_STACK', gameRate: '-.-', gameUrl: 'STACKY_STACK', screen: 1, add: false});
        this.addGameList.push({gameName: 'BLOCKS_MUST_FALL', gameRate: '-.-', gameUrl: 'BLOCKS_MUST_FALL', screen: 1, add: false});
        this.addGameList.push({gameName: 'MAGIC_HEROBRINE', gameRate: '-.-', gameUrl: 'MAGIC_HEROBRINE', screen: 1, add: false});



        console.log(this.addGameList);
    }
    setGameListAllAtLocalStorage() {
        localStorage.setItem(this.ADDGAME_KEY, JSON.stringify(this.addGameList));
    }

    setGameListRankAllDefault() {
        this.gameRankList = [];
        // this.gameRankList.push('PUSH_OUT');
        // this.gameRankList.push('STACKY_STACK');
        // this.gameRankList.push('BLOCK_UP');
        // this.gameRankList.push('WOODEN_SLIDE');
        // this.gameRankList.push('HEXAGON_FALL');
        // this.gameRankList.push('SLIDING_BRICKS');
    }

    isExistGameListRankByGameName(gameName: string): boolean {
        let ret = false;
        this.gameRankList.forEach((value: string, index: number) => {
            if (value == gameName) {
                ret = true;
            }
        })
        return ret;
    }

    // ============================================================================================================================
    // User Game List Get, Set
    getGameListUserAtLocalStorage() {
        let myGameList = null;
        myGameList = localStorage.getItem(this.MYGAME_KEY);
        if (myGameList == null || myGameList == undefined) {
            this.setGameListUserDefault();
        } else if (myGameList == this.NO_LIST) {
            this.myGameList = [];
        } else {
            try {
                this.myGameList = JSON.parse(myGameList);
            } catch (error) {
                this.setGameListUserDefault();
            }
        }
    }
    setGameListUserDefault() {
        this.myGameList = [];
        this.myGameList.push({gameName: 'ZERO_SQUARES', gameRate: '-.-', gameUrl: 'ZERO_SQUARES', screen: 1, vote: false});
        this.myGameList.push({gameName: 'SWITCHWAYS_DIMENSIONS', gameRate: '-.-', gameUrl: 'SWITCHWAYS_DIMENSIONS', screen: 1, vote: false});
        this.myGameList.push({gameName: 'STACKY_STACK', gameRate: '-.-', gameUrl: 'STACKY_STACK', screen: 1, vote: false});
        this.myGameList.push({gameName: 'BLOCKS_MUST_FALL', gameRate: '-.-', gameUrl: 'BLOCKS_MUST_FALL', screen: 1, vote: false});
        this.myGameList.push({gameName: 'MAGIC_HEROBRINE', gameRate: '-.-', gameUrl: 'MAGIC_HEROBRINE', screen: 1, vote: false});
        this.setGameListUserAtLocalStorage();
    }
    setGameListUserAtLocalStorage() {
        if (this.myGameList.length == 0) {
            localStorage.setItem(this.MYGAME_KEY, this.NO_LIST);
        } else {
            localStorage.setItem(this.MYGAME_KEY, JSON.stringify(this.myGameList));
        }
    }
    getGameListUserAtServer() {}
    setGameListUserAtServer() {}
    removeGameListUserByGameName(gameName: string) {
        let deleteIndex = -1;
        this.myGameList.forEach((myGame: MYGAME, index: number) => {
            if (myGame.gameName == gameName) {
                deleteIndex = index;
            }
        });
        if (deleteIndex !== -1) {
            this.myGameList.splice(deleteIndex, 1);
        }
        this.setGameListUserAtLocalStorage();
        this.setAddGameListAddValue(gameName, false);
    }

    addGameListUser(myGame: MYGAME) {
        this.myGameList.push(myGame);
        this.setGameListUserAtLocalStorage();
        this.setAddGameListAddValue(myGame.gameName, true);
    }

    // ============================================================================================================================
    // addGameList 에서 add 부분 설정하기
    setAddGameListAddValueAll() {
        this.addGameList.forEach((addGame: ADDGAME, index: number) => {
            addGame.add = this.isExistMyGameListByGameName(addGame.gameName);
        })
        // this.setGameListAllAtLocalStorage();
    }

    /**
     * @param gameName 게임명
     * @param add true = 선택, false = 선택되지 않음
     */
    setAddGameListAddValue(gameName: string, add: boolean) {
        this.addGameList.forEach((addGame: ADDGAME, index: number) => {
            if (gameName == addGame.gameName) {
                addGame.add = add;
            }
        });
        // this.setGameListAllAtLocalStorage();
    }

    isExistMyGameListByGameName(gameName: string): boolean {
        let ret = false;
        this.myGameList.forEach((myGame: MYGAME, index: number) => {
            if (gameName == myGame.gameName) {
                ret = true;
            }
        })
        return ret;
    }

    getAddGameListScreenValue(gameName: string): number {
        let ret = 1;
        this.addGameList.forEach((addGame: ADDGAME, index: number) => {
            if (gameName == addGame.gameName) {
                ret = addGame.screen;
            }
        });
        return ret;
    }

    getAddGameListUrlValue(gameName: string): string {
        let ret = '';
        this.addGameList.forEach((addGame: ADDGAME, index: number) => {
            if (gameName == addGame.gameName) {
                ret = addGame.gameUrl
            }
        });
        return ret;
    }

    // ============================================================================================================================
    // User Coin Get, Set
    getUserInfoCoinAtLocalStorate() {
        let myCoin = parseInt(localStorage.getItem(this.USER_COIN_KEY));
        console.log('getUserInfoCoinAtLocalStorate:', myCoin.toString());
        try {
            if (isNaN(myCoin)) {
                this.myCoin = 9999;
            } else {
                this.myCoin = myCoin;
            }
        } catch (error) {
            console.log(error);
            this.myCoin = 9999;
        }
        this.setUserInfoCoinAtLocalStorage();
    }

    setUserInfoCoinAtLocalStorage() {
        localStorage.setItem(this.USER_COIN_KEY, this.myCoin.toString());
    }

    // ============================================================================================================================
    // DailyPromotion Get, Set
    getDailyPromotionAtLocalStorate() {
        let dateString = localStorage.getItem(this.DAILY_PROMOTION_KEY);
        if (dateString == null) {
            this.setDailyPromotionAtLocalStorate();
        } else {
            this.dailyPromotion = dateString;
        }
        // const dateString = "2023-06-06";
        // const parts = dateString.split("-");
        // const year = parseInt(parts[0]);
        // const month = parseInt(parts[1]) - 1;
        // const day = parseInt(parts[2]);
        // const date = new Date(year, month, day);
        // console.log(date); // 예: Tue Jun 06 2023 00:00:00 GMT+0900 (한국 표준시)

    }
    setDailyPromotionAtLocalStorate() {
        let date = new Date();
        let year = date.getFullYear();
        let month = (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1);
        let day = (date.getDate() < 10 ? '0' : '') + date.getDate();
        let dateString = `${year}-${month}-${day}`;
        // console.log(dateString); // 예: "2023-06-06"
        this.dailyPromotion = dateString;
        localStorage.setItem(this.DAILY_PROMOTION_KEY, dateString);
    }

    checkDailyPromtion(): boolean {
        let ret = false;
        let date = new Date();
        let year = date.getFullYear();
        let month = (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1);
        let day = (date.getDate() < 10 ? '0' : '') + date.getDate();
        let dateString = `${year}-${month}-${day}`;
        if (this.dailyPromotion !== dateString) {
            ret = true;
            this.setDailyPromotionAtLocalStorate();
        }
        return ret;
    }

    // ============================================================================================================================
    // Watch Video Coin 1,2,3 Get, Set
    getWatchVideoCoinTime(index: number) {
        let key = 'watch_video_coin_time_' + index.toString();
        let watchVideoCoinTime = localStorage.getItem(key);
        let watchVideoCoinTimeRemain = 0;
        if (watchVideoCoinTime == null) {
            watchVideoCoinTimeRemain = 0;
        } else {
            watchVideoCoinTimeRemain = parseInt(watchVideoCoinTime);
        }
        switch (index) {
            case 1:
                this.watchVideoCoinTime1 = watchVideoCoinTimeRemain;
                break;
            case 2:
                this.watchVideoCoinTime2 = watchVideoCoinTimeRemain;
                break;
            case 3:
                this.watchVideoCoinTime3 = watchVideoCoinTimeRemain;
                break;
            // ============================================================================================================================
            // HammerOh 2032.06.28
            case 4:
                this.watchVideoCoinTime4 = watchVideoCoinTimeRemain;
                break;
            case 5:
                this.watchVideoCoinTime5 = watchVideoCoinTimeRemain;
                break;
            case 6:
                this.watchVideoCoinTime6 = watchVideoCoinTimeRemain;
                break;
            // ============================================================================================================================
        }
    }

    getWatchVideoCoinTimeAll() {
        this.getWatchVideoCoinTime(1);
        this.getWatchVideoCoinTime(2);
        this.getWatchVideoCoinTime(3);
        // ============================================================================================================================
        // HammerOh 2032.06.28
        this.getWatchVideoCoinTime(4);
        this.getWatchVideoCoinTime(5);
        this.getWatchVideoCoinTime(6);
        // ============================================================================================================================
    }

    setWatchVideoCoinTime(index: number) {
        let key = 'watch_video_coin_time_' + index.toString();
        localStorage.setItem(key, (new Date().getTime()).toString());
    }


    // Game Rate Get, Set
    // All, User (LocalStorage, Server)
    // All Game Rate Get Set
    getGameRateAllAtLocalStorage() {}
    setGameRateAllAtLocalStorage() {}
    getGameRateAllAtServer() {}
    setGameRateAllAtServer() {}
    // Choice Game Rate Get, Set
    getGameRateAtLocalStorage() {}
    setGameRateAtLocalStorage() {}
    getGameRateAtServer() {}
    setGameRateAtServer() {}
    getGameRateUserAtLocalStorage() {}
    setGameRateUserAtLocalStorage() {}
    getGameRateUserAtServer() {}
    setGameRateUserAtServer() {}
}