import React from "react";
import PhotoAlbum from "react-photo-album";
import {useTranslation} from 'react-i18next'

//import Photos
import Pic1 from './../img/Nuts/1.jpg'
import Pic2 from './../img/Nuts/2.jpg'
import Pic3 from './../img/Nuts/3.jpg'
import Pic4 from './../img/Nuts/4.jpg'
import Pic5 from './../img/Nuts/5.jpg'
import Pic6 from './../img/Nuts/6.jpg'
import Pic7 from './../img/Nuts/7.jpg'
import Pic8 from './../img/Nuts/8.jpg'
import Pic9 from './../img/Nuts/9.jpg'
import Pic10 from './../img/Nuts/10.jpg'
import Pic11 from './../img/Nuts/11.jpg'
import Pic12 from './../img/Nuts/12.jpg'
import Pic13 from './../img/Nuts/13.jpg'
import Pic14 from './../img/Nuts/14.jpg'
import Pic15 from './../img/Nuts/15.jpg'
import Pic16 from './../img/Nuts/16.jpg'
import Pic17 from './../img/Nuts/17.jpg'

export default function Carpet() {
  const photos = [
    {
      src: Pic1,
      width: 800,
      height: 600,
    },
    {
      src: Pic2,
      width: 800,
      height: 600,
    },
    {
      src: Pic3,
      width: 800,
      height: 600,
    },
    {
      src: Pic4,
      width: 800,
      height: 600,
    },
    {
      src: Pic5,
      width: 800,
      height: 600,
    },
    {
      src: Pic6,
      width: 800,
      height: 600,
    },
    {
      src: Pic7,
      width: 800,
      height: 600,
    },
    {
      src: Pic8,
      width: 800,
      height: 600,
    },
    {
      src: Pic9,
      width: 800,
      height: 600,
    },
    {
      src: Pic10,
      width: 800,
      height: 600,
    },
    {
      src: Pic11,
      width: 800,
      height: 600,
    },
    {
      src: Pic12,
      width: 800,
      height: 600,
    },
    {
      src: Pic13,
      width: 800,
      height: 600,
    },
    {
      src: Pic14,
      width: 800,
      height: 600,
    },
    {
      src: Pic15,
      width: 800,
      height: 600,
    },
    {
      src: Pic16,
      width: 800,
      height: 600,
    },
    {
      src: Pic17,
      width: 800,
      height: 600,
    },
  ];

  const {t} = useTranslation()

  window.scrollTo(0, 0);

  return (
    <section className="one-product-section">
      <div className="one-product-header2 d-flex flex-column justify-content-center align-content-center">
        <div className="one-product-ttitle col-12 fs-1 text-center">{t("dried-fruit")}</div>
      </div>
      <div className="one-product-description py-3 d-flex justify-content-center align-items-center">
        <div className="col-12 fs-5 py-5 px-5">
        {t("nuts-text")}
        </div>
      </div>
      <div className="p-3">
        <PhotoAlbum layout="rows" photos={photos} />
      </div>
    </section>
  );
}
