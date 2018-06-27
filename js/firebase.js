var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://marcia-fraerman.firebaseio.com"
});



var db = admin.database();
var ref = db.ref();

ref.once("value")
 .then(function (snap) {
 console.log("snap.val()", snap.val());
 }, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});