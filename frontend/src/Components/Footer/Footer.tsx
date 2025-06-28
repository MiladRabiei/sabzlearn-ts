import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-25 sm:mt-40 py-8 md:pt-16 md:pb-10 bg-white dark:bg-gray-700">
      <div className="container">
        <div className="pb-5 mb-5 sm:pb-8 sm:mb-8 border-b border-b-neutral-200 dark:border-b-gray-500">
          <div className="flex justify-between items-center">
            <Link to={"#"}>
              <svg
                className="h-10 sm:h-12 lg:h-13"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1065.8713 255.5117"
              >
                <polygon
                  fill="#006537"
                  points="887.7703 183.9791 826.7449 215.7969 805.491 203.0911 805.491 151.3899 887.7703 183.9791"
                ></polygon>
                <polygon
                  fill="#006869"
                  points="1050.6455 66.363 887.721 151.4931 729.4719 88.8236 892.4201 3.7033 1050.6455 66.363"
                ></polygon>
                <line
                  fill="#1a3d3d"
                  x1="1036.3456"
                  y1="99.6297"
                  x2="1036.3134"
                  y2="99.6903"
                ></line>
                <polygon
                  fill="#006869"
                  points="1063.2357 189.3956 1043.5893 208.2941 1025.2104 188.0983 1037.8194 175.9622 1037.7888 73.0754 1050.642 66.3589 1050.5808 175.4889 1063.2357 189.3956"
                ></polygon>
                <path
                  fill="#006869"
                  d="M307.5509,155.0539h-67.17v-56.4734l-28.9299,15.1051,.0104,66.0757-55.1067,28.7623,21.632,22.0796,33.9844-17.6526c17.5722-9.2213,28.4831-28.0988,28.4097-47.0865v-.8208c.0294,.3554,.0248,.7222,.0747,1.0708v.041c1.3057,10.101,9.9378,17.8961,20.3856,17.8961h36.9758c21.3859,0,38.7309-17.3452,38.7309-38.7308V48.3851l-28.9971,15.1211v91.5477Z"
                ></path>
                <rect
                  fill="#1eb35b"
                  x="472.0024"
                  y="210.3168"
                  width="28.7099"
                  height="28.7097"
                  transform="translate(-14.8418 413.934) rotate(-45.482)"
                ></rect>
                <path
                  fill="#1eb35b"
                  d="M527.2893,154.1019c.8169-3.131,1.2966-6.3986,1.2966-9.7857v-29.936l-29.0036,15.1416v14.2944c0,.31-.0101,.61-.0398,.9102v9.3009h-67.0695v-55.6318l-29.003,15.1415,.0101,66.0831-55.1063,28.7621,21.6317,21.2642,33.9844-17.6524c17.5725-9.2213,28.4831-27.2834,28.4831-47.1255v-.0011c1.1853,10.2237,9.8617,18.1633,20.4127,18.1633h36.9849c17.3421,0,32.0156-11.4021,36.9438-27.1175v6.6137c0,11.2809,9.1451,20.4259,20.4258,20.4259h166.7955v-28.8509h-186.7464Z"
                ></path>
                <rect
                  fill="#1eb35b"
                  x="403.1911"
                  y="54.0264"
                  width="28.7098"
                  height="28.7098"
                  transform="translate(76.0325 318.1596) rotate(-45.482)"
                ></rect>
                <path
                  fill="#006869"
                  d="M180.6675,98.4697l-28.9808,15.1586,.2408,30.5847-49.6468,25.9328c-15.212,7.9402-32.2688,7.9669-46.973-.9091-14.7577-8.9295-23.58-24.5961-23.58-41.8935,0-26.7616,21.7084-48.711,48.3361-48.9247h16.5758v.0266h1.7218l.0134,22.0306-12.6093,12.1361,18.3789,20.1957,19.6465-18.8985-12.655-13.9067,.0614-50.7712-7.8357,.0863-23.4579,.1204C37.3417,49.732,2.7202,84.7012,2.7202,127.3433c0,27.5369,14.0358,52.4805,37.5893,66.7035,12.4314,7.5125,26.2535,11.282,40.129,11.282,12.3512,0,23.7135-3.7963,35.1293-9.7849l65.3669-34.0603-.2673-63.0139Z"
                ></path>
                <polygon
                  fill="#00524c"
                  points="1050.6441 79.3998 1050.6226 109.016 1037.7986 116.4288 1037.7905 86.1166 1050.6441 79.3998"
                ></polygon>
                <polygon
                  fill="#004b26"
                  points="885.6756 250.9613 805.506 203.1038 805.506 198.6724 887.7228 183.9709 889.2223 187.4094 885.6756 250.9613"
                ></polygon>
                <polygon
                  fill="#00524c"
                  points="921.5254 133.8265 887.6566 151.5756 729.4703 88.8248 892.4202 3.7033 921.5254 133.8265"
                ></polygon>
                <polygon
                  fill="#00322d"
                  points="1050.6441 66.3635 1050.6226 82.4322 1037.7986 97.3856 1037.7905 73.0803 1050.6441 66.3635"
                ></polygon>
                <polygon
                  fill="#1eb35b"
                  points="998.58 126.0938 998.58 172.9425 885.5569 250.9322 826.7438 215.7983 998.58 126.0938"
                ></polygon>
              </svg>
            </Link>
            <div className="flex gap-x-2 sm:gap-x-3">
              <Link
                to="https://linkedin.com/company/sabzlearn-academy"
                rel="nofollow"
              >
                <svg
                  className="size-[30px] sm:size-[38px] text-neutral-300 dark:text-neutral-200 transition-colors hover:text-sky-500"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 0C8.50819 0 0 8.50819 0 19C0 29.4918 8.50819 38 19 38C29.4918 38 38 29.4918 38 19C38 8.50819 29.4918 0 19 0ZM13.4788 28.7227H8.85146V14.8011H13.4788V28.7227ZM11.1653 12.9001H11.1351C9.58234 12.9001 8.57806 11.8312 8.57806 10.4953C8.57806 9.1292 9.61307 8.08984 11.196 8.08984C12.779 8.08984 13.7531 9.1292 13.7832 10.4953C13.7832 11.8312 12.779 12.9001 11.1653 12.9001ZM30.1641 28.7227H25.5373V21.275C25.5373 19.4033 24.8673 18.1268 23.1931 18.1268C21.9148 18.1268 21.1535 18.9878 20.8189 19.819C20.6966 20.1165 20.6667 20.5322 20.6667 20.9482V28.7227H16.0397C16.0397 28.7227 16.1003 16.1072 16.0397 14.8011H20.6667V16.7723C21.2816 15.8237 22.3819 14.4744 24.8369 14.4744C27.8813 14.4744 30.1641 16.4641 30.1641 20.7401V28.7227Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </Link>
              <Link to="https://www.instagram.com/sabzlearn_" rel="nofollow">
                <svg
                  className="size-[30px] sm:size-[38px] text-neutral-300 dark:text-neutral-200 transition-colors hover:text-sky-500"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 0C29.4938 0 38 8.42804 38 18.8254C38 29.2227 29.4938 37.6508 19 37.6508C8.50621 37.6508 0 29.2227 0 18.8254C0 8.42804 8.50621 0 19 0ZM15.0248 9.3296C11.4505 9.49138 9.57273 11.4842 9.41687 14.8868C9.29813 17.4628 9.29813 20.188 9.41687 22.764C9.57273 26.1666 11.4505 28.1594 15.0248 28.3212C17.6255 28.4381 20.3753 28.4381 22.9759 28.3212C26.41 28.1653 28.4206 26.3077 28.5839 22.764C28.7019 20.1873 28.7019 17.4642 28.5839 14.8868C28.4236 11.4188 26.4761 9.48844 22.9759 9.3296C20.3753 9.21267 17.6255 9.21267 15.0248 9.3296ZM22.8965 11.0496C25.4934 11.1665 26.7306 12.3917 26.8479 14.9654C26.9652 17.4878 26.9652 20.163 26.8479 22.6853C26.7269 25.3334 25.4259 26.4872 22.8965 26.6012C20.3493 26.7166 17.6514 26.7166 15.1043 26.6012C12.5741 26.4872 11.2738 25.3334 11.1521 22.6853C11.0356 20.163 11.0356 17.4878 11.1521 14.9654C11.2671 12.4578 12.4324 11.1702 15.1043 11.0496C17.6514 10.9342 20.3493 10.9342 22.8965 11.0496ZM19 22.0095C17.2254 22.0095 15.7863 20.5844 15.7863 18.8254C15.7871 17.0664 17.2254 15.6412 19 15.6412C20.7753 15.6412 22.2144 17.0664 22.2144 18.8254C22.2144 20.5837 20.7753 22.0095 19 22.0095ZM19 13.9198C16.2665 13.9198 14.0489 16.1163 14.0489 18.8254C14.0489 21.5345 16.2658 23.731 19 23.731C21.735 23.731 23.9511 21.5345 23.9511 18.8254C23.9511 16.1163 21.735 13.9198 19 13.9198ZM25.3041 13.7256C25.3041 14.3588 24.7861 14.8728 24.1471 14.8728C23.5073 14.8728 22.99 14.3595 22.99 13.7264C22.99 13.0932 23.5073 12.5799 24.1471 12.5799C24.7861 12.5799 25.3041 13.0932 25.3041 13.7256Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </Link>
              <Link to="https://t.me/sabzlearn" rel="nofollow">
                <svg
                  className="size-[30px] sm:size-[38px] text-neutral-300 dark:text-neutral-200 transition-colors hover:text-sky-500"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.8"
                    d="M18.6613 37.0256C28.9701 37.0256 37.3226 28.7396 37.3226 18.5128C37.3226 8.28603 28.9701 0 18.6613 0C8.35248 0 0 8.28603 0 18.5128C0 28.7396 8.35248 37.0256 18.6613 37.0256ZM8.53909 18.1117L26.5317 11.2296C27.3668 10.9303 28.0961 11.4317 27.8255 12.6844L27.8271 12.6828L24.7635 27.001C24.5365 28.0161 23.9284 28.2629 23.0778 27.7847L18.4125 24.3737L16.1622 26.5242C15.9134 26.7711 15.7035 26.9794 15.2214 26.9794L15.5526 22.2694L24.199 14.5202C24.5754 14.1916 24.115 14.0065 23.619 14.3336L12.9338 21.0074L8.3276 19.5819C7.32766 19.2672 7.30589 18.59 8.53909 18.1117Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-y-4  gap-x-12 mt-10 sm:mt-8">
            <Link
              to="tel:02191030926"
              className="flex items-center flex-grow md:flex-grow-0 gap-x-1.5 sm:gap-x-2 text-sm sm:text-base text-gray-700 dark:text-gray-400"
            >
              <svg className="size-5 sm:size-6">
                <use href="#phone"></use>
              </svg>
              02191030926{" "}
            </Link>
            <Link
              to="mailto:info@sabzlearn.ir"
              className="flex items-center flex-grow md:flex-grow-0 gap-x-1.5 sm:gap-x-2 text-sm sm:text-base text-gray-700 dark:text-gray-400"
            >
              <svg className="size-5 sm:size-6">
                <use href="#envelope"></use>
              </svg>
              info@sabzlearn.ir{" "}
            </Link>
            <Link
              to="https://t.me/sabzlearn_support"
              className="flex items-center flex-grow md:flex-grow-0 gap-x-1.5 sm:gap-x-2 text-sm sm:text-base text-gray-700 dark:text-gray-400"
            >
              <svg className="size-5 sm:size67">
                <use href="#telegram"></use>
              </svg>
              sabzlearn_support@
            </Link>
          </div>
        </div>
        <div className="flex items-start justify-between flex-wrap gap-5">
          <div>
            <span className="inline-block sm:text-2xl font-danaBold mb-3 sm:mb-4">
              درباره سبزلرن
            </span>
            <div>
              <p className="max-w-100 text-dark dark:text-neutral-300">
                شروع هرچیزی سخته، ولی وقتی مسیر درستی رو انتخاب کنی،با خیال راحت
                و بدون استرس میتونی از مسیر لذت ببری. ما در سبزلرن، توی سفر به
                دنیای برنامه نویسی کنارت هستیم تا باهم رشد کنیم و از نتیجه زحمات
                مون لذت ببریم.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-x-6 sm:gap-x-7">
            <div>
              <span className="inline-block sm:text-2xl font-danaBold mb-3 sm:mb-4">
                دوره های پرطرفدار
              </span>
              <div className="flex flex-col items-start gap-y-3 sm:gap-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-400">
                <Link to="https://sabzlearn.ir/course/python/">
                  آموزش پایتون
                </Link>
                <Link to="https://sabzlearn.ir/course/advance-template-design-with-html-css-flexbox/">
                  دوره طراحی قالب حرفه ای
                </Link>
                <Link to="https://sabzlearn.ir/course/master-freelance/">
                  مستر فریلنس
                </Link>
                <Link to="https://sabzlearn.ir/course/bootstrap5/">
                  آموزش BootStrap
                </Link>
              </div>
            </div>
            <div>
              <span className="inline-block sm:text-2xl font-danaBold mb-3 sm:mb-4">
                دسترسی سریع
              </span>
              <div className="flex flex-col items-start gap-y-3 sm:gap-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-400">
                <Link to="https://sabzlearn.ir/terms-conditions/">
                  قوانین و مقررات
                </Link>
                <Link to="https://sabzlearn.ir/my-account/tickets/">
                  ارسال تیکت
                </Link>
                <Link to="https://sabzlearn.ir/courses/">همه دوره ها</Link>
              </div>
            </div>
          </div>
          <Link to="https://trustseal.enamad.ir/?id=445206&amp;code=SgLtG6QTvIyffV2cjuiTe4sSPvMqsNSf">
            <img
              src="https://sabzlearn.ir/wp-content/themes/sabzlearn-theme/images/enamad.png"
              className="w-36 sm:w-auto"
              alt=""
            />
          </Link>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center">
        <span className="font-MorabbaBold">
          ساخته شده با ❤️ توسط میلاد ربیعی
        </span>
      </div>
    </footer>
  );
}
