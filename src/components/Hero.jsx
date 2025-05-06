
import heroImg from '../assets/hero.jpg';

function Hero() {
    return (
        <section className="hero">
            <div className="container hero__container">
                <div className="hero__content">
                    <h2>Transform Your Body With <span>FitJangra</span></h2>
                    <p>Your journey to a healthier, stronger, and fitter life starts here. Join us today and unlock your best potential with expert trainers, tailored programs, and a supportive community.</p>
                    <div className="hero__buttons">
                        <button className="hero__btn primary">Get Started</button>
                        <button className="hero__btn secondary">Learn More</button>
                    </div>
                </div>
                <div className="hero__image">
                    <img src={heroImg} alt="Fitness Trainer" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
