import { z } from 'zod';
import { createTRPCRouter, publicProcedure, protectedProcedure } from '../init';

export const userRouter = createTRPCRouter({
  getUserById: publicProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(({ input }) => {
      return { id: input.id, name: 'Jane Doe', email: 'jane@example.com' };
    }),

  updateProfile: protectedProcedure
    .input(
      z.object({
        name: z.string().min(2, 'Name must be at least 2 characters long'),
      })
    )
    .mutation(({ input, ctx }) => {
      // ctx.user is strongly typed and guaranteed present here
      return {
        success: true,
        userId: ctx.user.id,
        newName: input.name,
      };
    }),
});