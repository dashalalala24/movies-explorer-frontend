import React from 'react';

import './AboutProject.css';
import SectionTitle from '../SectionTitle/SectionTitle';

function AboutProject() {
  return (
    <section className='about-project'>
      <SectionTitle title='О проекте' />
      <div className='about-project__text'>
        <div className='about-project__text-stages'>
          <p className='about-project__text-title'>Дипломный проект включал 5&nbsp;этапов</p>
          <p className='about-project__text-paragraph'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности
            и&nbsp;финальные доработки.
          </p>
        </div>
        <div className='about-project__text-stages'>
          <p className='about-project__text-title'>На&nbsp;выполнение диплома ушло 5&nbsp;недель</p>
          <p className='about-project__text-paragraph'>
            У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать,
            чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about-project__timing'>
        <div className='about-project__timing__graph'>
          <div className='about-project__timing__graph-part about-project__timing__graph-part_type_back'>
            1 неделя
          </div>
          <div className='about-project__timing__graph-part about-project__timing__graph-part_type_front'>
            4 недели
          </div>
        </div>
        <div className='about-project__timing__captions'>
          <p className='about-project__timing__caption about-project__timing__caption_type_back'>
            Back-end
          </p>
          <p className='about-project__timing__caption about-project__timing__caption_type_front'>
            Front-end
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
