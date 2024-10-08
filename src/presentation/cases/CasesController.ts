import { Request, Response } from "express";
import { CasesModel } from "../../data/models/cases.model";
import { Agent } from "http";


export class CasesController {

  getCasesLast7Days = async (req: Request, res: Response) => {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setHours(0, 0, 0, 0); 
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7); 
  
    const cases = await CasesModel.find({
      creationDate: { $gte: sevenDaysAgo }, 
    });

    res.status(200).send(cases);
  }
  

  getCases = async (req: Request, res: Response) => {
    const cases = await CasesModel.find();
    
    res.send(cases);
  }

  getCaseById = async (req: Request, res: Response) => {
    const id = req.params.id;

    const foundCase = await CasesModel.findById(id);
    if (!foundCase) return res.status(404).send(`No case found with the given id: ` + id);

    return res.send(foundCase);
  } 

  saveCase = async (req: Request, res: Response) => {
    console.log('body', req.body);
    const { genre, age, lat, lng } = req.body;
    const newCase = await CasesModel.create({
      age: age,
      genre: genre,
      lat: lat,
      lng: lng,
    });
  
    return res.status(201).send(newCase);
  }

  updateCaseById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { genre, age, lat, lng } = req.body;
    let currentCase = await CasesModel.findById(id);
    if (!currentCase) return res.status(404).send(`No case found with the given id: ${id}`)
  
      currentCase = await CasesModel.findByIdAndUpdate(id, {
      genre: genre,
      age: age,
      lat: lat,
      lng: lng
    }, { new: true });
  
    res.send(currentCase);
  }

  deleteCaseById = async (req: Request, res: Response) => {const id = req.params.id;
    const currentCase = await CasesModel.findById(id);
    if (!currentCase) return res.status(404).send(`No case found with the given id: ${id}`)
  
    await CasesModel.findByIdAndDelete(id);
    res.send(currentCase);    
  }

}