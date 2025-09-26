
import VideoPlayer from "@/components/ui/video-player"

const VideoPlayerDemo = ({ src = "/rare.mp4" }: { src?: string }) => {
    return <VideoPlayer src={src} className="w-full h-full" />
}

export { VideoPlayerDemo }
