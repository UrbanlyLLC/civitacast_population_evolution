import { Request, Response } from "express";
import { Household } from "../../models/household";
import { evolveHouseholdsOverYears } from "../../services/evolution";
import express from "express";

const populationRouter = express.Router();

const ERROR_MISSING_PARAMS = "Missing required parameters";
const ERROR_EVOLUTION_FAILED = "Error evolving population";

populationRouter.post("/evolve", (req: Request, res: Response) => {
    const { year, initialPopulation, initialPopulationYear } = req.body;

    if (!year || !initialPopulation || !initialPopulationYear) {
        return res.status(400).json({ error: ERROR_MISSING_PARAMS });
    }
    try {
        const households: Household[] = initialPopulation;
        let evolvedHouseholds = evolveHouseholdsOverYears(households, initialPopulationYear, year);
        res.json(evolvedHouseholds);
    } catch (error) {
        res.status(500).json({ error: ERROR_EVOLUTION_FAILED });
    }
});

export default populationRouter;