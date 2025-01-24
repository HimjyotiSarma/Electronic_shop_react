import { useEffect, useState } from 'react'
import slide1 from '../assets/images/slides/10204575.jpg'
import slide2 from '../assets/images/slides/10226827.jpg'
import slide3 from '../assets/images/slides/10238919.jpg'

import styles from '../styles/modules/hero.module.scss'

const Hero = () => {
  const allSlides = [slide1, slide2, slide3]
  const [currentPos, setCurrentPos] = useState(0)

  const handleSliding = (btnName: 'left' | 'right') => {
    if (btnName === 'left') {
      setCurrentPos((prevPos) =>
        prevPos === 0 ? -(allSlides.length - 1) * 100 : prevPos + 100
      )
    }
    if (btnName === 'right') {
      setCurrentPos((prevPos) =>
        prevPos === -(allSlides.length - 1) * 100 ? 0 : prevPos - 100
      )
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentPos((prevPos) =>
        prevPos === -(allSlides.length - 1) * 100 ? 0 : prevPos - 100
      )
    }, 2500)
    return () => clearTimeout(timeout)
  }, [currentPos])

  return (
    <>
      <div className={styles.slide_area}>
        <button
          className={styles.left_Btn}
          onClick={() => handleSliding('left')}
        >
          &larr;
        </button>
        <div
          className={styles.image_container}
          style={{
            transform: `translateX(${currentPos}vw)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {allSlides.map((slide, index) => (
            <div className={styles.image_box} key={index}>
              <img src={slide} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button
          className={styles.right_Btn}
          onClick={() => handleSliding('right')}
        >
          &rarr;
        </button>
      </div>
      <div className={styles.slide_dots}>
        {allSlides.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              currentPos === -index * 100 ? styles.active_dot : ''
            }`}
            onClick={() => setCurrentPos(-index * 100)}
          ></div>
        ))}
      </div>
    </>
  )
}

export default Hero
