import "firebase/messaging";
import firebase from "firebase/app";

const firebaseCloudMessaging = {
  tokenInLocalStorage: async () => {
    return localStorage.getItem("fcm_token");
  },

  // eslint-disable-next-line consistent-return
  async init() {
    try {
      firebase.initializeApp({
        apiKey: "AIzaSyDu1IW-Daq6_mv_7i3vWgDPQ0Ndza2HuPM",
        authDomain: "addressclick-15b76.firebaseapp.com",
        projectId: "addressclick-15b76",
        storageBucket: "addressclick-15b76.appspot.com",
        messagingSenderId: "919684226924",
        appId: "1:919684226924:web:f6ade369749ebaf7a49d49",
        measurementId: "G-E5GH6Q8SJC",
      });
    } catch (e) {
      // console.log(e)
    }

    try {
      if ((await this.tokenInLocalStorage()) !== null) {
        return false;
      }

      const messaging = firebase.messaging();
      await Notification.requestPermission();
      const token = await messaging.getToken();
      localStorage.setItem("fcm_token", token);
    } catch (error) {
      console.log(error);
    }
  },
};

export { firebaseCloudMessaging };
