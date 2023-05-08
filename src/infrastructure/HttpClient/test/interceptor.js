import ShoppingCartService from "../../../Share/Services/ShoppingCart";
import UserInfoService from "../../../Share/Services/UserInfo";

const inSecond = 3000;
const userInfo = id => {
  UserInfoService.getUserInfo()
    .then(user => {
      console.log(`log:::userinfo:    ${id}   ::`, user);
    })
    .catch(e => {
      console.log(`log:::userinfo:    ${id}   ::error`, e);
    });
};
const cart = id => {
  ShoppingCartService.getCount()
    .then(ca => {
      console.log(`log:::cartgetCount:    ${id}   ::`, ca);
    })
    .catch(e => {
      console.log(`log:::cartgetCount:    ${id}   ::error`, e);
    });
};

/**
 *
 * some  interval to produce near concurrent requests from client
 *
 */
const intervals = () => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 10; i++) {
    setInterval(() => {
      userInfo(`${i}`);
    }, inSecond + i);
    setInterval(() => {
      cart(`${i}`);
    }, inSecond + i);
  }
};
export { intervals };
export default intervals;
