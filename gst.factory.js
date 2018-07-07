/**
 * @desc Stores data of session
 */
const readline = require('readline');

class GSTCalc {
    constructor() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.readline = rl;
        this.commodity = null;
        this.item = null;
        this.units = null;
        this.price = null;
        this.finalPrice = null;
        this.gstSlab = 0;
    }

    getReadline() {
        return this.readline
    }

    getCommodity() {
        return this.commodity
    }

    setCommodity(commodity) {
        this.commodity = commodity
    }

    getItem() {
        return this.item
    }

    setItem(item) {
        this.item = item
    }

    getUnits() {
        return this.units
    }

    setUnits(units) {
        this.units = parseInt(units, 10)
    }

    getPrice() {
        return this.price
    }

    setPrice(price) {
        this.price = parseInt(price, 10)
    }

    getFinalPrice() {
        return this.finalPrice
    }

    setFinalPrice(finalPrice) {
        this.finalPrice = finalPrice
    }

    getGSTSlab() {
        return this.gstSlab
    }

    setGSTSlab(gstSlab) {
        this.gstSlab = parseInt(gstSlab, 10)
    }

    calcFinalPrice() {
        const gstApplicable = (this.price / 100) * this.gstSlab
        const finalPrice = ( (this.units * this.price) + gstApplicable * this.units)
        return {
            gstApplicable,
            finalPrice
        }
    }

    closeInterface() {
        return this.readline.close()
    }

    async getAnswer(params) {
        return new Promise((resolve) => {
            const {
                question
            } = params;
            this.readline
                .question(question, answer => resolve(answer));
        });
    }
}

module.exports = GSTCalc;
