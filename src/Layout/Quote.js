import React from "react";
import {useTranslation} from 'react-i18next'

export default function Quote() {

  const {t} = useTranslation()

  return (
    <section
      className="quote-section d-flex flex-column flex-md-column justify-content-center align-items-center"
      id="quote"
    >
      <div className="quote-title px-3 col-12 text-center py-3 fs-1 text-wrap">
        {t("vision")}
      </div>
      <div className="quote-description px-3 col-12 text-center py-3 fs-3 text-wrap">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
      </div>
    </section>
  );
}
