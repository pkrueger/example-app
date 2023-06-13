export default defineEventHandler(async (event) => {
  const number = event.context.params?.number;
  if (!number) {
    throw createError({ statusCode: 400, message: "Missing number" });
  }

  const multipliedByTwo = Number(number) * 2;

  return multipliedByTwo;
});
