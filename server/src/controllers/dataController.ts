import { Request,Response } from "express";
import {  body ,validationResult, buildCheckFunction } from "express-validator";
import {
  ReasonPhrases,
  StatusCodes,
  getReasonPhrase,
  getStatusCode,
} from 'http-status-codes';
// import { Data } from '../models/Data';
import { ownershipSchema } from "../helpers/schemas";
import { BuildingMaterial, HeatingType } from "../types/Enums";
import { readlink } from "fs/promises";


const dataRequest =  (req: Request, res: Response) => {
      console.log(req.body)
    const {people,ownership,buildType,electricityBill,heatingType,yearOfConstrucion } = req.body;
     
   

        
        

 




        function buildTypeService() {
          let valueCalc = 50 * people
          let sumValue:number[] = []
          let secondArray = sumValue.reduce((a,b)=> a+b,0)
       
          if(buildType === 'Brick'){

            const addBrick = 0;
            sumValue.push(addBrick)
            console.log(sumValue)
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
            // badAlerts.push('Older Property Solution')

            
          }
           
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

          try {
            
            res.json({value:secondArray})
         }catch(err){
            throw new Error(err.message)
        }
        }
        buildTypeService();
   
        
       


        }
  
     

        

      
    
export{ dataRequest}

