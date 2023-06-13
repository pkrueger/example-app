export default defineEventHandler(async (event) => {
  const number = Math.floor(Math.random() * 100) + 1;

  return number;
});
