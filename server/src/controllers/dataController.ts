import {Request, Response} from "express";
import {body, validationResult, buildCheckFunction} from "express-validator";
import {
    ReasonPhrases,
    StatusCodes,
    getReasonPhrase,
    getStatusCode,
} from 'http-status-codes';
// import { Data } from '../models/Data';
import {ownershipSchema} from "../helpers/schemas";
import {BuildingMaterial, HeatingType} from "../types/Enums";
import {readlink} from "fs/promises";


const dataRequest = (req: Request, res: Response) => {
    console.log(req.body)
    const {userInput, people, ownership, buildType, electricityBill, heatingType, constructionAge} = req.body;
    const valueCalc = 50 * people
    const sumValue: number[] = []
    const secondArray = valueCalc - sumValue.reduce((a, b) => a + b, 0)


    function buildTypeService() {

        if (buildType === 'Brick') {

            const addBrick = (valueCalc * 1) - valueCalc
            sumValue.push(addBrick)

        }

        if (buildType === 'Concrete') {
            const addConcrete = (valueCalc * 0.96) - valueCalc
            sumValue.push(addConcrete)
        }
        if (buildType === 'Monolith') {
            const addMonolith = (valueCalc * 0.9) - valueCalc
            sumValue.push(addMonolith)
        }
        if (buildType === 'Wood') {
            const addWood = (valueCalc * 1.2) - valueCalc
            sumValue.push(addWood)

        }


    }

    buildTypeService()


    function buildingAgeService() {

        if (constructionAge < 7) {
            const addNew = 0;
            sumValue.push(addNew)

        }

        if (constructionAge > 7 && constructionAge <= 15) {
            const addNormal = (valueCalc * 1.04) - valueCalc
            sumValue.push(addNormal)
        }

        if (constructionAge > 15 && constructionAge <= 35) {
            const addOld = (valueCalc * 1.10) - valueCalc
            sumValue.push(addOld)
        }
        if (constructionAge > 35) {
            const addOldest = (valueCalc * 1.18) - valueCalc
            sumValue.push(addOldest)
            // badAlerts.push('Older Property Solution')

        }


    }

    buildingAgeService()


    function heatingTypeService() {
        if (heatingType === 'AC') {
            const addAC = (valueCalc * 1.1) - valueCalc
            sumValue.push(addAC)
        }
        if (heatingType === 'Wood') {
            const addWood = (valueCalc * 1.2) - valueCalc
            sumValue.push(addWood)

        }
        if (heatingType === 'Palletes') {
            const addPalletes = (valueCalc * 1.12) - valueCalc
            sumValue.push(addPalletes)
        }
        if (heatingType === 'Coal') {
            const addCoal = (valueCalc * 1.17) - valueCalc
            sumValue.push(addCoal)
        }
        if (heatingType === 'TEC') {
            const addTEC = (valueCalc * 1.15) - valueCalc
            sumValue.push(addTEC)
        }
    }

    heatingTypeService()

    try {
        const calcus = userInput - (valueCalc + sumValue.reduce((a, b) => a + b, 0))

        if (calcus > 30) {
            res.json({
                value: `You are paying ${calcus} leva more than you should`,
                message: 'Your expenditures far exceed the average based on your input. Check your email for your customized tips and a discount code for our Premium plan.'
            })
        }
        if (calcus < 30) {
            res.json({value: `You are paying ${calcus} leva more than you should`,
                            message: 'Your expenditures exceed the averaged based on your input. Check your email for your customized tips and a discount code for our Advanced plan.'})
        }

        if (calcus < 5) {
            res.json({value: `You are paying ${calcus} leva more than you should`, message: 'Your expenditures seem to be within what is expected. If you looking to improve your score - check your email for a discount code to our Basic plan'})
        }
    } catch (err) {
        console.log(err)
    }

}

export {dataRequest}

