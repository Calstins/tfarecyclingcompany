'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { GalleryVideo } from '@/lib/types';

interface VideoGalleryProps {
  videos: GalleryVideo[];
}

const VideoGallery = ({ videos }: VideoGalleryProps) => {
  const [selectedVideo, setSelectedVideo] = useState<GalleryVideo | null>(null);

  const openVideo = (video: GalleryVideo) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  // Extract Instagram video ID from URL
  const getInstagramVideoId = (url: string) => {
    const regex = /\/p\/([^/?]+)|\/reel\/([^/?]+)/;
    const match = url.match(regex);
    return match ? match[1] || match[2] : null;
  };

  return (
    <>
      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {videos.map((video, index) => (
          <motion.div
            key={video.url}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-lg overflow-hidden shadow-md bg-white"
          >
            {/* Video Thumbnail */}
            <div
              className="aspect-video relative cursor-pointer group"
              onClick={() => openVideo(video)}
            >
              {video.thumbnail ? (
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">No thumbnail</span>
                </div>
              )}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="bg-white/90 rounded-full p-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Play className="h-8 w-8" />
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
              <button
                onClick={() => openVideo(video)}
                className="text-primary hover:underline text-sm font-medium"
              >
                Watch Video
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <Dialog open={!!selectedVideo} onOpenChange={closeVideo}>
          <DialogContent className="max-w-4xl p-0 bg-black">
            <div className="relative aspect-video w-full">
              <iframe
                title={selectedVideo.title}
                src={`https://www.instagram.com/${
                  selectedVideo.url.includes('/reel/') ? 'reel' : 'p'
                }/${getInstagramVideoId(selectedVideo.url)}/embed`}
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
              <button
                onClick={closeVideo}
                className="absolute top-2 right-2 p-1 bg-black/70 rounded-full text-white z-10"
                aria-label="Close video"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default VideoGallery;
