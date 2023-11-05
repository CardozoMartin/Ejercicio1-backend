import Joi from 'joi';

export const post_taskSchemaPost = Joi.object({
  titletask: Joi.string().trim().min(5).max(50).required().messages({
    'string.min': 'El titulo debe tener mas de 5 caracteres',
    'string.max': 'El titulo debe tener, como maximo, 50 caracteres',
    'any.required': 'El titulo es requerido',
    '*': 'Revisa el campo titulo',
  }),
  subtitletask: Joi.string().trim().min(5).max(100).required().messages({
    'string.min': 'El sub-titulo debe tener mas de 5 caracteres',
    'string.max': 'El sub-titulo debe tener, como maximo, 100 caracteres',
    'any.required': 'El sub-titulo es requerido',
    '*': 'Revisa el campo sub-titulo',
  }),
  descriptiontask: Joi.string().trim().min(20).required().messages({
    'string.min': 'La descripcion debe tener mas de 20 caracteres',
    'any.required': 'La descripcion descripcion es requerido',
    '*': 'Revisa el campo descripcion',
  })
});
