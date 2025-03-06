import express from 'express';
import { getData } from '../controllers/home.controller.js';
var router = express.Router();
router.get('/search', async function (req, res, next) {
    await getData(req, res);
});
// router.get('/export-data', async function (req, res, next) {
//     await exportData(req, res);
// });
export default router;