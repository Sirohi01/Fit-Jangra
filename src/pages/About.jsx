
import aboutImg from '../assets/about.jpg';

function About() {
    return (
        <section className="about">
            <div className="container about__container">
                <div className="about__image">
                    <img src={aboutImg} alt="Dinesh Jangra - Fitness Coach" />
                </div>
                <div className="about__content">
                    <h2>About Me</h2>
                    <p>
                        Hi, I’m <strong>Dinesh Jangra</strong> — a passionate fitness coach dedicated to helping you become the strongest, healthiest, and most confident version of yourself.
                    </p>
                    <p>
                        With over 2+ years of experience in the fitness industry, I specialize in creating personalized workout plans that are tailored to your fitness goals. Whether you’re just starting your fitness journey or striving to break personal records, I’m here to guide you every step of the way.
                    </p>
                    <p>
                        My approach blends expert guidance, motivation, and sustainable strategies to help you achieve real, lasting results. I believe in working smarter, not harder, to ensure you get the most out of every session. My focus is not only on physical transformation but also on mental and emotional resilience.
                    </p>
                    <h3>My Expertise</h3>
                    <ul>
                        <li>Strength Training & Conditioning</li>
                        <li>Personalized Fitness Plans</li>
                        <li>Weight Loss & Body Sculpting</li>
                        <li>Nutrition & Lifestyle Coaching</li>
                        <li>Post-Injury Rehabilitation</li>
                    </ul>
                    <p>
                        Whether you're preparing for a competition or just looking to get fit, I can help you push past your limits. Let's unlock your potential together and achieve the fitness goals you've always dreamed of.
                    </p>
                    <h3>Why Choose Me?</h3>
                    <ul>
                        <li>Proven track record of successful transformations.</li>
                        <li>Customized fitness plans based on your unique goals and body type.</li>
                        <li>Constant motivation and support to keep you on track.</li>
                        <li>Commitment to long-term health, not just quick fixes.</li>
                    </ul>
                    <button className="about__btn">Start Your Journey</button>
                </div>
            </div>
        </section>
    );
}

export default About;
