import "./App.css";
import React from "react";
import { useMediaQuery } from 'react-responsive';
import X375px from "./components/X375px/index";
import X600px from "./components/X600px/index";
import X741px from "./components/X741px/index";
import X900px from "./components/X900px/index";
import X1440px from "./components/X1440px/index";

import LgHandsPhone012x3 from "./assets/img/lg-hands-phone-01-2x-3@1x.png";
import IcSberProfile3 from "./assets/img/ic-sber-profile-3@2x.svg";
import Private211 from "./assets/img/private-2-1-1@1x.png";
import IcSberSigned3 from "./assets/img/ic-sber-signed-3@2x.svg";
import IconSberSend3 from "./assets/img/icon-sber-send-3@2x.svg";
import HandsHeart3 from "./assets/img/hands-heart-3@1x.png";
import LgHandsPhone012 from "./assets/img/lg-hands-phone-01-2x@2x.png";
import HandsHeart from "./assets/img/hands-heart@2x.png";
import Img from "./assets/img/img@2x.png";
import LgHandsPhone012x1 from "./assets/img/lg-hands-phone-01-2x-1@2x.png";
import IcSberProfile1 from "./assets/img/ic-sber-profile-1@2x.svg";
import IcSberSigned1 from "./assets/img/ic-sber-signed-1@2x.svg";
import IconSberSend1 from "./assets/img/icon-sber-send-1@2x.svg";
import HandsHeart1 from "./assets/img/hands-heart-1@2x.png";
import Private21 from "./assets/img/private-2-1-1@2x.png";
import LgHandsPhone012x2 from "./assets/img/lg-hands-phone-01-2x-2@2x.png";
import IcSberProfile2 from "./assets/img/ic-sber-profile-2@2x.svg";
import IcSberSigned2 from "./assets/img/ic-sber-signed-2@2x.svg";
import IconSberSend2 from "./assets/img/icon-sber-send-2@2x.svg";
import HandsHeart2 from "./assets/img/hands-heart-2@2x.png";
import LgHandsPhone012x4 from "./assets/img/lg-hands-phone-01-2x-4@2x.png";
import IcSberProfile4 from "./assets/img/ic-sber-profile-4@2x.svg";
import IcSberSigned4 from "./assets/img/ic-sber-signed-4@2x.svg";
import HandsHeart4 from "./assets/img/hands-heart-4@2x.png";
import Banner3 from "./assets/img/banner-3@1x.svg";

import IcSberWallet  from "./assets/img/ic-sber-wallet@2x.svg";
import IcSberSecurity from "./assets/img/ic-sber-secure@2x.svg";
import IcSberTime from "./assets/img/icon-sber-time@2x.svg";
import IcSberSuccess from "./assets/img/ic-sber-success@2x.svg";

import IcSberProfile from "./assets/img/ic-sber-profile@2x.svg";
import IcSberSigned from "./assets/img/ic-sber-signed@2x.svg";
import IconSberSend from "./assets/img/icon-sber-send@2x.svg";


function App() {

const sm = useMediaQuery({ maxWidth: 599 })
const md = useMediaQuery({ minWidth: 600, maxWidth: 740})
const lg = useMediaQuery({ minWidth: 741, maxWidth: 899})
const xl = useMediaQuery({ minWidth: 900, maxWidth: 1439})
const xll = useMediaQuery({ minWidth: 1440})

  return (
    <>
        {sm &&  <X375px {...x375pxData} />}
        {md &&  <X600px {...x600pxData} />}
        {lg &&  <X741px {...x741pxData} />}
        {xl &&  <X900px {...x900pxData} />}
        {xll &&  <X1440px {...x1440pxData} />}
    </>
  );
}

export default App;

const maleLaptop081Data = {
    src: Private211,
};

const container1Data = {
    src: IcSberWallet,
    title: "Экономьте",
    subtitle: <React.Fragment>Экономия до 90% <br />на подписании в сравнении <br />с выпуском квалифицированной подписи</React.Fragment>,
    className: "",
};

const advantageItem1Data = {
    containerProps: container1Data,
};

