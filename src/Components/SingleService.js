import React from "react";
import {useTranslation} from 'react-i18next'

export default function SingleService(props) {

  const {t} = useTranslation()

  return (
    <div className="single-service d-flex flex-column justify-content-center align-items-center col-12 col-lg-6 px-3 h-100">
      <div className="service-img text-center col-12 my-3">
        <img
          className="img-fluid rounded-3"
          src={props.services.imgURL}
          alt=""
        />
      </div>
      <div className="single-service-title col-12 fs-3 text-center my-3">
        {t(`serviceH${props.services.id}`)}
      </div>
      <div className="service-description d-flex flex-wrap justify-content-center align-items-center fs-5 col-12 my-3 text-center">
      <span>{t(`service${props.services.id}`)}</span>
      </div>
    </div>
  );
}
