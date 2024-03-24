import moment from "moment";
export function validateEmail(email) {
  let re =
    /^(([^<>()\\,;:\s@"]+(\.[^<>().,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
export function validatePhone(phone) {
  return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(phone);
}
function removeAscent(str) {
  if (str === null || str === undefined) return str;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  return str;
}
export function validateFullName(string) {
  var re = /^[a-zA-Z ]{2,}$/g;
  return re.test(removeAscent(string));
}

export function getUrlDevLink() {
  const URL_GET_FROM_ENV =
    process?.env?.REACT_APP_DEV_LINK || "https://apipub.dsc.com.vn/fta";
  return URL_GET_FROM_ENV;
}

export function urlParseParams(objectParse = {}) {
  const str = [];
  for (const p in objectParse)
    if (objectParse.hasOwnProperty(p)) {
      if (objectParse[p]) {
        str.push(
          encodeURIComponent(p) + "=" + encodeURIComponent(objectParse[p])
        );
      }
    }
  return str.join("&");
}

export function formatMoney(x, fixedNumber = null) {
  if (x && fixedNumber) {
    if (typeof x === "string") {
      x = parseFloat(x);
    }
    x = x.toFixed(fixedNumber);
  }
  x = x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return x;
}

export function formatPhoneNumber(phoneNumberString) {
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return "" + match[1] + "." + match[2] + "." + match[3];
  }
  return null;
}

export function urlBaseGetImage(url, type = "strapi_v1") {
  if (url) {
    let urlBase = "";
    if (type === "strapi_v1") {
      urlBase = process?.env?.NEXT_PUBLIC_URL_BASE;
    } else if (type === "strapi_v2") {
      urlBase = process?.env?.NEXT_PUBLIC_URL_BASE_v2;
    } else if (type === "base_url") {
      urlBase = process?.env?.NEXT_PUBLIC_URL_BASE_WEB;
    }
    if (
      (url &&
        typeof url === "string" &&
        urlBase &&
        url?.indexOf(urlBase) > -1) ||
      url?.indexOf("http") > -1
    ) {
      return url;
    } else {
      return urlBase + url;
    }
  } else {
    return null;
  }
}

export function slugify(string) {
  if (typeof string === "string") {
    const a =
      "àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;";
    const b =
      "aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------";
    const p = new RegExp(a.split("").join("|"), "g");
    return string
      .toString()
      .toLowerCase()
      .replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, "a")
      .replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, "e")
      .replace(/i|í|ì|ỉ|ĩ|ị/gi, "i")
      .replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, "o")
      .replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, "u")
      .replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, "y")
      .replace(/đ/gi, "d")
      .replace(/\s+/g, "-")
      .replace(p, (c) => b.charAt(a.indexOf(c)))
      .replace(/&/g, "-and-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  }
}

export function getUrlDevLinkV3(type) {
  let URL_GET_FROM_ENV = "";
  if (type === "auth") {
    URL_GET_FROM_ENV = process?.env?.NEXT_PUBLIC_URL_ONEID;
  } else if (type === "wl") {
    URL_GET_FROM_ENV = process?.env?.NEXT_PUBLIC_URL_WELEARN
  }
  return URL_GET_FROM_ENV;
}
export function replaceDescription(description, type = "base_url_v1") {
  let descriptionNew = description;
  if (descriptionNew) {
    descriptionNew = descriptionNew.replaceAll(
      "/uploads",
      `${getUrlDevLinkV3(type)}/uploads`
    );
    // descriptionNew = descriptionNew.replaceAll('/uploads', `https://extgw.dsc.com.vn/eback/uploads`);
    descriptionNew = descriptionNew.replaceAll(
      "oembed url",
      'iframe class="GLBQFOPKRG" src'
    );
    descriptionNew = descriptionNew.replaceAll(`width="1000"`, `width="1200"`);
    descriptionNew = descriptionNew.replaceAll("oembed", "iframe");
    descriptionNew = descriptionNew.replaceAll(
      'rel="noopener noreferrer"',
      'rel="nofollow"'
    );
  }

  return descriptionNew;
}

export function isJsonString(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return [];
  }
}
export function isJsonObject(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return {};
  }
}

export const paramsFooter = () => {
  const params = {};
  return params;
};

export const makeParamFooterJson = (title, images, public_at) => {
  let imagesNew = [];
  if (images && images?.length > 0) {
    images.map((item) => {
      imagesNew.push(item?.attributes);
    });
  }
  const params = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: title,
    image: imagesNew,
    datePublished: public_at,
    dateModified: "2015-02-05T09:20:00+08:00",
  };
  return params;
};

