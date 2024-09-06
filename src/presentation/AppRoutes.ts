import { Router } from "express";
import { CasesRoutes } from "./cases/CasesRoutes";

export class AppRoutes {

  static get routes() : Router {
    const router = Router();
    router.use("/api/cases", CasesRoutes.routes);

    return router;
  }
}