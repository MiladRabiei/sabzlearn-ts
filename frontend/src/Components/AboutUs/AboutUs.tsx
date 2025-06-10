import React from "react";
import AboutUsBox from "../AboutUsBox/AboutUsBox";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="container">
        <SectionHeader
          title="ما چه کمکی بهتون میکنیم؟"
          desc="از شروع مسیر کنارتیم نمیذاریم آب تو دلت تکون بخوره"
        />

        <div className="container">
          <div className=" my-10 grid grid-rows-2 md:grid-cols-2 gap-6 sm:gap-7">
            <AboutUsBox
              title="تضمین کاملترین محتوا"
              desc="بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری."
              icon="book-open-services"
              color="text-sky-500"
              bgColor="bg-sky-50"
              darkBgColor="dark:bg-sky-500/20"
            />
            <AboutUsBox
              title="پشتیبانی دائمی"
              desc="هرجا سوالی داشتی به مشکل خوردی بچه های تیم آمادن که مشکلت رو حل کنن تلاشمون اینه بدون نگرانی دوره رو کامل کنی."
              icon="chat-bubble-left-right-services"
              color="text-amber-400"
              bgColor="bg-amber-50"
              darkBgColor="dark:bg-amber-500/20"
            />
            <AboutUsBox
              title="پروژه محور در راستای بازار کار"
              desc="کل تمرکز ما رو این هستش بعداز تموم شدن دوره شخص بتونه با اعتماد به نفس کامل پروژه بزنه واقدام کنه برای کسب درآمد."
              icon="chart-bar-services"
              color="text-green-500"
              bgColor="bg-green-50"
              darkBgColor="dark:bg-green-500/20"
            />
            <AboutUsBox
              title="سراغ حرفه ای ها رفتیم"
              desc="به جرعت میتونم بگم سخت گیرترین شرایط جذب مدرس داریم چون برامون مهمه محتوا خیلی ساده و روان بیان بشه که توی یادگیری به مشکل نخورید."
              icon="clipboard-document-check-services"
              color="text-red-500"
              bgColor="bg-red-50"
              darkBgColor="dark:bg-red-500/20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
