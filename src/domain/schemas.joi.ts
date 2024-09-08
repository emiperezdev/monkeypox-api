import Joi from "joi";

export const casesSchema = Joi.object({
  genre: Joi.string().valid('Masculino', 'Femenino', 'No binario').required(),
  age: Joi.number().min(0).max(120).required(),
  lat: Joi.number().min(-90).max(90).required(),  
  lng: Joi.number().min(-180).max(180).required(), 
});