const container2Data = {
    src: IcSberSecurity,
    title: "Используйте в суде",
    subtitle: "Налоговая и суд примут подписанные в нашем приложении документы",
    className: "container-5",
};

const advantageItem2Data = {
    className: "advantage-item",
    containerProps: container2Data,
};

const container3Data = {
    src: IcSberTime,
    title: "Регистрируйтесь быстро",
    subtitle: <React.Fragment>Получите УНЭП, усиленную неквалифицированную электронную подпись, с помощью регистрации через Сбер ID</React.Fragment>,
    className: "container-5",
};

const advantageItem22Data = {
    containerProps: container3Data,
};

const container4Data = {
    src: IcSberSuccess,
    title: "Подписывайте онлайн",
    subtitle: <React.Fragment>Подписывайте документы <br />онлайн на любом устройстве</React.Fragment>,
    className: "container-5",
};

const advantageItem3Data = {
    className: "advantage-item",
    containerProps: container4Data,
};

const otherchandsPhone1Data = {
    src: LgHandsPhone012x3,
    className: "",
};

const imageHands1Data = {
    otherchandsPhoneProps: otherchandsPhone1Data,
};

const imageSm1Data = {
    src: IcSberProfile3,
    className: "",
};

const column1Data = {
    src: IcSberProfile,
    title: "1 шаг",
    caption: "Зарегистрируйтесь",
    subtitle: <React.Fragment>Зарегистрируйтесь <br />с помощью Сбер ID</React.Fragment>,
    imageSmProps: imageSm1Data,
};

const imageSm2Data = {
    src: IcSberSigned3,
    className: "",
};

const column2Data = {
    src: IcSberSigned,
    title: "2 шаг",
    caption: "Подпишите",
    subtitle: "Загрузите документ и подпишите его по одной кнопке",
    imageSmProps: imageSm2Data,
};

const imageSm3Data = {
    src: IconSberSend3,
    className: "image-sm",
};

const column3Data = {
    src: IconSberSend,
    title: "3 шаг",
    caption: "Отправьте",
    subtitle: <React.Fragment>Отправьте ссылку контрагенту <br />на подписание</React.Fragment>,
    imageSmProps: imageSm3Data,
};

const link1Data = {
    children: "+7 (499) 404-10-37",
};

const frame2709889461Data = {
    linkProps: link1Data,
};

const link2Data = {
    children: "podpis@sber.ru",
};

const frame2709889471Data = {
    linkProps: link2Data,
};

const frame2709889441Data = {
    frame270988946Props: frame2709889461Data,
    frame270988947Props: frame2709889471Data,
};

const handsHeart1Data = {
    src: HandsHeart3,
    className: "",
};

const imageHands21Data = {
    handsHeartProps: handsHeart1Data,
};

const bannerContactsDesktopData = {
    title: <React.Fragment>Расскажите, какие документы <br />вы бы хотели подписывать</React.Fragment>,
    subtitle: "Мы ещё разрабатываем сервис. Как только он станет доступен, обязательно сообщим вам.",
    frame270988944Props: frame2709889441Data,
    imageHands2Props: imageHands21Data,
};

const qAItem1Data = {
    title: <React.Fragment>Какой тип электронной подписи используется <br />в сервисе?</React.Fragment>,
    subtitle: "Усиленная неквалифицированная электронная подпись. Криптографические средства защиты гарантируют неизменность подписанных документов.",
};

const qAItem2Data = {
    title: <React.Fragment>Можно ли пойти с документами, подписанными <br />в вашем сервисе в суд или налоговую?</React.Fragment>,
    subtitle: "Да, мы разработали сервис с учетом всех требований законодательства, поэтому государственные органы примут документы, подписанные в нашем сервисе.",
};

const qAItem3Data = {
    title: "Какую поддержку может оказать сервис в случае судебных споров?",
    subtitle: "По запросу мы предоставим дополнительный протокол подписания документа с информацией о всех подписавших.",
};

