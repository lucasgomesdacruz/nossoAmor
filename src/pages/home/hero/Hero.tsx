import { useRef, useState, useEffect } from "react";
import styles from "./Hero.module.scss";
import { FaPause, FaPlay } from "react-icons/fa";

const START_DATE = new Date("2019-06-25T00:00:00");

const Hero = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [timePassed, setTimePassed] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  function calculateTimePassed() {
    const now = new Date();
    const difference = now.getTime() - START_DATE.getTime();

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days: String(days).padStart(2, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimePassed(calculateTimePassed());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const handlePlay = () => {
    if (!audioRef.current) return;
    const audio = audioRef.current;

    if (audio.paused) {
      audio.volume = 1;
      audio.muted = false;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Erro ao reproduzir áudio:", err));
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroTitle}>
        <h1>Nosso</h1>
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Revolving%20Hearts.png"
          alt="Revolving Hearts"
          width="100"
          height="100"
        />
        <h1>Amor</h1>
      </div>
      <p>"Você sabe que eu te amo tanto?..."</p>

      <div className={styles.floatingHearts}>
        <span>❤️</span>
        <span>💖</span>
        <span>💕</span>
        <span>💓</span>
        <span>💗</span>
        <span>💘</span>
      </div>

      {/* Timer contando tempo passado */}
      <div className={styles.containerTitleTimer}>
        <h2>Nosso Amor há...</h2>
      </div>
      <div className={styles.timer}>
        <div className={styles.timer__unit}>
          <span className={styles.timer__unitValue}>{timePassed.days}</span>
          <span className={styles.timer__unitLabel}>Dias</span>
        </div>
        <div className={styles.timer__unit}>
          <span className={styles.timer__unitValue}>{timePassed.hours}</span>
          <span className={styles.timer__unitLabel}>Horas</span>
        </div>
        <div className={styles.timer__unit}>
          <span className={styles.timer__unitValue}>{timePassed.minutes}</span>
          <span className={styles.timer__unitLabel}>Minutos</span>
        </div>
        <div className={styles.timer__unit}>
          <span className={styles.timer__unitValue}>{timePassed.seconds}</span>
          <span className={styles.timer__unitLabel}>Segundos</span>
        </div>
      </div>

      <button onClick={handlePlay} className={styles.playButton} type="button">
        {isPlaying ? (
          <>
            <FaPause /> Pausar música
          </>
        ) : (
          <>
            <FaPlay /> Ouvir nossa musica...
          </>
        )}
      </button>

      <audio ref={audioRef} loop className={styles.audioPlayer}>
        <source src="/coldplay.mp3" type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>

      <div className={styles.floatingDots}>
        <svg viewBox="0 0 100 100" className={styles.svgDots}>
          <circle cx="20" cy="20" r="2" fill="#ff6b7d" opacity="0.3" />
          <circle cx="80" cy="40" r="1.5" fill="#dc143c" opacity="0.5" />
          <circle cx="40" cy="80" r="1" fill="#ffffff" opacity="0.4" />
          <circle cx="40" cy="50" r="1" fill="#ffffff" opacity="0.4" />
          <circle cx="80" cy="90" r="1" fill="#ffffff" opacity="0.4" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
