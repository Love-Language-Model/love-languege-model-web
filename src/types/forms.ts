import { z } from 'zod';

export const profileSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  birthDate: z.string().nullable().optional(),
  gender: z.string().nullable().optional(),
  about: z.string().max(500, 'About must be less than 500 characters').nullable().optional(),
  residenceLocation: z.string().max(100, 'Residence location must be less than 100 characters').nullable().optional(),
  birthLocation: z.string().max(100, 'Birth location must be less than 100 characters').nullable().optional(),
  imageUrl: z.string().url('Invalid URL format').nullable().optional(),
});

export type ProfileFormData = z.infer<typeof profileSchema>;
