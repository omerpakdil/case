import Country from '../models/countryModel.js';


// create a new country

const createCountry = async (req, res) => {

    try {
        const country = await Country.create(req.body);
        res.status(201).json({
            message: "Country created successfully",
            country
        });
    } catch (error) {
        console.log(`Error: ${error.message}`);
        res.status(500).json({message: "Server Error"});
    }
}

// get all countries

const getCountries = async (req, res) => {
    try {
        const region = req.query.region; // Get the region from the query parameter
        if (region) {
            const countries = await Country.find({ region });
            res.json(countries);
        }
        else {
            const countries = await Country.find({});
            res.json(countries);
        }
        
    } catch (error) {
        console.log(`Error: ${error.message}`);
        res.status(500).json({message: "Server Error"});
    }
};


export {
    createCountry,
    getCountries
};
