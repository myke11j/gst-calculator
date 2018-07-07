const {
    commodityMapping
} = require('./config/constants');

module.exports = {
    validateCommodity: (commodity) => {
        console.log(commodity);
        
        if (commodityMapping.map(x => x.type).indexOf(commodity) === -1) {
            throw new Error('Invalid commodity selected');
        }
    },
    validateItem: (item, commodity) => {
        if (commodityMapping.find(x => commodity === x.type).items.indexOf(item) === -1) {
            throw new Error('Invalid item selected');
        }
    },
    validateUnits: (units) => {
        if (isNaN(parseInt(units, 10))) {
            throw new Error('Invalid units selected');
        }
    },
    validatePrice: (price) =>{
        if (isNaN(parseInt(price, 10))) {
            throw new Error('Invalid price selected');
        }
    },
    getCommodityList: () => commodityMapping.map(x => x.type).toString(),

    /**
     * @desc Config containing gstSlab and items of some specific commodity
     */
    getCommodityConfig: (commodity) => commodityMapping.find(x => x.type === commodity)
}