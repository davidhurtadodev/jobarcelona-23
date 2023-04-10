const baseUrl = 'https://api.spoonacular.com/recipes/complexSearch?';

const getData = async (query: string) => {
  try {
    const response = await fetch(
      `${baseUrl}apiKey=${process.env.NEXT_PUBLIC_API_KEY}&query=${query}&addRecipeInformation=true&number=20`
    );

    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData;
  } catch (err) {
    console.error(err);
  }
};

export default { getData };
