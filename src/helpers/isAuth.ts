import { verify } from 'jsonwebtoken';

export const isAuth = (req, _, next) => {
  const auth = req.headers.authorization;
  if (!auth) {
    req.isAuth = false;
    return next();
  }

  const [bearer, token] = auth.split(' ');
  if (bearer !== 'Bearer') {
    req.isAuth = false;
    return next();
  }

  const verified = <{ id: string }>verify(token, process.env.APP_SECRET);
  if (verified.id !== '1234') {
    req.isAuth = false;
    return next();
  }

  req.isAuth = true;
  next();
};
