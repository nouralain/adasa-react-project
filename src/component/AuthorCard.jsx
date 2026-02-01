import React from "react";
import "./AuthorCard.css";
import SocialSpan from './SocialSpan';
import { socialLogos } from './../pages/data/socialLogos';
export default function AuthorCard({ name, role, avatar }) {
  return (
    <>
      <div className="inner d-flex flex-column  align-items-center justify-content-center p-3 gap-2 rounded-4 gray-border bg-gray-500 ">
        <div className="avatar-imaga w-96 h-96 position-relative ">
          <img
            src={avatar}
            alt={name}
            className="w-100 rounded-circle overflow-hidden"
          />
          <span className="position-absolute bottom-0  w-24 h-24 bg-orange-500 rounded-circle d-flex align-items-center justify-content-center ">
            <i class="fa-solid fa-check fa-2xs"></i>
          </span>
        </div>
        <h3 className="text-lg fw-bold">{name}</h3>
        <h4 className="text-sm fw-medium orange300-text">{role}</h4>
        <div className="d-flex gap-2 ">
                          {socialLogos.slice(0,3).map((logo) => (
                            <SocialSpan logo={logo.icon} link={"/"} />
                          ))}
                        </div>
      </div>
    </>
  );
}
