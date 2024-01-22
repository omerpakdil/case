import express from 'express';
import { getSalesreps } from '../controllers/salesrepController.js';

const router = express.Router();

// routes
router.get('/', getSalesreps);


export default router;