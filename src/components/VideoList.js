import { useEffect, useState } from 'react';
import db from '../firebase'; // Import your Firebase configuration
import VideoPlayer from './VideoPlayer';
import {  useParams } from 'react-router-dom';
import styled from 'styled-components';

const VideoList = () => {
  const [video, setVideo] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        // Fetch video from the 'videos' collection based on the id parameter
        const videoDoc = await db.collection('video').doc(id).get();
        const videoData = {
          id: videoDoc.id,
          ...videoDoc.data(),
        };

        // Fetch movie from the 'movies' collection based on the id parameter
        const movieDoc = await db.collection('movies').doc(id).get();
        const movieData = {
          id: movieDoc.id,
          ...movieDoc.data(),
        };

        // Combine video and movie data
        const combinedData = {
          ...videoData,
          ...(movieData && { movieData }), // Attach movieData if found
        };

        setVideo(combinedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchVideo();
  }, [id]);

  return (
    <div>
      {video ? (
        <Container>
          <Background>
            <img alt="" src="/images/home-background.png" />
          </Background>
          <h1>{video.title}</h1>
          <p>{video.description}</p>
          {video.movieData && <h2>{video.movieData.title}</h2>}
          <Video>
          <VideoPlayer videoSrc={video.videoSrc} />
          </Video>
          <Subtitle>{video.movieData.subTitle}</Subtitle>
          <Description>{video.movieData.description}</Description>
        </Container>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

const Container = styled.div`
//  position: relative;
  min-height: calc(100vh - 72px);
  display: block;
  top: 72px;
  padding: 0 calc(3.4vw + 5px);
`;

const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 550px; /* Add margin to separate from the video */

  @media (max-height: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  margin-top: 10px; /* Add margin to separate from the video */

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;


const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
     width: 100vw;
     height: 100vh;

     @media (max-width: 768px){
        width: initial;
        min-width: 100vw;
     }
  }
`;

const Video = styled.div`
  width: 100%;
  height: 0;
  margin-bottom: 40%; /* 16:9 aspect ratio */
  position: relative;

  video {
    width: 100%;
    height: 70vh;
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
    display: block;
  }
  @media (max-width: 768px){
   padding-bottom: 70%;
 }
`;

export default VideoList;
