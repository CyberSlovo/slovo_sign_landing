import "./App.css";
import React from "react";
import { useMediaQuery } from 'react-responsive';
import X375px from "./components/X375px/X375px";
import X430px from "./components/X430px/X430px";
import X744px from "./components/X744px/X744px";
import X1024px from "./components/X1024px/X1024px";
import X1440px from "./components/X1440px/X1440px";

import Private21 from "./assets/images/private-2-1@1x.png";
import LgHandsPhone012 from "./assets/images/lg-hands-phone-01-2x@2x.png";
import IcSberProfile from "./assets/images/ic-sber-profile@2x.svg";
import IcSberSigned from "./assets/images/ic-sber-signed@2x.svg";
import IconSberSend from "./assets/images/icon-sber-send@2x.svg";
import HandsHeart from "./assets/images/hands-heart@2x.png";
import Private211 from "./assets/images/private-2-1-1@1x.png";
import IcSberProfile1 from "./assets/images/ic-sber-profile-1@2x.svg";
import IcSberSigned1 from "./assets/images/ic-sber-signed-1@2x.svg";
import IconSberSend1 from "./assets/images/icon-sber-send-1@2x.svg";
import HandsHeart1 from "./assets/images/hands-heart-1@2x.png";
import Private212 from "./assets/images/private-2-1-2@1x.png";
import IcSberSigned2 from "./assets/images/ic-sber-signed-2@2x.svg";
import IconSberSend2 from "./assets/images/icon-sber-send-2@2x.svg";
import LgHandsPhone012x3 from "./assets/images/lg-hands-phone-01-2x-3@2x.png";
import HandsHeart3 from "./assets/images/hands-heart-3@2x.png";
import LgHandsPhone012x4 from "./assets/images/lg-hands-phone-01-2x-4@1x.png";
import IcSberProfile4 from "./assets/images/ic-sber-profile-4@2x.svg";
import IcSberSigned4 from "./assets/images/ic-sber-signed-4@2x.svg";
import IconSberSend4 from "./assets/images/icon-sber-send-4@2x.svg";
import HandsHeart4 from "./assets/images/hands-heart-4@1x.png";
import BoyTelefon1 from "./assets/images/boy-telefon-1@2x.png";
import LgHandsPhone012x from "./assets/images/lg-hands-phone-01-2x@2x.png";
import IcSberWallet from "./assets/images/ic-sber-wallet@2x.svg";
import IcSberSecurity from "./assets/images/ic-sber-secure-2@2x.svg";
import IcSberTime from "./assets/images/icon-sber-time@2x.svg";
import IcSberSuccess from "./assets/images/ic-sber-success-1@2x.svg";




function App() {

const sm = useMediaQuery({ minWidth: 375, maxWidth: 429})
const md = useMediaQuery({ minWidth: 430, maxWidth: 743})
const lg = useMediaQuery({ minWidth: 744, maxWidth: 1023})
const xl = useMediaQuery({ minWidth: 1024, maxWidth: 1439})
const xll = useMediaQuery({ minWidth: 1440, maxWidth: 1920})

  return (
    <>
        {sm &&  <X375px {...x375pxData} />}
        {md &&  <X430px {...x430pxData} />}
        {lg &&  <X744px {...x744pxData} />}
        {xl &&  <X1024px {...x1024pxData} />}
        {xll &&  <X1440px {...x1440pxData} />}
    </>
  );
}

export default App;

const maleLaptop081Data = {
    src: Private21,
};

const maleLaptop1Data = {
    className: "",
    maleLaptop08Props: maleLaptop081Data,
};

const backBlur1Data = {
    className: "",
};

const heroBannerMobile1Data = {
    subtitle: <React.Fragment>Договаривайтесь быстро <br />и безопасно</React.Fragment>,
    maleLaptopProps: maleLaptop1Data,
    backBlurProps: backBlur1Data,
};

const titleSubtitle1Data = {
    src: IcSberWallet,
    title: "Экономьте",
    subtitle: <React.Fragment>Экономия до 90% <br />на подписании в сравнении <br />с выпуском квалифицированной подписи</React.Fragment>,
};

const advantageItem1Data = {
    titleSubtitleProps: titleSubtitle1Data,
};

const titleSubtitle2Data = {
    src: IcSberSecurity,
    title: "Используйте в суде",
    subtitle: "Налоговая и суд примут подписанные в нашем приложении документы",
};

const advantageItem2Data = {
    className: "advantage-item-1",
    titleSubtitleProps: titleSubtitle2Data,
};

const titleSubtitle3Data = {
    src: IcSberTime,
    title: "Регистрируйтесь быстро",
    subtitle: <React.Fragment>Получите УНЭП      <br />с помощью регистрации <br />через СберID</React.Fragment>,
};

