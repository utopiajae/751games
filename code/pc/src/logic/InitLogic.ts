class InitLogic {

    /** 初始化 */
    public static init(): void {
        InitLogic.view();
    }


    /** 手機的旋轉模式設定 */
    public static orientation(): void {

        /** 判斷尺寸 */
        GameModel.isMobile = egret.Capabilities.isMobile;

        /** 設定旋轉 */
        if (GameModel.layout.mode === 'mb') {
            GameCenter.root.stage.orientation =
                !GameModel.isMobile
                    ? egret.OrientationMode.AUTO
                    : egret.OrientationMode.PORTRAIT;
        }
    }


    /** 處理畫面 */
    public static view(): void {

    }
}
