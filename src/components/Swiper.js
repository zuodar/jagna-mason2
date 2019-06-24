import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm'

export default class MyNavigation extends Component {
  render() {
    const params = {
      loop: true,
      modules: [/*Pagination,*/ Navigation],
      // pagination: {
      //   el: '.swiper-pagination',
      //   type: 'bullets',
      //   clickable: true
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }

    return (
      <div>            
        <Swiper {...params}>
          <div>Slide 1</div>
          <div>Slide 2</div>
          <div>Slide 3</div>
          <div>Slide 4</div>
          <div>Slide 5</div>
        </Swiper>




      </div>
    )
  }
}

