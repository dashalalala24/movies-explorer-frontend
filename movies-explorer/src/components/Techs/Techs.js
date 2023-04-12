import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

import './Techs.css';

function Techs() {
  return (
    <section className='techs'>
      <SectionTitle title='Технологии' />
      <div className='techs__container'>
        <p className='techs__subtitle'>7 технологий</p>
        <p className='techs__paragraph'>
          На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили
          в&nbsp;дипломном проекте.
        </p>
        <ul className='techs__technologies'>
          <li className='techs__technologie'>HTML</li>
          <li className='techs__technologie'>CSS</li>
          <li className='techs__technologie'>JS</li>
          <li className='techs__technologie'>React</li>
          <li className='techs__technologie'>Git</li>
          <li className='techs__technologie'>Express.js</li>
          <li className='techs__technologie'>mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
