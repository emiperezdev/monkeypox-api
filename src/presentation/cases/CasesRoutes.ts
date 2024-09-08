import { Router } from "express";
import { CasesController } from "./CasesController";
import validateBody from "../../middleware/validateBody";
import { casesSchema } from "../../domain/schemas.joi";
import validateId from "../../middleware/validateId";

export class CasesRoutes {
  static get routes(): Router {
    const router = Router();
    const casesController = new CasesController();

    router.get('', casesController.getCases);
    router.get('/:id', validateId, casesController.getCaseById);
    router.post('', validateBody(casesSchema), casesController.saveCase); 
    router.put('/:id', validateId, validateBody(casesSchema), casesController.updateCaseById);
    router.delete('/:id', validateId, casesController.deleteCaseById);

    return router;
  }
}
