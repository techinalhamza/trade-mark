import React from "react";
import "./Blog.css";
function Blogs() {
  const blogData = [
    {
      title: "Door Closer, Automatic",
      desc: "Article explaining how and where Automatic Door Closers are used.",
      datee: "JAN 17 ,2024",
    },
    {
      title: "Door Stoppers Continued",
      desc: "Another article discussing door stoppers.",
      datee: "AUG 24, 2023",
    },
    {
      title: "Door Stopper or Door Holder? Which one is right for me",
      desc: "An article on understanding basic Door Stoppers, Combo Door Stop and Holders and more.",
      datee: "JUN 4, 2023",
    },
  ];
  return (
    <>
      <div className="blog-container my-12 ">
        <div className="container-fluid ">
          <div className="blog-box ">
            {blogData.map((val) => {
              return (
                <>
                  <div className="blog-card transition-all relative w-[30rem] h-[18rem] bg-[#0007]  overflow-hidden">
                    <div className="blog-info  text-white absolute top-[80%] px-8">
                      <h1 className="text-3xl">{val.title}</h1>
                      <p className="my-4">{val.desc}</p>
                      <strong className="text-[#FCC62A]">{val.datee}</strong>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
