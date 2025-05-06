import Hero from '../components/Hero';
function Home() {
    return (
        <>
            <Hero />
            <section className="about container">
                <h3>Why Choose FitJangra?</h3>
                <p>We combine expert guidance, personalized programs, and a vibrant community to help you crush your fitness goals. From strength training to fat loss, we cover it all.</p>
            </section>

            <section className="features container">
                <div className="feature">
                    <h4>🏋️‍♂️ Expert Trainers</h4>
                    <p>Work with certified professionals who guide you at every step.</p>
                </div>
                <div className="feature">
                    <h4>🍎 Nutrition Plans</h4>
                    <p>Get customized meal plans to fuel your progress.</p>
                </div>
                <div className="feature">
                    <h4>📅 Flexible Schedule</h4>
                    <p>Train anytime, anywhere with our online and in-person programs.</p>
                </div>
            </section>
        </>
    );
}

export default Home;
