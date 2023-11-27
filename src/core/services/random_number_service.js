export const randomNumberService = (maxNumber) => {
    const random = Math.floor(Math.random() * maxNumber);
    return random;
}
