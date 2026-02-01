import StatisticCards from "../../component/StatisticCards";
import { response } from "../data/data";
import IntroSpan from "./../../component/introSpan";
import { statistics } from "./../data/statistics";
import AuthorCard from "./../../component/AuthorCard";
import Button from "../../component/Button";
export default function About() {
  const features = [
    {
      icon: "fa-solid fa-bullseye fa-2xl orange500-text",
      title: "الجودة أولاً",
      description: "محتوى مدروس ومكتوب بخبرة",
    },
    {
      icon: "fa-solid fa-bolt fa-2xl orange500-text",

      title: "تركيز عملي",
      description: "أمثلة واقعية يمكنك تطبيقها اليوم",
    },
    {
      icon: "fa-solid fa-handshake fa-2xl orange500-text",

      title: "المجتمع",
      description: "تعلم مع آلاف المصورين",
    },
    {
      icon: "fa-solid fa-arrows-rotate fa-2xl orange500-text",

      title: "دائماً محدث",
      description: "أحدث الاتجاهات وأفضل الممارسات",
    },
  ];

  const { posts } = response;
  return (
    <>
      <section className=" py-5 bg-black">
        <div className="container-fluid container-xl">
          <div className="pt-5 bg-black d-flex flex-column justify-content-center align-items-center gap-3">
            <IntroSpan text={"من نحن"} page={"about"} />
            <h1 className="fw-bold text-4xl">
              مهمتنا هي
              <span className="orange-gradient1 bg-clip-text">
                الإعلام والإلهام
              </span>
            </h1>
            <p className="text-xl gray100-text text-center">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
              المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
            </p>
          </div>

          <div className="row g-3">
            {statistics.map((stat) => (
              <div className="col-6 col-md-3">
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

      <section className=" py-5 bg-gray-600">
        <div className="container-fluid container-xl">
          <div className="section-header text-center">
            <h2 className="text-3xl fw-bold">قيمتنا</h2>
            <p className="text-xl gray100-text">
              المبادئ التي توجه كل ما نقوم بإنشائه
            </p>
          </div>

          <div className="row g-3">
            {features.map((feature) => (
              <div className="col-12 col-md-6 col-lg-3">
                <StatisticCards
                  icon={feature.icon}
                  number={feature.title}
                  label={feature.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className=" py-5 bg-black">
        <div className="container-fluid container-xl">
          <div className="section-header d-flex align-items-center justify-content-center flex-column gap-3">
            <IntroSpan text={"فريقنا"} page={""} />
            <h2 className="text-3xl fw-bold">تعرف على كتابنا</h2>
            <p className="text-xl gray100-text text-center">
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
              المجتمع.
            </p>
          </div>
          <div className="row g-4">
            {posts.map((post) => (
              <div className="col-12 col-md-6 col-lg-4">
                <AuthorCard
                  avatar={post.author.avatar}
                  name={post.author.name}
                  role={post.author.role}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className=" py-5 orange-gradient3">
        <div className="container-fluid container-xl text-center">
          <h2 className="text-3xl fw-bold">لديك أسئلة؟ دعنا نتحدث!</h2>
          <p className="text-lg opacity-75">نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.</p>
         <div className="d-flex gap-3 m-auto align-items-center justify-content-center flex-column flex-md-row w-100 w-md-fit mb-4">
           <Button text={"تواصل معنا"}
           
              shape={"rounded3"}
              size={"lg"}
              color={"black"}
              icon={"fa-regular fa-envelope ms-2"}
              iconPosition={"right"}/>
          <Button text={"تصفح المقالات"}
                      direct={"blog"}

              shape={"rounded3"}
              size={"lg"}
              color={"transparentWhite"}
              
              />
         </div>
        </div>
       </section>
    </>
  );
}
