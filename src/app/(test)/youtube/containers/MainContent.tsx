'use client';

import React from 'react';
import Card from '../components/Card';

const dummyData = [
  {
    id: 'b2EuiQgSQ7o',
    title:
      'KILING(클링) AI: 화살표 이동 경로대로 영상을 만들어 주는 모션 브러쉬 사용법!',
    channelName: '노마드AI Nomad',
    views: '조회수 1.2천회',
    uploadTime: '18시간 전',
    thumbnailUrl: 'https://i.ytimg.com/vi/b2EuiQgSQ7o/hqdefault.jpg',
    duration: '12:57',
  },
  // 추가 더미 데이터 (총 10개가 되도록)
  ...Array(9)
    .fill(null)
    .map((_, index) => ({
      id: `dummy-${index}`,
      title: `더미 비디오 제목 ${index + 2}`,
      channelName: '더미 채널',
      views: `조회수 ${Math.floor(Math.random() * 1000)}회`,
      uploadTime: `${Math.floor(Math.random() * 24)}시간 전`,
      thumbnailUrl: '/dummy-thumbnail.jpg', // 로컬 더미 이미지 사용
      duration: `${Math.floor(Math.random() * 10)}:${Math.floor(
        Math.random() * 60
      )
        .toString()
        .padStart(2, '0')}`,
    })),
];

const MainContent = () => {
  return (
    <div className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {dummyData.map((video) => (
        <Card
          key={video.id}
          title={video.title}
          channelName={video.channelName}
          views={video.views}
          uploadTime={video.uploadTime}
          thumbnailUrl={video.thumbnailUrl}
          duration={video.duration}
          videoId={video.id}
        />
      ))}
    </div>
  );
};

export default MainContent;
