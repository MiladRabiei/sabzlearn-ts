import React from "react";
import ArticleBox from "../ArticleBox/ArticleBox";
import SectionHeader from "../SectionHeader/SectionHeader";

import "./LastArticles.css";
import useFetch from "../../hooks/useFetch";
import { articleType } from "../types/all.types";

export default function LastArticles() {
  const [data, isLoading, refetch] = useFetch("/articles");
  const allArticles = data as articleType[];
  console.log(allArticles);
  return (
    <section className="articles">
      <div className="container">
        <SectionHeader
          title="جدیدترین مقاله ها"
          desc="مقاله های بروز برنامه نویسی و تکنولوژی"
          btnTitle="تمامی مقاله ها"
          btnHref="articles/1"
        />

        <div className="grid my-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {allArticles?.map((article) => (
            <ArticleBox
              title={article.title}
              cover={article.cover}
              description={article.description}
              shortName={article.shortName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
