const chai = require('chai');

const {
    expect
} = chai;
const dotenv = require('dotenv');

/* Setup environment variables */
const mode = process.env.NODE_ENV;

if (!mode) {
  throw new Error('environment not set');
}

dotenv.config({
  path: `.env.${mode}`
});

/* Methods to get tested */
const {
  validateCommodity,
  validateItem,
  validateUnits,
  validatePrice,
  getCommodityList,
  getCommodityConfig
} = require('../helpers');

/* eslint-disable prefer-arrow-callback, no-undef */

describe('GST Calculator Test Module', function () {
    describe('Helper Module Test Suite', function () {
        describe('validateCommodity', function () {
            describe('Failure Cases', function () {
                it('invalid commodity passed', function (done) {
                    const commodity = 'Invalid Commodity';
                    const error = 'Invalid commodity selected';
                    expect(validateCommodity.bind(validateCommodity, commodity)).to.throw(error)
                    done()
                })
            })
            describe('Success Cases', function () {
                it('Valid commodity passed from constants', function (done) {
                    const commodity = 'Cosmetics';
                    expect(validateCommodity.bind(validateCommodity, commodity)).to.not.throw()
                    expect(validateCommodity(commodity)).to.be.undefined;
                    done()
                })
            })
        })

        describe('validateItem', function () {
            describe('Failure Cases', function () {
                it('invalid item passed', function (done) {
                    const commodity = 'Food Grains';
                    const item = 'Invalid Item';
                    const error = 'Invalid item selected';
                    expect(validateItem.bind(validateItem, item, commodity)).to.throw(error)
                    done()
                })
            })
            describe('Success Cases', function () {
                it('Valid item passed from constants', function (done) {
                    const commodity = 'Cosmetics';
                    const item = 'Cream';
                    expect(validateItem.bind(validateItem, item, commodity)).to.not.throw()
                    expect(validateCommodity(commodity)).to.be.undefined;
                    done()
                })
            })
        })

        describe('validateUnit', function () {
            describe('Failure Cases', function () {
                it('invalid units passed', function (done) {
                    const units = NaN
                    const error = 'Invalid units selected';
                    expect(validateUnits.bind(validateUnits, units)).to.throw(error)
                    done()
                })
            })
            describe('Success Cases', function () {
                it('Valid units passed', function (done) {
                    const units = 2
                    expect(validateUnits.bind(validateUnits, units)).to.not.throw()
                    expect(validateUnits(units)).to.be.undefined;
                    done()
                })
            })
        })

        /* Mukul: Validate Price will similar to validateUnit */

        describe('getCommodityList', function () {
            it('getCommodityList returned String', function (done) {
                expect(getCommodityList()).to.be.string
                done()
            })
            it('getCommodityList returned String of array of length 4', function (done) {
                expect(getCommodityList().split(',').length).to.be.equal(4)
                done()
            })
        })

        describe('getCommodityConfig', function () {
            it('getCommodityConfig returned Object', function (done) {
                const commodity = 'Cosmetics'
                expect(getCommodityConfig(commodity)).to.be.an('object');
                done()
            })
            it('getCommodityConfig to have all keys', function (done) {
                const commodity = 'Cosmetics'
                expect(getCommodityConfig(commodity)).to.have.all.keys('items', 'type', 'gstSlab');
                done()
            })
            it('getCommodityConfig should return config corresponding to passed commodity', function (done) {
                const commodity = 'Cosmetics'
                const config = getCommodityConfig(commodity);
                expect(config.type).to.equal('Cosmetics')
                done()
            })
        })
    })
});
