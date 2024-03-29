import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchTech } from '../../../store/actions/techActions.js';
import { fetchSkill } from '../../../store/actions/skillActions.js';
import StyledHero from './HeroStyles.jsx';

const Hero = (prps) => {
    const techs = useSelector((state) => state.techs.items);
    const skills = useSelector((state) => state.skills.items);
    const newTechs = [...techs]
    const dispatch = useDispatch();
    const listItems = newTechs
    .sort((a, b) => a.tech_id - b.tech_id)
    .map((tech) => (
      <div className='li' key={tech.tech_id}>
        <img
          src={process.env.REACT_APP_API_URL + "/icons/" + tech.icon}
          alt="carousel slide"
        />
        {tech.name}
      </div>
    ));
    const listSkills = skills.map((skill) => {
        return (        
            <div className='li' key={skill.name}>
                <img
                    src={process.env.REACT_APP_API_URL + "/icons/" + skill.icon}
                    alt="carousel slide"
                />
                {skill.name}
            </div>
        ) 
    });
    
    useEffect(() => {
        dispatch(fetchTech())
        dispatch(fetchSkill());
    }, [dispatch]);

    return (
        <StyledHero id='home'>
            <div className='titleWrapper'>
                <h2>Software Engineer</h2>
                <div className='techWrapper'>
                    <div className='techItems'>{listItems}</div>
                </div>
            </div>
            <div className='andWrapper' >
                <div className='and'>&</div>
            </div>
            <div className='titleWrapper2'>
                <h2>Business Manager</h2>
                <div className='techWrapper2'>
                    <div className='techItems2'>{listSkills}</div>
                </div>
            </div>
        </StyledHero>
    )
}

export default Hero