export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      resolve(event.target.result);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
};

export const base64ToFile = (base64String, fileName, mimeType) => {
  // Remove data URL prefix (e.g., "data:image/jpeg;base64,")
  const base64WithoutPrefix = base64String.replace(/^data:[^;]+;base64,/, "");

  // Convert base64 to binary data
  const binaryData = atob(base64WithoutPrefix);

  // Create a Uint8Array from the binary data
  const uint8Array = new Uint8Array(binaryData.length);
  for (let i = 0; i < binaryData.length; i++) {
    uint8Array[i] = binaryData.charCodeAt(i);
  }

  // Create a Blob from the Uint8Array
  const blob = new Blob([uint8Array], {
    type: mimeType || "application/octet-stream",
  });

  // Create a File from the Blob
  const file = new File([blob], fileName || "file", {
    type: mimeType || "application/octet-stream",
  });

  return file;
};

export const removeVietnameseTones = (str) => {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, " ");
  str = str.trim();
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    " "
  );
  return str;
};

export const convertBlobToFile = async (blobUrl, filename, mimeType) => {
  try {
    const response = await fetch(blobUrl);
    const blob = await response.blob();
    const file = new File([blob], filename, { type: mimeType });
    return file;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
export const getRandomString = () => {
  return Math.random().toString(36).substring(7);
};

export function openLoginSSO(screen, width = 450, height = 600) {
  const left = (window.innerWidth - width) / 2 + window.screenX;
  const top = (window.innerHeight - height) / 2 + window.screenY;
  const url = `${process.env.NEXT_PUBLIC_URL_LOGINONEID}/${screen}?redirect_uri=${encodeURIComponent(window.location.origin)}`;
  const features = `toolbar=yes,scrollbars=yes,resizable=yes,top=${top},left=${left},width=${width},height=${height}`;

  window.open(url, "_blank", features);
}

export function openRegisterSSO() {
  var width = 450;
  var height = 600;
  var left = (window.innerWidth - width) / 2 + window.screenX;
  var top = (window.innerHeight - height) / 2 + window.screenY;
  window.open(`${process.env.NEXT_PUBLIC_URL_LOGINONEID}/register?redirect_uri=${window?.location?.origin}`, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=" + top + ",left=" + left + ",width=" + width + ",height=" + height);
}

export function secondsToTimestamp(seconds) {
  const timestamp = new Date(seconds * 1000).toISOString().substr(11, 8);
  return timestamp;
}

export function secondsToHMS(seconds, showText) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  let arr = [];
  let formattedTime;
  if(showText) {
    if(hours) arr.push(`${hours} giờ`);
    if(minutes) arr.push(`${minutes} phút`);
    formattedTime = arr.map(unit => unit < 10 ? `0${unit}` : unit).join(' ');
  } else {
    if(hours) arr.push(hours);
    arr.push(minutes);
    arr.push(remainingSeconds);
    formattedTime = arr.map(unit => unit < 10 ? `0${unit}` : unit).join(':');
  }


  return formattedTime;
}

export function convertToFriendlySlug(text) {
  // Handle Vietnamese characters
  text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, '') // Remove non-word characters
    .replace(/\s+/g, '-')     // Replace spaces with hyphens
    .replace(/-+/g, '-')      // Replace consecutive hyphens with a single hyphen
    .trim();
}
export function convertDateFormat(inputDateString) {
  // Create a Date object from the input string
  var dateObject = new Date(inputDateString);

  // Extract day, month, and year components
  var day = dateObject.getUTCDate();
  var month = dateObject.getUTCMonth() + 1; // Months are zero-indexed, so we add 1
  var year = dateObject.getUTCFullYear();

  // Format the date components
  var formattedDate = (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + year;

  return formattedDate;
}

export const timeToSeconds = (timeString) => {
  const durationSec = moment.duration(timeString)
  const seconds = durationSec.asSeconds();
  return seconds
};
export const handleChangeVideoUrl = (url, type) => {
  let convertUrl = url;
  if(type === "VIDEO_EMBED") {
    const stringReplace = "watch?v=";

    if(convertUrl.includes("&")) {
      let arrStr = convertUrl.split("&");
      convertUrl = arrStr[0];
    }

    if(convertUrl.includes(stringReplace)) {
      convertUrl = convertUrl.replace(stringReplace, "embed/")
    }

    return convertUrl;
  }
  if(type === "PDF") {
    convertUrl = `${process.env.NEXT_PUBLIC_URL_BASE_SCONTENT}${convertUrl}`;
  }

  return convertUrl;
}
