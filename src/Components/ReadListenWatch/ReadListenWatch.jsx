import React from 'react'
import './ReadListenWatch.css'
import blog from './images/blog.png'
import podcast from './images/podcast.png'
import video from './images/video.png'

export const ReadListenWatch = () => {
    return (
        <div className="read-listen-watch-main-block">
            <h1>Read. Listen. Watch</h1>
            <div className="blog-podcast-video">
                <div className="image-container">
                    <img src={blog} alt="" />
                    <div className="text-overlay">
                        <p>Blog</p>
                    </div>
                </div>
                <div className="image-container">
                    <img src={podcast} alt="" />
                    <div className="text-overlay">
                        <p>Podcast</p>
                    </div>
                </div>
                <div className="image-container">
                    <img src={video} alt="" />
                    <div className="text-overlay">
                        <p>Video</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
