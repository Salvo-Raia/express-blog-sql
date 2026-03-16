const connection = require("../data/db_recipes");
const recipes = require("../data/recipes");

function index(req, res) {
  // Questo console log simula un errore per testare errorHandlerMiddleware.
  // console.log(simulazioneErrore);

  let filteredRecipes = recipes;
  const tagsSearchFilter = req.query.search;

  if (tagsSearchFilter) {
    const lowCaseSearchFilter = tagsSearchFilter.toLowerCase().trim();
    filteredRecipes = recipes.filter((recipe) =>
      recipe.tags.some((tag) =>
        tag.toLowerCase().includes(lowCaseSearchFilter),
      ),
    );
  }
  const responseData = {
    message: "Index of all posts",
    result: filteredRecipes,
    success: true,
  };

  res.status(200).json(responseData);
}

function show(req, res) {
  const postId = parseInt(req.params.id);
  const recipe = recipes.find((recipe) => recipe.id === postId);

  if (!recipe) {
    const responseData = {
      message: `Recipe ${postId} not found`,
      success: false,
    };

    return res.status(404).json(responseData);
  }

  const responseData = {
    message: `Post ${postId} detail content`,
    result: recipe,
    success: true,
  };

  res.status(200).json(responseData);
}

function store(req, res) {
  const { title, content, image, tags } = req.body;
  const newPostId = recipes[recipes.length - 1].id + 1;
  const newPost = {
    id: newPostId,
    title,
    content,
    image,
    tags,
  };

  recipes.push(newPost);

  const responseData = {
    message: `Post successfully created`,
    result: newPost,
    success: true,
  };

  res.status(201).json(responseData);
  console.log(newPost);
}

function update(req, res) {
  const postId = parseInt(req.params.id);
  const recipe = recipes.find((recipe) => recipe.id === postId);

  if (!recipe) {
    const responseData = {
      message: `Recipe ${postId} not found`,
      success: false,
    };

    return res.status(404).json(responseData);
  }

  recipe.title = req.body.title;
  recipe.content = req.body.content;
  recipe.image = req.body.image;
  recipe.tags = req.body.tags;

  const responseData = {
    message: `Post ${postId} successfully updated`,
    result: recipe,
    success: true,
  };

  res.status(200).json(responseData);
  console.log(recipe);
}

function modify(req, res) {
  const postId = parseInt(req.params.id);
  const recipe = recipes.find((recipe) => recipe.id === postId);

  if (!recipe) {
    const responseData = {
      message: `Recipe ${postId} not found`,
      success: false,
    };
    return res.status(404).json(responseData);
  }

  if (title) recipe.title = req.body.title;
  if (content) recipe.content = req.body.content;
  if (image) recipe.image = req.body.image;
  if (tags) recipe.tags = req.body.tags;

  const responseData = {
    message: `Post ${postId} partial update`,
    result: recipe,
    success: true,
  };

  res.json(responseData);
}

function destroy(req, res) {
  const postId = parseInt(req.params.id);
  const recipe = recipes.find((recipe) => recipe.id === postId);

  if (!recipe) {
    const responseData = {
      message: `Recipe ${postId} not found`,
      success: false,
    };

    return res.status(404).json(responseData);
  }

  recipes.splice(recipes.indexOf(recipe), 1);
  console.log(
    `Post ${postId} successfully deleted. Here you can find the updated posts list:`,
    recipes,
  );
  res.sendStatus(204);
}
module.exports = { index, show, store, update, modify, destroy };