const footerData = {
    text1: <React.Fragment>ОГРН 1187746905004 ИНН 9705124940<br />Адрес: 121170, г. Москва, ул. Поклонная,<br />д. 3, офис 209, этаж 2<br />© ООО «СБЕР ЛИГАЛ». Все права защищены.<br />При копировании необходимо упоминание.</React.Fragment>,
    phone: "+7 (499) 404-10-37",
    podpisSberRu: "podpis@sber.ru",
};

const x1440pxData = {
    h1: "Подписывайте документы онлайн",
    subtitle1: "Договаривайтесь быстро и безопасно",
    h21: <React.Fragment>Быстрое<br />и надёжное<br />подписание</React.Fragment>,
    h22: <React.Fragment>Подписывайте документы <br />юридически значимо</React.Fragment>,
    h23: "Как это работает?",
    subtitle2: "Подпишите первый документ за 3 шага",
    title: <React.Fragment>Отвечаем <br />на ваши вопросы</React.Fragment>,
    maleLaptop08Props: maleLaptop081Data,
    advantageItem1Props: advantageItem1Data,
    advantageItem2Props: advantageItem2Data,
    advantageItem2Props2: advantageItem22Data,
    advantageItem3Props: advantageItem3Data,
    imageHandsProps: imageHands1Data,
    column1Props: column1Data,
    column2Props: column2Data,
    column3Props: column3Data,
    bannerContactsDesktopProps: bannerContactsDesktopData,
    qAItem1Props: qAItem1Data,
    qAItem2Props: qAItem2Data,
    qAItem3Props: qAItem3Data,
    footerProps: footerData,
};

const header2Data = {
    className: "header-1",
};

const blur3Data = {
    className: "blur-1",
};

const container22Data = {
    src: IcSberWallet,
    title: "Экономьте",
    subtitle: <React.Fragment>Экономия до 90% <br />на подписании в сравнении <br />с выпуском квалифицированной подписи</React.Fragment>,
    className: "",
};

const advantageItem32Data = {
    container2Props: container22Data,
};

const container23Data = {
    src: IcSberSecurity,
    title: "Используйте в суде",
    subtitle: "Налоговая и суд примут подписанные в нашем приложении документы",
    className: "container-5",
};

const advantageItem33Data = {
    className: "advantage-item-3",
    container2Props: container23Data,
};

const container24Data = {
    src: IcSberTime,
    title: "Регистрируйтесь быстро",
    subtitle: <React.Fragment>Получите УНЭП, усиленную неквалифицированную электронную подпись, с помощью регистрации через Сбер ID</React.Fragment>,
    className: "container-5",
};

const advantageItem4Data = {
    container2Props: container24Data,
};

const container25Data = {
    src: IcSberSuccess,
    title: "Подписывайте онлайн",
    subtitle: <React.Fragment>Подписывайте документы <br />онлайн на любом устройстве</React.Fragment>,
    className: "container-5",
};

const advantageItem34Data = {
    className: "advantage-item-3",
    container2Props: container25Data,
};

const otherchandsPhone2Data = {
    src: LgHandsPhone012,
    className: "otherchands-phone-1",
};

const imageHands3Data = {
    className: "image-hands-1",
    otherchandsPhoneProps: otherchandsPhone2Data,
};

const imageSm4Data = {
    src: IcSberProfile,
    className: "",
};

const column22Data = {
    src: IcSberProfile,
    title: "1 шаг",
    caption: "Зарегистрируйтесь",
    subtitle: <React.Fragment>Зарегистрируйтесь <br />с помощью Сбер ID</React.Fragment>,
    imageSmProps: imageSm4Data,
};

const imageSm5Data = {
    src: IcSberSigned,
    className: "",
};

const column23Data = {
    src: IcSberSigned,
    title: "2 шаг",
    caption: "Подпишите",
    subtitle: <React.Fragment>Загрузите документ <br />и подпишите его по одной кнопке</React.Fragment>,
    imageSmProps: imageSm5Data,
};

const imageSm6Data = {
    src: IconSberSend,
    className: "image-sm",
};

