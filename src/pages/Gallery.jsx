import { useState } from 'react';
import '../styles/Gallery.css';

const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        title: "Weight Training",
        desc: "Professional weight lifting area"
    },
    {
        src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        title: "Cardio Zone",
        desc: "State-of-the-art cardio equipment"
    },
    {
        src: "https://images.unsplash.com/photo-1533681904393-9ab6eee7e408?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "CrossFit",
        desc: "High-intensity functional training"
    },
    {
        src: "https://images.unsplash.com/photo-1651077837628-52b3247550ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Yoga Studio",
        desc: "Peaceful space for mind and body"
    },
    {
        src: "https://images.unsplash.com/photo-1731572005637-ce0bd30a02b2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Boxing Area",
        desc: "Professional boxing ring and bags"
    },
    {
        src: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Personal Training",
        desc: "One-on-one coaching sessions"
    },
    {
        src: "https://images.unsplash.com/photo-1616279969856-759f316a5ac1?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Functional Training",
        desc: "Versatile equipment for all levels"
    },
    {
        src: "https://images.unsplash.com/photo-1684236801756-d4ec96dcd433?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Locker Rooms",
        desc: "Spacious and clean facilities"
    },
    {
        src: "https://images.unsplash.com/photo-1602827114685-efbb2717da9f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Group Classes",
        desc: "Energetic group workouts"
    },
    {
        src: "https://images.unsplash.com/photo-1561214095-fea147325936?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Recovery Zone",
        desc: "Massage and stretching area"
    },
    {
        src: "https://images.unsplash.com/photo-1561214095-fea147325936?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Outdoor Training",
        desc: "Fresh air workouts"
    },
    {
        src: "https://images.unsplash.com/photo-1551491603-7d38b9e605f5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Swimming Pool",
        desc: "Olympic-size pool"
    }
];

const Gallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const openLightbox = (index) => {
        setCurrentImage(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    return (
        <section className="gallery-section">
            <h2 className="gallery-title">Our Gym Facilities</h2>
            <p className="gallery-subtitle">Explore our world-class training facilities designed to help you achieve your fitness goals</p>
            
            <div className="gallery-grid">
                {galleryImages.map((item, index) => (
                    <div 
                        className="gallery-item" 
                        key={index}
                        onClick={() => openLightbox(index)}
                    >
                        <img src={item.src} alt={item.title} />
                        <div className="gallery-caption">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className={`gallery-lightbox ${lightboxOpen ? 'active' : ''}`} onClick={closeLightbox}>
                <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                    <span className="lightbox-close" onClick={closeLightbox}>&times;</span>
                    <img src={galleryImages[currentImage].src} alt={galleryImages[currentImage].title} />
                </div>
            </div>
        </section>
    );
};

export default Gallery;