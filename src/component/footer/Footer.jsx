import React from "react";
import { response } from "../../pages/data/data";
import SocialSpan from "./../SocialSpan";
import Button from "./../Button";
import "./Footer.css";
import {NavLink} from "react-router-dom"
import { socialLogos } from './../../pages/data/socialLogos';

export default function Footer() {
  const { siteInfo } = response;
 
  return (
    <>
      <footer className=" bg-gray-700 border-top border-light border-opacity-10 position-relative overflow-hidden">
         <div className="gradient2"></div>
        <div className="gradient3"></div>
        <div className="container-fluid container-xl">
          <div className="row  py-5">
            <div className="col-12 col-md-6 col-lg-3 mt-5">
              
                <div className="logo d-flex align-items-center gap-2">
                  <span className="w-44 h-44 orange-gradient3 d-flex align-items-center justify-content-center rounded-4 text-xl fw-bold">
                    ع
                  </span>
                  <span className="text-xl fw-bold">{siteInfo.name}</span>
                </div>
                <p className="text-sm gray200-text my-3">
                  {siteInfo.description}
                </p>
                <div className="d-flex gap-2 ">
                  {socialLogos.map((logo) => (
                    <SocialSpan link={siteInfo.social[logo.name]} logo={logo.icon} />
                  ))}
                </div>
              
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-5">
              
                <h3 className="text-base fw-medium mb-4">استكشف</h3>
                <ul className="me-3">
                  <li className="text-sm gray200-text mb-3"><NavLink to="/">الرئيسية</NavLink></li>
                  <li className="text-sm gray200-text mb-3"><NavLink to="blog">المدونة</NavLink></li>
                  <li className="text-sm gray200-text"><NavLink to="about">من نحن</NavLink></li>
                </ul>
              
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-5">
              
                <h3 className="text-base fw-medium mb-4">التصنيفات</h3>
                <ul className="me-3">
                  <li className="text-sm gray200-text mb-3"><NavLink to="">إضاءة</NavLink></li>
                  <li className="text-sm gray200-text mb-3"><NavLink to="">بورتريه</NavLink></li>
                  <li className="text-sm gray200-text"><NavLink to="">مناظر طبيعية</NavLink></li>
                  <li className="text-sm gray200-text"><NavLink to="">تقنيات</NavLink></li>
                </ul>
             
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-5">
              
                <h3 className="text-base fw-medium mb-4">ابقى على اطلاع</h3>
                <p className="text-sm gray200-text me-3">
                  اشترك للحصول على أحدث المقالات والتحديثات.
                </p>
                <input
                  type="email"
                  className=" subscribe-form-footer "
                  placeholder="ادخل بريدك الالكتروني"
                />
                <Button
                  text={"اشترك "}
                  shape={"pill"}
                  size={"lg"}
                  color={"orangeGradient3"}
                                hover={"translate"}

                />
              </div>
            </div>

          
        </div> 
            <div className="text-center border-top border-light border-opacity-10 pt-3 d-md-flex align-items-md-center justify-content-sm-around ">
              <p className="text-sm gray300-text ">© 2026 عدسة. صنع بكل <i className="fa-solid fa-heart orange500-text"></i> جميع الحقوق محفوظة</p>
              <div>
                <a href="" className="gray300-text text-sm ms-4">سياسة الخصوصية</a>
                <a href="" className="gray300-text text-sm">شروط الخدمة</a>
              </div>
            </div>
      </footer>
    </>
  );
}
