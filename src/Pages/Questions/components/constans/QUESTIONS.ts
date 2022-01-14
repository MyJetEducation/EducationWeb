export const QUESTIONS = [
  {
    title: "Уровень вашего дохода",
    answer: {
      type: "radio",
      name: "salary",
      additional: true,
      data: [
        {
          id: 1,
          label: "менее $40 000 в год",
          value: "q1"
        },
        {
          id: 2,
          label: "$40 000 - $100 000",
          value: "q2"
        },
        {
          id: 3,
          label: "$100 000 - $500 000",
          value: "q3"
        },
        {
          id: 4,
          label: "более $500 000 в год",
          value: "q4"
        },
      ]
    }
  },
  {
    title: "Ваш идеальный уровень прибыли в год через 5 лет",
    answer: {
      type: "range"
    }
  },
  {
    title: "Ваш идеальный уровень прибыли в год через 5 лет",
    answer: {
      type: "radio",
      data: [
        {
          id: 1,
          label: "менее $40 000 в год",
          value: "q1"
        },
        {
          id: 2,
          label: "$40 000 - $100 000",
          value: "q2"
        },
        {
          id: 3,
          label: "$100 000 - $500 000",
          value: "q3"
        },
        {
          id: 4,
          label: "более $500 000 в год",
          value: "q4"
        }
      ]
    }
  },
  {
    title: "Ваш пол",
    answer: {
      type: "radio",
      name: "sex",
      data: [
        {
          id: 1,
          label: "женский",
          value: "female"
        },
        {
          id: 2,
          label: "мужской",
          value: "male"
        },
        {
          id: 3,
          label: "не определился",
          value: "other"
        },
      ]
    }
  },
  {
    title: "Какое у вас образование?",
    answer: {
      type: "checkbox",
      name: "education",
      data: [
        {
          id: 1,
          label: "наконец-то мои деньги пришли, я могу потратить их на все что хочу",
          value: "q1"
        },
        {
          id: 2,
          label: "деньги нужны на еду, оплатить коммунальные услуги, куплю себе что-нибудь",
          value: "q2"
        },
        {
          id: 3,
          label: "еще больше денег будет в моих накоплениях",
          value: "q3"
        },
        {
          id: 4,
          label: "наконец-то смогу заплатить по долгам",
          value: "q4"
        }
      ]
    }
  },
]