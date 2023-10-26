import { z } from 'zod';

export const sendEmailFormSchema = z.object({
	name: z.string().min(3, 'please provide at least 3 characters'),
	subject: z.string().min(4, 'please provide at least 4 characters'),
	email: z.string().email('please provide correct email'),
	message: z.string().min(10, 'please provide at least 10 characters')
});
