import config from "./config";
import core from "./core";
const app = {};
app.getLoginCookie = function () {
  let cookie = core.getCookie(config.COOKIE_FANTASY);
  let returnCookie = null;
  try {
    if (cookie) {
      cookie = window.decodeURIComponent(cookie);
      let parsedCookie = JSON.parse(cookie);
      if (parsedCookie) {
        returnCookie = parsedCookie;
      }
    }
    return returnCookie;
  } catch (error) {
    if (cookie) {
      cookie = window.decodeURIComponent(cookie);
      let cookieSpecial = cookie.replace(
        /[\x00-\x09\x0B-\x0C\x0E-\x1F\x7F-\x9F]/g,
        ""
      );
      let parsedCookie = JSON.parse(cookieSpecial);
      if (parsedCookie) {
        returnCookie = parsedCookie;
      }
    }

    return returnCookie;
  }
};
app.setErrorCode = (jStatusCode) => {
  let jErrorcode = config.enumErrorCode.normal;
  const arrToast = [403, 401, -999];
  const arrRedirect = [500, 400];
  if (arrToast.indexOf(jStatusCode) > -1) {
    jErrorcode = config.enumErrorCode.isToast;
  } else if (arrRedirect.indexOf(jStatusCode) > -1) {
    jErrorcode = config.enumErrorCode.isRedirect;
  }
  return jErrorcode;
};
app.getUTMParameters = (sUrl) => {
  const objUrl = core.getQueryParams(sUrl ? sUrl : window.location.href);
  let search = "";
  for (let sKey in objUrl) {
    //if (sKey.indexOf('utm_') > -1) {
    const sValue = objUrl[sKey];
    if (sValue && sValue !== "undefined") {
      if (!search) {
        search = "?";
      } else {
        search = `${search}&`;
      }
      search = `${search}${sKey}=${sValue}`;
    }
    //}
  }
  return search;
};
app.generateFixtureArray = (lstFixturesP) => {
  let lstFixtures = lstFixturesP;
  let arrRound = [];
  for (let jFixture = 0; jFixture < lstFixtures.length; jFixture++) {
    let rowFixtures = lstFixtures[jFixture];
    let SeriesId = rowFixtures.SeriesId ? +rowFixtures.SeriesId : 0;
    let jRound = core.getIndexOfArrayByValue(arrRound, "SeriesId", SeriesId);
    if (jRound === -1) {
      let arrDetails = [{ ...rowFixtures }];
      arrRound.push({
        ...rowFixtures,
        arrDetails: arrDetails,
      });
    } else {
      let arrDetails = arrRound[jRound].arrDetails;
      arrDetails.push({ ...rowFixtures });
    }
  }
  return arrRound;
};
app.getLatestVersion = (objMarketVersion) => {
  const retObjRecent = { id: config.emptyValue, value: config.emptyValue };
  for (let sKey in objMarketVersion) {
    const sValue = objMarketVersion[sKey];
    if (sValue >= retObjRecent.value) {
      retObjRecent.id = sKey;
      retObjRecent.value = sValue;
    }
  }
  return retObjRecent;
};
app.getPathByStatus = (jMdStatus) => {
  for (let sKey in config.enumMatchStatus) {
    const objRow = config.enumMatchStatus[sKey];
    if (
      objRow.arrStatus &&
      objRow.arrStatus.length &&
      objRow.arrStatus.includes(jMdStatus)
    ) {
      return objRow.path;
    }
  }
  return null;
};
app.makeClasses = (obj = {}) => {
  return Object.keys(obj)
    .filter((key) => obj[key])
    .join(" ");
};

app.debounce = function (fn, delay) {
  let timeoutID;
  return function (...args) {
    if (timeoutID) clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

app.formatMarkets = (data) => {
  return data.reduce((acc, curr, i) => {
    const { marketid } = curr;
    if (!acc[marketid]) {
      acc[marketid] = [];
    }
    acc[marketid].push(curr);
    acc[marketid].sort((a, b) => b.lineorder - a.lineorder);
    return acc;
  }, {});
};
app.reduceOptionsToArray = (data, initial) => {
  return [...data].map((option) => {
    return Object.keys(option).reduce((a, b) => {
      return {
        ...a,
        ...{
          [b]: option[b],
        },
      };
    }, initial);
  });
};
app.customToFixed = (input_value) => {
  let [bdec, adec] = String(input_value).split(".");
  if (typeof adec !== "undefined" && adec.length > config.toFixedPoints) {
    adec = adec.slice(0, config.toFixedPoints);
  }
  input_value = Number(`${bdec}.${adec || 0}`);
  return input_value;
};
app.callEventTracking = (eventObj) => {
  window.gtag &&
    window.gtag("event", eventObj.eventAction, {
      event_category: eventObj.eventCategory,
    });
  console.log(eventObj);
};

app.callPageTracking = (pageName, pageTitle) => {
  window.gtag &&
    window.gtag("event", "page_view", {
      page_path: "/" + pageName,
      page_title: pageTitle,
    });
};
export default app;
