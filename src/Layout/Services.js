import React, { useState } from "react";
import SingleService from "../Components/SingleService";
import {useTranslation} from 'react-i18next'

//import photos
import MinesPic from "./../img/Mines.jpg";
import ExportPic from "./../img/Export.jpg";
import InvestPic from "./../img/Invest.jpg";
import ControlPic from "./../img/Control.jpg";

export default function Services() {

  const {t} = useTranslation()

  const [ServiceState] = useState({
    services: [
      {
        id: 1,
        imgURL: MinesPic,
        title: "معادن",
        description: `اکتشاف،استخراج،فرآوری و سایر مشاوره های تخصصی در حوضه معدن بخشی از خدمات کادر تخصصی ما در این حوضه است.طراحی و اجرا و نصب ماشین آلات معدنی یکی از کلیدی ترین مباحث در بهره وری فعالیت های معدنی است`,
      },
      {
        id: 2,
        imgURL: ExportPic,
        title: "صادرات و واردات",
        description: `این شرکت تلاش دارد تا با توجه به توان تخصصی تیم حرفه ای خود بهترین خدمات را در حوضه صادرات و واردات و مشاوره های مربوطه ارائه نماید`,
      },
      {
        id: 3,
        imgURL: InvestPic,
        title: "مشاوره و سرمایه گذاری",
        description: `این شرکت گسترده ترین خدمات در حوضه سرمایه گذاری ، از تهیه طرح های توجیهی تا اخذ مجوز های دولتی و مشاوره های حین اجرا را ارائه می دهد`,
      },
      {
        id: 4,
        imgURL: ControlPic,
        title: "کنترل کیفیت",
        description: `رقابت در عرصه های داخلی و بین المللی نیازمند تبهیت از استاندارد های جهانی در تولید و ارائه خدمات می باشد.این شرکت میتواند در اخز بهترین و معتبر ترین گواهینامه های بین المللی شما را راهنمایی کند`,
      },
    ],
  });

  return (
    <section className="services-section" id="services">
      <div className="container py-3">
        <div className="title-box d-flex flex-wrap justify-content-center justify-content-md-start">
          <h2 className="first-title pe-4 ps-2">{t("services")}</h2>
          <h2 className="second-title px-2">{t("header2")}</h2>
        </div>
        <div className="services d-flex flex-wrap justify-content-center align-items-center">
          {ServiceState.services.map((item) => (
            <SingleService services={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
