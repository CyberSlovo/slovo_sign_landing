import "./App.css";
import React from "react";
// import X1440px from "./components/X1440px";
import X414px from "./components/X414px/X414px";
import { useMediaQuery } from 'react-responsive';
import BoyTelefon1 from "./assets/images/boy-telefon-1@2x.png";
import LgHandsPhone012x from "./assets/images/lg-hands-phone-01-2x@2x.png";
import IcSberProfile from "./assets/images/ic-sber-profile@2x.svg";
import IcSberSigned from "./assets/images/ic-sber-signed@2x.svg";
import IconSberSend from "./assets/images/icon-sber-send@2x.svg";
import HandsHeart from "./assets/images/hands-heart@2x.png";


function App() {
// const isDesktop = useMediaQuery({ minWidth: 601 })
const isMobile = useMediaQuery({ maxWidth: 600 })
  return (
    <>
    {isMobile &&  <X414px {...x414pxData} />}
        {/* {isDesktop &&  <X1440px {...x1440pxData} />} */}
    </>
  );
}

export default App;

// const buttonData = {
//     children: "Связаться с нами",
// };

// const headerData = {
//     buttonProps: buttonData,
// };

// const cmalePhone1Data = {
//     src: "./assets/images/boy-telefon-1-1@1x.png",
// };

// const container1Data = {
//     title: "Выгодно",
//     subtitle: <React.Fragment>Экономия до 90% <br />на подписании в сравнении <br />с выпуском квалифицированной подписи</React.Fragment>,
//     className: "",
// };

// const advantageItem1Data = {
//     containerProps: container1Data,
// };

// const container2Data = {
//     title: "Быстро",
//     subtitle: "Получите УНЭП      с помощью регистрации через Сбер ID",
//     className: "container-5",
// };

// const advantageItem3Data = {
//     containerProps: container2Data,
// };

// const container3Data = {
//     title: "Удобно",
//     subtitle: <React.Fragment>Подписывайте документы <br />онлайн на любом устройстве</React.Fragment>,
//     className: "container-5",
// };

// const advantageItem4Data = {
//     className: "advantage-item-1",
//     containerProps: container3Data,
// };

// const otherchandsPhone1Data = {
//     src: "./assets/images/lg-hands-phone-01-2x-1@1x.png",
// };

// const imageHandsData = {
//     otherchandsPhoneProps: otherchandsPhone1Data,
// };

// const imageSm1Data = {
//     src: "./assets/images/ic-sber-profile-1@2x.svg",
//     className: "",
// };

// const column1Data = {
//     title: "1 шаг",
//     caption: "Регистрация",
//     subtitle: <React.Fragment>Зарегистрируйтесь <br />с помощью Сбер ID</React.Fragment>,
//     imageSmProps: imageSm1Data,
// };

// const imageSm2Data = {
//     src: "./assets/images/ic-sber-signed-1@2x.svg",
//     className: "",
// };

// const column2Data = {
//     title: "2 шаг",
//     caption: "Подписание",
//     subtitle: "Загрузите документ и подпишите его по одной кнопке",
//     imageSmProps: imageSm2Data,
// };

// const imageSm3Data = {
//     src: "./assets/images/icon-sber-send-1@2x.svg",
//     className: "image-sm",
// };

// const column3Data = {
//     title: "3 шаг",
//     caption: "Отправка",
//     subtitle: <React.Fragment>Отправить ссылку контрагенту <br />на подписание</React.Fragment>,
//     imageSmProps: imageSm3Data,
// };

// const link1Data = {
//     children: "+7 (499) 404-10-37",
// };

// const frame2709889461Data = {
//     linkProps: link1Data,
// };

// const link2Data = {
//     children: "podpis@sber.ru",
// };

// const frame2709889471Data = {
//     linkProps: link2Data,
// };

// const handsHeartData = {
//     src: "./assets/images/hands-heart-1@1x.png",
// };

// const imageHands2Data = {
//     handsHeartProps: handsHeartData,
// };

// const bannerContactsDesktopData = {
//     title: <React.Fragment>Расскажите, какие документы <br />вы бы хотели подписывать</React.Fragment>,
//     subtitle1: <React.Fragment>В благодарность мы дадим вам промокод <br />на 3 бесплатных подписания документа <br />после публикации сервиса</React.Fragment>,
//     subtitle2: "свяжитесь с нами",
//     frame270988946Props: frame2709889461Data,
//     frame270988947Props: frame2709889471Data,
//     imageHands2Props: imageHands2Data,
// };

