import React from 'react';
import '../styles/Service.css';


    const services = [
        {
            title: "Personal Training",
            desc: "Achieve your fitness goals with personalized training! Tailored workouts, expert guidance, and continuous support to help you build strength, lose fat, and transform your body.",
            img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
            duration: "8 Weeks",
            price: "₹2999",
            trainer: "Dinesh Jangra",
            button: "Buy Now",
        },
        {
            title: "Online Coaching",
            desc: "Transform your fitness from anywhere! Personalized workout plans, nutrition guidance, and continuous support—tailored to your goals.",
            img: "https://images.unsplash.com/photo-1734668486909-4637ecd66408?auto=format&fit=crop&w=800&q=80",
            duration: "12 Weeks",
            price: "₹1999",
            trainer: "Dinesh Jangra",
            button: "Buy Now",
        },
        {
            title: "Fat Loss Program",
            desc: "Lose 0.5 to 1 kg of fat per week without losing muscle mass! Get personalized workouts and nutrition plans.",
            img: "https://images.unsplash.com/photo-1522844990619-4951c40f7eda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            duration: "6 Weeks",
            price: "₹1499",
            trainer: "Dinesh Jangra",
            button: "Buy Now",
        },
        {
            title: "Muscle Building Programs",
            desc: "Achieve muscle growth and strength with customized plans. Build the body you’ve always wanted!",
            img: "https://plus.unsplash.com/premium_photo-1664474667047-a20f4e60339a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            duration: "10 Weeks",
            price: "₹2499",
            trainer: "Dinesh Jangra",
            button: "Buy Now",
        },
        {
            title: "Body Recomposition Plan",
            desc: "Lose fat and build muscle at the same time with my Body Recomposition Plan!",
            img: "https://images.unsplash.com/photo-1734715690116-ad4f8a465579?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            duration: "12 Weeks",
            price: "₹2799",
            trainer: "Dinesh Jangra",
            button: "Buy Now",
        },
        {
            title: "Strength & Conditioning",
            desc: "Improve overall athletic performance with expert strength and conditioning routines tailored for sports and fitness enthusiasts.",
            img: "https://images.unsplash.com/photo-1738523686604-2ee6f0a04835?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            duration: "8 Weeks",
            price: "₹2599",
            trainer: "Dinesh Jangra",
            button: "Buy Now",
        },
        {
            title: "Yoga & Flexibility",
            desc: "Enhance flexibility, reduce stress, and improve posture with guided yoga sessions designed for all levels.",
            img: "https://plus.unsplash.com/premium_photo-1661777196224-bfda51e61cfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            duration: "6 Weeks",
            price: "₹1599",
            trainer: "Dinesh Jangra",
            button: "Buy Now",
        },
        {
            title: "Posture Correction Program",
            desc: "Correct bad posture, eliminate back pain, and improve mobility with personalized corrective exercises.",
            img: "https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            duration: "6 Weeks",
            price: "₹1799",
            trainer: "Dinesh Jangra",
            button: "Buy Now",
        },
    ];    


const Services = () => {
    return (
        <section className="services-section">
            <h2 className="section-title">Our Services</h2>
            <div className="services-container">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <img src={service.img} alt={service.title} className="service-image" />
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-desc">{service.desc}</p>
                        <p className="service-duration"><strong>Duration:</strong> {service.duration}</p>
                        <p className="service-price"><strong>Price:</strong> {service.price}</p>
                        <p className="service-trainer"><strong>Trainer:</strong> {service.trainer}</p>
                        <button className="service-button">{service.button}</button>
                        
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
