import React from 'react';
import '../styles/BlogPage.css';

const blogPosts = [
    {
        title: "Top 5 Tips to Boost Your Fitness",
        desc: "Discover effective strategies to enhance your workouts and achieve your goals faster.",
        img: "https://images.unsplash.com/photo-1674834726923-3ba828d37846?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "May 6, 2025"
    },
    {
        title: "The Ultimate Guide to Fat Loss",
        desc: "Learn the science-backed methods to shed fat without sacrificing muscle.",
        img: "https://images.unsplash.com/photo-1646829873498-e874cfa27933?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "April 28, 2025"
    },
    {
        title: "How to Build Muscle Naturally",
        desc: "Simple and effective muscle-building strategies for natural lifters.",
        img: "https://images.unsplash.com/photo-1545346315-f4c47e3e1b55?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "April 15, 2025"
    },
    {
        title: "Why Rest Days Are Critical",
        desc: "Understand the importance of rest and recovery in your fitness journey.",
        img: "https://images.unsplash.com/photo-1545346315-f4c47e3e1b55?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "March 30, 2025"
    },
    {
        title: "Best Nutrition for Muscle Gain",
        desc: "Find out which foods and supplements help maximize muscle growth.",
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
        date: "March 10, 2025"
    },
    {
        title: "Cardio vs Strength Training: What's Better?",
        desc: "Explore the pros and cons of cardio and strength training for fat loss and health.",
        img: "https://plus.unsplash.com/premium_photo-1661595204058-4d58c114f547?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "February 20, 2025"
    },
    {
        title: "Beginner’s Yoga for Flexibility",
        desc: "Boost your flexibility and reduce stress with these beginner yoga routines.",
        img: "https://images.unsplash.com/photo-1574406280735-351fc1a7c5e0?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "January 25, 2025"
    },
    {
        title: "Top Recovery Hacks for Athletes",
        desc: "Learn recovery techniques like foam rolling, ice baths, and stretching to speed up healing.",
        img: "https://images.unsplash.com/photo-1698671823406-035c77ff6fcd?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "January 5, 2025"
    },
];

const Blog = () => {
    return (
        <section className="blog-section">
            <h2 className="blog-title">Latest Articles</h2>
            <div className="blog-container">
                {blogPosts.map((post, index) => (
                    <div className="blog-card" key={index}>
                        <img src={post.img} alt={post.title} className="blog-image" />
                        <div className="blog-content">
                            <h3 className="blog-post-title">{post.title}</h3>
                            <p className="blog-date">{post.date}</p>
                            <p className="blog-desc">{post.desc}</p>
                            
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
