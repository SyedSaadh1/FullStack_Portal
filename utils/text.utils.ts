export const capitalize = (str = ""): string => {
  const [firstLetter, ...remainingLetters] = (str || "").split("")
  return (firstLetter || "").toUpperCase() + (remainingLetters.join("")).toLowerCase()
}