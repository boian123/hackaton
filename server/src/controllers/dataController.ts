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


const dataRequest =  async (req: Request, res: Response) => {
      console.log(req.body)
       const {userInput,people,ownership,buildType,electricityBill,heatingType,constructionAge } = req.body;
       let valueCalc = 50 * people
        let sumValue:number[] = []
        let secondArray = valueCalc - sumValue.reduce((a,b)=> a+b,0)
   

        
        

 




        function buildTypeService() {
       
          if(buildType === 'Brick'){

            const addBrick = (valueCalc * 1) - valueCalc
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
        buildTypeService()

        function delay(ms: number) {
          return new Promise( resolve => setTimeout(resolve, ms) );
      }
       delay(300)

    function buildingAgeService  () {

          if(constructionAge == 7 ){
            const addNew = 0;
             sumValue.push(addNew)
       
          }

          if(constructionAge > 7){
            const addNormal = (valueCalc * 1.09) - valueCalc
            sumValue.push(addNormal)
          }

          if(constructionAge  == "Old > 20"){
            const addOld = (valueCalc * 1.17) - valueCalc
            sumValue.push(addOld)
          }
          if(constructionAge  == "Super Old > 35"){
            const addOldest = (valueCalc * 1.23) - valueCalc
             sumValue.push(addOldest)
            // badAlerts.push('Older Property Solution')

          }
           

        }

        buildingAgeService()


        function heatingTypeService  () { 
          if (heatingType =='AC'){
            const addAC = (valueCalc * 1.24) - valueCalc
            sumValue.push(addAC)
          }
          if (heatingType == 'Wood'){
            const addWood = (valueCalc * 1.32) - valueCalc
              sumValue.push(addWood)
      
          }
          if (heatingType =='Palletes'){
            const addPalletes = (valueCalc * 1.22) - valueCalc
            sumValue.push(addPalletes)
          }
          if (heatingType =='Coal'){
            const addCoal = (valueCalc * 1.26) - valueCalc
             sumValue.push(addCoal)
          }
          if (heatingType =='TEC'){
            const addTEC = (valueCalc * 1.2) - valueCalc
            sumValue.push(addTEC)
          }
        }
        heatingTypeService()
        
        try {
            console.log(sumValue)
            res.json({value:valueCalc - (sumValue.reduce((a,b)=> a+b,0) )})
         }catch(err){
            throw new Error(err.message)
        }
  
        
      }
    
export{ dataRequest}

