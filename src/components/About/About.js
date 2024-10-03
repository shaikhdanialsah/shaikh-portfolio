import GitHubIcon from '@mui/icons-material/GitHub';
import  LinkedInIcon from '@mui/icons-material/LinkedIn';
import { about } from '../../portfolio'
import './About.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Type from './Type';
import { AnimationControl, fadeIn } from '../AnimationControl';
import { motion } from "framer-motion";

const About = () => {
  const { name, role, description, resume, social, contact } = about;
  const { ref, controls } = AnimationControl();

  return (
    <motion.div className='about center' ref={ref} 
    initial="hidden"
    animate={controls}
    variants={fadeIn}>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      <h2 className='about__role'><Type/></h2>
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>

      {contact && (
          <a href={contact} target='_blank'>
            <span type='button' className='btn btn--outline' style={{borderRadius:'8px'}}>
              Contact Me <ArrowForwardIcon style={{backgroundColor:'transparent',verticalAlign:'middle', fontSize:'20px'}}/>
            </span>
          </a>
        )}

        {resume && (
          <a href={resume} target='_blank'>
            <span type='button' className='btn btn--full' style={{borderRadius:'8px'}} > 
              Download my Resume <ArrowForwardIcon style={{backgroundColor:'transparent',verticalAlign:'middle', fontSize:'20px'}}/>
            </span>
          </a>
        )}

      </div>

      <div className='about__contact center'style={{fontWeight:'600'}}>
        or check out my other platforms
      </div>

      
      <div className='about__contact center'>
        {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  aria-label='github'
                  className='link--icon'
                  target='_blank'
                >
                  <GitHubIcon style={{fontSize:'40px'}}/>
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label='linkedin'
                  className='link--icon'
                  target='_blank'
                >
                  <LinkedInIcon style={{fontSize:'40px'}}/>
                </a>
              )}
            </>
          )}
      </div>
    </motion.div>
  )
}

export default About
