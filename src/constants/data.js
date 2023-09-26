import { AiTwotoneHome, AiTwotonePhone } from "react-icons/ai";

import { BsCalendarDateFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiChevronsLeft } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const LINKS = [
  {
    id: 1,
    name: "مشاوره آنلاین پزشکی",
    slug: "online",
    items: [
      { id: 1, label: "دکتر آنلاین مغز و اعصاب" },
      { id: 2, label: "دکتر آنلاین روانشناسی" },
      { id: 3, label: "دکتر آنلاین ارتوپدی" },
      { id: 4, label: "دکتر آنلاین ارتوپدی اطفال" },
      { id: 5, label: "دکتر آنلاین ازدواج" },
      { id: 6, label: "دکتر آنلاین استرس" },
      { id: 7, label: "دکتر آنلاین اطفال" },
      { id: 8, label: "دکتر آنلاین اعتیاد" },
      { id: 9, label: "دکتر آنلاین اورولوژی" },
      { id: 10, label: "دکتر آنلاین آلرژی" },
      { id: 11, label: "دکتر آنلاین بارداری" },
      { id: 12, label: "دکتر آنلاین بیهوشی" },
      { id: 13, label: "دکتر آنلاین پارکینسون" },
      { id: 14, label: "دکتر آنلاین پریود" },
      { id: 15, label: "دکتر آنلاین پوست و مو" },
      { id: 16, label: "دکتر آنلاین توانبخشی" },
      { id: 17, label: "دکتر آنلاین تیرویید" },
      { id: 18, label: "دکتر آنلاین جراحی" },
      { id: 19, label: "دکتر آنلاین جراحی زیبایی" },
      { id: 20, label: "دکتر آنلاین چشم پزشکی" },
      { id: 21, label: "دکتر آنلاین خون و سرطان" },
      { id: 22, label: "دکتر آنلاین داخلی" },
      { id: 23, label: "دکتر آنلاین داروسازی" },
      { id: 24, label: "دکتر آنلاین دندانپزشکی" },
      { id: 25, label: "دکتر آنلاین دیابت" },
      { id: 26, label: "دکتر آنلاین تغذیه" },
      { id: 27, label: "دکتر آنلاین روانپزشکی" },
      { id: 28, label: "دکتر آنلاین ریه" },
      { id: 29, label: "دکتر آنلاین زنان" },
      { id: 30, label: "دکتر آنلاین ژنتیک" },
      { id: 31, label: "دکتر آنلاین سرطان روده" },
      { id: 32, label: "دکتر آنلاین سلامت جنسی" },
      { id: 33, label: "دکتر آنلاین طب اورژانس" },
      { id: 34, label: "دکتر آنلاین طب سنتی" },
      { id: 35, label: "دکتر آنلاین عفونت ادراری" },
      { id: 36, label: "دکتر آنلاین عفونت زنان" },
      { id: 37, label: "دکتر آنلاین عفونی" },
      { id: 38, label: "دکتر آنلاین عمومی" },
      { id: 39, label: "دکتر آنلاین غدد اطفال" },
      { id: 40, label: "دکتر آنلاین غدد و دیابت" },
      { id: 41, label: "دکتر آنلاین قلب و عروق" },
      { id: 42, label: "دکتر آنلاین کرونا" },
      { id: 43, label: "دکتر آنلاین کیست تخمدان" },
      { id: 44, label: "دکتر آنلاین گفتار درمانی" },
      { id: 45, label: "دکتر آنلاین گوش، حلق و بینی" },
      { id: 46, label: "دکتر آنلاین مامایی" },
      { id: 47, label: "دکتر آنلاین مشاوره خانواده" },
      { id: 48, label: "دکتر آنلاین معده و گوارش" },
      { id: 49, label: "مشاوره پزشکی با بهترین متخصص آنلاین" }
    ],
  },
  {
    id: 2,
    name: "تخصص ها",
    slug: "specialist",
    items: [
      { id: 1, label: "مشاوره پزشکی با بهترین متخصص آنلاین" },
      { id: 2, label: "دکتر آنلاین روانشناسی" },
      { id: 3, label: "دکتر آنلاین ارتوپدی" },
      { id: 4, label: "دکتر آنلاین ارتوپدی اطفال" },
      { id: 5, label: "دکتر آنلاین ازدواج" },
      { id: 6, label: "دکتر آنلاین استرس" },
      { id: 7, label: "دکتر آنلاین اطفال" },
      { id: 8, label: "دکتر آنلاین اعتیاد" },
      { id: 9, label: "دکتر آنلاین اورولوژی" },
      { id: 10, label: "دکتر آنلاین آلرژی" },
      { id: 11, label: "دکتر آنلاین بارداری" },
      { id: 12, label: "دکتر آنلاین بیهوشی" },
      { id: 13, label: "دکتر آنلاین پارکینسون" },
      { id: 14, label: "دکتر آنلاین پریود" },
      { id: 15, label: "دکتر آنلاین پوست و مو" },
      { id: 16, label: "دکتر آنلاین توانبخشی" },
      { id: 17, label: "دکتر آنلاین تیرویید" },
      { id: 18, label: "دکتر آنلاین جراحی" },
      { id: 19, label: "دکتر آنلاین جراحی زیبایی صورت" },
      { id: 20, label: "دکتر آنلاین چشم پزشکی" },
      { id: 21, label: "دکتر آنلاین خون و سرطان" },
      { id: 22, label: "دکتر آنلاین داخلی" },
      { id: 23, label: "دکتر آنلاین داروسازی" },
      { id: 24, label: "دکتر آنلاین دندانپزشکی" },
      { id: 25, label: "دکتر آنلاین دیابت" },
      { id: 26, label: "دکتر آنلاین تغذیه" },
      { id: 27, label: "دکتر آنلاین روانپزشکی" },
      { id: 28, label: "دکتر آنلاین ریه" },
      { id: 29, label: "دکتر آنلاین زنان" },
      { id: 30, label: "دکتر آنلاین ژنتیک" },
      { id: 31, label: "دکتر آنلاین سرطان روده" },
      { id: 32, label: "دکتر آنلاین سلامت جنسی" },
      { id: 33, label: "دکتر آنلاین طب اورژانس" },
      { id: 34, label: "دکتر آنلاین طب سنتی" },
      { id: 35, label: "دکتر آنلاین عفونت ادراری" },
      { id: 36, label: "دکتر آنلاین عفونت زنان" },
      { id: 37, label: "دکتر آنلاین عفونی" },
      { id: 38, label: "دکتر آنلاین عمومی" },
      { id: 39, label: "دکتر آنلاین غدد اطفال" },
      { id: 40, label: "دکتر آنلاین غدد و دیابت" },
      { id: 41, label: "دکتر آنلاین قلب و عروق" },
      { id: 42, label: "دکتر آنلاین کرونا" },
      { id: 43, label: "دکتر آنلاین کیست تخمدان" },
      { id: 44, label: "دکتر آنلاین گفتار درمانی" },
      { id: 45, label: "دکتر آنلاین گوش، حلق و بینی" },
      { id: 46, label: "دکتر آنلاین مامایی" },
      { id: 47, label: "دکتر آنلاین مشاوره خانواده" },
      { id: 48, label: "دکتر آنلاین معده و گوارش" },
    ],
  },
  {
    id: 3,
    name: "مجله سلامتی",
    slug: "blog",
    items: [
      { id: 1, label: "لیست اطلاعات دارویی" },
      { id: 2, label: "مقالات استخوان و مفاصل" },
      { id: 3, label: "مقالات اطفال، کودکان و نوزادان" },
      { id: 4, label: "مقالات آزمایشگاه و تصویربرداری" },
      { id: 5, label: "مقالات آلرژی" },
      { id: 6, label: "مقالات بیهوشی و مراقبت های ویژه" },
      { id: 7, label: "مقالات پوست و مو" },
      { id: 8, label: "مقالات تغذیه" },
      { id: 9, label: "مقالات توانبخشی و فیزیوتراپی" },
      { id: 10, label: "مقالات جراحی" },
      { id: 11, label: "مقالات چشم پزشکی" },
      { id: 12, label: "مقالات خون، سرطان و آنکولوژی" },
      { id: 13, label: "مقالات داخلی" },
      { id: 14, label: "مقالات دهان و دندان" },
      { id: 15, label: "مقالات دیابت" },
      { id: 16, label: "مقالات روانپزشکی" },
      { id: 17, label: "مقالات روانشناسی" },
      { id: 18, label: "مقالات ریه و دستگاه تنفسی" },
      { id: 19, label: "مقالات زنان، زایمان و نازایی" },
      { id: 20, label: "مقالات زیبایی" },
      { id: 21, label: "مقالات ژنتیک" },
      { id: 22, label: "مقالات سلامت جنسی" },
      { id: 23, label: "مقالات طب تسکینی و درد" },
      { id: 24, label: "مقالات طب سنتی" },
      { id: 25, label: "مقالات عفونی" },
      { id: 26, label: "مقالات عمومی" },
      { id: 27, label: "مقالات غدد و متابولیسم" },
      { id: 28, label: "مقالات قلب و عروق" },
      { id: 29, label: "مقالات کرونا ویروس" },
      { id: 30, label: "مقالات کلیه و مجاری ادراری" },
      { id: 31, label: "مقالات گوارش و معده" },
      { id: 32, label: "مقالات گوش، حلق و بینی" },
      { id: 33, label: "مقالات مغز و اعصاب" },
    ],
  },
  {
    id: 4,
    name: "بیماران",
    slug: "patient",
    items: [
      { id: 1, label: "جستجو پزشکان و دریافت نوبت" },
      { id: 2, label: "نوبت های من" },
      { id: 3, label: "راهنمای دریافت نوبت" },
      { id: 4, label: "سوالات متداول" },
      { id: 5, label: "مجله سلامتی" },
    ],
  },
  { id: 5, name: "ورود پزشکان" },
];