const column24Data = {
    src: IconSberSend,
    title: "3 шаг",
    caption: "Отправьте",
    subtitle: <React.Fragment>Отправьте ссылку контрагенту <br />на подписание</React.Fragment>,
    imageSmProps: imageSm6Data,
};

const link3Data = {
    children: "+7 (499) 404-10-37",
};

const frame2709889462Data = {
    linkProps: link3Data,
};

const link4Data = {
    children: "podpis@sber.ru",
};

const frame2709889472Data = {
    linkProps: link4Data,
};

const frame2709889442Data = {
    frame270988946Props: frame2709889462Data,
    frame270988947Props: frame2709889472Data,
};

const handsHeart2Data = {
    src: HandsHeart,
    className: "hands-heart-1",
};

const imageHands22Data = {
    className: "image-hands-4",
    handsHeartProps: handsHeart2Data,
};

const blur4Data = {
    className: "blur-2",
};

const qAItem4Data = {
    title: <React.Fragment>Какой тип электронной подписи используется <br />в сервисе?</React.Fragment>,
    subtitle: "Усиленная неквалифицированная электронная подпись. Криптографические средства защиты гарантируют неизменность подписанных документов.",
};

const qAItem5Data = {
    title: <React.Fragment>Можно ли пойти с документами, подписанными <br />в вашем сервисе в суд или налоговую?</React.Fragment>,
    subtitle: "Да, мы разработали сервис с учетом всех требований законодательства, поэтому государственные органы примут документы, подписанные в нашем сервисе.",
};

const qAItem6Data = {
    title: "Какую поддержку может оказать сервис в случае судебных споров?",
    subtitle: <React.Fragment>По запросу мы предоставим дополнительный протокол подписания документа <br />с информацией о всех подписавших.</React.Fragment>,
};

const column32Data = {
    className: "",
};

const footer21Data = {
    column3Props: column32Data,
};

const x900pxData = {
    h1: "Подписывайте документы онлайн",
    subtitle1: "Договаривайтесь быстро и безопасно",
    img: Img,
    h21: <React.Fragment>Быстрое<br />и надёжное<br />подписание</React.Fragment>,
    h22: <React.Fragment>Подписывайте документы <br />юридически значимо</React.Fragment>,
    h23: "Как это работает?",
    subtitle2: "Подпишите первый документ за 3 шага:",
    title1: <React.Fragment>Расскажите, какие документы <br />вы бы хотели подписывать</React.Fragment>,
    subtitle3: "Мы ещё разрабатываем сервис. Как только он станет доступен, обязательно сообщим вам.",
    title2: <React.Fragment>Отвечаем <br />на ваши вопросы</React.Fragment>,
    headerProps: header2Data,
    blur1Props: blur3Data,
    advantageItem31Props: advantageItem32Data,
    advantageItem32Props: advantageItem33Data,
    advantageItem4Props: advantageItem4Data,
    advantageItem33Props: advantageItem34Data,
    imageHandsProps: imageHands3Data,
    column21Props: column22Data,
    column22Props: column23Data,
    column23Props: column24Data,
    frame270988944Props: frame2709889442Data,
    imageHands2Props: imageHands22Data,
    blur2Props: blur4Data,
    qAItem1Props: qAItem4Data,
    qAItem2Props: qAItem5Data,
    qAItem3Props: qAItem6Data,
    footer2Props: footer21Data,
};

const header3Data = {
    className: "header-2",
};

const blur5Data = {
    className: "blur-3",
};

const advantageItem51Data = {
    src: IcSberWallet,
    title: "Экономьте",
    subtitle: <React.Fragment>Экономия до 90% <br />на подписании в сравнении <br />с выпуском квалифицированной подписи</React.Fragment>,
};

const advantageItem52Data = {
    src: IcSberSecurity,
    title: "Используйте в суде",
    subtitle: "Налоговая и суд примут подписанные в нашем приложении документы",
    className: "advantage-item-7",
};

const advantageItem53Data = {
    src: IcSberSuccess,
    title: "Подписывайте онлайн",
    subtitle: <React.Fragment>Подписывайте документы <br />онлайн на любом устройстве</React.Fragment>,
    className: "advantage-item-7",
};

