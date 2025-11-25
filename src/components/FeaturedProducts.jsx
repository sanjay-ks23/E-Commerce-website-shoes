import React from 'react';
import lifestyleRunning from '../assets/lifestyle-running.png';
import lifestyleTraining from '../assets/lifestyle-training.png';
import lifestyleTrail from '../assets/lifestyle-trail.png';
import heroShoe from '../assets/hero-shoe-clean.png';

const FeaturedProducts = () => {
  const categories = [
    {
      id: 1,
      title: 'RUNNING',
      subtitle: 'For the Ultimate Energised Ride',
      image: lifestyleRunning,
      link: '#running'
    },
    {
      id: 2,
      title: 'TRAINING',
      subtitle: 'Power Up Your Workouts',
      image: lifestyleTraining,
      link: '#training'
    },
    {
      id: 3,
      title: 'TRAIL',
      subtitle: 'Conquer Any Terrain',
      image: lifestyleTrail,
      link: '#trail'
    },
    {
      id: 4,
      title: 'LIFESTYLE',
      subtitle: 'Everyday Comfort & Style',
      image: heroShoe,
      link: '#lifestyle'
    }
  ];

  return (
    <section className="featured-section">
      <div className="section-header">
        <h2 className="section-title">Featured</h2>
      </div>
      <div className="grid-container">
        {categories.map((category) => (
          <div key={category.id} className="grid-item">
            <div className="image-wrapper">
              <img src={category.image} alt={category.title} className="category-image" />
            </div>
            <div className="category-content">
              <h3 className="category-subtitle">{category.subtitle}</h3>
              <h2 className="category-title">{category.title}</h2>
              <button className="shop-button">Shop</button>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .featured-section {
          width: 100%;
          background-color: #111;
          padding-top: 40px; /* Space for title */
        }
        .section-header {
            padding: 0 40px 20px;
            max-width: 1400px;
            margin: 0 auto;
        }
        .section-title {
            color: white;
            font-size: 2rem;
            font-weight: 600;
            margin: 0;
        }
        .grid-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          gap: 0; /* Seamless grid */
        }
        .grid-item {
          position: relative;
          height: 80vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .image-wrapper {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-size: cover;
            background-position: center;
            transition: transform 0.5s ease;
        }
        /* Use object-fit for lifestyle images to fill the box */
        .category-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }
        .grid-item:hover .category-image {
            transform: scale(1.05);
        }
        .category-content {
          position: absolute;
          bottom: 40px;
          left: 40px;
          z-index: 2;
          text-align: left;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5); /* Shadow for readability on images */
        }
        .category-subtitle {
            font-size: 1rem;
            color: #fff;
            margin-bottom: 5px;
            font-weight: 500;
        }
        .category-title {
          font-size: 3rem;
          font-weight: 900;
          color: white;
          margin: 0 0 20px 0;
          text-transform: uppercase;
          font-style: italic;
          letter-spacing: 1px;
        }
        .shop-button {
          background: white;
          color: black;
          border: none;
          padding: 10px 30px;
          border-radius: 30px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.3s, transform 0.2s;
        }
        .shop-button:hover {
          background: #ddd;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .grid-container {
            grid-template-columns: 1fr;
          }
          .grid-item {
            height: 60vh;
          }
          .category-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturedProducts;