const FOOTER_LINKS = [
  {
    id: 1,
    label: "تخصص ها",
    items: [
      { id: 1, icon: <FiChevronsLeft />, name: "مغز و اعصاب" },
      { id: 2, icon: <FiChevronsLeft />, name: "قلب و عروق" },
      { id: 3, icon: <FiChevronsLeft />, name: "دندانپزشکی" },
      { id: 4, icon: <FiChevronsLeft />, name: "اورتوپدی" },
    ],
  },
  {
    id: 2,
    label: "خدمات",
    items: [
      { id: 1, icon: <FiChevronsLeft />, name: "پزشکی" },
      { id: 2, icon: <FiChevronsLeft />, name: "اتاق عمل" },
      { id: 3, icon: <FiChevronsLeft />, name: "آزمایشگاه" },
      { id: 4, icon: <FiChevronsLeft />, name: "آی سی یو" },
    ],
  },
  {
    id: 3,
    label: "ارتباط با ما",
    items: [
      { id: 1, icon: <IoLocationSharp />, name: "تهران, جردن, ناوک پلاک سوم" },
      { id: 2, icon: <AiTwotonePhone />, name: " +1 315 369 5943" },
      { id: 3, icon: <MdEmail />, name: "doccure@example.com" },
    ],
  },
];

const PATIENT_LINKS = [
  {
    id: 1,
    route: '/',
    label: 'خانه',
    icon: <AiTwotoneHome />
  },
  {
    id: 2,
    route: '/search',
    label: 'جستجو',
    icon: <BsSearch />
  },
  {
    id: 3,
    route: '/',
    label: 'نوبت های من',
    icon: <BsCalendarDateFill />
  },
  {
    id: 4,
    route: '/',
    label: 'پروفایل',
    icon: <CgProfile />
  },
];

export const getAllLinks = () => {
  return LINKS;
};

export const getFooterLinks = () => {
  return FOOTER_LINKS;
};

export const getPatientTabs = () => {
  return PATIENT_LINKS;
};
