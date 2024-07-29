interface Props {
  video: {
    thumbnailImage: string;
    channelLogo: string;
    videoTitle: string;
    channelName: string;
    views: string;
    timeStamp: number;
  };
}

const VideoCard = (props: Props) => {
  const {
    video: { channelLogo, channelName, thumbnailImage, timeStamp, videoTitle, views },
  } = props;
  return (
    <div>
      <img className='rounded-xl' src={thumbnailImage} alt='Thumbnail' />

      <div className='grid grid-cols-12 mt-2'>
        <div className='col-span-2'>
          <img className='rounded-full w-10 h-10' src={channelLogo} alt='Thumbnail' />
        </div>

        <div className='col-span-10 pl-2'>
          <div>{videoTitle}</div>
          <div className='text-base text-gray-400'>{channelName}</div>
          <div className='text-base text-gray-400'>
            {views} | {timeStamp} days ago
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
