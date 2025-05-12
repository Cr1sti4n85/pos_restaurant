export const getBgColor = (): string => {
  const bgarr: string[] = [
    "bg-yellow-500",
    "bg-blue-600",
    "bg-red-600",
    "bg-green-500",
  ];
  const color = bgarr[Math.floor(Math.random() * bgarr.length)];

  return color;
};
