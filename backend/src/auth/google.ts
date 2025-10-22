import passport from 'passport';
import { Strategy as GoogleStrategy, Profile } from 'passport-google-oauth20';
import { env } from '../config/env';
import { User } from '../models/User';

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: env.googleClientId,
      clientSecret: env.googleClientSecret,
      callbackURL: env.googleCallbackUrl,
    },
    async (_accessToken: string, _refreshToken: string, profile: Profile, done) => {
      try {
        const email = profile.emails && profile.emails[0]?.value;
        if (!email) return done(new Error('No email from Google'));
        const names = profile.displayName?.split(' ') || [];
        const firstName = names[0] || 'User';
        const lastName = names.slice(1).join(' ') || 'Google';

        let user = await User.findOne({ email });
        if (!user) {
          user = await User.create({
            firstName,
            lastName,
            email,
            role: 'patient',
            googleId: profile.id,
          });
        } else if (!user.googleId) {
          user.googleId = profile.id;
          await user.save();
        }

        return done(null, user);
      } catch (e) {
        return done(e as any);
      }
    }
  )
);

export default passport;