// const blur2Data = {
//     className: "blur-1",
// };

// const qAItem1Data = {
//     title: <React.Fragment>Какой тип электронной подписи используется <br />в сервисе?</React.Fragment>,
//     subtitle: "Усиленная неквалифицированная электронная подпись. Криптографические средства защиты гарантируют неизменность подписанных документов.",
// };

// const qAItem2Data = {
//     title: <React.Fragment>Можно ли пойти с документами, подписанными <br />в вашем сервисе в суд или налоговую?</React.Fragment>,
//     subtitle: "Да, мы разработали сервис с учетом всех требований законодательства, поэтому государственные органы примут документы, подписанные в нашем сервисе.",
// };

// const qAItem22Data = {
//     title: "Какую поддержку может оказать сервис в случае судебных споров?",
//     spanText1: <React.Fragment>По запросу мы предоставим дополнительный протокол подписания документа с информацией о всех подписавших.<br />А в сервисе </React.Fragment>,
//     spanText3: " вы сможете найти лучшего адвоката для своего вопроса.",
// };

// const footerData = {
//     text1: <React.Fragment>ОГРН 1187746905004 ИНН 9705124940<br />Адрес: 121170, г. Москва, ул. Поклонная,<br />д. 3, офис 209, этаж 2<br />© ООО «СБЕР ЛИГАЛ». Все права защищены.<br />При копировании необходимо упоминание.</React.Fragment>,
//     phone: "+7 (499) 404-10-37",
//     podpisSberRu: "podpis@sber.ru",
// };

// const x1440pxData = {
//     h1: "Подписывайте документы онлайн",
//     subtitle1: "Договаривайтесь быстро и безопасно",
//     h21: <React.Fragment>Быстрое<br />и надёжное<br />подписание</React.Fragment>,
//     h22: <React.Fragment>Подписывайте документы <br />юридически значимо</React.Fragment>,
//     h23: "Как это работает?",
//     subtitle2: "Подпишите первый документ за 3 шага",
//     title: <React.Fragment>Отвечаем <br />на ваши вопросы</React.Fragment>,
//     headerProps: headerData,
//     cmalePhoneProps: cmalePhone1Data,
//     advantageItem1Props: advantageItem1Data,
//     advantageItem3Props: advantageItem3Data,
//     advantageItem2Props: advantageItem4Data,
//     imageHandsProps: imageHandsData,
//     column1Props: column1Data,
//     column2Props: column2Data,
//     column3Props: column3Data,
//     bannerContactsDesktopProps: bannerContactsDesktopData,
//     blurProps: blur2Data,
//     qAItem1Props: qAItem1Data,
//     qAItem2Props: qAItem2Data,
//     qAItem2Props2: qAItem22Data,
//     footerProps: footerData,
// };

const cmalePhone2Data = {
    src: BoyTelefon1,
    className: "cmale-phone-1",
};

const heroBannerMobileData = {
    h1: "Подписывайте документы онлайн",
    subtitle: <React.Fragment>Договаривайтесь быстро <br />и безопасно</React.Fragment>,
    cmalePhoneProps: cmalePhone2Data,
};

const systemLightStatusBarDefaultData = {
    time: "9:41",
};

const titleSubtitle1Data = {
    title: "Выгодно",
    subtitle: <React.Fragment>Экономия до 90% <br />на подписании в сравнении <br />с выпуском квалифицированной подписи</React.Fragment>,
};

const advantageItem42Data = {
    titleSubtitleProps: titleSubtitle1Data,
};

const advantageItem22Data = {
    className: "advantage-item-3",
};

const titleSubtitle2Data = {
    title: "Быстро",
    subtitle: <React.Fragment>Получите УНЭП      <br />с помощью регистрации <br />через СберID</React.Fragment>,
};

const titleSubtitle3Data = {
    title: "Удобно",
    subtitle: <React.Fragment>Подписывайте документы <br />онлайн на любом устройстве</React.Fragment>,
};

const advantageItem43Data = {
    className: "advantage-item-6",
    titleSubtitleProps: titleSubtitle3Data,
};

const otherchandsPhone2Data = {
    src: LgHandsPhone012x,
    className: "otherchands-phone-1",
};

