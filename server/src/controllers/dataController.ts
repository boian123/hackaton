import { Response } from "express";
import {  body ,validationResult } from "express-validator";
import {
  ReasonPhrases,
  StatusCodes,
  getReasonPhrase,
  getStatusCode,
} from 'http-status-codes';
import { Data } from '../models/Data';


const dataRequest = async (req: Request, res: Response) => {
    const {ownership,buildType,electricityBill,waterBill } = req.body;
        ownership.
      }
