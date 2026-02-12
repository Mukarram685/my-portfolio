'use client';

import Navbar from '../Portfolio/Navbar/Navbar';
import Home from '../Portfolio/home/Home';
import About from '../Portfolio/about/About';
import Contact from '../Portfolio/contact/Contact';
import Projects from '../Portfolio/projects/Projects';
import Footer from '../Portfolio/footer/Footer';

export default function Page() {
    return (
        <main>
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}
