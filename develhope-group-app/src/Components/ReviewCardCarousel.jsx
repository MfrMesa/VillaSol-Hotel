import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReviewCard } from "./ReviewCard";
import classes from "../Styles/ReviewCardCarousel.module.scss";
import PropTypes from "prop-types";

ReviewCardCarousel.propTypes = {
  nameInput: PropTypes.string,
  emailInput: PropTypes.string,
};

ArrowRight.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

ArrowLeft.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

function ArrowRight(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <svg
        className={classes.svgRight}
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="30"
        viewBox="0 0 21 47"
        fill="none"
      ></svg>
    </div>
  );
}

function ArrowLeft(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <svg
        className={classes.svgLeft}
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="30"
        viewBox="0 0 21 47"
        fill="none"
        style={{ transform: "rotate(180deg)" }}
      ></svg>
    </div>
  );
}

export default function ReviewCardCarousel() {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 1,
        },
      },
    ]
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <ReviewCard />
        </div>
        <div>
          <ReviewCard />
        </div>
        <div>
          <ReviewCard />
        </div>
        <div>
          <ReviewCard />
        </div>
        <div>
          <ReviewCard />
        </div>
        <div>
          <ReviewCard />
        </div>
        <div>
          <ReviewCard />
        </div>
        <div>
          <ReviewCard />
        </div>
        <div>
          <ReviewCard />
        </div>
        <div>
          <ReviewCard />
        </div>
        <div>
          <ReviewCard />
        </div>
        <div>
          <ReviewCard />
        </div>
      </Slider>
    </div>
  );
}
