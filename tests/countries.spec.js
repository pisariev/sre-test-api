import { expect } from 'chai';
import CountriesHelper from '../helpers/countries.helper';

describe('country code', function () {
    const countriesHelper = new CountriesHelper();

    before(async function () {
        await countriesHelper.get();
    });

    it('response status code is 200', async function () {
        expect(countriesHelper.response.statusCode).to.eq(200);
    });

    it('should get an array one or more items', async function () {
        expect(countriesHelper.response.body.length).to.be.at.least(1);
    });

    it('should get an array one or more items', async function () {
        for(let countryCode of countriesHelper.response.body) {
            expect(countryCode).to.be.a('string');
        }
    });
});