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
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

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
            {/*Carusel seccion lo mas vendido*/}
            <Splide
            options={{
                type: "loop",
                autoWidth: true,
                autoplay: true,
                arrows: true,
                navigation: true,
                pagination: false,
                rewind: true,
                gap: '15px',
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
                        <div className="card-background" style={{ backgroundImage: `url(${image.src})` }}>
                        <div className="product-info">
                            <h3 className="product-title">{image.title}</h3>
                            {image.oldPrice && <p className="product-old-price">{image.oldPrice}</p>}
                            <p className="product-new-price">{image.newPrice}</p>
                            {image.discount && <span className="discount-badge">{image.discount}</span>}
                        </div>
                        </div>
                    </div>
                    </SplideSlide>
                ))}
                    <SplideSlide>
                    <div className="ver-mas-container">
                        <button className="btn btn-primary btn-lg">
                            Ver más
                            <i className="bi bi-arrow-right ms-2"></i>
                        </button>
                    </div>
                    </SplideSlide>
                </SplideTrack>
            </div>
            </Splide>
            {/*Carusel seccion para ti*/}
            <Splide
            options={{
                type: "loop",
                autoWidth: true,
                autoplay: true,
                arrows: true,
                navigation: true,
                pagination: false,
                rewind: true,
                gap: '15px',
                clones: 0,
            }}
            hasTrack={false}
            >
            <div className="custom-wrapper">
                <h3>Para ti</h3>
                <SplideTrack>
                {images.map((image, index) => (
                    <SplideSlide key={index}>
                    <div className="product-card">
                        <div className="card-background" style={{ backgroundImage: `url(${image.src})` }}>
                        <div className="product-info">
                            <h3 className="product-title">{image.title}</h3>
                            {image.oldPrice && <p className="product-old-price">{image.oldPrice}</p>}
                            <p className="product-new-price">{image.newPrice}</p>
                            {image.discount && <span className="discount-badge">{image.discount}</span>}
                        </div>
                        </div>
                    </div>
                    </SplideSlide>
                ))}
                    <SplideSlide>
                    <div className="ver-mas-container">
                        <button className="btn btn-primary btn-lg">
                            Ver más
                            <i className="bi bi-arrow-right ms-2"></i>
                        </button>
                    </div>
                    </SplideSlide>
                </SplideTrack>
            </div>
            </Splide>
        </div>
        </>
    );
}
