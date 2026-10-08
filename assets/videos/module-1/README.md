# Module 1 video assets

No video, poster, or WebVTT file has been supplied yet. The app therefore shows an explicit “Video lesson coming soon” state and does not request a fictional URL.

When the final media is ready, add:

- `past-simple-vs-present-perfect.mp4`
- `past-simple-vs-present-perfect.jpg` (optional poster)
- `past-simple-vs-present-perfect.vtt` (optional English captions)

Then set `videoSrc`, `poster`, and `captions` in `window.COURSE_VIDEO_ASSETS.module1.watchLearn` in `course-data.js` to those relative paths. Add the video’s transcript and duration there when available. Local files or stable public HTTPS URLs are supported.
