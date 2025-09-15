import { stringify } from '@/helpers/string';

const getUrlParameter = (sParam: string): string | null => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  return urlSearchParams.get(sParam);
};

const getUrlParameterJson = (): string => {
  var search = window.location.search.substring(1);
  if (search !== '') {
    var urlParams = JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) {
      return key === '' ? value : decodeURIComponent(value);
    });
    return stringify(urlParams);
  }
  return '';
};

export const config = {
  shop: getUrlParameter('shop'),
  urlParams: getUrlParameterJson(),
  embedded: getUrlParameter('embedded'),
  hmac: getUrlParameter('hmac'),
  host: getUrlParameter('host'),
  source: getUrlParameter('source'),
  token: getUrlParameter('token'),
  locale: getUrlParameter('locale'),
  session: getUrlParameter('session'),
  timestamp: getUrlParameter('timestamp'),
  role: getUrlParameter('role'),
};
