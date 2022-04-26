import Page from '../../routing/Pages';
import { OBTurType } from '../../types/OnbordingType';

const OnboardingTurData: OBTurType[] = [
  {
    id: 1,
    text: 'Profile. All information about you',
    element: 'hint_1',
    position: {
      top: '80px',
      right: '20px',
    },

    showNext: true,
    actionElement: false,
    pushPage: '',
  },
  {
    id: 2,
    text: 'Your statuses and achievements',
    element: 'hint_2',
    position: {
      top: '650px',
      right: '20px',
    },

    showNext: true,
    actionElement: false,
    pushPage: '',
  },
  {
    id: 3,
    text: 'How much new have you learned - your progress',
    element: 'hint_3',
    position: {
      top: '460px',
      right: '20px',
    },

    showNext: true,
    actionElement: false,
    pushPage: '',
  },
  {
    id: 4,
    text: "Here you'll see your education materials",
    element: 'hint_4',
    position: {
      top: '400px',
      right: '20px',
    },

    showNext: true,
    actionElement: false,
    pushPage: '',
  },
  {
    id: 5,
    text: 'We have credited you with money that you can use inside the service',
    element: 'hint_5',
    position: {
      top: '90px',
      right: '20px',
    },

    showNext: true,
    actionElement: false,
    pushPage: '',
  },
  {
    id: 6,
    text: "Let's make our first purchase. It's free",
    element: 'hint_6',
    targetElement: 'hint_6',
    position: {
      top: '90px',
      right: '20px',
    },

    showNext: false,
    actionElement: true,
    pushPage: Page.INNER.MARKET,
  },
  {
    id: 7,
    text: "Let's make our first purchase. It's free",
    element: 'hint_7',
    targetElement: 'market-buy-button',
    position: {
      top: '280px',
      left: '270px',
    },
    showNext: false,
    actionElement: true,
    pushPage: '',
  },
  {
    id: 8,
    text: 'Congratulation!',
    element: 'hint_8',
    position: {
      top: '280px',
      left: '270px',
    },
    showNext: false,
    actionElement: true,
    pushPage: '',
  },
  {
    id: 9,
    text: 'This button takes you back to the tutorial.',
    element: 'hint_9',
    targetElement: 'hint_9',
    position: {
      top: '110px',
      left: '270px',
    },
    showNext: false,
    actionElement: true,
    pushPage: Page.DASHBOARD,
  },
];

Object.freeze(OnboardingTurData);
export default OnboardingTurData;
