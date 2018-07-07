const dotenv = require('dotenv');

/* Setup environment variables */
const mode = process.env.NODE_ENV;

if (!mode) {
  throw new Error('environment not set');
}

dotenv.config({
  path: `.env.${mode}`
});

const GSTCalc = require('./gst.factory');
const {
  validateCommodity,
  validateItem,
  validateUnits,
  validatePrice,
  getCommodityList,
  getCommodityConfig
} = require('./helpers');

/* Created GSTCa. */
const gstCalc = new GSTCalc();

gstCalc.getAnswer({
    question: 'Welcome to GST Calculator!!! \nWhat Commodity you would like to have: \n' +
              `${getCommodityList()}? \n`
})
.then((commodity) => {
  validateCommodity(commodity);
  const commodityConfig = getCommodityConfig(commodity)
  gstCalc.setCommodity(commodity)
  gstCalc.setGSTSlab(commodityConfig.gstSlab)
  return gstCalc.getAnswer({
    question: 'Choose one the following item: ' +
              `${commodityConfig.items.toString()} \n`
  })
})
.then((item) => {
  validateItem(item, gstCalc.getCommodity())
  gstCalc.setItem(item)
  return gstCalc.getAnswer({
    question: 'Enter the number of units: \n'
  })
})
.then((units) => {
  validateUnits(units);
  gstCalc.setUnits(units)
  return gstCalc.getAnswer({
    question: 'Enter the Initial Unit Price: \n'
  })
})
.then((price) => {
  validatePrice(price)
  gstCalc.setPrice(price)
  const {
    gstApplicable,
    finalPrice
  } = gstCalc.calcFinalPrice();
  console.log(`GST Applicable per Unit: ${gstApplicable} \n Final Price: ${finalPrice}`);
  gstCalc.closeInterface();
})
.catch(err => console.log(err));
