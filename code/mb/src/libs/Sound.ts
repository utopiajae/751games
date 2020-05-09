/** 音效管理 */
class Sound {

    /* 音效列表，每個音效名稱需跟音檔名一致 */
    public static soundTrack: string[] = [
        // TODO 新增音效列表
    ];

    /* 音樂列表，每個音效名稱需跟音檔名一致 */
    public static bgmTrack: string[] = [
        // TODO 新增音樂列表
    ];

    /** 音效音量 */
    public static soundStatus: boolean = true;
    /** 音樂音量 */
    public static bgmStatus: boolean = true;
    /** 音效音量 */
    public static soundVolume: number = 60;
    /** 音樂音量 */
    public static bgmVolume: number = 60;

    /*---------------------------------------------------------*/

    /** 加載 */
    public static loadSound(): void {
        let bgmLen: number = Sound.bgmTrack.length;
        for (let i: number = 0; i < bgmLen; i++) {
            let sound: string = Sound.bgmTrack[i];
            Sound[`sound_${sound}`] = RES.getRes(`${sound}_mp3`);
        }

        let soundLen: number = Sound.soundTrack.length;
        for (let i: number = 0; i < soundLen; i++) {
            let sound: string = Sound.soundTrack[i];
            Sound[`sound_${sound}`] = RES.getRes(`${sound}_mp3`);
        }
    }


    /** 
     * 播放
     * @param {string} option 播放選項: 音檔名稱
     */
    public static play(option: string): void {
        let type: string = option.indexOf('Bgm') == -1 ? 'sound' : 'bgm';
        let target: egret.SoundChannel;

        try {
            type != 'bgm'
                ? target = Sound[`soundChannel_${option}`] = Sound[`sound_${option}`].play(0, 1)
                : target = Sound[`soundChannel_${option}`] = Sound[`sound_${option}`].play(0)
        } catch (msg) { }

        Sound[`${type}Status`]
            ? target.volume = 0.5 * Sound[`${type}Volume`] / 100
            : target.volume = 0
    }


    /**
     * 停止
     * @param {string} option 停止選項 sound || bgm
     */
    public static stop(option: string): void {
        let trackList: string[] = Sound[`${option}Track`];
        let len: number = trackList.length;
        for (let i: number = 0; i < len; i++) {
            let sound: string = trackList[i];
            try {
                if (Sound[`soundChannel_${sound}`]) Sound[`soundChannel_${sound}`].stop();
            } catch (msg) { }
        }
    }


    /** 
     * 音量
     * @param {string} option 變更選項 sound || bgm
     * @param {number} volume 音量
     */
    public static volume(option: string, volume: number): void {
        let trackList: string[] = Sound[`${option}Track`];
        let len: number = trackList.length;
        for (let i: number = 0; i < len; i++) {
            let sound: string = trackList[i];
            try {
                if (Sound[`soundChannel_${sound}`]) Sound[`soundChannel_${sound}`].volume = 0.5 * volume / 100;
            } catch (msg) { }
        }
    }
}