const otherchandsPhone3Data = {
    src: LgHandsPhone012x1,
    className: "otherchands-phone-2",
};

const imageHands4Data = {
    className: "image-hands-2",
    otherchandsPhoneProps: otherchandsPhone3Data,
};

const imageSm7Data = {
    src: IcSberProfile1,
    className: "",
};

const column41Data = {
    src: IcSberProfile,
    title: "1 шаг",
    caption: "Зарегистрируйтесь",
    subtitle: "Зарегистрируйтесь с помощью Сбер ID",
    imageSmProps: imageSm7Data,
};

const imageSm8Data = {
    src: IcSberSigned1,
    className: "",
};

const column42Data = {
    src: IcSberSigned,
    title: "2 шаг",
    caption: "Подпишите",
    subtitle: "Загрузите документ и подпишите его по одной кнопке",
    imageSmProps: imageSm8Data,
};

const imageSm9Data = {
    src: IconSberSend1,
    className: "image-sm",
};

const column43Data = {
    src: IconSberSend,
    title: "3 шаг",
    caption: "Отправьте",
    subtitle: "Отправьте ссылку контрагенту на подписание",
    imageSmProps: imageSm9Data,
};

const row1Data = {
    column41Props: column41Data,
    column42Props: column42Data,
    column43Props: column43Data,
};

const link5Data = {
    children: "+7 (499) 404-10-37",
};

const frame2709889463Data = {
    linkProps: link5Data,
};

const link6Data = {
    children: "podpis@sber.ru",
};

const frame2709889473Data = {
    linkProps: link6Data,
};

const frame2709889443Data = {
    className: "contacts",
    frame270988946Props: frame2709889463Data,
    frame270988947Props: frame2709889473Data,
};

const handsHeart22Data = {
    src: HandsHeart1,
};

const imageHands32Data = {
    handsHeart2Props: handsHeart22Data,
};

const blur6Data = {
    className: "blur-4",
};

const qAItem7Data = {
    title: <React.Fragment>Какой тип электронной подписи используется <br />в сервисе?</React.Fragment>,
    subtitle: "Усиленная неквалифицированная электронная подпись. Криптографические средства защиты гарантируют неизменность подписанных документов.",
};

const qAItem8Data = {
    title: <React.Fragment>Можно ли пойти с документами, подписанными <br />в вашем сервисе в суд или налоговую?</React.Fragment>,
    subtitle: "Да, мы разработали сервис с учетом всех требований законодательства, поэтому государственные органы примут документы, подписанные в нашем сервисе.",
};

const qAItem9Data = {
    title: "Какую поддержку может оказать сервис в случае судебных споров?",
    subtitle: <React.Fragment>По запросу мы предоставим дополнительный протокол подписания документа <br />с информацией о всех подписавших.</React.Fragment>,
};

const column33Data = {
    className: "column-4",
};

const footer22Data = {
    className: "footer-2",
    column3Props: column33Data,
};

const x741pxData = {
    h1: "Подписывайте документы онлайн",
    subtitle1: <React.Fragment>Договаривайтесь быстро <br />и безопасно</React.Fragment>,
    img: Img,
    h21: <React.Fragment>Быстрое<br />и надёжное<br />подписание</React.Fragment>,
    title1: "Регистрируйтесь быстро",
    subtitle2: <React.Fragment>Усиленная неквалифицированная электронная подпись после регистрации по Сбер ID</React.Fragment>,
    h22: <React.Fragment>Подписывайте документы <br />юридически значимо</React.Fragment>,
    h23: "Как это работает?",
    subtitle3: "Подпишите первый документ за 3 шага:",
    title2: "Расскажите, какие документы вы бы хотели подписывать",
    subtitle4: <React.Fragment>Мы ещё разрабатываем сервис. <br />Как только он станет доступен, обязательно сообщим вам.</React.Fragment>,
    title3: <React.Fragment>Отвечаем <br />на ваши вопросы</React.Fragment>,
    headerProps: header3Data,
    blur1Props: blur5Data,
    advantageItem51Props: advantageItem51Data,
    advantageItem52Props: advantageItem52Data,
    advantageItem53Props: advantageItem53Data,
    imageHandsProps: imageHands4Data,
    rowProps: row1Data,
    frame270988944Props: frame2709889443Data,
    imageHands3Props: imageHands32Data,
    blur2Props: blur6Data,
    qAItem1Props: qAItem7Data,
    qAItem2Props: qAItem8Data,
    qAItem3Props: qAItem9Data,
    footer2Props: footer22Data,
};

