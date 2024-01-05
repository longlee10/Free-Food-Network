import { z } from "zod";
export const foodSchema = z.object({
  name: z.string().min(3),
  imgSrc: z.string().min(3),
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

export const userRegistrationSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
});

export const userUpdateSchema = z.object({
  name: z.string().min(3).optional(),
  email: z.string().email().optional(),
  password: z.string().min(8).optional(),
});
