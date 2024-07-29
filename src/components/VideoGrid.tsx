import { videos } from '../../data';
import VideoCard from './VideoCard';

const VideoGrid = () => {
  return (
    <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-4'>
      {videos.map((video, index) => (
        <div key={index}>
          <VideoCard video={video} />
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
