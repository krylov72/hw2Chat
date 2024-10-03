function howMuchILoveYou(nbPetals) {
  const phrases = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  const index = (nbPetals - 1) % phrases.length;
  return phrases[index];
}

console.log(howMuchILoveYou(7));
