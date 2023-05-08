/* global importScripts, firebase */
importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js')

firebase.initializeApp({
  apiKey: "AIzaSyDu1IW-Daq6_mv_7i3vWgDPQ0Ndza2HuPM",
  projectId: "addressclick-15b76",
  messagingSenderId: "919684226924",
  appId: "1:919684226924:web:f6ade369749ebaf7a49d49",
})

firebase.messaging()