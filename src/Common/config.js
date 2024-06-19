const config = {};
config.headers = { entity: "Wh@t$|_||>" };
config.siVer = window.siver ? window.siVer : 0.01;
config.BASE_DOMAIN = process.env.REACT_APP_BASE_DOMAIN;

config.API_BASE = config.BASE_DOMAIN;
config.URL_BASE = config.BASE_DOMAIN;
config.HOST_BASE = config.BASE_DOMAIN + "build/";
// config.IMG_BASE = config.HOST_BASE + "images/";
config.IMG_BASE =
  config.HOST_BASE +
  `${process.env.NODE_ENV === "development" ? "../" : ""}` +
  "images/";
config.enumStaticUrls = {
  home: "",
};
config.tooltipTimeout = 5000;
config.redirectDefault = `${config.URL_BASE}${config.enumStaticUrls.home}`;
config.BrowserDetect = {
  Android: function () {
    return !!navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return !!navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return !!navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  iPAD: function () {
    return !!navigator.userAgent.match(/iPad/i);
  },
  Windows: function () {
    return !!navigator.userAgent.match(/IEMobile/i);
  },
  Windows_surface: function () {
    return !(
      !navigator.userAgent.match(/Trident/i) ||
      !navigator.userAgent.match(/Tablet/i)
    );
  },
  any: function () {
    return (
      config.BrowserDetect.Android() ||
      config.BrowserDetect.BlackBerry() ||
      config.BrowserDetect.iOS() ||
      config.BrowserDetect.Windows()
    );
  },
  ie9: function () {
    return !!navigator.userAgent.match(/MSIE 9.0/i);
  },
  ie10: function () {
    return !!navigator.userAgent.match(/MSIE 10.0/i);
  },
  ie: function () {
    return !(
      !navigator.userAgent.match(/MSIE/i) &&
      !navigator.userAgent.match(/Trident/i)
    );
  },
  FF: function () {
    return "undefined" != typeof InstallTrigger;
  },
  safari: function () {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("safari") !== -1) {
      if (ua.indexOf("crios") > -1) {
        return false; // Chrome
      } else {
        return true; // Safari
      }
    }
    // return !!navigator.userAgent.match(/Safari/i)
  },
};
config.DOMAIN = window.location.origin;

const isMobile = () => {
  return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

config.isMobile = isMobile();
config.GATrackingId = process.env.REACT_APP_GA_TRACKING_ID;
export default config;