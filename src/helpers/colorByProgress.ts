export const colorByProgress = (progress: number) => {
  if (progress > 80) {
    return '#0BCA1E';
  }
  if (progress > 60 && progress < 80) {
    return '#E3931B';
  }
  if (progress > 0 && progress < 60) {
    return '#F50537';
  }
 
  return '#000';
};
