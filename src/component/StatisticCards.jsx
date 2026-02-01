import React from "react";

export default function StatisticCards({icon,number,label}) {
  return <>
  
  <div className="inner d-flex flex-column  align-items-center justify-content-center p-3 gap-2 rounded-4 gray-border bg-gray-500 ">
<i className={icon}></i>
<span className="text-xl fw-bold orange100-text">{number}</span>
<span className="fw-sm gray200-text orange300-text px-2 py-1">{label}</span>
  </div>
  </>;
}
