export const similarResult = (user: any, comp: any) => {
  return Object.entries(user).reduce((acc: any, item) => {
    if ( comp[item[0] as keyof typeof user] === item[1] ) {
      acc[item[0]] = true
    } else {
      acc[item[0]] = false
    }
    return acc
  }, {})
}



export const checkAnswers = (obj: any): number => {
  const values = Object.values(obj);
  const length = values.length;
  const oneAnswer = 100 / length;
  const sumPercent = values.reduce((acc: any, item) => {
    if (item) {
      acc += oneAnswer
    }
    return acc;
  }, 0)
  return sumPercent as number;
}