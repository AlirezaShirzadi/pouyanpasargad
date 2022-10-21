import React from "react";
import PhotoAlbum from "react-photo-album";
import {useTranslation} from 'react-i18next'

//import Photos
import Pic1 from "./../img/Herbal/1.jpg";
import Pic2 from "./../img/Herbal/2.jpg";
import Pic3 from "./../img/Herbal/3.jpg";
import Pic4 from "./../img/Herbal/4.jpg";
import Pic5 from "./../img/Herbal/5.jpg";

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
  ];

  const {t} = useTranslation()

  window.scrollTo(0, 0);

  return (
    <section className="one-product-section">
      <div className="one-product-header3 d-flex flex-column justify-content-center align-content-center">
        <div className="one-product-ttitle col-12 fs-1 text-center">
          {t("herbal-essensse")}
        </div>
      </div>
      <div className="one-product-description py-3 d-flex justify-content-center align-items-center">
        <div className="col-12 fs-5 py-5 px-5">
        {t("herbal-text")}
        </div>
      </div>
      <div className="p-3">
        <PhotoAlbum layout="rows" photos={photos} />
      </div>
    </section>
  );
}