const maleLaptop082Data = {
    src: Private21,
    className: "male-laptop-08-1",
};

const maleLaptop1Data = {
    maleLaptop08Props: maleLaptop082Data,
};

const titleSubtitle1Data = {
    src: IcSberWallet,
    title: "Экономьте",
    subtitle: <React.Fragment>Экономия до 90% <br />на подписании в сравнении <br />с выпуском квалифицированной подписи</React.Fragment>,
};

const advantageItem61Data = {
    titleSubtitleProps: titleSubtitle1Data,
};

const titleSubtitle2Data = {
    src: IcSberSecurity,
    title: "Используйте в суде",
    subtitle: "Налоговая и суд примут подписанные в нашем приложении документы",
};

const advantageItem62Data = {
    className: "advantage-item-10",
    titleSubtitleProps: titleSubtitle2Data,
};

const titleSubtitle3Data = {
    src: IcSberTime,
    title: "Регистрируйтесь быстро",
    subtitle: <React.Fragment>Усиленная неквалифицированная электронная подпись после регистрации по Сбер ID</React.Fragment>,
};

const titleSubtitle4Data = {
    src: IcSberSuccess,
    title: "Подписывайте онлайн",
    subtitle: <React.Fragment>Подписывайте документы <br />онлайн на любом устройстве</React.Fragment>,
};

const advantageItem63Data = {
    className: "advantage-item-10",
    titleSubtitleProps: titleSubtitle4Data,
};

const handsHeart3Data = {
    src: LgHandsPhone012x2,
    className: "otherchands-phone-3",
};

const imageHands42Data = {
    handsHeartProps: handsHeart3Data,
};

const imageSm10Data = {
    src: IcSberProfile2,
};

const imageSm11Data = {
    src: IcSberSigned2,
    className: "",
};

const column51Data = {
    src: IcSberSigned,
    title: "2 шаг",
    caption: "Подпишите",
    subtitle: <React.Fragment>Загрузите документ <br />и подпишите его по одной кнопке</React.Fragment>,
    imageSmProps: imageSm11Data,
};

const imageSm12Data = {
    src: IconSberSend2,
    className: "image-sm",
};

const column52Data = {
    src: IconSberSend,
    title: "3 шаг",
    caption: "Отправьте",
    subtitle: <React.Fragment>Отправьте ссылку контрагенту <br />на подписание</React.Fragment>,
    imageSmProps: imageSm12Data,
};

const link7Data = {
    children: "+7 (499) 404-10-37",
};

const frame2709889464Data = {
    linkProps: link7Data,
};

const link8Data = {
    children: "podpis@sber.ru",
};

const frame2709889474Data = {
    linkProps: link8Data,
};

const handsHeart4Data = {
    src: HandsHeart2,
    className: "hands-heart-2",
};

const bannerContactsMobile1Data = {
    frame270988946Props: frame2709889464Data,
    frame270988947Props: frame2709889474Data,
    handsHeartProps: handsHeart4Data,
};

const qAItem10Data = {
    title: <React.Fragment>Какой тип электронной подписи используется <br />в сервисе?</React.Fragment>,
    subtitle: <React.Fragment>Усиленная неквалифицированная электронная подпись. Криптографические средства защиты гарантируют неизменность подписанных документов. По запросу мы предоставим дополнительный протокол подписания документа с информацией <br />о всех подписавших.</React.Fragment>,
};

const qAItem11Data = {
    title: <React.Fragment>Можно ли пойти <br />с документами, подписанными <br />в вашем сервисе, в суд или налоговую?</React.Fragment>,
    subtitle: <React.Fragment>Да, мы разработали сервис <br />с учетом всех требований законодательства, поэтому государственные органы примут документы, подписанные в нашем сервисе.</React.Fragment>,
};

