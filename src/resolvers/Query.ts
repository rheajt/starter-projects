import { sign } from 'jsonwebtoken';
import { Context } from 'graphql-yoga/dist/types';

export default {
  requestToken(_: null, { id }, ctx: Context) {
    const token = sign({ id }, process.env.APP_SECRET);

    return {
      token,
    };
  },
  makeRequest(_: null, args: any, ctx: any) {
    console.log(ctx.request.isAuth);

    return !!ctx.request.isAuth;
  },
  hello: (_: null, { name }, ctx: Context) => {
    const returnValue = `Hello ${name || 'World!'}`;
    return returnValue;
  },
};
