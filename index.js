const dotenv = require('dotenv');

/* Setup Enviornment variables */
const mode = process.env.NODE_ENV;
if (!mode) {
  throw new Error('enviornment not set');
}

dotenv.config({
  path: `.env.${mode}`
});

const GSTCalc = require('./gst.factory');

/* Created GSTCa. */
const gstCalc = new GSTCalc();

gstCalc.getAnswer({
    question: 'jksksjsujs'
})
.then(asn => console.log(asn))
