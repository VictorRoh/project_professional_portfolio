import React from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { NavigationDots, SocialMedia } from '../../components';
import { works } from '../../constants/dummy';
import './Work.scss';

function Work() {
  const [filterWork, setFilterWork] = React.useState(works);

  const handleWorkFilter = (item) => {
    setFilterWork(works.filter((work) => work.tags.includes(item)));
  };

  return (
    <div
      className="app__container app__primarybg"
      id="work"
    >
      <SocialMedia />
      <motion.div
        animate={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__works app__flex"
      >
        <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

        <div className="app__work-filter">
          {['UI/UX', 'Web App', 'Mobile App', 'React JS'].map((item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className="app__work-filter-item app__flex p-text"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="app__work-portfolio">
          {filterWork.map((work, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="app__work-item app__flex"
              key={index}
            >
              <div className="app__work-img app__flex">
                <img src={work.imgUrl} alt={work.name} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className="app__work-hover app__flex"
                >
                  <motion.div
                    animate={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                  <motion.div
                    animate={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{work.title}</h4>

                <div className="app__work-tag app__flex">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <NavigationDots active="projects" />
    </div>
  );
}

export default Work;
