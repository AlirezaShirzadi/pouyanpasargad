import React from "react";

//import Logos
import PPPartner from './../img/PPPartner.png'
import PMPartner from './../img/PMPartner.png'
import TTPartner from './../img/TTPartner.png'
import LTPartner from './../img/LTPartner.png'

export default function Partners(){
    return(
        <section className="partners-section d-flex align-items-center" id="partners">
        <div className="partners container d-flex flex-wrap justify-content-between align-items-center">
            <div className="col-12 col-md-6 col-lg-3 text-center"><img className="partner-img img-fluid"
                    src={PPPartner} alt=""/></div>
            <div className="col-12 col-md-6 col-lg-3 text-center"><img className="partner-img img-fluid"
                    src={PMPartner} alt=""/></div>
            <div className="col-12 col-md-6 col-lg-3 text-center"><img className="partner-img img-fluid"
                    src={TTPartner} alt=""/></div>
            <div className="col-12 col-md-6 col-lg-3 text-center"><img className="partner-img img-fluid"
                    src={LTPartner} alt=""/></div>
        </div>
    </section>
    )
}