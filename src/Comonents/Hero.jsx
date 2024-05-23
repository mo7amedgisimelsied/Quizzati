import '../index.css'
import '../media-queries.css'
import image from '../assets/image.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
function Hero(){
    
    
    useEffect(() => {
        AOS.init({duration: 2000})
    }, []);

    function scroll()  
    {const element = document.getElementById(`1`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    }
    return(
    <header>
        <div className='header'>
        <h2 className="logo">Quizzati</h2>

        <div className="hero">

        <div className="headline" data-aos = "fade-up" data-aos-duration="0">
        <h1>Welcome to Quizzati: Your Ultimate Practice Platform for IU University Exams!</h1>
        <p>Our extensive selection of MCQs, crafted by your fellow students and enhanced with AI, is ready to strengthen your understanding in various subjects. Start your preparation today - go ahead and give it your all 🔥</p>
        
        <div className='hero-btn'>
        <button className='btn btn-green' onClick={scroll}>Let's GO</button>
        <a href='https://www.linkedin.com/in/mohamed-gisimelsied-426418249' target='_blank'><button className='btn btn-hero-outlilne'>Contact Developer</button></a>
        </div>

        </div>
        
        <img src= {image} style={{width: "25rem"}} data-aos = "fade-up" data-aos-duration="1000"/>

        </div>
        </div>
    </header>
    )
}
export default Hero;