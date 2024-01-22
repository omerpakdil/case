import express from 'express';
import { createCountry, getCountries } from '../controllers/countryController.js';

const router = express.Router();

// routes
router.post('/', createCountry);
router.get('/', getCountries);


export default router;