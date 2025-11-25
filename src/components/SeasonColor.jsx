import React, { useRef } from 'react';
import metallic1 from '../assets/metallic-1.png';
import metallic2 from '../assets/metallic-2.png';
import heroShoe from '../assets/hero-shoe-clean.png';

const SeasonColor = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 400;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    const products = [
        { id: 1, name: 'AVOCCO Chrome', image: metallic1, price: '$180' },
        { id: 2, name: 'AVOCCO Iridis', image: metallic2, price: '$200' },
        { id: 3, name: 'AVOCCO Stealth', image: heroShoe, price: '$160' },
        { id: 4, name: 'AVOCCO Silver', image: metallic1, price: '$190' },
        { id: 5, name: 'AVOCCO Shine', image: metallic2, price: '$210' },
    ];

    return (
        <section className="season-color-section">
            <div className="section-header">
                <h2 className="section-title">Colour of the Season: Metallic Shine</h2>
                <div className="nav-buttons">
                    <button onClick={() => scroll('left')} className="nav-btn">{'<'}</button>
                    <button onClick={() => scroll('right')} className="nav-btn">{'>'}</button>
                </div>
            </div>

            <div className="carousel-container" ref={scrollRef}>
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <div className="image-box">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
        .season-color-section {
          background-color: #111;
          padding: 60px 0;
          color: white;
        }
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 40px 30px;
          max-width: 1400px;
          margin: 0 auto;
        }
        .section-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0;
        }
        .nav-buttons {
          display: flex;
          gap: 10px;
        }
        .nav-btn {
          background: #333;
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          transition: background 0.3s;
        }
        .nav-btn:hover {
          background: #555;
        }
        .carousel-container {
          display: flex;
          overflow-x: auto;
          gap: 20px;
          padding: 0 40px;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none;  /* IE 10+ */
        }
        .carousel-container::-webkit-scrollbar { 
          display: none;  /* Safari and Chrome */
        }
        .product-card {
          min-width: 300px;
          flex: 0 0 auto;
        }
        .image-box {
          background: #222;
          height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
          overflow: hidden;
        }
        .image-box img {
          width: 90%;
          transition: transform 0.3s;
        }
        .product-card:hover .image-box img {
          transform: scale(1.05);
        }
        .product-info h3 {
          font-size: 1rem;
          margin: 0 0 5px;
          font-weight: 600;
        }
        .product-info p {
          color: #888;
          margin: 0;
          font-size: 0.9rem;
        }
      `}</style>
        </section>
    );
};

export default SeasonColor;
