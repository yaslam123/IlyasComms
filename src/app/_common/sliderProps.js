import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  A11y,
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  HashNavigation,
  History,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
  Virtual,
  Parallax,
  FreeMode,
} from "swiper";

const MyComponent = () => {
  return (
    <swiper
      modules={[
        Navigation,
        Pagination,
        Mousewheel,
        Keyboard,
        A11y,
        Autoplay,
        EffectCreative,
        EffectFade,
        Grid,
        HashNavigation,
        History,
        Scrollbar,
        Thumbs,
        Virtual,
        Parallax,
        FreeMode,
      ]}
      A11y
      Autoplay
      EffectCreative
      EffectFade
      Grid
      HashNavigation
      History
      Keyboard
      Mousewheel
      navigation
      Pagination
      Scrollbar
      Thumbs
      Virtual
      Parallax
      FreeMode
    ></swiper>
  );
};
export default MyComponent;

export const SliderProps = {
  milInfiniteSlider: {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 4000,
    autoplay: true,
    autoplay: {
      delay: 0,
    },
    loop: true,
    freeMode: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 4,
      },
    },
  },
  milBannerSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    autoplay: {
      delay: 5000,
    },
    effect: "fade",
    parallax: true,
    loop: true,
    navigation: {
      prevEl: ".mil-banner-prev",
      nextEl: ".mil-banner-next",
    },
    pagination: {
      el: ".mil-banner-pagination",
      type: "bullets",
      clickable: true,
    },
  },
  milBannerSlider2: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    autoplay: {
      delay: 5000,
    },
    effect: "fade",
    parallax: true,
    loop: true,
    navigation: {
      prevEl: ".mil-banner-prev",
      nextEl: ".mil-banner-next",
    },
    pagination: {
      el: ".mil-banner-pagination",
      type: "bullets",
      clickable: true,
    },
  },
  milProcessSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    parallax: true,
    navigation: {
      prevEl: ".mil-process-prev",
      nextEl: ".mil-process-next",
    },
    pagination: {
      el: ".mil-banner-pagination",
      type: "bullets",
      clickable: true,
    },
  },
  milReviewsSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    effect: "fade",
    parallax: true,
    navigation: {
      prevEl: ".mil-process-prev",
      nextEl: ".mil-process-next",
    },
    pagination: {
      el: ".mil-banner-pagination",
      type: "bullets",
      clickable: true,
    },
  },
  milIllustrationSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    effect: "fade",
    parallax: true,
    navigation: {
      prevEl: ".mil-illustration-prev",
      nextEl: ".mil-illustration-next",
    },
  },
};
