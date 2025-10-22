import { Router } from 'express';
import passport from 'passport';
import { signJwt } from '../middleware/auth';

const router = Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/google/failure', session: false }),
  (req: any, res) => {
    const user = req.user;
    const token = signJwt({ id: user.id, role: user.role, email: user.email });
    res.redirect(`/auth/success?token=${token}`);
  }
);

router.get('/google/failure', (_req, res) => res.status(401).json({ error: 'Google auth failed' }));

export default router;




