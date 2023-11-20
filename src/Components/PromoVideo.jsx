import React from 'react';

const YouTubeEmbed = ({ videoId, title }) => {
  const aspectRatio = (9 / 16) * 100; // 

  return (
    <div className="iframe-container" style={{ width: '70%', margin: '0 auto', overflow: 'hidden', paddingBottom: '4rem' }}>
      <div style={{ position: 'relative', width: '100%', paddingTop: `${aspectRatio}%` }}>
        <iframe
          title={title}
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeEmbed;