const imageSm4Data = {
    src: IcSberProfile,
    className: "",
};

const column22Data = {
    title: "1 шаг",
    caption: "Регистрация",
    subtitle: <React.Fragment>Зарегистрируйтесь <br />с помощью Сбер ID</React.Fragment>,
    imageSmProps: imageSm4Data,
};

const imageSm5Data = {
    src: IcSberSigned,
    className: "",
};

const column23Data = {
    title: "2 шаг",
    caption: "Подписание",
    subtitle: <React.Fragment>Загрузите документ <br />и подпишите его по одной кнопке</React.Fragment>,
    imageSmProps: imageSm5Data,
};

const imageSm6Data = {
    src: IconSberSend,
    className: "image-sm",
};

const column24Data = {
    title: "3 шаг",
    caption: "Отправка",
    subtitle: <React.Fragment>Отправить ссылку контрагенту <br />на подписание</React.Fragment>,
    imageSmProps: imageSm6Data,
};

const handsHeart2Data = {
    src: HandsHeart,
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

const qAItem3Data = {
    title: <React.Fragment>Какой тип электронной подписи используется <br />в сервисе?</React.Fragment>,
    subtitle: <React.Fragment>Усиленная неквалифицированная электронная подпись. Криптографические средства защиты гарантируют неизменность подписанных документов. По запросу мы предоставим дополнительный протокол подписания документа с информацией <br />о всех подписавших.</React.Fragment>,
};

const qAItem4Data = {
    title: <React.Fragment>Можно ли пойти <br />с документами, подписанными <br />в вашем сервисе в суд или налоговую?</React.Fragment>,
    subtitle: <React.Fragment>Да, мы разработали сервис <br />с учетом всех требований законодательства, поэтому государственные органы примут документы, подписанные в нашем сервисе.</React.Fragment>,
};

const qAItem23Data = {
    title: <React.Fragment>Можно ли пойти <br />с документами, подписанными <br />в вашем сервисе в суд или налоговую?</React.Fragment>,
    spanText1: "По запросу мы предоставим дополнительный протокол подписания документа с информацией о всех подписавших. А в сервисе ",
    spanText3: " вы сможете найти лучшего адвоката для своего вопроса.",
};

const footerMobileData = {
    phone: "+7 (499) 404-10-37",
    sbersdelkiSberbankRu: "sbersdelki@sberbank.ru",
    text2: <React.Fragment>ОГРН 1187746905004 ИНН 9705124940<br />Адрес: 121170, г. Москва, ул. Поклонная,<br />д. 3, офис 209, этаж 2<br />© ООО «СБЕР ЛИГАЛ». Все права защищены.<br />При копировании необходимо упоминание.</React.Fragment>,
};

const x414pxData = {
    h21: <React.Fragment>Быстрое<br />и надёжное<br />подписание</React.Fragment>,
    h22: <React.Fragment>Подписывайте документы <br />юридически значимо</React.Fragment>,
    h23: "Как это работает?",
    subtitle1: "Подпишите первый документ за 3 шага:",
    title1: <React.Fragment>Расскажите, какие документы <br />вы бы хотели подписывать</React.Fragment>,
    subtitle2: <React.Fragment>В благодарность мы дадим вам промокод на 3 бесплатных подписания документа <br />после публикации сервиса</React.Fragment>,
    subtitle3: "свяжитесь с нами",
    title2: <React.Fragment>Отвечаем <br />на ваши<br />вопросы</React.Fragment>,
    heroBannerMobileProps: heroBannerMobileData,
    systemLightStatusBarDefaultProps: systemLightStatusBarDefaultData,
    advantageItem41Props: advantageItem42Data,
    advantageItem2Props: advantageItem22Data,
    titleSubtitleProps: titleSubtitle2Data,
    advantageItem42Props: advantageItem43Data,
    otherchandsPhoneProps: otherchandsPhone2Data,
    column21Props: column22Data,
    column22Props: column23Data,
    column23Props: column24Data,
    handsHeart2Props: handsHeart2Data,
    frame270988946Props: frame2709889462Data,
    frame270988947Props: frame2709889472Data,
    qAItem1Props: qAItem3Data,
    qAItem2Props: qAItem4Data,
    qAItem2Props2: qAItem23Data,
    footerMobileProps: footerMobileData,
};

