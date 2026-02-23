/*
    js/components/VideoPlayer.js
    ----------------------------
    Wraps a <video> element with hover-to-play behavior
    and a fallback image if the video fails to load.

    HINTS:
    - document.createElement("video") creates a video element
    - video.play() returns a Promise — use .catch() to handle autoplay blocks
    - video.currentTime = 0 resets the video to the beginning
    - "mouseenter" fires when the cursor enters an element
    - "mouseleave" fires when the cursor leaves an element
    - "error" fires on the video element if the file can't be loaded
*/

export class VideoPlayer {

    constructor(videoUrl, fallbackImageUrl) {
        // TODO: store videoUrl and fallbackImageUrl on this
    }

    render() {
        // TODO: create a wrapper div with class "video-wrapper"
        // TODO: create a <video> element, set src, loop, muted, playsInline
        // TODO: play the video on mouseenter, pause and reset on mouseleave
        // TODO: on video error, replace it with a fallback <img> if one was provided
        // TODO: return the wrapper
    }
}
