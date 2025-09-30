

import VideoPlayer from "@/components/ui/video-player"

const VideoPlayerDemo = ({ src = "/christ/rare.mp4", autoPlay = true, muted = true }: { src?: string, autoPlay?: boolean, muted?: boolean }) => {
    return <VideoPlayer src={src} className="w-full h-full" autoPlay={autoPlay} muted={muted} />
}

export { VideoPlayerDemo }
