import Menu from "./Menu";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import producto1 from '../Images/producto1.png';
import producto2 from '../Images/producto2.png';
import producto3 from '../Images/producto3.png';
import producto4 from '../Images/producto4.png';
import producto5 from '../Images/producto5.png';
import producto6 from '../Images/producto6.png';
import producto7 from '../Images/producto7.png';
import producto8 from '../Images/producto8.png';
import '../Styles/Home.css';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';

export default function Home() {
  const images = [
    {
      src: producto1,
      alt: 'Pantalón 1',
      title: 'Jeans Azul Casual',
      oldPrice: '$120.000',
      newPrice: '$89.900',
      discount: '25% OFF',
    },
    {
      src: producto2,
      alt: 'Pantalón 2',
      title: 'Jeans Negro Casual',
      oldPrice: '$120.000',
      newPrice: '$89.900',
      discount: '25% OFF',
    },
    {
      src: producto3,
      alt: 'Camiseta 1',
      title: 'Camiseta sport blanca',
      newPrice: '$65.900',
    },
    {
      src: producto4,
      alt: 'Chaqueta 1',
      title: 'Chaqueta escudería',
      newPrice: '$90.900',
    },
    {
      src: producto5,
      alt: 'Conjunto 1',
      title: 'Conjunto en Rib',
      newPrice: '$90.900',
    },
    {
      src: producto6,
      alt: 'Zapatos 1',
      title: 'Zapatillas Nike Air Force 1',
      oldPrice: '$210.000',
      newPrice: '$189.900',
      discount: '10% OFF',
    },
    {
      src: producto7,
      alt: 'Pantaloneta 1',
      title: 'Pantaloneta en tela fria gruesa',
      newPrice: '$90.900',
    },
    {
      src: producto8,
      alt: 'Vestido 1',
      title: 'Vestido en hilo',
      newPrice: '$210.900',
    },
  ];

  return (
    <>
      <Menu />
      <div className="slidersContainer">
        <Splide
          options={{
            type: "loop",
            autoWidth: true,
            autoplay: true,
            arrows: true,
            pagination: false,
            rewind: true,
            gap: '15px', // Evita que se generen clones extra
            clones: 0,
          }}
          hasTrack={false}
        >
          <div className="custom-wrapper">
            <h3>Lo más vendido</h3>
            <SplideTrack>
              {images.map((image, index) => (
                <SplideSlide key={index}>
                  <div className="product-card">
                    <img src={image.src} alt={image.alt} className="product-image" />
                    <div className="product-info">
                      <h3 className="product-title">{image.title}</h3>
                      <p className="product-old-price">{image.oldPrice}</p>
                      <p className="product-new-price">{image.newPrice}</p>
                      <p className="product-discount">{image.discount}</p>
                    </div>
                  </div>
                </SplideSlide>
              ))}
                <SplideSlide>
                  <div className="ver-mas-container">
                    <button className="ver-mas-btn">Ver más</button>
                  </div>
                </SplideSlide>
            </SplideTrack>
            <div className="splide__arrows">
                <button className="splide__arrow splide__arrow--prev">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                    </svg>
                </button>
                <button className="splide__arrow splide__arrow--next">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                    </svg>
                </button>
            </div>
          </div>
        </Splide>
      </div>
    </>
  );
}
