import React from "react";
import IntroSpan from "./../../component/introSpan";
import Button from "./../../component/Button";
import StatisticCards from "./../../component/StatisticCards";
import ArticleCard from "../../component/ArticleCard";
import { response } from "../data/data";
import CategoriesCard from "./../../component/CategoriesCard";
import "./home.css";
import { statistics } from "./../data/statistics";
export default function Home() {
  const { posts, categories } = response;

  return (
    <>
      <section className=" pt-5 square-pattern position-relative overflow-hidden">
           <div className="gradient1"></div>
        <div className="gradient2"></div>
        <div className="gradient3"></div>
        <div className="container-fluid container-xl position-relative z-3 d-flex flex-column justify-content-center align-items-center gap-4 px-4">
          <IntroSpan text={"مرحباً بك في عدسة"} page={"home"} />
          <h1 className="fw-bold text-5xl  text-center mt-4">
            <span className="d-block">
              اكتشف <span className="orange-gradient1 bg-clip-text">فن </span>
            </span>
            <span className="d-block">التصوير الفوتوغرافي</span>
          </h1>
          <p className="text-xl text-lg-2xl gray100-text text-center">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>
          <div className="d-flex gap-3 align-items-center justify-content-center flex-column flex-md-row w-100 w-md-fit mb-4">
            <Button
              direct={"blog"}
              text={"استكشف المقالات"}
              shape={"pill"}
              size={"lg"}
              color={"orangeGradient4"}
              icon={"fa-solid fa-arrow-left-long me-2"}
              iconPosition={"left"}
              hover={"translate"}
            />
            <Button
              direct={"about"}
              text={"اعرف المزيد"}
              shape={"pill"}
              size={"lg"}
              color={"transparentGray"}
              icon={"fa-solid fa-info ms-2"}
              iconPosition={"right"}
               hover={"color"}

            />
          </div>
          <div className="row g-3 w-100 mb-5">
            {statistics.map((stat) => (
              <div className="col-6 col-lg-3">
                <StatisticCards
                  icon={stat.icon}
                  number={stat.number}
                  label={stat.label}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-gray-700 section-gradient-right">
        <div className="container-fluid container-xl">
          <IntroSpan text={"مميز"} page={"home"} />
          <h2 className="text-4xl fw-bold mt-3">مقالات مختارة</h2>
          <div className="d-inline d-md-flex justify-content-md-between align-items-md-center ">
            <p className="text-lg gray100-text">محتوى منتقى لبدء رحلة تعلمك</p>
            <Button
              direct={"blog"}
              text={"عرض الكل"}
              shape={"rounded3"}
              size={"sm"}
              color={"orangeGradient4"}
              icon={"fa-solid fa-chevron-left me-2"}
              iconPosition={"left"}
                            hover={"translate"}

            />
          </div>
          {posts.slice(0, 3).map((post) => (
            <ArticleCard
              key={post.id}
              title={post.title}
              info={post.excerpt}
              category={post.category}
              author={post.author}
              image={post.image}
              date={post.date}
              readTime={post.readTime}
                                page={"home"}

            />
          ))}
        </div>
      </section>

      <section className="py-5 bg-gray-600 border-bottom border-top border-light border-opacity-10 ">
        <div className="container-fluid container-xl">
          <div className="d-flex flex-column align-items-center justify-content-center ">
            <IntroSpan text={"التصنيفات"} page={"home"} />
            <h2 className="text-4xl fw-bold mt-3">استكشف حسب الموضوع</h2>
            <p className="text-lg gray100-text">
              اعثر على محتوى مصمم حسب اهتماماتك
            </p>
          </div>

          <div className="row g-3 mt-4">
            {categories.map((category) => (
              <div className="col-6 col-md-3">
                <CategoriesCard
                  color={category.color}
                  count={category.count}
                  name={category.name}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-gray-700 section-gradient-left">
        <div className="container-fluid container-xl">
          <IntroSpan text={"الأحدث"} page={"home"} />
          <h2 className="text-4xl fw-bold mt-3">أحدث المقالات</h2>
          <div className="d-inline d-md-flex justify-content-md-between align-items-md-center ">
            <p className="text-lg gray100-text">محتوى جديد طازج من المطبعة</p>
            <a href="" className="orange500-text fw-bold text-base">
              عرض جميع المقالات
              <i class="fa-solid fa-arrow-left-long orange500-text"></i>
            </a>
          </div>

          <div className="row mt-4">
            {posts.slice(3, 6).map((post) => (
              <div className="col-12 col-md-6 col-lg-4">
                <ArticleCard
                  key={post.id}
                  title={post.title}
                  info={post.excerpt}
                  category={post.category}
                  author={post.author}
                  image={post.image}
                  date={post.date}
                  readTime={post.readTime}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-gray-700 ">
        
        <div className="container-fluid container-xl ">
          <div className="contact bg-gray-500 p-4 rounded-4 gray-border text-center">
            <span className="envelope-icon w-64 h-64 orange-gradient3 d-flex align-items-center justify-content-center rounded-4 m-auto mb-4">
              <i class="fa-regular fa-envelope fa-2xl"></i>
            </span>
            <h2 className="text-3xl fw-bold mb-3">
              اشترك في{" "}
              <span className="bg-clip-text orange-gradient1">
                نشرتنا الإخبارية{" "}
              </span>
            </h2>
            <p className="text-lg gray100-text">
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
              الإلكتروني
            </p>
            <input
              type="email"
              className="form-control subscribe-form "
              placeholder="ادخل بريدك الالكتروني"
            />
            <Button
                        direct={"/"}

              text={"اشترك الان"}
              shape={"rounded3"}
              size={"lg"}
              color={"orangeGradient3"}
            />
            <div className="d-flex align-items-center justify-content-evenly gap-3 mt-3">
              <div className="w-32 h-32 position-relative ms-4">
                <img
                  src={posts[0].author.avatar}
                  alt=""
                  className="avatar1 w-100 rounded-circle overflow-hidden position-absolute"
                />
                <img
                  src={posts[1].author.avatar}
                  alt=""
                  className="avatar2 w-100 rounded-circle overflow-hidden position-absolute"
                />
                <img
                  src={posts[2].author.avatar}
                  alt=""
                  className="avatar3 w-100 rounded-circle overflow-hidden position-absolute"
                />
              </div>
              <span className="text-sm gray200-text ">
                انضم لـ <span className="text-white fw-medium">+10,000</span>{" "}
                مصور
              </span>
              <span className="text-sm gray200-text ">بدون إزعاج</span>
              <span className="text-sm gray200-text ">
                {" "}
                إلغاء الاشتراك في أي وقت
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
