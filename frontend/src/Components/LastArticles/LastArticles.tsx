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
          desc="پیش به سوی ارتقای دانش"
          btnTitle="تمامی مقاله ها"
          btnHref="articles/1"
        />

        <div className="articles__content">
          <div className="row">
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
      </div>
    </section>
  );
}
