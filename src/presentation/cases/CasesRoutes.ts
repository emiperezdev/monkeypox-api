import { Router } from "express";
import { CasesController } from "./CasesController";
import validateBody from "../../middleware/validateBody";
import { casesSchema } from "../../domain/schemas.joi";

export class CasesRoutes {
  static get routes(): Router {
    const router = Router();
    const casesController = new CasesController();

    router.get('', casesController.getCases);
    router.get('/:id', casesController.getCaseById);
    router.post('', validateBody(casesSchema), casesController.saveCase); 
    router.put('/:id', validateBody(casesSchema), casesController.updateCaseById);
    router.delete('/:id', casesController.deleteCaseById);

    return router;
  }
}
