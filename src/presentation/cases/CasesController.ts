import { Request, Response } from "express";
import { CasesModel } from "../../data/models/cases.model";


export class CasesController {

  public getCases = async (req: Request, res: Response) => {
    const cases = await CasesModel.find();
    res.send(cases);
  }

}