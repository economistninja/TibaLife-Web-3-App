import express from 'express';
import session from 'express-session';
import cors from 'cors';
import { env, assertEnv } from './config/env';
import { connectMongo } from './config/mongo';
import passport from './auth/google';
import authRoutes from './routes/auth';

async function bootstrap() {
  assertEnv();
  await connectMongo();

  const app = express();
  app.use(express.json());
  app.use(
    cors({
      origin: env.corsOrigins,
      credentials: true,
    })
  );

  app.use(
    session({
      secret: env.jwtSecret,
      resave: false,
      saveUninitialized: false,
      cookie: { secure: false },
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.get('/health', (_req, res) => res.json({ ok: true }));
  app.use('/auth', authRoutes);

  app.listen(env.port, () => {
    console.log(`TibaLife backend listening on http://localhost:${env.port}`);
  });
}

bootstrap().catch((err) => {
  console.error('Failed to start server', err);
  process.exit(1);
});




