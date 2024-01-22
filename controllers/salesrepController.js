import axios from 'axios';
import Country from '../models/countryModel.js';


const getSalesreps = async (req, res) => {
    try {
        const countries = await Country.find({});;
        const salesRepRequirements = processCountries(countries);
        res.json(salesRepRequirements);

      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
};

function processCountries(countries) {
    const regionSalesRepMap = {};
  
    countries.forEach(country => {
      const region = country.region;
      if (!regionSalesRepMap[region]) {
        regionSalesRepMap[region] = {
          min: 1,
          max: 1,
          countries: [country.name]
        };
      } else {
        regionSalesRepMap[region].countries.push(country.name);
      }
    });

    Object.keys(regionSalesRepMap).forEach(region => {
      const salesRepCount = regionSalesRepMap[region].countries.length;
      const minSalesReq = Math.ceil(salesRepCount / 7);
      const maxSalesReq = Math.ceil(salesRepCount / 3);
      regionSalesRepMap[region].min = minSalesReq;
      regionSalesRepMap[region].max = maxSalesReq;
    });

    const salesRepRequirements = Object.keys(regionSalesRepMap).map(region => ({
        region,
        minSalesReq: regionSalesRepMap[region].min,
        maxSalesReq: regionSalesRepMap[region].max,
    }));

    return salesRepRequirements;
}
    

export {
    getSalesreps
};
