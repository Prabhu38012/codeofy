import React from 'react';
import './DoctorVideos.css';

const videos = [
    { id: 1, thumbnail: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=250&fit=crop' },
    { id: 2, thumbnail: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=250&fit=crop' },
    { id: 3, thumbnail: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=250&fit=crop' },
    { id: 4, thumbnail: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=250&fit=crop' }
];

const DoctorVideos = () => {
    return (
        <section className="videos-section">
            <h2>Hear from our doctors</h2>

            <div className="videos-grid">
                {videos.map((video) => (
                    <div className="video-card" key={video.id}>
                        <img src={video.thumbnail} alt={`Doctor video ${video.id}`} />
                        <div className="play-overlay">
                            <span className="play-icon">▶</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DoctorVideos;
