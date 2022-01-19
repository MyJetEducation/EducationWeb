import textIcon from "../assets/textIcon.png";
import testIcon from "../assets/testIcon.png";
import videoICon from "../assets/videoIcon.png";

const text = `
First of all we dream. But dreams don’t come true. Why is that so? 

Because after you understand what you dream about - you need to set a goal. Setting goals is the first and the most important step to financial success. Without goals, you aren’t able to track progress and celebrate milestones. When forming goals, it’s important to make them “S.M.A.R.T” goals: specific, measurable, achievable, relevant and time-bound. 

Here are a few examples of SMART financial goals: 

  –  Buy a new car for $25,000 in 7 months         
  –  Make $10,000 from a rental property in one year              
  –  Increase savings by $30,000 this year 

You can see how all of these follow our S.M.A.R.T goal guidelines. Each goal is measurable and time-bound, making it easy to keep track and hold you accountable to a deadline. They are also specific and relevant to financial success and not impossible to achieve. These examples are much more powerful than vague goals such as “pay off debt soon” or “make more money.”

This financial habit is also scalable and can be done at various points throughout your year. For example, you can create a weekly goal of adding at least $10 to an investment account or a goal that states you will invest at least $500 into your retirement savings each month. 

It’s also important to make sure that you are setting both short-term and long-term financial goals. By having both, you’ll stay motivated while focused on working towards your financial future.

`;

const videoText = `
#### Text video

This financial habit is also scalable and can be done at various points throughout your year. For example, you can create a weekly goal of adding at least $10 to an investment account or a goal that states you will invest at least $500 into your retirement savings each month. 

As you can see, financial goals can be big or small — what matters is forming this habit as soon as you can so you can hold yourself accountable towards your success!

`;

const caseText = `
  ### #1 SMART technology for the sales department:
  
  ## In 6 months, increase the number of contracts concluded with new customers by 20% due to the implementation of sales scripts."
  
  Let's check:
  
  
  S (specific)   –  work is carried out with the sales department;
  
  М (measurable) –  20% of the total number of new customers;
  
  А (achievable) –  scripts are ready. Need to train employees;
  
  R (relevant)   –  increasing the company's profits;
  
  Т (time-bound) –  deadline set

`


export const ARRAY = [
  {
    id: "1",
    type: "1.1 Text:",
    title: "Your goal by S.M.A.R.T. and life cases",
    icon: textIcon,
    time: "~1 min",
    valid: false
  },
  {
    id: "2",
    type: "1.2 Test: ",
    title: "What is S.M.A.R.T.",
    icon: testIcon,
    time: "~2 min",
    valid: false
  },
  {
    id: "3",
    type: "1.3 Video: ",
    title: "How to be successful?",
    icon: videoICon,
    time: "~5 min",
    valid: false
  },
  {
    id: "4",
    type: "1.4 Case: ",
    title: "#1 SMART technology",
    icon: testIcon,
    time: "~5 min",
    valid: false
  },
  {
    id: "5",
    type: "1.5 Test: ",
    title: "Let’s help Amanda",
    icon: testIcon,
    time: "~5 min",
    valid: false
  },
  {
    id: "6",
    type: "1.6 Game: ",
    title: "Match a pair",
    icon: testIcon,
    time: "~5 min",
    valid: false
  }
];

