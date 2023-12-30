import { z } from "zod";
export const foodSchema = z.object({
  name: z.string().min(3),
  imgSrc: z.string(),
  stock: z.number(),
  description: z.string().min(3),
  category: z.string().min(3),
  brand: z.string().min(3),
  origin: z.string().min(3),
});

export const foodUpdateSchema = z.object({
  name: z.string().min(3).optional(),
  imgSrc: z.string().optional(),
  stock: z.number().optional(),
  description: z.string().min(3).optional(),
  category: z.string().min(3).optional(),
  brand: z.string().min(3).optional(),
  origin: z.string().min(3).optional(),
});
