import * as functions from 'firebase-functions';


exports.testFunc = functions.https.onCall((data, context)=>{
    return new Promise((res, rej)=>{
        res({ok: true, message: "function ran"})
    })
})