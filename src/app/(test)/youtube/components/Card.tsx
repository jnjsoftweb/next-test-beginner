import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  channelName: string;
  views: string;
  uploadTime: string;
  thumbnailUrl: string;
  duration: string;
  videoId: string;
}

const Card: React.FC<CardProps> = ({
  title,
  channelName,
  views,
  uploadTime,
  thumbnailUrl,
  duration,
  videoId,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-[280px]">
      <Link href={`/watch?v=${videoId}`}>
        <div className="relative aspect-video">
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-1 rounded">
            {duration}
          </div>
        </div>
      </Link>
      <div className="p-3">
        <h3 className="text-sm font-semibold mb-1 line-clamp-2">{title}</h3>
        <p className="text-xs text-gray-600 mb-1">{channelName}</p>
        <p className="text-xs text-gray-500">
          {views} • {uploadTime}
        </p>
      </div>
    </div>
  );
};

export default Card;
