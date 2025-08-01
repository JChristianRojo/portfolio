import { useState } from 'react';
import bg from '/assets/gf-day-bg.jpg';

function GirlfriendsDay() {
  const [page, setPage] = useState(0);

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

  const isLastPage = page === pages.length - 1;
  const colors = ['#ff5e8e', '#f06292', '#f48fb1', '#ec407a', '#f8bbd0'];

  return (
    <>
      <style>{`
        html, body {
          height: 100%;
          margin: 0;
          padding: 0;
        }

        body {
          background: url(${bg}) no-repeat center center fixed;
          background-size: cover;
          font-family: 'Poppins', sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }

        .card {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 20px;
          width: 90%;
          max-width: 500px;
          padding: 2rem;
          text-align: center;
          color: #333;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
          animation: fadeIn 0.6s ease-in-out;
          position: relative;
          z-index: 1;
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

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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
          overflow: hidden;
          z-index: 0;
          opacity: 0;
          transition: opacity 0.6s ease-in-out;
        }

        .hearts-wrapper.active {
          opacity: 1;
        }

        .heart {
          position: absolute;
          top: -40px;
          background: currentColor;
          transform: rotate(45deg);
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          opacity: 0.8;
          width: var(--size);
          height: var(--size);
        }

        .heart::before,
        .heart::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: currentColor;
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
      `}</style>

      {/* Hearts */}
      <div className={`hearts-wrapper ${isLastPage ? 'active' : ''}`}>
        {[...Array(20)].map((_, i) => {
          const size = 10 + Math.random() * 20; // 10–30px
          const color = colors[Math.floor(Math.random() * colors.length)];
          return (
            <span
              key={i}
              className="heart"
              style={{
                left: `${Math.random() * 100}%`,
                '--size': `${size}px`,
                color,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            ></span>
          );
        })}
      </div>

      {/* Card */}
      <div className="card">
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
