import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "/src/Styles/CarouselMenu.module.css"
import {Context} from "/src/Components/Language"
import { FormattedMessage } from 'react-intl';
import { useContext } from "react";



export default function CarouselMenu() {

    const context = useContext(Context);

        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0,
            autoplay: true,
            speed: 8000, 
            pauseOnHover: true, 
            arrows: false,
            cssEase: 'linear',
            responsive: [
            {
                breakpoint: 440,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
            ]
        };




    return (
        <div id="platosEstrella" className={classes.contenedor}>
            <h3 className={classes.titulo}>
                <FormattedMessage id="estrella"/>
            </h3>
            <Slider {...settings}>
                <div>
                <img src= "/src/Assets/img/croquetas.jpg" className={classes.imagen}/>
                <span className={classes.pieDeFoto}>Croquetas de pulpo</span>
                </div>
                <div>
                <img src="/src/Assets/img/paella.png" className={classes.imagen}/>
                <span className={classes.pieDeFoto}>Paella Valenciana</span>
                </div>
                <div>
                <img src="/src/Assets/img/langosta.jpg" className={classes.imagen}/>
                <span className={classes.pieDeFoto}>Langosta Noisette</span>
                </div>
                <div>
                <img src="/src/Assets/img/pescado.jpg" className={classes.imagen}/>
                <span className={classes.pieDeFoto}>Pesca del día</span>
                </div>
            </Slider>
        </div>
    );
    }





