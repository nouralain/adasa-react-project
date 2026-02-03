import React from 'react'
import "./ArticleCard.css"
import ImgSpan from './imgSpan'
export default function ArticleCard({image,category ,readTime,info,title ,author,date,page }) {
  
  return (
<>
<figure className={`rounded-4 overflow-hidden gray-border ${page==="home" && "d-md-flex"}`}>
<div className="fig-image position-relative">
  <img src={image} alt="" className='w-100 h-100 object-cover'/>
  <ImgSpan color={"orange-gradient1" } text={"مميز"}/>
  </div>
<figcaption className='p-4 bg-gray-500'>
<div>
    <span className='category-span text-xs fw-semibold orange300-text py-1 px-3 rounded-pill'>{category}</span>
<span className='text-sm gray200-text me-2'><i className="fa-regular fa-clock fa-sm "></i> {readTime}</span>
</div>

<h3 className='text-2xl fw-bold my-4'>{title}</h3>
<p className='text-base gray100-text'>{info}</p>

<div className='d-flex align-items-center justify-content-between'>
   <div className='d-flex align-items-center justify-content-center gap-2'>
     <div className="author-img position-relative">
        <img src={author.avatar} alt={author.name} className='w-100 rounded-circle overflow-hidden '/>
    </div>

  <div>
      <h4 className='text-sm fw-medium mb-0'>{author.name}</h4>
    <span className='text-xs gray200-text'>{date}</span>
  </div>
   </div>

   <span className='text-sm fw-medium orange300-text'>اقرأ المقال <i class="fa-solid fa-arrow-left-long"></i></span>
</div>
</figcaption>
</figure>

</>  )
}
