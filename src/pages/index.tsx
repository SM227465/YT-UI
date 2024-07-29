import Appbar from '@/components/Appbar';
import VideoGrid from '@/components/VideoGrid';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Appbar />
      <VideoGrid />
    </div>
  );
}