const titleSubtitle4Data = {
    src: IcSberSuccess,
    title: "Подписывайте онлайн",
    subtitle: <React.Fragment>Подписывайте документы <br />онлайн на любом устройстве</React.Fragment>,
};

const advantageItem3Data = {
    className: "advantage-item-1",
    titleSubtitleProps: titleSubtitle4Data,
};

const otherchandsPhone1Data = {
    src: LgHandsPhone012,
    className: "",
};

const frame2709889501Data = {
    otherchandsPhoneProps: otherchandsPhone1Data,
};

const imageSm1Data = {
    src: IcSberProfile,
    className: "",
};

const column1Data = {
    title: "1 шаг",
    caption: "Зарегистрируйтесь",
    subtitle: <React.Fragment>Зарегистрируйтесь <br />с помощью Сбер ID</React.Fragment>,
    imageSmProps: imageSm1Data,
};

const imageSm2Data = {
    src: IcSberSigned,
    className: "",
};

const column2Data = {
    title: "2 шаг",
    caption: "Подпишите",
    subtitle: <React.Fragment>Загрузите документ <br />и подпишите его по одной кнопке</React.Fragment>,
    imageSmProps: imageSm2Data,
};

const imageSm3Data = {
    src: IconSberSend,
    className: "image-sm",
};

const column3Data = {
    title: "3 шаг",
    caption: "Отправьте",
    subtitle: <React.Fragment>Отправить ссылку контрагенту <br />на подписание</React.Fragment>,
    imageSmProps: imageSm3Data,
};

const handsHeart1Data = {
    src: HandsHeart,
    className: "",
};

