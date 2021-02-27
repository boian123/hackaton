import { Request,Response } from "express";
import {  body ,validationResult, buildCheckFunction } from "express-validator";
import {
  ReasonPhrases,
  StatusCodes,
  getReasonPhrase,
  getStatusCode,
} from 'http-status-codes';
import { Data } from '../models/Data';
import { ownershipSchema } from "../helpers/schemas";
import { BuildingMaterial, HeatingType } from "../types/Enums";


const dataRequest = async (req: Request, res: Response) => {
    const {people,ownership,buildType,electricityBill,heatingType,yearOfConstrucion } = req.body;
       const valueCalc = 50 * people
        let sumValue:number[] = [].reduce((a,b)=> a+b,0)
        

       const callingFunction = (buildTypeService,buildingAgeService,heatingTypeService){
         buildingAgeService()
         heatingTypeService()
         buildTypeService()
       }




        const buildTypeService = () => {
          if(buildType === 'Brick'){
            const addBrick = 0;
            sumValue.push(addBrick)
         }

          if(buildType === 'Concrete'){
             const addConcrete = (valueCalc * 0.94) - valueCalc
             sumValue.push(addConcrete)
          }
          if (buildType === 'Monolith'){
            const addMonolith = (valueCalc * 0.9) - valueCalc
            sumValue.push(addMonolith)
          }
          if(buildType === 'Wood'){
            const addWood = (valueCalc * 1.1) - valueCalc
            sumValue.push(addWood)
          }


        }
        const buildingAgeService = () => {

          if(yearOfConstrucion  <= 7){
            const addNew = 0;
            sumValue.push(addNew)
          }
          if(yearOfConstrucion  > 7 && yearOfConstrucion <=15){
            const addNormal = (valueCalc * 1.09) - valueCalc
            sumValue.push(addNormal)
          }

          if(yearOfConstrucion  > 15 && yearOfConstrucion <=35){
            const addOld = (valueCalc * 1.17) - valueCalc
            sumValue.push(addOld)
          }
          if(yearOfConstrucion  > 35){
            const addOldest = (valueCalc * 1.23) - valueCalc
            sumValue.push(addOldest)

          }
           

        }

        const heatingTypeService = () => { 
          if ('AC'){
            const addAC = (valueCalc * 1.24) - valueCalc
            sumValue.push(addAC)
          }
          if ('Wood'){
            const addWood = (valueCalc * 1.32) - valueCalc
            sumValue.push(addWood)
          }
          if ('Palletes'){
            const addPalletes = (valueCalc * 1.22) - valueCalc
            sumValue.push(addPalletes)
          }
          if ('Coal'){
            const addCoal = (valueCalc * 1.26) - valueCalc
            sumValue.push(addCoal)
          }
          if ('TEC'){
            const addTEC = (valueCalc * 1.2) - valueCalc
            sumValue.push(addTEC)
          }
        }

        
      }
      +








      ////
      BuildingMaterial = (
        ('Brick', _('1')),
        ('Concrete', _('0.94')),
        ('Monolith', _('0.9')),
        ('Palletes', _('1.1'))
    )

      BuildingAge = (
        ('x<=7', _('1')),
        ('7<x<=15', _('1.09')),
        ('15<x<=35', _('1.17')),
        ('x>35', _('1.23'))
    )

      HeatingType = (
        ('AC', _('1.24')),
        ('Wood', _('1.32')),
        ('Palletes', _('1.22')),
        ('Coal', _('1.26')),
        ('TEC', _('1.2'))
    )