const qAItem12Data = {
    title: <React.Fragment>Можно ли пойти <br />с документами, подписанными <br />в вашем сервисе в суд или налоговую?</React.Fragment>,
    subtitle: <React.Fragment>По запросу мы предоставим дополнительный протокол подписания документа <br />с информацией о всех подписавших.</React.Fragment>,
};

const x375pxData = {
    h1: "Подписывайте документы онлайн",
    subtitle1: "Договаривайтесь быстро и безопасно",
    h21: <React.Fragment>Быстрое<br />и надёжное<br />подписание</React.Fragment>,
    h22: <React.Fragment>Подписывайте документы <br />юридически значимо</React.Fragment>,
    h23: "Как это работает?",
    subtitle2: "Подпишите первый документ за 3 шага:",
    title1: "1 шаг",
    caption: "Зарегистрируйтесь",
    subtitle3: <React.Fragment>Зарегистрируйтесь <br />с помощью Сбер ID</React.Fragment>,
    title2: <React.Fragment>Отвечаем <br />на ваши<br />вопросы</React.Fragment>,
    maleLaptopProps: maleLaptop1Data,
    advantageItem61Props: advantageItem61Data,
    advantageItem62Props: advantageItem62Data,
    titleSubtitleProps: titleSubtitle3Data,
    advantageItem63Props: advantageItem63Data,
    imageHands4Props: imageHands42Data,
    imageSmProps: imageSm10Data,
    column51Props: column51Data,
    column52Props: column52Data,
    bannerContactsMobileProps: bannerContactsMobile1Data,
    qAItem1Props: qAItem10Data,
    qAItem2Props: qAItem11Data,
    qAItem3Props: qAItem12Data,
};

const button5Data = {
    className: "button-3",
};

const header32Data = {
    buttonProps: button5Data,
};

const maleLaptop083Data = {
    src: Private21,
    className: "male-laptop-08-2",
};

const maleLaptop2Data = {
    className: "male-laptop-2",
    maleLaptop08Props: maleLaptop083Data,
};

const frame18510391762Data = {
    className: "frame-1851039176-2",
};

const blur23Data = {
    className: "blur-7",
};

const titleSubtitle22Data = {
    src: IcSberWallet,
    title: "Экономьте",
    subtitle: <React.Fragment>Экономия до 90% <br />на подписании в сравнении <br />с выпуском квалифицированной подписи</React.Fragment>,
};

const advantageItem71Data = {
    titleSubtitle2Props: titleSubtitle22Data,
};

const titleSubtitle23Data = {
    src: IcSberSecurity,
    title: "Используйте в суде",
    subtitle: "Налоговая и суд примут подписанные в нашем приложении документы",
};

const advantageItem72Data = {
    className: "advantage-item-10",
    titleSubtitle2Props: titleSubtitle23Data,
};

const titleSubtitle24Data = {
    src: IcSberTime,
    title: "Регистрируйтесь быстро",
    subtitle: <React.Fragment>Получите УНЭП, усиленную неквалифицированную электронную подпись, с помощью регистрации <br />через СберID</React.Fragment>,
};

const advantageItem731Data = {
    className: "advantage-item-10",
    titleSubtitle2Props: titleSubtitle24Data,
};

const titleSubtitle25Data = {
    src: IcSberSuccess,
    title: "Подписывайте онлайн",
    subtitle: <React.Fragment>Подписывайте документы <br />онлайн на любом устройстве</React.Fragment>,
};

const advantageItem73Data = {
    className: "advantage-item-10",
    titleSubtitle2Props: titleSubtitle25Data,
};

const handsHeart5Data = {
    src: LgHandsPhone012x4,
    className: "otherchands-phone-4",
};

const imageHands43Data = {
    className: "image-hands-7",
    handsHeartProps: handsHeart5Data,
};

const imageSm13Data = {
    src: IcSberProfile4,
    className: "",
};

