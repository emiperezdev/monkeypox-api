import { Router } from "express";
import { CasesController } from "./CasesController";

export class CasesRoutes {

  static get routes(): Router {
    const router = Router();
    const casesController = new CasesController();

    router.get('', casesController.getCases);
    router.get('/:id', casesController.getCaseById);

    return router;
  }

}