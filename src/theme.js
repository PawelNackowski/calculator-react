const colorName = {
  alto: "#DEDEDE",
  lightGray: "#f2f2f2",
  silver: "#ABABAB",
  mineShaft: " #3D3D3D",
  darkGray: "#141414",
};

export const light = {
  colors: {
    background: colorName.silver,
    body: colorName.alto,
    text: colorName.mineShaft,
  },
  modeButton: {
    background: colorName.mineShaft,
    text: colorName.alto,
  },
};

export const dark = {
  colors: {
    background: colorName.mineShaft,
    body: colorName.darkGray,
    text: colorName.alto,
  },
  modeButton: {
    background: colorName.alto,
    text: colorName.mineShaft,
  }
};
