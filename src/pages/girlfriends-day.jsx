import { useState, useEffect } from 'react';
import bg from '/assets/gf-day-bg.jpg';

function GirlfriendsDay() {
  const [page, setPage] = useState(0);
  const [bursts, setBursts] = useState([]);
  const [fallingHearts, setFallingHearts] = useState([]);

  useEffect(() => {
    const hearts = Array.from({ length: 30 }).map(() => ({
      size: 12 + Math.random() * 15,
      color: heartColors[Math.floor(Math.random() * heartColors.length)],
      left: Math.random() * 100,
      animationDelay: Math.random() * 5,
      animationDuration: 6 + Math.random() * 4,
    }));
    setFallingHearts(hearts);
  }, []);

  const pages = [
    {
      title: 'To the Most Beautiful Girl 🌹',
      message:
        "Today is Girlfriend's Day, but every day with you already feels like a celebration.",
      image: '/assets/1.jpg',
    },
    {
      title: 'You’re My Favorite Person',
      message: 'You make ordinary moments special. I wouldn’t trade our memories for anything.',
      image: '/assets/2.jpg',
    },
    {
      title: 'Thank You for Staying',
      message:
        'Thank you for the patience, the quiet understanding, and the way you still choose me even when it’s hard. I know I haven’t always made it easy, but you stayed and that means everything.',
      image: '/assets/3.jpg',
    },
    {
      title: 'I’m Not Perfect',
      message:
        'I mess up. I overthink. I shut down sometimes. But I’m trying to be better. You deserve someone who shows up every day, and I want to be that person more than anything.',
      image: '/assets/4.jpg',
    },
    {
      title: 'Will You Still Be Mine?',
      message:
        'Sa lahat ng pinagdaanan natin, sa mga araw na masaya, malungkot, at magulo, pipiliin mo pa rin ba ako? Kasi ako, palaging ikaw. At palaging ikaw lang.',
      image: '/assets/5.jpg',
    },
  ];

  const heartColors = ['#ff5e8e', '#ff4081', '#ff80ab', '#ec407a', '#f48fb1'];
  const isLastPage = page === pages.length - 1;

  const handleClick = (e) => {
    const burstId = Date.now();
    const burst = {
      id: burstId,
      x: e.clientX,
      y: e.clientY,
      hearts: Array.from({ length: 12 }).map(() => ({
        x: Math.random() * 2 - 1,
        y: Math.random() * 2 - 1,
        size: 10 + Math.random() * 15,
        color: heartColors[Math.floor(Math.random() * heartColors.length)],
      })),
    };
    setBursts((prev) => [...prev, burst]);

    setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b.id !== burstId));
    }, 800);
  };

  return (
    <>
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
        }

        body {
          background: url(${bg}) no-repeat center center fixed;
          background-size: cover;
          font-family: 'Poppins', sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 20px;
          width: 90%;
          max-width: 500px;
          padding: 2rem;
          text-align: center;
          color: #333;
          z-index: 1;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
          position: relative;
        }

        .card img {
          width: 100%;
          max-height: 280px;
          object-fit: cover;
          border-radius: 15px;
          margin-bottom: 1rem;
        }

        h2 {
          color: #d81b60;
          font-size: 24px;
          margin-bottom: 0.5rem;
        }

        p {
          font-size: 16px;
          line-height: 1.6;
          color: #444;
        }

        button {
          margin-top: 1.5rem;
          padding: 10px 24px;
          border: none;
          border-radius: 50px;
          background: linear-gradient(to right, #ec407a, #f06292);
          color: #fff;
          font-size: 16px;
          cursor: pointer;
          transition: transform 0.3s;
        }

        button:hover {
          transform: scale(1.05);
        }

        .final-message {
          font-size: 22px;
          font-weight: bold;
          color: #d81b60;
          margin-top: 1rem;
          animation: pop 0.5s ease-in-out;
        }

        @keyframes pop {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .hearts-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .heart {
          position: absolute;
          top: -40px;
          transform: rotate(45deg);
          animation: fall linear infinite;
          opacity: 0.8;
        }

        .heart::before,
        .heart::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: inherit;
          border-radius: 50%;
        }

        .heart::before {
          top: -50%;
          left: 0;
        }

        .heart::after {
          left: -50%;
          top: 0;
        }

        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0;
          }
        }

        .burst {
          position: fixed;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 10;
        }

        .burst-heart {
          position: absolute;
          transform: rotate(45deg);
          animation: burst-fly 0.8s ease-out forwards;
          opacity: 0.9;
        }

        .burst-heart::before,
        .burst-heart::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: inherit;
          border-radius: 50%;
        }

        .burst-heart::before {
          top: -50%;
          left: 0;
        }

        .burst-heart::after {
          left: -50%;
          top: 0;
        }
@keyframes burst-fly {
  to {
    transform: translate(var(--x), var(--y)) scale(1.2) rotate(720deg);
    opacity: 0;
  }
}


      `}</style>

      {/* Falling hearts on page load */}
      <div className="hearts-wrapper">
        {fallingHearts.map((heart, i) => (
          <span
            key={i}
            className="heart"
            style={{
              left: `${heart.left}%`,
              width: `${heart.size}px`,
              height: `${heart.size}px`,
              background: heart.color,
              animationDelay: `${heart.animationDelay}s`,
              animationDuration: `${heart.animationDuration}s`,
            }}
          />
        ))}
      </div>

      {/* Burst on click */}
      {bursts.map((burst) => (
        <div key={burst.id} className="burst" style={{ top: burst.y, left: burst.x }}>
          {burst.hearts.map((h, i) => (
            <div
              key={i}
              className="burst-heart"
              style={{
                width: `${h.size}px`,
                height: `${h.size}px`,
                background: h.color,
                // DO NOT include inline transform here
                animation: `burst-fly 0.8s ease-out forwards`,
                ['--x']: `${h.x * 100}px`,
                ['--y']: `${h.y * 100}px`,
              }}
            />
          ))}
        </div>
      ))}

      <div className="card" onClick={handleClick}>
        <img src={pages[page].image} alt={`Slide ${page + 1}`} />
        <h2>{pages[page].title}</h2>
        <p>{pages[page].message}</p>
        {!isLastPage ? (
          <button onClick={() => setPage(page + 1)}>Next 💌</button>
        ) : (
          <div className="final-message">I love you. Always and forever. 💖</div>
        )}
      </div>
    </>
  );
}

export default GirlfriendsDay;
