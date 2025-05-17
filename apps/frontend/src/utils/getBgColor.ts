export const getHexColor = (): string => {
  const bgArr = [
    "#b73e3e",
    "#5b45b0",
    "#7f167f",
    "#735f32",
    "#1d2569",
    "#285430",
    "#FFA500",
  ];

  const randomColor = Math.floor(Math.random() * bgArr.length);
  return bgArr[randomColor];
};
