let _videoObj = [];
let _videoSrc = [];

chrome.runtime.onMessage.addListener(function (Message, sender, sendResponse) {
    // 获取页面音频对象
    if (Message.Message == "getVideoState") {
        let videoObj = [];
        let videoSrc = [];
        document.querySelectorAll("video, audio").forEach(function (video) {
            if (video.currentSrc != "" && video.currentSrc != undefined) {
                videoObj.push(video);
                videoSrc.push(video.currentSrc);
            }
        });

        if (videoObj.length > 0) {
            if (videoObj.length !== _videoObj.length || videoSrc.toString() !== _videoSrc.toString()) {
                _videoSrc = videoSrc;
                _videoObj = videoObj;
            }
            Message.index = Message.index == -1 ? 0 : Message.index;
            const video = videoObj[Message.index];
            const timePCT = video.currentTime / video.duration * 100;
            sendResponse({
                time: timePCT,
                currentTime: video.currentTime,
                duration: video.duration,
                volume: video.volume,
                count: _videoObj.length,
                src: _videoSrc,
                paused: video.paused,
                loop: video.loop,
                speed: video.playbackRate,
                muted: video.muted,
                type: video.tagName.toLowerCase()
            });
            return true;
        }
    }

    if (Message.Message == "pause") {
        _videoObj[Message.index].pause();
        return true;
    }

});