import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useCallback } from 'react'
import styles from './Stories.module.scss'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const images = [
  '/imagens/1.jpg',
  '/imagens/2.jpg',
  '/imagens/3.jpg',
  '/imagens/4.jpg',
  '/imagens/5.jpg',
  '/imagens/6.jpg',
  '/imagens/7.jpg',
  '/imagens/8.jpg',
  '/imagens/9.jpg',
  '/imagens/10.jpg',
  '/imagens/11.jpg',
  '/imagens/12.jpg',
  // '/imagens/13.jpg',
  '/imagens/14.jpg',
]

const Stories = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])

  useEffect(() => {
    if (emblaApi) {
      // Você pode adicionar callbacks, por exemplo: emblaApi.on('select', () => {})
    }
  }, [emblaApi])

  return (
    <section className={styles.storiesSection}>
      <div className={styles.containerTitle}>
        <h2>Tudo que há em mim brilha por você, porque desde que te encontrei, até o céu parece ter sido pintado só pra nós.</h2>
        <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Love%20Letter.png" alt="Love Letter" width="100" height="100" />
      </div>
      <div className={styles.floatingHearts}>
        <span>❤️</span>
        <span>💖</span>
        <span>💕</span>
        <span>💓</span>
        <span>💗</span>
        <span>💘</span>
      </div>

      <div className={styles.embla}>
        <div className={styles.emblaViewport} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {images.map((src, index) => (
              <div className={styles.emblaSlide} key={index}>
                <img src={src} alt={`Foto ${index + 1}`} className={styles.emblaImage} />
              </div>
            ))}
          </div>
        </div>
         <button onClick={scrollPrev} className={styles.emblaButton}>
          <FaChevronLeft />
        </button>
        <button onClick={scrollNext} className={styles.emblaButton}>
          <FaChevronRight />
        </button>
      </div>
      <h2 className={styles.title}>Love</h2>
    </section>
  )
}

export default Stories
