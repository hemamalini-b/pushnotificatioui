import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyA_jaA0Hw8buYI8nomu2_7XujUt94VgedA",
  authDomain: "pushnotificationui.firebaseapp.com",
  projectId: "pushnotificationui",
  storageBucket: "pushnotificationui.appspot.com",
  messagingSenderId: "701693601650",
  appId: "1:701693601650:web:46157ed19eb3fd052e5feb",
  measurementId: "G-BL4MMR04EG",
};

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);
      getToken(messaging, {
        validKey:
          "BLvUWUY9Gp5kMhNbMK7_QE3CsU_5HTujnxtWvZLYF-o303_OthtDyue3CPBC7lgl9cgyKLEdPuuhXqt8dP-cz84",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken", currentToken);
        } else {
          console.log("no currentToken");
        }
      });
    } else {
      console.log("No Notification permission!");
    }
  });
}

requestPermission();
