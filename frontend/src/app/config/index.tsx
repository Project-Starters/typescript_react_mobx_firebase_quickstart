const dev = {
  firebaseConfig: {
    apiKey: "AIzaSyCiTpSm4cGFb1D41SHY5k4FOrs98owqFtE",
    authDomain: "rideshareapp-26826.firebaseapp.com",
    databaseURL: "https://rideshareapp-26826.firebaseio.com",
    projectId: "rideshareapp-26826",
    storageBucket: "rideshareapp-26826.appspot.com",
    messagingSenderId: "767595526064",
    appId: "1:767595526064:web:9f05557357fd768b330875",
    measurementId: "G-QM67F2CZ16"
  }
};

export const mode = 'prod'

const prod = dev;

const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  ...config
};

