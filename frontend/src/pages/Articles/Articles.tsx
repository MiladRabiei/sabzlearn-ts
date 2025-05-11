import React, { useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import "./Article.css";
import Footer from "../../Components/Footer/Footer";
import useFetch from "../../hooks/useFetch";
import { articleType, lastCourseType } from "../../Components/types/all.types";
import ArticleBox from "../../Components/ArticleBox/ArticleBox";
import Pagination from "../../Components/Pagination/Pagination";
export default function Articles() {
  const [data, isLoading, refetch] = useFetch("/articles");
  const allArticles = data as articleType[];
  const [shownArticles, setShownArticles] = useState<articleType[]>([]);
  return (
    <>
      <Topbar />
      <Navbar />
      <Breadcrumb
        links={[
          { id: 1, title: "خانه", to: "" },
          {
            id: 2,
            title: "مقاله ها",
            to: `articles/1`,
          },
        ]}
      />
      {/* <!--------------------------------  articles-Section  --------------------------------> */}
      <section className="courses">
        <div className="container">
          <div className="courses-content">
            <div className="container">
              <div className="row">
                {shownArticles?.map((article) => (
                  <ArticleBox {...article} />
                ))}
              </div>
            </div>
          </div>

          <Pagination
            itemsCount={3}
            items={allArticles}
            pathName={"/articles"}
            setShownCourses={setShownArticles}
          />
        </div>
      </section>
      {/* <!--------------------------------  articles-Section  --------------------------------> */}

      <Footer />
    </>
  );
}
