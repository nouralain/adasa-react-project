import React, { useEffect, useState } from "react";
import IntroSpan from "./../../component/introSpan";
import { response } from './../data/data';
import Button from "../../component/Button";
import ArticleCard from './../../component/ArticleCard';
import "./blog.css"
export default function Blog() {
  const {categories,posts}=response;
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchValue , setSearchValue]=useState("")

 
function filterPosts(posts, activeCategory, searchValue) {
  const search = searchValue.toLowerCase();

  if (activeCategory === "all" && search === "") {
    return posts;
  }

  if (activeCategory === "all") {
    return posts.filter(post =>
      post.excerpt.toLowerCase().includes(search)
    );
  }

  if (search === "") {
    return posts.filter(
      post => post.category === activeCategory
    );
  }

  return posts.filter(
    post =>
      post.category === activeCategory &&
      (

        post.excerpt.toLowerCase().includes(search)
      )
  );
}

  
  return (
    <>
      <section className=" py-5 bg-black">
        <div className="container-fluid container-xl">
          <div className="pt-5 bg-black d-flex flex-column justify-content-center align-items-center gap-3">
            <IntroSpan text={"مدونتنا"} page={"blog"} />
            <h1 className="fw-bold text-4xl">
              استكشف{" "}
              <span className="orange-gradient1 bg-clip-text">
                مقالاتنا
              </span>{" "}
            </h1>

            <p className="text-xl gray100-text text-center">
              اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث.
            </p>
          </div>
        </div>
      </section>

       <section className="filter py-5 bg-black position-sticky  gray-border z-2">
          <div className="container-fluid container-xl">
            <div className="topics d-md-flex justify-content-between align-items-center">
             <div className="search position-relative">
               <input onInput ={e=>setSearchValue(e.target.value)} type="text" placeholder="ابحث في المقالات..." className=" search-form-control w-md-fit h-md-fit " />
              <i className="fa-solid fa-magnifying-glass position-absolute top-50 translate-middle-y start-0 gray200-text ms-3"></i>
             </div>
              <div className="mt-3 gap-2 d-flex align-items-center flex-wrap justify-content-center">
                <Button action={()=>setActiveCategory("all")} text="جميع المقالات"
              shape={"rounded4"}
              size={"sm"}
              color={"orangeGradient3"}/>
                {categories.map(category=><Button action={()=>setActiveCategory(category.name)} text={category.name}
              shape={"rounded4"}
              size={"sm"}
              color={"orangeGradient3"}/>)}
              </div>
            </div>
          </div>
       </section>
      
       <section className=" py-5 bg-black">
         <div className="container-fluid container-xl">
          <div className="row">
            {filterPosts(posts, activeCategory, searchValue).map(post=><div className="col-12 col-md-6 col-lg-4" key={post.id}><ArticleCard
            
             image={post.image}
             category={post.category}
             readTime={post.readTime}
             info={post.excerpt}
             title={post.title}
             author={post.author}
             date={post.date}
             /></div>)}
          </div>
         </div>
       </section>
    </>
  );
}