const column44Data = {
    src: IcSberProfile,
    title: "1 шаг",
    caption: "Зарегистрируйтесь",
    subtitle: "Зарегистрируйтесь с помощью Сбер ID",
    imageSmProps: imageSm13Data,
};

const imageSm14Data = {
    src: IcSberSigned4,
    className: "",
};

const column45Data = {
    src: IcSberSigned,
    title: "2 шаг",
    caption: "Подпишите",
    subtitle: "Загрузите документ и подпишите его по одной кнопке",
    imageSmProps: imageSm14Data,
};

const imageSm15Data = {
    src: IconSberSend2,
    className: "image-sm",
};

const column46Data = {
    src: IconSberSend,
    title: "3 шаг",
    caption: "Отправьте",
    subtitle: "Отправьте ссылку контрагенту на подписание",
    imageSmProps: imageSm15Data,
};

const row2Data = {
    className: "row-6",
    column41Props: column44Data,
    column42Props: column45Data,
    column43Props: column46Data,
};

const link9Data = {
    children: "+7 (499) 404-10-37",
};

const frame2709889465Data = {
    linkProps: link9Data,
};

const link10Data = {
    children: "podpis@sber.ru",
};

const frame2709889475Data = {
    linkProps: link10Data,
};

const handsHeart6Data = {
    src: HandsHeart4,
    className: "hands-heart-3",
};

const bannerContactsMobile2Data = {
    frame270988946Props: frame2709889465Data,
    frame270988947Props: frame2709889475Data,
    handsHeartProps: handsHeart6Data,
};

const qAItem13Data = {
    title: <React.Fragment>Какой тип электронной подписи используется <br />в сервисе?</React.Fragment>,
    subtitle: <React.Fragment>Усиленная неквалифицированная электронная подпись. Криптографические средства защиты гарантируют неизменность подписанных документов. По запросу мы предоставим дополнительный протокол подписания документа с информацией <br />о всех подписавших.</React.Fragment>,
};

const qAItem14Data = {
    title: <React.Fragment>Можно ли пойти <br />с документами, подписанными <br />в вашем сервисе, в суд или налоговую?</React.Fragment>,
    subtitle: <React.Fragment>Да, мы разработали сервис <br />с учетом всех требований законодательства, поэтому государственные органы примут документы, подписанные в нашем сервисе.</React.Fragment>,
};

const qAItem15Data = {
    title: <React.Fragment>Можно ли пойти <br />с документами, подписанными <br />в вашем сервисе в суд или налоговую?</React.Fragment>,
    subtitle: <React.Fragment>По запросу мы предоставим дополнительный протокол подписания документа <br />с информацией о всех подписавших.</React.Fragment>,
};

const footerMobile2Data = {
    className: "footer-mobile-1",
};

const x600pxData = {
    banner: Banner3,
    h1: "Подписывайте документы онлайн",
    subtitle1: <React.Fragment>Договаривайтесь быстро <br />и безопасно</React.Fragment>,
    h21: <React.Fragment>Быстрое<br />и надёжное<br />подписание</React.Fragment>,
    h22: <React.Fragment>Подписывайте документы <br />юридически значимо</React.Fragment>,
    h23: "Как это работает?",
    subtitle2: "Подпишите первый документ за 3 шага:",
    title: <React.Fragment>Отвечаем <br />на ваши<br />вопросы</React.Fragment>,
    header3Props: header32Data,
    maleLaptopProps: maleLaptop2Data,
    frame1851039176Props: frame18510391762Data,
    blur2Props: blur23Data,
    advantageItem71Props: advantageItem71Data,
    advantageItem72Props: advantageItem72Data,
    advantageItem721Props: advantageItem731Data,
    advantageItem73Props: advantageItem73Data,
    imageHands4Props: imageHands43Data,
    rowProps: row2Data,
    bannerContactsMobileProps: bannerContactsMobile2Data,
    qAItem1Props: qAItem13Data,
    qAItem2Props: qAItem14Data,
    qAItem3Props: qAItem15Data,
    footerMobileProps: footerMobile2Data,
};

