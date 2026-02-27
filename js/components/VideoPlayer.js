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

// import { createElement } from "react";

export class VideoPlayer {

    constructor(videoUrl, fallbackImageUrl) {
        this.videoUrl = videoUrl;
        this.fallbackImageUrl = fallbackImageUrl;
    }

    render() {
        const videoWrapper = document.createElement("div");
        videoWrapper.classList.add("video-wrapper");

        const videoElement = document.createElement("video");
        videoElement.classList.add("combo-video");
        videoElement.src = this.videoUrl;
        videoElement.loop = true;
        videoElement.muted = true;
        videoElement.playsInline = true;
        videoWrapper.appendChild(videoElement);

        videoWrapper.addEventListener("mouseenter", () => { // When mouse hovers, play video
            videoElement.play().catch(() => {});
        });
        videoWrapper.addEventListener("mouseleave", () => { // When mouse leaves hover, pause
            videoElement.pause();
            videoElement.currentTime = 0;
        });

        videoElement.addEventListener("error", () => {
            videoWrapper.removeChild(videoElement);
            if (this.fallbackImageUrl)
            {
                const img = document.createElement("img");
                img.src = this.fallbackImageUrl;
                videoWrapper.appendChild(img);
            }
        })
        return videoWrapper;
    }
}