const head1Data = {
    subtitle: "Мы ещё разрабатываем сервис. Как только он станет доступен, обязательно сообщим вам.",
    className: "",
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

const container1Data = {
    className: "",
    headProps: head1Data,
    frame270988946Props: frame2709889461Data,
    frame270988947Props: frame2709889471Data,
};

const bannerContactsMobile1Data = {
    handsHeartProps: handsHeart1Data,
    containerProps: container1Data,
};

const qAItem1Data = {
    title: <React.Fragment>Какой тип электронной подписи используется <br />в сервисе?</React.Fragment>,
    subtitle: <React.Fragment>Усиленная неквалифицированная электронная подпись. Криптографические средства защиты гарантируют неизменность подписанных документов. По запросу мы предоставим дополнительный протокол подписания документа с информацией <br />о всех подписавших.</React.Fragment>,
};

const qAItem2Data = {
    title: <React.Fragment>Можно ли пойти <br />с документами, подписанными <br />в вашем сервисе в суд или налоговую?</React.Fragment>,
    subtitle: <React.Fragment>Да, мы разработали сервис <br />с учетом всех требований законодательства, поэтому государственные органы примут документы, подписанные в нашем сервисе.</React.Fragment>,
};

const qAItem22Data = {
    title: <React.Fragment>Можно ли пойти <br />с документами, подписанными <br />в вашем сервисе в суд или налоговую?</React.Fragment>,
    spanText1: "По запросу мы предоставим дополнительный протокол подписания документа с информацией о всех подписавших. А в сервисе ",
    spanText3: " вы сможете найти лучшего адвоката для своего вопроса.",
};

const x430pxData = {
    h21: <React.Fragment>Быстрое<br />и надёжное<br />подписание</React.Fragment>,
    h22: "Как это работает?",
    subtitle: "Подпишите первый документ за 3 шага:",
    title: <React.Fragment>Отвечаем <br />на ваши<br />вопросы</React.Fragment>,
    heroBannerMobileProps: heroBannerMobile1Data,
    advantageItem1Props: advantageItem1Data,
    advantageItem2Props: advantageItem2Data,
    titleSubtitleProps: titleSubtitle3Data,
    advantageItem3Props: advantageItem3Data,
    frame270988950Props: frame2709889501Data,
    column1Props: column1Data,
    column2Props: column2Data,
    column3Props: column3Data,
    bannerContactsMobileProps: bannerContactsMobile1Data,
    qAItem1Props: qAItem1Data,
    qAItem2Props: qAItem2Data,
    qAItem2Props2: qAItem22Data,
};

const button1Data = {
    children: "Связаться с нами",
};

const buttons1Data = {
    buttonProps: button1Data,
};

const header21Data = {
    buttonsProps: buttons1Data,
};

const maleLaptop082Data = {
    src: Private211,
    className: "male-laptop-08-1",
};

const maleLaptop21Data = {
    maleLaptop08Props: maleLaptop082Data,
};

const container21Data = {
    src: IcSberWallet,
    title: "Экономьте",
    subtitle: <React.Fragment>Экономия до 90% <br />на подписании в сравнении <br />с выпуском квалифицированной подписи</React.Fragment>,
    className: "",
};

const advantageItem22Data = {
    container2Props: container21Data,
};

const container22Data = {
    src: IcSberSecurity,
    title: "Используйте в суде",
    subtitle: "Налоговая и суд примут подписанные в нашем приложении документы",
    className: "container-36",
};

const advantageItem23Data = {
    className: "advantage-item-2",
    container2Props: container22Data,
};

const container23Data = {
    src: IcSberTime,
    title: "Регистрируйтесь быстро",
    subtitle: <React.Fragment>Получите УНЭП      <br />с помощью регистрации через Сбер ID</React.Fragment>,
    className: "container-36",
};

const advantageItem32Data = {
    container2Props: container23Data,
};

const container24Data = {
    src: IcSberSuccess,
    title: "Подписывайте онлайн",
    subtitle: <React.Fragment>Подписывайте документы <br />онлайн на любом устройстве</React.Fragment>,
    className: "container-36",
};

const advantageItem24Data = {
    className: "advantage-item-2",
    container2Props: container24Data,
};

const imageSm4Data = {
    src: IcSberProfile1,
    className: "",
};

const column22Data = {
    title: "1 шаг",
    caption: "Зарегистрируйтесь",
    subtitle: <React.Fragment>Зарегистрируйтесь <br />с помощью Сбер ID</React.Fragment>,
    imageSmProps: imageSm4Data,
};

const imageSm5Data = {
    src: IcSberSigned1,
    className: "",
};

const column23Data = {
    title: "2 шаг",
    caption: "Подпишите",
    subtitle: <React.Fragment>Загрузите документ <br />и подпишите его по одной кнопке</React.Fragment>,
    imageSmProps: imageSm5Data,
};

const imageSm6Data = {
    src: IconSberSend1,
    className: "image-sm",
};

const column24Data = {
    title: "3 шаг",
    caption: "Отправьте",
    subtitle: <React.Fragment>Отправить ссылку контрагенту <br />на подписание</React.Fragment>,
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

const frame2709889441Data = {
    frame270988946Props: frame2709889462Data,
    frame270988947Props: frame2709889472Data,
};

const handsHeart21Data = {
    src: HandsHeart1,
    className: "",
};

const imageHands21Data = {
    handsHeart3Props: handsHeart21Data,
};

const blur42Data = {
    className: "blur-8",
};

const qAItem3Data = {
    title: <React.Fragment>Какой тип электронной подписи используется <br />в сервисе?</React.Fragment>,
    subtitle: "Усиленная неквалифицированная электронная подпись. Криптографические средства защиты гарантируют неизменность подписанных документов.",
};

const qAItem4Data = {
    title: <React.Fragment>Можно ли пойти с документами, подписанными <br />в вашем сервисе в суд или налоговую?</React.Fragment>,
    subtitle: "Да, мы разработали сервис с учетом всех требований законодательства, поэтому государственные органы примут документы, подписанные в нашем сервисе.",
};

const qAItem23Data = {
    title: "Какую поддержку может оказать сервис в случае судебных споров?",
    spanText1: <React.Fragment>По запросу мы предоставим дополнительный протокол подписания документа с информацией о всех подписавших.<br />А в сервисе </React.Fragment>,
    spanText3: " вы сможете найти лучшего адвоката для своего вопроса.",
    className: "qa-item-6",
};

const column32Data = {
    className: "",
};

const footer1Data = {
    column3Props: column32Data,
};

const x1024pxData = {
    h1: "Подписывайте документы онлайн",
    subtitle1: "Договаривайтесь быстро и безопасно",
    h21: <React.Fragment>Быстрое<br />и надёжное<br />подписание</React.Fragment>,
    h22: <React.Fragment>Подписывайте документы <br />юридически значимо</React.Fragment>,
    h23: "Как это работает?",
    subtitle2: "Подпишите первый документ за 3 шага:",
    title: <React.Fragment>Отвечаем <br />на ваши вопросы</React.Fragment>,
    header2Props: header21Data,
    maleLaptop2Props: maleLaptop21Data,
    advantageItem21Props: advantageItem22Data,
    advantageItem22Props: advantageItem23Data,
    advantageItem3Props: advantageItem32Data,
    advantageItem23Props: advantageItem24Data,
    column21Props: column22Data,
    column22Props: column23Data,
    column23Props: column24Data,
    frame270988944Props: frame2709889441Data,
    imageHands2Props: imageHands21Data,
    blur4Props: blur42Data,
    qAItem1Props: qAItem3Data,
    qAItem2Props: qAItem4Data,
    qAItem2Props2: qAItem23Data,
    footerProps: footer1Data,
};

const button2Data = {
    children: "Связаться с нами",
};

const buttons2Data = {
    buttonProps: button2Data,
};

const header22Data = {
    buttonsProps: buttons2Data,
};

const maleLaptop083Data = {
    src: Private212,
    className: "male-laptop-08-2",
};

const backBlur22Data = {
    className: "back-blur-4",
};

const blur43Data = {
    className: "blur-9",
};

const advantageItem41Data = {
    src: IcSberWallet,
    title: "Экономьте",
    subtitle: <React.Fragment>Экономия до 90% <br />на подписании в сравнении <br />с выпуском квалифицированной подписи</React.Fragment>,
};

const advantageItem42Data = {
    src: IcSberSecurity,
    title: "Используйте в суде",
    subtitle: "Налоговая и суд примут подписанные в нашем приложении документы",
    className: "advantage-item-5",
};

const advantageItem5Data = {
    src: IcSberTime,
    title: "Регистрируйтесь быстро",
    subtitle: <React.Fragment>Получите УНЭП      <br />с помощью регистрации через Сбер ID</React.Fragment>,
};

const advantageItem43Data = {
    src: IcSberSuccess,
    title: "Подписывайте онлайн",
    subtitle: <React.Fragment>Подписывайте документы <br />онлайн на любом устройстве</React.Fragment>,
    className: "advantage-item-5",
};

const imageSm7Data = {
    src: IcSberProfile1,
};

const imageSm8Data = {
    src: IcSberSigned2,
    className: "",
};

const column41Data = {
    title: "2 шаг",
    caption: "Подпишите",
    subtitle: <React.Fragment>Загрузите документ <br />и подпишите его по одной кнопке</React.Fragment>,
    imageSmProps: imageSm8Data,
};

const imageSm9Data = {
    src: IconSberSend2,
    className: "image-sm",
};

const column42Data = {
    title: "3 шаг",
    caption: "Отправьте",
    subtitle: <React.Fragment>Отправить ссылку контрагенту <br />на подписание</React.Fragment>,
    imageSmProps: imageSm9Data,
};

const head22Data = {
    className: "head-6",
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

const frame2709889442Data = {
    className: "frame-270988944-2",
    frame270988946Props: frame2709889463Data,
    frame270988947Props: frame2709889473Data,
};

const handsHeart22Data = {
    src: "/img/hands-heart-1@2x.png",
    className: "",
};

const imageHands22Data = {
    className: "image-hands-6",
    handsHeart3Props: handsHeart22Data,
};

const blur44Data = {
    className: "blur-10",
};

const qAItem5Data = {
    title: <React.Fragment>Какой тип электронной подписи используется <br />в сервисе?</React.Fragment>,
    subtitle: "Усиленная неквалифицированная электронная подпись. Криптографические средства защиты гарантируют неизменность подписанных документов.",
};

const qAItem6Data = {
    title: <React.Fragment>Можно ли пойти с документами, подписанными <br />в вашем сервисе в суд или налоговую?</React.Fragment>,
    subtitle: "Да, мы разработали сервис с учетом всех требований законодательства, поэтому государственные органы примут документы, подписанные в нашем сервисе.",
};

const qAItem24Data = {
    title: "Какую поддержку может оказать сервис в случае судебных споров?",
    spanText1: <React.Fragment>По запросу мы предоставим дополнительный протокол подписания документа с информацией о всех подписавших.<br />А в сервисе </React.Fragment>,
    spanText3: " вы сможете найти лучшего адвоката для своего вопроса.",
};

const column33Data = {
    className: "column-5",
};

const footer2Data = {
    column3Props: column33Data,
};

const x744pxData = {
    h1: "Подписывайте документы онлайн",
    subtitle1: <React.Fragment>Договаривайтесь быстро <br />и безопасно</React.Fragment>,
    h21: <React.Fragment>Быстрое<br />и надёжное<br />подписание</React.Fragment>,
    h22: <React.Fragment>Подписывайте документы <br />юридически значимо</React.Fragment>,
    h23: "Как это работает?",
    subtitle2: "Подпишите первый документ за 3 шага:",
    title1: "1 шаг",
    caption: "Зарегистрируйтесь",
    subtitle3: <React.Fragment>Зарегистрируйтесь <br />с помощью Сбер ID</React.Fragment>,
    title2: <React.Fragment>Отвечаем <br />на ваши вопросы</React.Fragment>,
    header2Props: header22Data,
    maleLaptop08Props: maleLaptop083Data,
    backBlur2Props: backBlur22Data,
    blur41Props: blur43Data,
    advantageItem41Props: advantageItem41Data,
    advantageItem42Props: advantageItem42Data,
    advantageItem5Props: advantageItem5Data,
    advantageItem43Props: advantageItem43Data,
    imageSmProps: imageSm7Data,
    column41Props: column41Data,
    column42Props: column42Data,
    head2Props: head22Data,
    frame270988944Props: frame2709889442Data,
    imageHands2Props: imageHands22Data,
    blur42Props: blur44Data,
    qAItem1Props: qAItem5Data,
    qAItem2Props: qAItem6Data,
    qAItem2Props2: qAItem24Data,
    footerProps: footer2Data,
};

const header3Data = {
    className: "header-1",
};

const maleLaptop084Data = {
    src: Private21,
};

const maleLaptop3Data = {
    className: "male-laptop-1",
    maleLaptop08Props: maleLaptop084Data,
};

const backBlur3Data = {
    className: "back-blur-1",
};

const heroBannerMobile2Data = {
    subtitle: "Договаривайтесь быстро и безопасно",
    className: "hero-banner-mobile-1",
    maleLaptopProps: maleLaptop3Data,
    backBlurProps: backBlur3Data,
};

const systemLightStatusBarDefault2Data = {
    className: "system-light-status-bar-default-1",
};

const blur3Data = {
    className: "blur-1",
};

const container31Data = {
    src: IcSberWallet,
    title: "Экономьте",
    subtitle: <React.Fragment>Экономия до 90% <br />на подписании в сравнении <br />с выпуском квалифицированной подписи</React.Fragment>,
    className: "",
};

const advantageItem61Data = {
    container3Props: container31Data,
};

const container32Data = {
    src: IcSberSecurity,
    title: "Используйте в суде",
    subtitle: "Налоговая и суд примут подписанные в нашем приложении документы",
    className: "container-52-1",
};

const advantageItem62Data = {
    className: "advantage-item-10",
    container3Props: container32Data,
};

const container33Data = {
    src: IcSberTime,
    title: "Регистрируйтесь быстро",
    subtitle: <React.Fragment>Получите УНЭП      <br />с помощью регистрации <br />через СберID</React.Fragment>,
    className: "container-52",
};

const container34Data = {
    src: IcSberSuccess,
    title: "Подписывайте онлайн",
    subtitle: <React.Fragment>Подписывайте документы <br />онлайн на любом устройстве</React.Fragment>,
    className: "container-54",
};

const advantageItem63Data = {
    className: "advantage-item-11",
    container3Props: container34Data,
};

const otherchandsPhone3Data = {
    src: LgHandsPhone012x3,
    className: "otherchands-phone-1",
};

const frame2709889502Data = {
    className: "frame-270988950-1",
    otherchandsPhoneProps: otherchandsPhone3Data,
};

const imageSm10Data = {
    src: IcSberProfile,
    className: "",
};

const column51Data = {
    title: "1 шаг",
    caption: "Зарегистрируйтесь",
    subtitle: <React.Fragment>Зарегистрируйтесь <br />с помощью Сбер ID</React.Fragment>,
    imageSmProps: imageSm10Data,
};

const imageSm11Data = {
    src: IcSberSigned,
    className: "",
};

const column52Data = {
    title: "2 шаг",
    caption: "Подпишите",
    subtitle: <React.Fragment>Загрузите документ <br />и подпишите его по одной кнопке</React.Fragment>,
    imageSmProps: imageSm11Data,
};

const imageSm12Data = {
    src: IconSberSend,
    className: "image-sm",
};

const column53Data = {
    title: "3 шаг",
    caption: "Отправьте",
    subtitle: <React.Fragment>Отправить ссылку контрагенту <br />на подписание</React.Fragment>,
    imageSmProps: imageSm12Data,
};

const handsHeart3Data = {
    src: HandsHeart3,
    className: "hands-heart-1",
};

const head3Data = {
    subtitle: "Мы ещё разрабатываем сервис. Как только он станет доступен, обязательно сообщим вам.",
    className: "head-2",
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

const container4Data = {
    className: "container-15",
    headProps: head3Data,
    frame270988946Props: frame2709889464Data,
    frame270988947Props: frame2709889474Data,
};

const bannerContactsMobile2Data = {
    className: "banner-contacts-mobile-1",
    handsHeartProps: handsHeart3Data,
    containerProps: container4Data,
};

const qAItem7Data = {
    title: <React.Fragment>Какой тип электронной подписи используется <br />в сервисе?</React.Fragment>,
    subtitle: <React.Fragment>Усиленная неквалифицированная электронная подпись. Криптографические средства защиты гарантируют неизменность подписанных документов. По запросу мы предоставим дополнительный протокол подписания документа с информацией <br />о всех подписавших.</React.Fragment>,
};

const qAItem8Data = {
    title: <React.Fragment>Можно ли пойти <br />с документами, подписанными <br />в вашем сервисе в суд или налоговую?</React.Fragment>,
    subtitle: <React.Fragment>Да, мы разработали сервис <br />с учетом всех требований законодательства, поэтому государственные органы примут документы, подписанные в нашем сервисе.</React.Fragment>,
};

const qAItem25Data = {
    title: <React.Fragment>Можно ли пойти <br />с документами, подписанными <br />в вашем сервисе в суд или налоговую?</React.Fragment>,
    spanText1: "По запросу мы предоставим дополнительный протокол подписания документа с информацией о всех подписавших. А в сервисе ",
    spanText3: " вы сможете найти лучшего адвоката для своего вопроса.",
};

const footerMobile2Data = {
    className: "footer-mobile-1",
};

const x375pxData = {
    h21: <React.Fragment>Быстрое<br />и надёжное<br />подписание</React.Fragment>,
    h22: "Как это работает?",
    subtitle: "Подпишите первый документ за 3 шага:",
    title: <React.Fragment>Отвечаем <br />на ваши<br />вопросы</React.Fragment>,
    headerProps: header3Data,
    heroBannerMobileProps: heroBannerMobile2Data,
    systemLightStatusBarDefaultProps: systemLightStatusBarDefault2Data,
    blurProps: blur3Data,
    advantageItem61Props: advantageItem61Data,
    advantageItem62Props: advantageItem62Data,
    container3Props: container33Data,
    advantageItem63Props: advantageItem63Data,
    frame270988950Props: frame2709889502Data,
    column51Props: column51Data,
    column52Props: column52Data,
    column53Props: column53Data,
    bannerContactsMobileProps: bannerContactsMobile2Data,
    qAItem1Props: qAItem7Data,
    qAItem2Props: qAItem8Data,
    qAItem2Props2: qAItem25Data,
    footerMobileProps: footerMobile2Data,
};

const button3Data = {
    children: "Связаться с нами",
};

const buttons3Data = {
    buttonProps: button3Data,
};

const header23Data = {
    className: "header-4",
    buttonsProps: buttons3Data,
};

const maleLaptop085Data = {
    src: Private211,
    className: "male-laptop-08-4",
};

const maleLaptop22Data = {
    className: "male-laptop-3",
    maleLaptop08Props: maleLaptop085Data,
};

const backBlur23Data = {
    className: "back-blur-5",
};

const heroBannerDesktopData = {
    h1: "Подписывайте документы онлайн",
    subtitle: "Договаривайтесь быстро и безопасно",
    maleLaptop2Props: maleLaptop22Data,
    backBlur2Props: backBlur23Data,
};

const blur45Data = {
    className: "blur-6",
};

const container51Data = {
    src: IcSberWallet,
    title: "Экономьте",
    subtitle: <React.Fragment>Экономия до 90% <br />на подписании в сравнении <br />с выпуском квалифицированной подписи</React.Fragment>,
    className: "",
};

const advantageItem111Data = {
    containerProps: container51Data,
};

const container52Data = {
    src: IcSberSecurity,
    title: "Используйте в суде",
    subtitle: "Налоговая и суд примут подписанные в нашем приложении документы",
    className: "container-36",
};

const advantageItem112Data = {
    className: "advantage-item-12",
    containerProps: container52Data,
};

const container53Data = {
    src: IcSberTime,
    title: "Регистрируйтесь быстро",
    subtitle: <React.Fragment>Получите УНЭП      <br />с помощью регистрации через Сбер ID</React.Fragment>,
    className: "container-36",
};

const advantageItem322Data = {
    containerProps: container53Data,
};

const container54Data = {
    src: IcSberSuccess,
    title: "Подписывайте онлайн",
    subtitle: <React.Fragment>Подписывайте документы <br />онлайн на любом устройстве</React.Fragment>,
    className: "container-36",
};

const advantageItem113Data = {
    className: "advantage-item-12",
    containerProps: container54Data,
};

const otherchandsPhone4Data = {
    src: LgHandsPhone012x4,
    className: "otherchands-phone-2",
};

const imageHands4Data = {
    otherchandsPhoneProps: otherchandsPhone4Data,
};

const imageSm13Data = {
    src: IcSberProfile4,
    className: "",
};

const column81Data = {
    title: "1 шаг",
    caption: "Зарегистрируйтесь",
    subtitle: <React.Fragment>Зарегистрируйтесь <br />с помощью Сбер ID</React.Fragment>,
    imageSmProps: imageSm13Data,
};

const imageSm14Data = {
    src: IcSberSigned4,
    className: "",
};

const column82Data = {
    title: "2 шаг",
    caption: "Подпишите",
    subtitle: "Загрузите документ и подпишите его по одной кнопке",
    className: "column-11",
    imageSmProps: imageSm14Data,
};

const imageSm15Data = {
    src: IconSberSend4,
    className: "image-sm",
};

const column83Data = {
    title: "3 шаг",
    caption: "Отправьте",
    subtitle: <React.Fragment>Отправить ссылку контрагенту <br />на подписание</React.Fragment>,
    imageSmProps: imageSm15Data,
};

const link9Data = {
    children: "+7 (499) 404-10-37",
};

const frame27098894632Data = {
    linkProps: link9Data,
};

const link10Data = {
    children: "podpis@sber.ru",
};

const frame2709889475Data = {
    linkProps: link10Data,
};

const handsHeart23Data = {
    src: HandsHeart4,
    className: "hands-heart-5",
};

const imageHands23Data = {
    className: "image-hands-7",
    handsHeart3Props: handsHeart23Data,
};

const bannerContactsDesktopData = {
    title: <React.Fragment>Расскажите, какие документы <br />вы бы хотели подписывать</React.Fragment>,
    subtitle1: "Мы ещё разрабатываем сервис. Как только он станет доступен, обязательно сообщим вам.",
    subtitle2: "свяжитесь с нами",
    frame2709889463Props: frame27098894632Data,
    frame270988947Props: frame2709889475Data,
    imageHands2Props: imageHands23Data,
};

const blur46Data = {
    className: "blur-6",
};

const qAItem9Data = {
    title: <React.Fragment>Какой тип электронной подписи используется <br />в сервисе?</React.Fragment>,
    subtitle: "Усиленная неквалифицированная электронная подпись. Криптографические средства защиты гарантируют неизменность подписанных документов.",
};

const qAItem10Data = {
    title: <React.Fragment>Можно ли пойти с документами, подписанными <br />в вашем сервисе в суд или налоговую?</React.Fragment>,
    subtitle: "Да, мы разработали сервис с учетом всех требований законодательства, поэтому государственные органы примут документы, подписанные в нашем сервисе.",
};

const qAItem26Data = {
    title: "Какую поддержку может оказать сервис в случае судебных споров?",
    spanText1: <React.Fragment>По запросу мы предоставим дополнительный протокол подписания документа с информацией о всех подписавших.<br />А в сервисе </React.Fragment>,
    spanText3: " вы сможете найти лучшего адвоката для своего вопроса.",
};

const column34Data = {
    className: "column-6",
};

const footer3Data = {
    className: "footer-2",
    column3Props: column34Data,
};

const x1440pxData = {
    h21: <React.Fragment>Быстрое<br />и надёжное<br />подписание</React.Fragment>,
    h22: <React.Fragment>Подписывайте документы <br />юридически значимо</React.Fragment>,
    h23: "Как это работает?",
    subtitle: "Подпишите первый документ за 3 шага",
    title: <React.Fragment>Отвечаем <br />на ваши вопросы</React.Fragment>,
    header2Props: header23Data,
    heroBannerDesktopProps: heroBannerDesktopData,
    blur41Props: blur45Data,
    advantageItem111Props: advantageItem111Data,
    advantageItem112Props: advantageItem112Data,
    advantageItem32Props: advantageItem322Data,
    advantageItem113Props: advantageItem113Data,
    imageHands4Props: imageHands4Data,
    column81Props: column81Data,
    column82Props: column82Data,
    column83Props: column83Data,
    bannerContactsDesktopProps: bannerContactsDesktopData,
    blur42Props: blur46Data,
    qAItem1Props: qAItem9Data,
    qAItem2Props: qAItem10Data,
    qAItem2Props2: qAItem26Data,
    footerProps: footer3Data,
};

const cmalePhoneData = {
    src: BoyTelefon1,
};

const backBlur4Data = {
    className: "back-blur-2",
};

const heroBannerMobile3Data = {
    h1: "Подписывайте документы онлайн",
    subtitle: <React.Fragment>Договаривайтесь быстро <br />и безопасно</React.Fragment>,
    cmalePhoneProps: cmalePhoneData,
    cmalePhoneProps2: backBlur4Data,
};

const systemLightStatusBarDefault3Data = {
    className: "system-light-status-bar-default-2",
};

const blur5Data = {
    className: "blur-2",
};

const titleSubtitle32Data = {
    title: "Выгодно",
    subtitle: <React.Fragment>Экономия до 90% <br />на подписании в сравнении <br />с выпуском квалифицированной подписи</React.Fragment>,
};

const advantageItem422Data = {
    titleSubtitleProps: titleSubtitle32Data,
};

const advantageItem10Data = {
    title: <React.Fragment>Юридически<br />значимо</React.Fragment>,
    subtitle: "Налоговая и суд примут подписанные в нашем приложении документы",
};

const titleSubtitle33Data = {
    title: "Быстро",
    subtitle: <React.Fragment>Получите УНЭП      <br />с помощью регистрации <br />через СберID</React.Fragment>,
};

const titleSubtitle34Data = {
    title: "Удобно",
    subtitle: <React.Fragment>Подписывайте документы <br />онлайн на любом устройстве</React.Fragment>,
};

const advantageItem423Data = {
    className: "advantage-item-1",
    titleSubtitleProps: titleSubtitle34Data,
};

const otherchandsPhone5Data = {
    src: LgHandsPhone012x,
    className: "",
};

const frame2709889503Data = {
    otherchandsPhoneProps: otherchandsPhone5Data,
};

const imageSm16Data = {
    src: IcSberProfile,
    className: "image-sm-5-1",
};

const column222Data = {
    title: "1 шаг",
    caption: "Регистрация",
    subtitle: <React.Fragment>Зарегистрируйтесь <br />с помощью Сбер ID</React.Fragment>,
    imageSmProps: imageSm16Data,
};

const imageSm17Data = {
    src: IcSberSigned,
    className: "image-sm-5-2",
};

const column223Data = {
    title: "2 шаг",
    caption: "Подписание",
    subtitle: <React.Fragment>Загрузите документ <br />и подпишите его по одной кнопке</React.Fragment>,
    imageSmProps: imageSm17Data,
};

const imageSm18Data = {
    src: IconSberSend,
    className: "image-sm-5",
};

const column224Data = {
    title: "3 шаг",
    caption: "Отправка",
    subtitle: <React.Fragment>Отправить ссылку контрагенту <br />на подписание</React.Fragment>,
    imageSmProps: imageSm18Data,
};

const handsHeart4Data = {
    src: HandsHeart,
    className: "hands-heart-2",
};

const head4Data = {
    subtitle: <React.Fragment>В благодарность мы дадим вам промокод на 3 бесплатных подписания документа <br />после публикации сервиса</React.Fragment>,
};

const link11Data = {
    children: "+7 (499) 404-10-37",
};

const frame27098894633Data = {
    linkProps: link11Data,
};

const link12Data = {
    children: "podpis@sber.ru",
};

const frame2709889476Data = {
    linkProps: link12Data,
};

const qAItem32Data = {
    title: <React.Fragment>Какой тип электронной подписи используется <br />в сервисе?</React.Fragment>,
    subtitle: <React.Fragment>Усиленная неквалифицированная электронная подпись. Криптографические средства защиты гарантируют неизменность подписанных документов. По запросу мы предоставим дополнительный протокол подписания документа с информацией <br />о всех подписавших.</React.Fragment>,
};

const qAItem33Data = {
    title: <React.Fragment>Можно ли пойти <br />с документами, подписанными <br />в вашем сервисе в суд или налоговую?</React.Fragment>,
    subtitle: <React.Fragment>Да, мы разработали сервис <br />с учетом всех требований законодательства, поэтому государственные органы примут документы, подписанные в нашем сервисе.</React.Fragment>,
};

const qAItem42Data = {
    title: <React.Fragment>Можно ли пойти <br />с документами, подписанными <br />в вашем сервисе в суд или налоговую?</React.Fragment>,
    spanText1: "По запросу мы предоставим дополнительный протокол подписания документа с информацией о всех подписавших. А в сервисе ",
    spanText2: "СберПраво",
    spanText3: " вы сможете найти лучшего адвоката для своего вопроса.",
};

const footerMobile3Data = {
    phone: "+7 (499) 404-10-37",
    sbersdelkiSberbankRu: "sbersdelki@sberbank.ru",
    text2: <React.Fragment>ОГРН 1187746905004 ИНН 9705124940<br />Адрес: 121170, г. Москва, ул. Поклонная,<br />д. 3, офис 209, этаж 2<br />© ООО «СБЕР ЛИГАЛ». Все права защищены.<br />При копировании необходимо упоминание.</React.Fragment>,
};

const x414pxData = {
    h21: <React.Fragment>Быстрое<br />и надёжное<br />подписание</React.Fragment>,
    h23: "Как это работает?",
    subtitle1: "Подпишите первый документ за 3 шага:",
    title1: "свяжитесь с нами",
    h22: <React.Fragment>Отвечаем <br />на ваши<br />вопросы</React.Fragment>,
    heroBannerMobileProps: heroBannerMobile3Data,
    systemLightStatusBarDefaultProps: systemLightStatusBarDefault3Data,
    frame270988947Props: blur5Data,
    advantageItem41Props: advantageItem422Data,
    advantageItem2Props: advantageItem10Data,
    titleSubtitleProps: titleSubtitle33Data,
    advantageItem42Props: advantageItem423Data,
    frame270988947Props2: frame2709889503Data,
    column21Props: column222Data,
    column22Props: column223Data,
    column23Props: column224Data,
    handsHeart2Props: handsHeart4Data,
    advantageItem41Props2: head4Data,
    frame270988946Props: frame27098894633Data,
    frame270988947Props3: frame2709889476Data,
    qAItem1Props: qAItem32Data,
    qAItem2Props: qAItem33Data,
    qAItem2Props2: qAItem42Data,
    footerMobileProps: footerMobile3Data,
};