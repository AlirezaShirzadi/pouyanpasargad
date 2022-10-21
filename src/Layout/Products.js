import React, { useState } from "react";
import {useTranslation} from 'react-i18next'

//Import images

import CarpetPic from "./../img/Carpet.jpg";
import HandyCraftPic from "./../img/HandyCrafts.jpg";
import NutsPic from "./../img/Nuts.jpg";
import HerbalPic from "./../img/Herbal.jpg";
import InstructionPic from "./../img/Instruction.jpg";
import MineralPic from "./../img/Mineral.jpg";

import SingleProduct from "../Components/SingleProduct";
import SingleReverseProduct from "../Components/SingleReverseProduct";

export default function Products() {

  const {t} = useTranslation()

  const [ProductState, SetProduct] = useState({
    products: [
      {
        id: 1,
        imgURL: CarpetPic,
        description: `ایران یکی از برجسته ترین کشور ها در تولید انواع فرش ماشینی و دستباف و کاشان مهد تولید فرش جهان است.این شرکت تلاش دارد زیباترین و اصیل ترین فرش های ایرانی را برای شما عرضه نماید`,
        path: "/carpet",
      },
      {
        id: 2,
        imgURL: HandyCraftPic,
        description: `هنر ایران یکی از غنی ترین میراث های هنری در تاریخ جهان و صنایع دستی یکی از بارز ترین جلوه های هنر ایرانی است.ما برآن هستیم که اصیل ترین صنایع دستی ایران را به طور مستقیم در این سایت معرفی و عرضه نماییم`,
        path: "/handy-craft",
      },
      {
        id: 3,
        imgURL: NutsPic,
        description: `خشکبار جزو خوراکی های خوشمزه و مورد علاقه همگان است.خشکبار سرشار از مواد غذایی مفید مثل چربی های غیر اشباع مناسب برای قلب،پروتئین ها،ویتامین ها و مواد معدنی است. ما تلاش داریم تا بهترین و مرغوب ترین خشکبار ایرانی را در بهترین دسته بندی برای مشتریان عرضه نماییم`,
        path: "/nuts",
      },
      {
        id: 4,
        imgURL: HerbalPic,
        description: `عرقیات یکی از پرمصرف ترین شکل های استفاده از گیاهان است و کاشان بزرگترین مرکز تولید انواع عرقیات گیاهی از جمله گلاب و بیدمشک می باشد. ما مرغوب ترین محصولات عرقیات را برای شما عرضه می کنیم`,
        path: "/herbal",
      },
      {
        id: 5,
        imgURL: InstructionPic,
        description: `این شرکت یکی از شرکت های پیشتاز در زمینه صادرات کاشی دیوار،کف می باشد.این شرکت در حال حاضر به کشور های آسیای میانه،عراق،افغانستان،پاکستان و تاجیکستان صادرات دارد.`,
        path: "/instruction",
      },
      {
        id: 6,
        imgURL: MineralPic,
        description: `ایران یکی از غنی ترین کشور ها در زمینه انواع مواد معدنی است.بسیاری از ذخایر معدنی ما از حیث کمیت و کیفیت در رده های برتر جهانی است.این شرکت با توجه به توان تخصصی مدیران خود میتواند انواع مواد معدنی را تهیه و عرضه نماید`,
        path: "/mineral",
      },
    ],
  });

  return (
    <section className="product-section" id="products">
      <div className="container py-3">
        <div className="title-box d-flex flex-wrap justify-content-center justify-content-md-start">
          <h2 className="first-title pe-4 ps-2">{t("products")}</h2>
          <h2 className="second-title px-2">{t("header2")}</h2>
        </div>
        <SingleProduct product={ProductState.products[0]} />
        <SingleReverseProduct product={ProductState.products[1]} />
        <SingleProduct product={ProductState.products[2]} />
        <SingleReverseProduct product={ProductState.products[3]} />
        <SingleProduct product={ProductState.products[4]} />
        <SingleReverseProduct product={ProductState.products[5]} />
      </div>
    </section>
  );
}
