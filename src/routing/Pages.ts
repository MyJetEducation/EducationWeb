const Page = {
  HOME: '/',

  PUBLIC: {
    ABOUT_US: '/about-us',
    MISSION: '/mission',
    WHY_US: '/why-us',
    LESSONS: '/lessons',
    FAQ: '/faq',
  },

  INNER: {
    TOOL: '/tools',
    NOTES: '/notes',
    MARKET: '/market',
  },

  ACCOUNT: {
    PROFILE: '/profile',
    ACHIEMENTS: '/profile/achievements',
    SETTINGS: '/account-settings',
    PAYMENTS: '/payments',
    REFERRALS: '/referrals',
  },

  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  REGISTER_CONFIRM: '/register-confirm',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/password-recovery',

  ONBOARDING: '/onboarding',

  DASHBOARD: '/dashboard',

  NOT_FOUND: '/404',
};

Object.freeze(Page);

export default Page;
