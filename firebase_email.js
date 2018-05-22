'use strict';


const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const admin = require('firebase-admin')
admin.initializeApp();


const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "your_email@gmail.com",
    pass: "your_password",
  },
});


exports.sendEmailConfirmation = functions.database.ref('/reports/{userid}/{reportid}').onWrite((change, context) => {


var name = change.after.val().userInfo.userName;
var email = change.after.val().userInfo.userEmail;
var contact = change.after.val().userInfo.userContact;
var msg = change.after.val().userInfo.message;

var berth = change.after.val().crimeInfo.berthNumber;
var coach = change.after.val().crimeInfo.coachNumber;
var coachType =change.after.val().crimeInfo.coachType;
var crimeType = change.after.val().crimeInfo.crimeType;
var lastSta = change.after.val().crimeInfo.lastStation;
var nxtSta = change.after.val().crimeInfo.nextStation;
var trainName = change.after.val().crimeInfo.trainName;
var trainNum = change.after.val().crimeInfo.trainNumber;


var payload="Following are the details of the victim who just lodged a complaint on the app:- \nname of victim: "+name+
"\ncontact number: "+contact+
"\nemail: "+email+
"\ntrain number: "+trainNum+
"\ntrainName: "+trainName+
"\ncoach type: "+coachType+
"\ncoach number: "+coach+
"\nberth: "+berth+
"\nnext station: "+nxtSta+
"\nlast station: "+lastSta+
"\ncrime type: "+crimeType+
"\ndescription of crime: "+msg;


 const mailOptions = {
    from: "XYZ <your_email@gmail.com>",
    to: "receiver_email",
  };

 mailOptions.subject = "victim's information";
 mailOptions.text = payload;


 return mailTransport.sendMail(mailOptions)
    .then(() => console.log("Email sent"))
    .catch((error) => console.error('There was an error while sending the email:', error))

});