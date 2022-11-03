import './intro.scss';
import TypeWriterEffect from 'react-typewriter-effect';
import { useEffect, useRef } from 'react';

export default function Intro() {
  const textRef = useRef();
  // useEffect(()=> {
  //   init(textRef.current, {
  //     backDelay: 1500,
  //     backSpeed: 50,
  //     strings: ['Software Developer', 'Full Stack Developer', 'Anime Lover', 'AI Enthusiast']
  //   })
  // },[]);
  return (
    <div className='intro' id='intro'> 
      <div className='left'>
        <div className="imgContainer">
          <img src="assets/space_man.png" alt="" />
        </div>
      </div>
      <div className='right'>
        <div className="wrapper">
          <h2>Hi There, I'm </h2>
          <h1>David Torres</h1>
          <h3>
            <span ref={textRef}>
            <TypeWriterEffect
              textStyle = {{
                fontFamily: 'Lato',
                fontWeight: '500',
                fontSize: '30px'
              }}
              startDelay={500}
              cursorColor="#3F3D56"
              multiText={[
                'Software Developer',
                'Full Stack Developer',
                'MSc. Candidate in Artificial Intelligence',
                'Anime Lover',
              ]}
              multiTextDelay={500}
              typeSpeed={30}
              multiTextLoop
            />
            </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
