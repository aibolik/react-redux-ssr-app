import jwtDecode from 'jwt-decode';
import CookieHelper from './CookieHelper';

exports.decodeJwtToken = token => {
  let payload = jwtDecode(token);

  if (typeof window !== 'undefined') {
    CookieHelper.createCookie('JwtToken', token);
  }

  return {
    id: payload.sub,
    name: payload.name
  };
};
