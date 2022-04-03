import { useState } from 'react';
import { AVPlaybackSource } from 'expo-av/build/AV.types';
import * as WebBrowser from 'expo-web-browser';
import { View } from './Themed';
import VideoPlayer from './VideoPlayer';
import { Button, Text } from 'react-native';

interface VideoCarouselProps {
    videos: { [key: string]: AVPlaybackSource; }
    signs: string[]
}

const VideoCarousel: React.FunctionComponent<VideoCarouselProps> = ({
    videos,
    signs
}) => {
    const [videoIndex, setVideoIndex] = useState(0)
    const [currentVideo, setCurrentVideo] = useState(videos[signs[videoIndex]])

    const onPrevious = () => {
        setVideoIndex(videoIndex - 1)
        setCurrentVideo(videos[signs[videoIndex - 1]])
    }

    const onNext = () => {
        setVideoIndex((videoIndex + 1) % 5)
        setCurrentVideo(videos[signs[(videoIndex + 1) % 5]])
    }

    return (
        <View>
            <div>
                <Button title='Previous' onPress={onPrevious}></Button>
                <VideoPlayer videoResource={currentVideo} />
                <Button title='Next' onPress={onNext}></Button>
            </div>

            <Text style={{
                'color': 'white',
                'textAlign': 'center',
                'margin': '16px',
            }}>{signs[videoIndex]}</Text>
        </View >
    );
}

export default VideoCarousel;