export const ARRAY_2 = {
  "1": {
    id: 1,
    title: "1.1 Text: Your goal by S.M.A.R.T. and life cases",
    description: {
      type: "text",
      data: [
        {
          html_text: text
        }
      ]
    }

  },
  "2": {
    id: 2,
    title: "1.2 Test: What is S.M.A.R.T.",
    description: {
      type: "test",
      data: [
        {
          id: 1,
          title: "Smart Goal is:",
          answer: [
            {
              id: "1answer1",
              param: false,
              name: "1q",
              textAnswer: "My idea, that I keep in my mind and dream about every day",
              value: "q1"
            },
            {
              id: "1answer2",
              param: true,
              name: "1q",
              textAnswer: "My goal, that is measurable and achievable and costs less than $10,000",
              value: "q2"
            },
            {
              id: "1answer3",
              param: false,
              name: "1q",
              textAnswer: "My goal is specific, measurable, achievable, relevant and \n" +
                "time-bound.",
              value: "q3"
            }
          ]
        },
        {
          id: 2,
          title: "What does the \"M\" in SMART stand for?",
          answer: [
            {
              id: "2answer1",
              param: false,
              name: "2q",
              textAnswer: "Mental - you have to be able to think about the goal.",
              value: "q1"
            },
            {
              id: "2answer2",
              param: true,
              name: "2q",
              textAnswer: "Measurable - a goal must have some kind of number attached so you have a way to know if you are reaching the goal.",
              value: "q2"
            },
            {
              id: "2answer3",
              param: false,
              name: "2q",
              textAnswer: "Memorable - a goal must be easily remembered",
              value: "q3"
            }
          ]
        },
        {
          id: 3,
          title: "What does the \"S\" in SMART stand for?",
          answer: [
            {
              id: "3answer1",
              param: false,
              name: "3q",
              textAnswer: "Simple - a goal must be easy.",
              value: "q1"
            },
            {
              id: "3answer2",
              param: true,
              name: "3q",
              textAnswer: "Smart- a goal must make sense.",
              value: "q2"
            },
            {
              id: "3answer3",
              param: false,
              name: "3q",
              textAnswer: "Specific - a goal must be focused.",
              value: "q3"
            }
          ]
        },
        {
          id: 4,
          title: "If you decide to spend holidays at the resort, what to consider when planning with S.M.A.R.T. rules? ",
          answer: [
            {
              id: "4answer1",
              param: false,
              name: "4q",
              textAnswer: "What kind of clothes do I need to take with me?",
              value: "q1"
            },
            {
              id: "4answer2",
              param: true,
              name: "4q",
              textAnswer: "When the holiday is, how much money I am planning to spend, and how much money I have now",
              value: "q2"
            },
          ]
        },
        {
          id: 5,
          title: "When I decide to buy new furniture what my SMART steps are?",
          answer: [
            {
              id: "5answer1",
              param: false,
              name: "5q",
              textAnswer: "I choose colours, shapes and amount of things that I want to buy",
              value: "q1"
            },
            {
              id: "5answer2",
              param: true,
              name: "5q",
              textAnswer: "I decide how much I need to spend on what I want, how much money I have now and when I can afford this furniture without credits.",
              value: "q2"
            },
            {
              id: "5answer3",
              param: false,
              name: "5q",
              textAnswer: "I decide if I really need it now, what it will bring to my life, I find furniture that I want and learn the price on the market, I count the amount of money that I have now and in how many months I can afford this furniture.",
              value: "q3"
            }
          ]
        }
      ],
    }
  },
  "3": {
    id: 3,
    title: "1.3 Video: How to be successful?",
    description: {
      type: "video",
      data: [
        {
          url_video: "https://youtu.be/q5JWp47z4bY",
          html_text: videoText
        }
      ]
    }
  },
  "4": {
    id: 4,
    title: "1.4 Case: #1 SMART technology",
    description: {
      type: "case",
      data: [
        {
          id: 1,
          html_text: caseText,
          title: "Do you think it will help to attain goal easier?",
          answer: [
            {
              id: 1,
              name: "boolean",
              param: false,
              textAnswer: "Yes, it will help"
            },
            {
              id: 2,
              name: "boolean",
              param: true,
              textAnswer: "I am not ready to agree"
            }
          ]
        }
      ],
    }
  },
  "5": {
    id: 5,
    title: "1.5 Test: Let’s help Amanda",
    description: {
      type: "testTrueOrFalse",
      data: [
        {
          id: 1,
          title: "Amanda will spend $25 less on entertainment every month in order to save that $25 instead. This is a time-bound SMART goal. ",
          answer: [

            {
              id: "1answer1",
              param: false,
              name: "1q",
              value: "q1",
              textAnswer: "True"
            },
            {
              id: "1answer2",
              param: true,
              name: "1q",
              value: "q2",
              textAnswer: "False"
            }
          ]
        },
        {
          id: 2,
          title: "Amanda will buy a new camera in a year by saving $50 after every salary. This is a measurable SMART goal.",
          answer: [
            {
              id: "2answer1",
              name: "q2",
              param: false,
              value: "q1",
              textAnswer: "True"
            },
            {
              id: "2answer2",
              name: "q2",
              param: true,
              value: "q2",
              textAnswer: "False"
            },
          ]
        },
        {
          id: 3,
          title: "Amanda says that her company will cut her salary. This is SMART information.",
          answer: [
            {
              id: "3answer1",
              name: "q3",
              param: false,
              value: "q1",
              textAnswer: "True"
            },
            {
              id: "3answer2",
              name: "q3",
              param: true,
              value: "q2",
              textAnswer: "False"
            },
          ]
        },
        {
          id: 4,
          title: "Amanda goes to the ice cream store every Sunday. She spends 25$ every month. This is a time-bound SMART spending.",
          answer: [
            {
              id: "4answer1",
              name: "q4",
              param: false,
              value: "q1",
              textAnswer: "True"
            },
            {
              id: "4answer2",
              name: "q4",
              param: true,
              value: "q2",
              textAnswer: "False"
            },
          ]
        },
        {
          id: 5,
          title: "Amanda plays tennis every weekend and it costs 50$ per one time. She doesn’t need to plan her spendings because it’s not a big sum.",
          answer: [
            {
              id: "5answer1",
              name: "q5",
              param: false,
              value: "q1",
              textAnswer: "True"
            },
            {
              id: "5answer2",
              name: "q5",
              param: true,
              value: "q1",
              textAnswer: "False"
            },
          ]
        }
      ],
    }
  },
  "6": {
    id: 6,
    title: "1.6 Game: Match a pair",
    description: {
      type: "game",
      data: [
        {
          id: 1,
          title: "First",
          pair: "1",
          show: false
        },
        {
          id: 2,
          title: "First",
          pair: "1",
          show: false
        },
        {
          id: 3,
          title: "Second",
          pair: "1",
          show: false
        },
        {
          id: 4,
          title: "Second",
          pair: "1",
          show: false
        },
        {
          id: 5,
          title: "Third",
          pair: "1",
          show: false
        },
        {
          id: 6,
          title: "Third",
          pair: "1",
          show: false
        },
      ],
    }
  }
};

export const ARRAY_ANSWERS = {
  "1q": "q2",
  "2q": "q2",
  "3q": "q2",
  "4q": "q2",
  "5q": "q2"
}

export const ARRAY_ANSWERS2 = {
  "1q": "q1",
  "2q": "q2",
  "3q": "q1",
  "4q": "q1",
  "5q": "q1"
}




