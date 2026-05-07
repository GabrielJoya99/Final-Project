/**
 * Saveur – Recipe Discovery App
 * script.js — All interactivity, data, and UI logic
 */

'use strict';

/* ═══════════════════════════════════════════════════════
   RECIPE DATABASE
   Simulates an API data source. Each entry maps to the
   HTML modal fields and recipe-card template.
═══════════════════════════════════════════════════════ */
const RECIPE_DB = [
  {
    id: 'r01',
    title: 'Classic Spaghetti Aglio e Olio',
    emoji: '🍝',
    description: 'A deceptively simple Italian classic — silky pasta coated in golden garlic-infused olive oil, finished with chilli flakes and fresh parsley.',
    tags: ['italian', 'vegetarian'],
    time: 20,
    servings: 4,
    calories: 480,
    ingredients: [
      { name: 'spaghetti', amount: 400, unit: 'g' },
      { name: 'garlic', amount: 6, unit: 'cloves' },
      { name: 'olive oil', amount: 80, unit: 'ml' },
      { name: 'chilli flakes', amount: 1, unit: 'tsp' },
      { name: 'parsley', amount: 30, unit: 'g' },
      { name: 'parmesan', amount: 50, unit: 'g' },
      { name: 'salt', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Bring a large pot of salted water to a boil. Cook spaghetti until al dente, reserving 1 cup of pasta water before draining.',
      'While pasta cooks, thinly slice garlic. Gently heat olive oil in a wide pan over medium-low, add garlic and cook 4–5 minutes until golden, not brown.',
      'Add chilli flakes and stir for 30 seconds. Pour in a splash of pasta water to emulsify the sauce.',
      'Toss drained pasta into the pan over medium heat, adding pasta water gradually until glossy and coated.',
      'Remove from heat, fold in parsley and half the parmesan. Season to taste and serve immediately with remaining parmesan.',
    ],
    nutrition: { calories: 480, protein: 14, carbs: 68, fat: 18, fibre: 3 },
    keywords: ['pasta', 'garlic', 'italian', 'quick', 'spaghetti'],
  },
  {
    id: 'r02',
    title: 'Shakshuka',
    emoji: '🍳',
    description: 'Poached eggs in a vibrant, spiced tomato and pepper sauce. A one-pan wonder that works for breakfast, brunch, or dinner.',
    tags: ['vegetarian', 'mediterranean', 'gluten-free'],
    time: 35,
    servings: 4,
    calories: 290,
    ingredients: [
      { name: 'eggs', amount: 6, unit: '' },
      { name: 'tomatoes', amount: 400, unit: 'g' },
      { name: 'onion', amount: 1, unit: 'large' },
      { name: 'garlic', amount: 3, unit: 'cloves' },
      { name: 'red pepper', amount: 1, unit: '' },
      { name: 'cumin', amount: 1, unit: 'tsp' },
      { name: 'paprika', amount: 1, unit: 'tsp' },
      { name: 'olive oil', amount: 2, unit: 'tbsp' },
      { name: 'feta', amount: 80, unit: 'g' },
    ],
    steps: [
      'Heat olive oil in a wide oven-safe skillet. Sauté diced onion and pepper over medium heat for 8 minutes until soft.',
      'Add minced garlic, cumin, and paprika; cook 1 minute until fragrant.',
      'Pour in tomatoes, season with salt and pepper, and simmer 10 minutes until sauce thickens.',
      'Use a spoon to make wells in the sauce and crack an egg into each. Cover and cook 5–7 minutes until whites are set but yolks still runny.',
      'Crumble feta over the top and serve straight from the pan with crusty bread.',
    ],
    nutrition: { calories: 290, protein: 18, carbs: 14, fat: 17, fibre: 4 },
    keywords: ['eggs', 'tomato', 'breakfast', 'brunch', 'mediterranean'],
  },
  {
    id: 'r03',
    title: 'Thai Basil Chicken (Pad Krapow Gai)',
    emoji: '🍜',
    description: 'A beloved Thai street-food staple — minced chicken stir-fried with holy basil, fish sauce, and oyster sauce. Ready in 15 minutes.',
    tags: ['asian', 'quick'],
    time: 15,
    servings: 2,
    calories: 420,
    ingredients: [
      { name: 'chicken mince', amount: 400, unit: 'g' },
      { name: 'garlic', amount: 4, unit: 'cloves' },
      { name: 'chilli', amount: 2, unit: '' },
      { name: 'basil', amount: 1, unit: 'handful' },
      { name: 'fish sauce', amount: 2, unit: 'tbsp' },
      { name: 'oyster sauce', amount: 1, unit: 'tbsp' },
      { name: 'soy sauce', amount: 1, unit: 'tbsp' },
      { name: 'vegetable oil', amount: 2, unit: 'tbsp' },
      { name: 'jasmine rice', amount: 200, unit: 'g' },
    ],
    steps: [
      'Cook jasmine rice according to packet instructions. Keep warm.',
      'Pound garlic and chilli together in a mortar to a rough paste.',
      'Heat oil in a wok over high heat until smoking. Add garlic-chilli paste and stir-fry 30 seconds.',
      'Add chicken mince and stir-fry, breaking up lumps, for 3–4 minutes until cooked through.',
      'Add fish sauce, oyster sauce, and soy sauce. Toss to coat, then remove from heat and fold in basil until just wilted.',
      'Serve over rice, topped with a fried egg if desired.',
    ],
    nutrition: { calories: 420, protein: 36, carbs: 38, fat: 14, fibre: 1 },
    keywords: ['chicken', 'thai', 'stir fry', 'quick', 'spicy', 'asian'],
  },
  {
    id: 'r04',
    title: 'Lemon Butter Baked Salmon',
    emoji: '🐟',
    description: 'Flaky oven-baked salmon with a zingy lemon-butter glaze. Elegant enough for guests, easy enough for a weeknight.',
    tags: ['gluten-free', 'quick'],
    time: 25,
    servings: 4,
    calories: 380,
    ingredients: [
      { name: 'salmon fillets', amount: 4, unit: '' },
      { name: 'lemon', amount: 2, unit: '' },
      { name: 'butter', amount: 40, unit: 'g' },
      { name: 'garlic', amount: 2, unit: 'cloves' },
      { name: 'parsley', amount: 15, unit: 'g' },
      { name: 'olive oil', amount: 1, unit: 'tbsp' },
      { name: 'salt', amount: 1, unit: 'tsp' },
      { name: 'black pepper', amount: 0.5, unit: 'tsp' },
    ],
    steps: [
      'Preheat oven to 200 °C / 180 °C fan. Line a baking tray with parchment.',
      'Melt butter in a small saucepan with minced garlic over medium heat for 1 minute. Remove from heat and stir in lemon juice and zest.',
      'Place salmon fillets on the tray, season with salt and pepper, and spoon butter sauce over each fillet.',
      'Bake 12–15 minutes until salmon flakes easily with a fork.',
      'Garnish with fresh parsley and lemon slices. Serve with salad or steamed vegetables.',
    ],
    nutrition: { calories: 380, protein: 40, carbs: 2, fat: 23, fibre: 0 },
    keywords: ['salmon', 'fish', 'lemon', 'baked', 'quick', 'healthy'],
  },
  {
    id: 'r05',
    title: 'Black Bean & Sweet Potato Tacos',
    emoji: '🌮',
    description: 'Smoky roasted sweet potato and spiced black beans in warm tortillas, loaded with avocado and zesty lime crema.',
    tags: ['vegan', 'vegetarian', 'gluten-free'],
    time: 40,
    servings: 4,
    calories: 340,
    ingredients: [
      { name: 'sweet potato', amount: 500, unit: 'g' },
      { name: 'black beans', amount: 400, unit: 'g' },
      { name: 'avocado', amount: 2, unit: '' },
      { name: 'lime', amount: 2, unit: '' },
      { name: 'corn tortillas', amount: 8, unit: '' },
      { name: 'cumin', amount: 1.5, unit: 'tsp' },
      { name: 'smoked paprika', amount: 1, unit: 'tsp' },
      { name: 'olive oil', amount: 2, unit: 'tbsp' },
      { name: 'coriander', amount: 20, unit: 'g' },
    ],
    steps: [
      'Preheat oven to 220 °C. Peel and cube sweet potato, toss with olive oil, cumin, and smoked paprika. Roast 25 minutes until caramelised.',
      'Drain and rinse black beans, warm in a small pan with a pinch of cumin and salt.',
      'Mash avocado with lime juice and a pinch of salt for a quick guacamole.',
      'Char tortillas directly over a gas flame or in a dry skillet for 30 seconds each side.',
      'Assemble: spread guacamole on tortillas, top with sweet potato and beans, finish with coriander and a squeeze of lime.',
    ],
    nutrition: { calories: 340, protein: 11, carbs: 52, fat: 11, fibre: 12 },
    keywords: ['tacos', 'vegan', 'sweet potato', 'beans', 'mexican'],
  },
  {
    id: 'r06',
    title: 'Creamy Mushroom Risotto',
    emoji: '🍚',
    description: 'Luxuriously creamy Arborio rice slow-cooked with a medley of wild mushrooms, white wine, and aged parmesan.',
    tags: ['vegetarian', 'italian'],
    time: 55,
    servings: 4,
    calories: 520,
    ingredients: [
      { name: 'arborio rice', amount: 300, unit: 'g' },
      { name: 'mushrooms', amount: 400, unit: 'g' },
      { name: 'onion', amount: 1, unit: '' },
      { name: 'garlic', amount: 2, unit: 'cloves' },
      { name: 'white wine', amount: 150, unit: 'ml' },
      { name: 'vegetable stock', amount: 1200, unit: 'ml' },
      { name: 'parmesan', amount: 80, unit: 'g' },
      { name: 'butter', amount: 30, unit: 'g' },
      { name: 'olive oil', amount: 2, unit: 'tbsp' },
      { name: 'thyme', amount: 3, unit: 'sprigs' },
    ],
    steps: [
      'Warm stock in a saucepan and keep on a low simmer.',
      'Sauté diced onion in olive oil over medium heat for 5 minutes. Add garlic and thyme, cook 1 minute.',
      'Add sliced mushrooms and cook until golden, about 7 minutes. Set half aside for topping.',
      'Add rice to the pan and toast for 2 minutes. Pour in wine and stir until absorbed.',
      'Add warm stock one ladleful at a time, stirring constantly, allowing each addition to absorb before adding the next — about 20 minutes.',
      'When rice is creamy and al dente, remove from heat. Stir in butter and parmesan. Top with reserved mushrooms.',
    ],
    nutrition: { calories: 520, protein: 16, carbs: 72, fat: 18, fibre: 3 },
    keywords: ['risotto', 'mushroom', 'italian', 'comfort', 'rice'],
  },
  {
    id: 'r07',
    title: 'Greek Salad with Grilled Chicken',
    emoji: '🥗',
    description: 'Crisp, sun-ripened vegetables with salty feta and Kalamata olives, topped with juicy herb-marinated grilled chicken.',
    tags: ['mediterranean', 'gluten-free', 'quick'],
    time: 25,
    servings: 2,
    calories: 430,
    ingredients: [
      { name: 'chicken breast', amount: 300, unit: 'g' },
      { name: 'tomatoes', amount: 3, unit: '' },
      { name: 'cucumber', amount: 1, unit: '' },
      { name: 'red onion', amount: 0.5, unit: '' },
      { name: 'feta', amount: 100, unit: 'g' },
      { name: 'olives', amount: 60, unit: 'g' },
      { name: 'olive oil', amount: 3, unit: 'tbsp' },
      { name: 'lemon', amount: 1, unit: '' },
      { name: 'oregano', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Marinate chicken in olive oil, lemon juice, oregano, salt, and pepper for 15 minutes.',
      'Grill chicken over medium-high heat for 5–6 minutes per side until cooked through. Rest 3 minutes, then slice.',
      'Chop tomatoes and cucumber into chunks, thinly slice red onion. Combine in a bowl with olives.',
      'Drizzle with olive oil, lemon juice, and a pinch of salt. Toss gently.',
      'Top salad with sliced chicken and crumbled feta. Finish with extra oregano.',
    ],
    nutrition: { calories: 430, protein: 44, carbs: 12, fat: 24, fibre: 3 },
    keywords: ['salad', 'chicken', 'greek', 'mediterranean', 'healthy', 'fresh'],
  },
  {
    id: 'r08',
    title: 'Miso Glazed Aubergine',
    emoji: '🍆',
    description: 'Tender oven-roasted aubergine brushed with a rich miso-mirin glaze — a Japanese-inspired dish that converts even aubergine sceptics.',
    tags: ['vegan', 'asian', 'gluten-free'],
    time: 30,
    servings: 2,
    calories: 210,
    ingredients: [
      { name: 'aubergine', amount: 2, unit: '' },
      { name: 'white miso', amount: 2, unit: 'tbsp' },
      { name: 'mirin', amount: 2, unit: 'tbsp' },
      { name: 'soy sauce', amount: 1, unit: 'tbsp' },
      { name: 'sesame oil', amount: 1, unit: 'tbsp' },
      { name: 'sesame seeds', amount: 1, unit: 'tbsp' },
      { name: 'spring onion', amount: 2, unit: '' },
    ],
    steps: [
      'Preheat oven to 200 °C. Halve aubergines lengthways and score the flesh in a cross-hatch pattern without cutting through the skin.',
      'Brush with sesame oil and roast cut-side down for 15 minutes.',
      'Whisk miso, mirin, and soy sauce together.',
      'Flip aubergines, brush generously with miso glaze, and roast a further 10 minutes until deeply caramelised.',
      'Scatter with sesame seeds and sliced spring onion. Serve over rice.',
    ],
    nutrition: { calories: 210, protein: 6, carbs: 28, fat: 9, fibre: 8 },
    keywords: ['aubergine', 'eggplant', 'miso', 'vegan', 'asian', 'japanese'],
  },
  {
    id: 'r09',
    title: 'Garlic Butter Prawn Linguine',
    emoji: '🦐',
    description: 'Plump, juicy prawns tossed in garlicky herb butter with linguine and a splash of white wine. On the table in under 20 minutes.',
    tags: ['italian', 'quick'],
    time: 18,
    servings: 2,
    calories: 560,
    ingredients: [
      { name: 'linguine', amount: 200, unit: 'g' },
      { name: 'prawns', amount: 300, unit: 'g' },
      { name: 'garlic', amount: 4, unit: 'cloves' },
      { name: 'butter', amount: 40, unit: 'g' },
      { name: 'white wine', amount: 100, unit: 'ml' },
      { name: 'lemon', amount: 1, unit: '' },
      { name: 'parsley', amount: 20, unit: 'g' },
      { name: 'chilli flakes', amount: 0.5, unit: 'tsp' },
    ],
    steps: [
      'Cook linguine in well-salted water until al dente. Reserve ½ cup pasta water.',
      'Melt butter in a wide pan over medium-high heat. Add sliced garlic and chilli flakes; cook 1 minute.',
      'Add prawns and cook 1–2 minutes per side until pink. Season well.',
      'Pour in white wine, let it bubble for 30 seconds, then add a splash of pasta water.',
      'Toss in linguine, squeeze over lemon juice, and fold in parsley. Serve immediately.',
    ],
    nutrition: { calories: 560, protein: 38, carbs: 58, fat: 16, fibre: 2 },
    keywords: ['pasta', 'prawns', 'seafood', 'garlic', 'italian', 'quick'],
  },
  {
    id: 'r10',
    title: 'Vegan Lentil Dal',
    emoji: '🍛',
    description: 'A warming, fragrant red lentil dal with coconut milk and fresh ginger — nourishing comfort food ready in under 40 minutes.',
    tags: ['vegan', 'vegetarian', 'gluten-free'],
    time: 38,
    servings: 4,
    calories: 360,
    ingredients: [
      { name: 'red lentils', amount: 300, unit: 'g' },
      { name: 'coconut milk', amount: 400, unit: 'ml' },
      { name: 'onion', amount: 1, unit: '' },
      { name: 'garlic', amount: 3, unit: 'cloves' },
      { name: 'ginger', amount: 2, unit: 'cm' },
      { name: 'tomatoes', amount: 400, unit: 'g' },
      { name: 'cumin', amount: 1.5, unit: 'tsp' },
      { name: 'turmeric', amount: 1, unit: 'tsp' },
      { name: 'garam masala', amount: 1, unit: 'tsp' },
      { name: 'vegetable oil', amount: 2, unit: 'tbsp' },
    ],
    steps: [
      'Heat oil in a large pot, sauté finely chopped onion for 8 minutes until golden.',
      'Add minced garlic and grated ginger, cook 2 minutes. Stir in cumin, turmeric, and garam masala for 1 minute.',
      'Add rinsed lentils, canned tomatoes, and 500 ml water. Bring to a boil, skim any foam.',
      'Reduce heat, stir in coconut milk, and simmer 20 minutes until lentils are completely soft.',
      'Season generously with salt and serve over basmati rice with a squeeze of lemon and fresh coriander.',
    ],
    nutrition: { calories: 360, protein: 18, carbs: 50, fat: 10, fibre: 10 },
    keywords: ['dal', 'lentils', 'vegan', 'indian', 'curry', 'comfort'],
  },
  {
    id: 'r11',
    title: 'Avocado Toast with Poached Eggs',
    emoji: '🥑',
    description: 'Perfectly poached eggs on smashed avocado toast with chilli oil and micro-greens. Brunch perfection in 15 minutes.',
    tags: ['vegetarian', 'quick'],
    time: 15,
    servings: 2,
    calories: 410,
    ingredients: [
      { name: 'avocado', amount: 2, unit: '' },
      { name: 'eggs', amount: 4, unit: '' },
      { name: 'sourdough bread', amount: 4, unit: 'slices' },
      { name: 'lemon', amount: 1, unit: '' },
      { name: 'chilli flakes', amount: 0.5, unit: 'tsp' },
      { name: 'salt', amount: 1, unit: 'tsp' },
      { name: 'black pepper', amount: 0.5, unit: 'tsp' },
      { name: 'olive oil', amount: 1, unit: 'tbsp' },
    ],
    steps: [
      'Toast sourdough slices until golden and crisp.',
      'Bring a pan of water to a gentle simmer, add a splash of white vinegar.',
      'Halve and stone avocados, scoop into a bowl, and smash with lemon juice, salt, and pepper.',
      'Crack eggs into ramekins. Swirl the simmering water and gently slide eggs in. Poach 3–4 minutes for runny yolks.',
      'Spread avocado on toast, top each with a poached egg, drizzle with olive oil, and finish with chilli flakes.',
    ],
    nutrition: { calories: 410, protein: 19, carbs: 32, fat: 24, fibre: 8 },
    keywords: ['avocado', 'eggs', 'toast', 'brunch', 'breakfast', 'quick'],
  },
  {
    id: 'r12',
    title: 'Chicken & Vegetable Stir Fry',
    emoji: '🥘',
    description: 'A quick, colourful stir-fry packed with crisp vegetables and tender chicken in a savory ginger-soy sauce.',
    tags: ['asian', 'quick', 'gluten-free'],
    time: 20,
    servings: 4,
    calories: 350,
    ingredients: [
      { name: 'chicken breast', amount: 500, unit: 'g' },
      { name: 'broccoli', amount: 200, unit: 'g' },
      { name: 'carrot', amount: 2, unit: '' },
      { name: 'garlic', amount: 3, unit: 'cloves' },
      { name: 'ginger', amount: 2, unit: 'cm' },
      { name: 'soy sauce', amount: 3, unit: 'tbsp' },
      { name: 'sesame oil', amount: 1, unit: 'tbsp' },
      { name: 'vegetable oil', amount: 2, unit: 'tbsp' },
      { name: 'spring onion', amount: 3, unit: '' },
    ],
    steps: [
      'Slice chicken into thin strips. Mix with 1 tbsp soy sauce and marinate 10 minutes.',
      'Cut broccoli into florets and julienne carrots. Mince garlic and grate ginger.',
      'Heat vegetable oil in a wok over high heat until smoking. Stir-fry chicken 3–4 minutes. Remove and set aside.',
      'Add a little more oil, then vegetables and garlic-ginger paste. Stir-fry 3 minutes until crisp-tender.',
      'Return chicken to wok, add remaining soy sauce and sesame oil. Toss everything together and serve over rice.',
    ],
    nutrition: { calories: 350, protein: 38, carbs: 16, fat: 14, fibre: 4 },
    keywords: ['chicken', 'stir fry', 'asian', 'vegetables', 'quick', 'healthy'],
  },
];

/* ═══════════════════════════════════════════════════════
   AUTOCOMPLETE SUGGESTIONS
═══════════════════════════════════════════════════════ */
const INGREDIENT_SUGGESTIONS = [
  'avocado', 'aubergine', 'arborio rice', 'asparagus',
  'bacon', 'basil', 'beans', 'beef', 'black beans', 'broccoli', 'butter',
  'carrot', 'celery', 'cheese', 'chicken', 'chicken breast', 'chicken mince',
  'chickpeas', 'chilli', 'chilli flakes', 'coriander', 'coconut milk',
  'cucumber', 'cumin',
  'eggs',
  'feta', 'fish sauce',
  'garlic', 'ginger',
  'jalapeño',
  'kale',
  'lemon', 'lentils', 'lime', 'linguine',
  'miso', 'mushrooms', 'mirin',
  'olive oil', 'onion', 'oregano', 'oyster sauce',
  'parmesan', 'parsley', 'pasta', 'peppers', 'potatoes', 'prawns',
  'red onion', 'rice',
  'salmon', 'soy sauce', 'spaghetti', 'spinach', 'spring onion', 'sweet potato',
  'thyme', 'tomatoes', 'tortillas', 'turmeric',
  'vegetable stock', 'vegetable oil',
  'white wine',
];

/* ═══════════════════════════════════════════════════════
   APP STATE
═══════════════════════════════════════════════════════ */
const state = {
  ingredients: [],       // user-added ingredients
  activeFilters: new Set(),
  allRecipes: [],        // current search results
  filteredRecipes: [],   // after filters + sort
  sortBy: 'match',
  resultSearchQuery: '',
  currentRecipeId: null,
  currentServings: 4,
  baseServings: 4,
  favorites: new Set(),
  shoppingList: {},      // { recipeId: { title, items: [{name, checked}] } }
  recentlyViewed: [],    // [recipeId, ...]
  currentView: 'discover',
  currentKitchenView: 'favorites',
};

/* ═══════════════════════════════════════════════════════
   LOCAL STORAGE PERSISTENCE
═══════════════════════════════════════════════════════ */
const LS_KEYS = {
  FAVORITES: 'saveur_favorites',
  SHOPPING: 'saveur_shopping',
  RECENT: 'saveur_recent',
  THEME: 'saveur_theme',
  INGREDIENTS: 'saveur_ingredients',
};

function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch { /* ignore quota errors */ }
}

function loadFromStorage(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);
    return raw !== null ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function persistFavorites() {
  saveToStorage(LS_KEYS.FAVORITES, [...state.favorites]);
}

function persistShopping() {
  saveToStorage(LS_KEYS.SHOPPING, state.shoppingList);
}

function persistRecent() {
  saveToStorage(LS_KEYS.RECENT, state.recentlyViewed);
}

function persistIngredients() {
  saveToStorage(LS_KEYS.INGREDIENTS, state.ingredients);
}

function loadPersistedData() {
  const savedFavs = loadFromStorage(LS_KEYS.FAVORITES, []);
  state.favorites = new Set(savedFavs);

  const savedShopping = loadFromStorage(LS_KEYS.SHOPPING, {});
  state.shoppingList = savedShopping;

  const savedRecent = loadFromStorage(LS_KEYS.RECENT, []);
  state.recentlyViewed = savedRecent;

  const savedIngredients = loadFromStorage(LS_KEYS.INGREDIENTS, []);
  state.ingredients = savedIngredients;
}

/* ═══════════════════════════════════════════════════════
   DARK / LIGHT MODE
═══════════════════════════════════════════════════════ */
function initTheme() {
  const savedTheme = loadFromStorage(LS_KEYS.THEME, null);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = savedTheme !== null ? savedTheme === 'dark' : prefersDark;
  applyTheme(isDark);
}

function applyTheme(isDark) {
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  const btn = document.getElementById('dark-mode-toggle');
  const icon = document.getElementById('dark-mode-icon');
  const label = document.getElementById('dark-mode-label');
  if (!btn) return;
  btn.setAttribute('aria-pressed', String(isDark));
  btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  icon.textContent = isDark ? '☀️' : '🌙';
  label.textContent = isDark ? 'Light' : 'Dark';
  saveToStorage(LS_KEYS.THEME, isDark ? 'dark' : 'light');
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  applyTheme(currentTheme !== 'dark');
}

/* ═══════════════════════════════════════════════════════
   TOAST NOTIFICATIONS
═══════════════════════════════════════════════════════ */
function showToast(message, type = 'info', duration = 3000) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.setAttribute('role', 'alert');

  const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
  toast.innerHTML = `<span class="toast__icon" aria-hidden="true">${icons[type] || icons.info}</span><span class="toast__msg">${message}</span>`;

  container.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => toast.classList.add('toast--visible'));

  // Animate out and remove
  setTimeout(() => {
    toast.classList.remove('toast--visible');
    toast.addEventListener('transitionend', () => toast.remove(), { once: true });
  }, duration);
}

/* ═══════════════════════════════════════════════════════
   INGREDIENT CHIPS
═══════════════════════════════════════════════════════ */
function normaliseIngredient(raw) {
  return raw.trim().toLowerCase().replace(/\s+/g, ' ');
}

function addIngredients(rawInput) {
  const parts = rawInput.split(',').map(normaliseIngredient).filter(Boolean);
  let added = 0;
  parts.forEach(ing => {
    if (!ing) return;
    if (state.ingredients.includes(ing)) {
      showToast(`"${ing}" is already added`, 'warning');
      return;
    }
    state.ingredients.push(ing);
    added++;
  });
  if (added > 0) {
    renderChips();
    updateGenerateButton();
    persistIngredients();
    document.getElementById('ingredient-input').value = '';
    hideAutocomplete();
  }
}

function removeIngredient(ing) {
  state.ingredients = state.ingredients.filter(i => i !== ing);
  renderChips();
  updateGenerateButton();
  persistIngredients();
}

function renderChips() {
  const container = document.getElementById('chips-container');
  const placeholder = document.getElementById('chips-placeholder');

  // Remove existing chips
  container.querySelectorAll('.chip').forEach(c => c.remove());

  if (state.ingredients.length === 0) {
    placeholder.hidden = false;
    return;
  }
  placeholder.hidden = true;

  state.ingredients.forEach(ing => {
    const chip = document.createElement('div');
    chip.className = 'chip';
    chip.setAttribute('role', 'listitem');
    chip.innerHTML = `
      <span class="chip__label">${ing}</span>
      <button class="chip__remove" type="button" aria-label="Remove ${ing}" data-ing="${ing}">✕</button>
    `;
    chip.querySelector('.chip__remove').addEventListener('click', () => removeIngredient(ing));
    container.appendChild(chip);
  });
}

function updateGenerateButton() {
  const btn = document.getElementById('generate-btn');
  const hasIngredients = state.ingredients.length > 0;
  btn.disabled = !hasIngredients;
  btn.setAttribute('aria-disabled', String(!hasIngredients));
}

/* ═══════════════════════════════════════════════════════
   AUTOCOMPLETE
═══════════════════════════════════════════════════════ */
let autocompleteBox = null;
let autocompleteHighlightIndex = -1;

function buildAutocompleteBox() {
  if (autocompleteBox) return autocompleteBox;
  autocompleteBox = document.createElement('ul');
  autocompleteBox.id = 'autocomplete-list';
  autocompleteBox.className = 'autocomplete-list';
  autocompleteBox.setAttribute('role', 'listbox');
  autocompleteBox.setAttribute('aria-label', 'Ingredient suggestions');
  document.querySelector('.input-row').appendChild(autocompleteBox);
  return autocompleteBox;
}

function showAutocomplete(query) {
  if (!query || query.length < 1) { hideAutocomplete(); return; }
  const q = query.toLowerCase();
  const matches = INGREDIENT_SUGGESTIONS
    .filter(s => s.startsWith(q) && !state.ingredients.includes(s))
    .slice(0, 6);

  if (matches.length === 0) { hideAutocomplete(); return; }

  const box = buildAutocompleteBox();
  box.innerHTML = '';
  autocompleteHighlightIndex = -1;

  matches.forEach((match, i) => {
    const li = document.createElement('li');
    li.className = 'autocomplete-item';
    li.setAttribute('role', 'option');
    li.setAttribute('id', `ac-option-${i}`);
    li.innerHTML = `<strong>${match.slice(0, q.length)}</strong>${match.slice(q.length)}`;
    li.addEventListener('mousedown', e => {
      e.preventDefault();
      document.getElementById('ingredient-input').value = match;
      hideAutocomplete();
      addIngredients(match);
    });
    box.appendChild(li);
  });

  box.hidden = false;
}

function hideAutocomplete() {
  if (autocompleteBox) {
    autocompleteBox.hidden = true;
    autocompleteBox.innerHTML = '';
  }
  autocompleteHighlightIndex = -1;
}

function navigateAutocomplete(direction) {
  if (!autocompleteBox || autocompleteBox.hidden) return;
  const items = autocompleteBox.querySelectorAll('.autocomplete-item');
  if (!items.length) return;

  items[autocompleteHighlightIndex]?.classList.remove('autocomplete-item--active');
  autocompleteHighlightIndex = (autocompleteHighlightIndex + direction + items.length) % items.length;
  const active = items[autocompleteHighlightIndex];
  active.classList.add('autocomplete-item--active');
  document.getElementById('ingredient-input').value = active.textContent;
}

function selectHighlightedAutocomplete() {
  if (!autocompleteBox || autocompleteBox.hidden) return false;
  const items = autocompleteBox.querySelectorAll('.autocomplete-item');
  if (autocompleteHighlightIndex >= 0 && items[autocompleteHighlightIndex]) {
    const val = items[autocompleteHighlightIndex].textContent;
    document.getElementById('ingredient-input').value = val;
    hideAutocomplete();
    addIngredients(val);
    return true;
  }
  return false;
}

/* ═══════════════════════════════════════════════════════
   RECIPE SEARCH / MATCHING
═══════════════════════════════════════════════════════ */

/**
 * Simulates an async API call to find recipes.
 * In production this would be a real fetch() to a backend.
 */
async function fetchRecipes(ingredients, filters) {
  // Simulate network latency
  await new Promise(res => setTimeout(res, 900 + Math.random() * 600));

  // Match recipes — score by how many user ingredients each recipe needs
  const ingSet = new Set(ingredients.map(i => i.toLowerCase()));

  let results = RECIPE_DB.map(recipe => {
    const recipeIngs = recipe.ingredients.map(i => i.name.toLowerCase());
    const matched = recipeIngs.filter(ri =>
      [...ingSet].some(ui => ri.includes(ui) || ui.includes(ri))
    );
    const matchScore = matched.length / recipeIngs.length;
    return { ...recipe, matchScore, matchedCount: matched.length, matchedIngredients: matched };
  });

  // Filter by active tags
  if (filters.size > 0) {
    results = results.filter(r => {
      for (const f of filters) {
        if (f === 'quick' && r.time > 30) return false;
        if (f === 'under60' && r.time > 60) return false;
        if (f !== 'quick' && f !== 'under60' && !r.tags.includes(f)) return false;
      }
      return true;
    });
  }

  // Only show recipes with at least some match, or all if very few ingredients
  if (ingredients.length >= 2) {
    results = results.filter(r => r.matchScore > 0);
  }

  return results;
}

function sortRecipes(recipes, sortBy) {
  const sorted = [...recipes];
  switch (sortBy) {
    case 'match':      return sorted.sort((a, b) => b.matchScore - a.matchScore);
    case 'time':       return sorted.sort((a, b) => a.time - b.time);
    case 'calories':   return sorted.sort((a, b) => a.calories - b.calories);
    case 'ingredients': return sorted.sort((a, b) => a.ingredients.length - b.ingredients.length);
    default:           return sorted;
  }
}

function filterBySearchQuery(recipes, query) {
  if (!query) return recipes;
  const q = query.toLowerCase();
  return recipes.filter(r =>
    r.title.toLowerCase().includes(q) ||
    r.keywords.some(k => k.includes(q)) ||
    r.tags.some(t => t.includes(q)) ||
    r.ingredients.some(i => i.name.toLowerCase().includes(q))
  );
}

/* ═══════════════════════════════════════════════════════
   RECIPE CARDS
═══════════════════════════════════════════════════════ */
function buildMatchPercent(recipe) {
  return Math.round(recipe.matchScore * 100);
}

function createRecipeCard(recipe, context = 'discover') {
  const isFav = state.favorites.has(recipe.id);
  const matchPct = buildMatchPercent(recipe);
  const card = document.createElement('article');
  card.className = 'recipe-card';
  card.setAttribute('role', 'listitem');
  card.setAttribute('data-recipe-id', recipe.id);
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `${recipe.title} – ${recipe.time} minutes`);

  const tagsHtml = recipe.tags.map(t => `<span class="recipe-tag recipe-tag--${t}">${t}</span>`).join('');

  card.innerHTML = `
    <div class="recipe-card__emoji-hero" aria-hidden="true">${recipe.emoji}</div>
    <div class="recipe-card__body">
      <div class="recipe-card__tags">${tagsHtml}</div>
      <h3 class="recipe-card__title">${recipe.title}</h3>
      <p class="recipe-card__desc">${recipe.description}</p>
      <div class="recipe-card__meta">
        <span class="recipe-card__time">⏱ ${recipe.time} min</span>
        <span class="recipe-card__cals">🔥 ${recipe.calories} kcal</span>
        ${context === 'discover' ? `<span class="recipe-card__match">${matchPct}% match</span>` : ''}
      </div>
    </div>
    <div class="recipe-card__actions">
      <button
        class="btn-card-fav ${isFav ? 'btn-card-fav--active' : ''}"
        type="button"
        aria-pressed="${isFav}"
        aria-label="${isFav ? 'Remove from favorites' : 'Save to favorites'}"
        data-recipe-id="${recipe.id}"
      >${isFav ? '❤️' : '🤍'}</button>
      <button class="btn-card-open" type="button" data-recipe-id="${recipe.id}" aria-label="View ${recipe.title}">
        View Recipe →
      </button>
    </div>
  `;

  // Open modal on card click (but not fav button)
  card.addEventListener('click', e => {
    if (e.target.closest('.btn-card-fav')) return;
    openModal(recipe.id);
  });
  card.addEventListener('keydown', e => {
    if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('.btn-card-fav')) {
      e.preventDefault();
      openModal(recipe.id);
    }
  });

  card.querySelector('.btn-card-fav').addEventListener('click', e => {
    e.stopPropagation();
    toggleFavorite(recipe.id, card.querySelector('.btn-card-fav'));
  });

  return card;
}

/* ═══════════════════════════════════════════════════════
   GENERATE RECIPES (main search flow)
═══════════════════════════════════════════════════════ */
async function generateRecipes() {
  if (state.ingredients.length === 0) return;

  // Show loading state
  setLoadingState(true);

  try {
    const results = await fetchRecipes(state.ingredients, state.activeFilters);
    state.allRecipes = results;
    applyFiltersAndRender();
  } catch (err) {
    console.error('Recipe fetch error:', err);
    showToast('Something went wrong fetching recipes. Please try again.', 'error');
    setLoadingState(false);
  }
}

function setLoadingState(loading) {
  document.getElementById('loading-state').hidden = !loading;
  document.getElementById('empty-state-initial').hidden = true;
  document.getElementById('empty-state-no-results').hidden = true;
  document.getElementById('results-header').hidden = loading;
  document.getElementById('recipes-grid').hidden = loading;

  const btn = document.getElementById('generate-btn');
  const label = document.getElementById('generate-label');
  btn.disabled = loading;
  label.textContent = loading ? 'Searching…' : 'Generate Recipes';
}

function applyFiltersAndRender() {
  let recipes = [...state.allRecipes];

  // Apply result-search query
  if (state.resultSearchQuery) {
    recipes = filterBySearchQuery(recipes, state.resultSearchQuery);
  }

  // Sort
  recipes = sortRecipes(recipes, state.sortBy);
  state.filteredRecipes = recipes;

  setLoadingState(false);

  const grid = document.getElementById('recipes-grid');
  const resultsHeader = document.getElementById('results-header');
  const noResults = document.getElementById('empty-state-no-results');

  grid.innerHTML = '';

  if (recipes.length === 0) {
    resultsHeader.hidden = true;
    grid.hidden = true;
    noResults.hidden = false;
    return;
  }

  noResults.hidden = true;
  resultsHeader.hidden = false;
  grid.hidden = false;

  const count = document.getElementById('results-count');
  count.textContent = `${recipes.length} recipe${recipes.length !== 1 ? 's' : ''} found`;

  recipes.forEach(recipe => {
    grid.appendChild(createRecipeCard(recipe, 'discover'));
  });
}

/* ═══════════════════════════════════════════════════════
   FILTERS
═══════════════════════════════════════════════════════ */
function toggleFilter(filterBtn) {
  const filter = filterBtn.dataset.filter;
  const active = filterBtn.getAttribute('aria-pressed') === 'true';

  if (active) {
    state.activeFilters.delete(filter);
    filterBtn.setAttribute('aria-pressed', 'false');
    filterBtn.classList.remove('filter-chip--active');
  } else {
    state.activeFilters.add(filter);
    filterBtn.setAttribute('aria-pressed', 'true');
    filterBtn.classList.add('filter-chip--active');
  }

  updateClearFiltersVisibility();

  // Re-run search if results are loaded
  if (state.allRecipes.length > 0) {
    applyFiltersAndRender();
  }
}

function clearAllFilters() {
  state.activeFilters.clear();
  document.querySelectorAll('.filter-chip').forEach(btn => {
    btn.setAttribute('aria-pressed', 'false');
    btn.classList.remove('filter-chip--active');
  });
  updateClearFiltersVisibility();
  if (state.allRecipes.length > 0) applyFiltersAndRender();
}

function updateClearFiltersVisibility() {
  document.getElementById('clear-filters-btn').hidden = state.activeFilters.size === 0;
}

/* ═══════════════════════════════════════════════════════
   FAVORITES
═══════════════════════════════════════════════════════ */
function toggleFavorite(recipeId, triggerBtn = null) {
  if (state.favorites.has(recipeId)) {
    state.favorites.delete(recipeId);
    showToast('Removed from favorites', 'info');
  } else {
    state.favorites.add(recipeId);
    showToast('Saved to favorites! ❤️', 'success');
  }
  persistFavorites();
  updateFavoriteUI(recipeId);
  updateFavBadge();
  renderKitchenStats();
}

function updateFavoriteUI(recipeId) {
  const isFav = state.favorites.has(recipeId);

  // Update all card fav buttons
  document.querySelectorAll(`[data-recipe-id="${recipeId}"].btn-card-fav`).forEach(btn => {
    btn.textContent = isFav ? '❤️' : '🤍';
    btn.setAttribute('aria-pressed', String(isFav));
    btn.setAttribute('aria-label', isFav ? 'Remove from favorites' : 'Save to favorites');
    btn.classList.toggle('btn-card-fav--active', isFav);
  });

  // Update modal fav button if open for this recipe
  if (state.currentRecipeId === recipeId) {
    const modalFavBtn = document.getElementById('modal-fav-btn');
    const modalFavIcon = document.getElementById('modal-fav-icon');
    const modalFavLabel = document.getElementById('modal-fav-label');
    if (modalFavBtn) {
      modalFavBtn.setAttribute('aria-pressed', String(isFav));
      modalFavIcon.textContent = isFav ? '❤️' : '🤍';
      modalFavLabel.textContent = isFav ? 'Saved!' : 'Save Recipe';
    }
  }

  // Re-render kitchen favorites if open
  if (state.currentView === 'kitchen') {
    renderFavoritesGrid();
  }
}

function updateFavBadge() {
  const badge = document.getElementById('fav-count-badge');
  const count = state.favorites.size;
  badge.textContent = count;
  badge.hidden = count === 0;
  badge.setAttribute('aria-label', `${count} saved recipe${count !== 1 ? 's' : ''}`);
}

/* ═══════════════════════════════════════════════════════
   MODAL
═══════════════════════════════════════════════════════ */
function openModal(recipeId) {
  const recipe = RECIPE_DB.find(r => r.id === recipeId);
  if (!recipe) return;

  state.currentRecipeId = recipeId;
  state.currentServings = recipe.servings;
  state.baseServings = recipe.servings;

  addToRecentlyViewed(recipeId);
  addMissingIngredientsToShoppingList(recipe);

  populateModal(recipe);
  resetModalTabs();

  const overlay = document.getElementById('modal-overlay');
  overlay.setAttribute('aria-hidden', 'false');
  overlay.classList.add('modal-overlay--open');
  document.body.classList.add('modal-open');

  // Focus close button
  setTimeout(() => document.getElementById('modal-close-btn')?.focus(), 50);
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.setAttribute('aria-hidden', 'true');
  overlay.classList.remove('modal-overlay--open');
  document.body.classList.remove('modal-open');
  state.currentRecipeId = null;
}

function populateModal(recipe) {
  const isFav = state.favorites.has(recipe.id);
  const matchPct = buildMatchPercent(recipe);

  // Hero
  document.getElementById('modal-hero').style.cssText = `
    background: linear-gradient(135deg, var(--color-accent-soft) 0%, var(--color-bg-secondary) 100%);
    font-size: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 180px;
  `;
  document.getElementById('modal-hero').textContent = recipe.emoji;

  // Title & meta
  document.getElementById('modal-recipe-title').textContent = recipe.title;
  const tagsHtml = recipe.tags.map(t => `<span class="recipe-tag recipe-tag--${t}">${t}</span>`).join('');
  document.getElementById('modal-meta').innerHTML = `
    <span>⏱ ${recipe.time} min</span>
    <span>👥 ${recipe.servings} servings</span>
    <span>🔥 ${recipe.calories} kcal</span>
    ${tagsHtml}
  `;

  // Description
  document.getElementById('modal-desc').textContent = recipe.description;

  // Match bar
  const matchFill = document.getElementById('modal-match-fill');
  const matchTrack = document.getElementById('modal-match-track');
  document.getElementById('modal-match-label').textContent = `${matchPct}% match`;
  matchFill.style.width = `${matchPct}%`;
  matchTrack.setAttribute('aria-valuenow', matchPct);

  // Have / need lists
  const ingSet = new Set(state.ingredients);
  const haveList = document.getElementById('modal-have-list');
  const needList = document.getElementById('modal-need-list');
  haveList.innerHTML = '';
  needList.innerHTML = '';

  recipe.ingredients.forEach(ing => {
    const userHas = [...ingSet].some(ui =>
      ing.name.toLowerCase().includes(ui) || ui.includes(ing.name.toLowerCase())
    );
    const li = document.createElement('li');
    li.textContent = ing.name;
    (userHas ? haveList : needList).appendChild(li);
  });

  if (haveList.children.length === 0) {
    haveList.innerHTML = '<li class="empty-ingredient-msg">None from your list</li>';
  }
  if (needList.children.length === 0) {
    needList.innerHTML = '<li class="empty-ingredient-msg">You have everything! 🎉</li>';
  }

  // Full ingredients tab
  renderModalIngredients(recipe, recipe.servings);
  document.getElementById('modal-servings-value').textContent = recipe.servings;

  // Steps tab
  const stepsList = document.getElementById('modal-steps');
  stepsList.innerHTML = '';
  recipe.steps.forEach((step, i) => {
    const li = document.createElement('li');
    li.className = 'modal__step';
    li.innerHTML = `<span class="modal__step-num">${i + 1}</span><p>${step}</p>`;
    stepsList.appendChild(li);
  });

  // Nutrition tab
  const nutrGrid = document.getElementById('modal-nutrition-grid');
  const n = recipe.nutrition;
  const nutrItems = [
    { label: 'Calories', value: n.calories, unit: 'kcal' },
    { label: 'Protein', value: n.protein, unit: 'g' },
    { label: 'Carbs', value: n.carbs, unit: 'g' },
    { label: 'Fat', value: n.fat, unit: 'g' },
    { label: 'Fibre', value: n.fibre, unit: 'g' },
  ];
  nutrGrid.innerHTML = nutrItems.map(item => `
    <div class="nutrition-card">
      <span class="nutrition-card__value">${item.value}</span>
      <span class="nutrition-card__unit">${item.unit}</span>
      <span class="nutrition-card__label">${item.label}</span>
    </div>
  `).join('');

  // Fav button
  const favBtn = document.getElementById('modal-fav-btn');
  document.getElementById('modal-fav-icon').textContent = isFav ? '❤️' : '🤍';
  document.getElementById('modal-fav-label').textContent = isFav ? 'Saved!' : 'Save Recipe';
  favBtn.setAttribute('aria-pressed', String(isFav));
}

function renderModalIngredients(recipe, servings) {
  const list = document.getElementById('modal-full-ingredients');
  list.innerHTML = '';
  const scale = servings / recipe.servings;
  recipe.ingredients.forEach(ing => {
    const li = document.createElement('li');
    const scaledAmt = ing.amount ? parseFloat((ing.amount * scale).toFixed(2)) : '';
    li.innerHTML = `<span class="ing-amount">${scaledAmt} ${ing.unit}</span> <span class="ing-name">${ing.name}</span>`;
    list.appendChild(li);
  });
}

function adjustServings(delta) {
  const recipe = RECIPE_DB.find(r => r.id === state.currentRecipeId);
  if (!recipe) return;
  const newServings = Math.max(1, state.currentServings + delta);
  state.currentServings = newServings;
  document.getElementById('modal-servings-value').textContent = newServings;
  renderModalIngredients(recipe, newServings);
}

function resetModalTabs() {
  document.querySelectorAll('.modal-tab').forEach(t => {
    t.classList.remove('modal-tab--active');
    t.setAttribute('aria-selected', 'false');
  });
  document.querySelectorAll('.modal-view').forEach(v => {
    v.classList.remove('modal-view--active');
    v.hidden = true;
  });
  const firstTab = document.getElementById('mtab-overview');
  const firstView = document.getElementById('mview-overview');
  firstTab.classList.add('modal-tab--active');
  firstTab.setAttribute('aria-selected', 'true');
  firstView.classList.add('modal-view--active');
  firstView.hidden = false;
}

function switchModalTab(viewId) {
  document.querySelectorAll('.modal-tab').forEach(t => {
    const isActive = t.dataset.mview === viewId;
    t.classList.toggle('modal-tab--active', isActive);
    t.setAttribute('aria-selected', String(isActive));
  });
  document.querySelectorAll('.modal-view').forEach(v => {
    const isActive = v.id === `mview-${viewId}`;
    v.classList.toggle('modal-view--active', isActive);
    v.hidden = !isActive;
  });
}

/* ═══════════════════════════════════════════════════════
   SHOPPING LIST
═══════════════════════════════════════════════════════ */
function addMissingIngredientsToShoppingList(recipe) {
  const ingSet = new Set(state.ingredients);
  const missing = recipe.ingredients.filter(ing =>
    ![...ingSet].some(ui => ing.name.toLowerCase().includes(ui) || ui.includes(ing.name.toLowerCase()))
  );

  if (missing.length === 0) return;

  if (!state.shoppingList[recipe.id]) {
    state.shoppingList[recipe.id] = {
      title: recipe.title,
      emoji: recipe.emoji,
      items: missing.map(i => ({ name: i.name, checked: false })),
    };
    persistShopping();
    renderKitchenStats();
  }
}

function renderShoppingList() {
  const container = document.getElementById('shopping-list');
  const emptyState = document.getElementById('empty-shopping');
  container.innerHTML = '';

  const entries = Object.entries(state.shoppingList);

  if (entries.length === 0) {
    emptyState.hidden = false;
    return;
  }
  emptyState.hidden = true;

  entries.forEach(([recipeId, group]) => {
    const section = document.createElement('section');
    section.className = 'shopping-recipe-group';
    section.innerHTML = `
      <h3 class="shopping-recipe-group__title">
        <span aria-hidden="true">${group.emoji}</span> ${group.title}
        <button class="btn-icon-small" data-remove-group="${recipeId}" type="button" aria-label="Remove ${group.title} from shopping list" title="Remove group">✕</button>
      </h3>
      <ul class="shopping-items">
        ${group.items.map((item, idx) => `
          <li class="shopping-item ${item.checked ? 'shopping-item--checked' : ''}">
            <label class="shopping-item__label">
              <input type="checkbox" class="shopping-item__check" data-recipe="${recipeId}" data-idx="${idx}" ${item.checked ? 'checked' : ''} />
              <span>${item.name}</span>
            </label>
          </li>
        `).join('')}
      </ul>
    `;
    container.appendChild(section);

    // Checkbox listeners
    section.querySelectorAll('.shopping-item__check').forEach(cb => {
      cb.addEventListener('change', () => {
        const rId = cb.dataset.recipe;
        const idx = parseInt(cb.dataset.idx);
        state.shoppingList[rId].items[idx].checked = cb.checked;
        cb.closest('.shopping-item').classList.toggle('shopping-item--checked', cb.checked);
        persistShopping();
        renderKitchenStats();
      });
    });

    // Remove group
    section.querySelector('[data-remove-group]').addEventListener('click', () => {
      delete state.shoppingList[recipeId];
      persistShopping();
      renderShoppingList();
      renderKitchenStats();
    });
  });
}

function checkAllShoppingItems() {
  Object.entries(state.shoppingList).forEach(([rId, group]) => {
    group.items.forEach(item => { item.checked = true; });
  });
  persistShopping();
  renderShoppingList();
  renderKitchenStats();
}

function clearCheckedItems() {
  Object.keys(state.shoppingList).forEach(rId => {
    state.shoppingList[rId].items = state.shoppingList[rId].items.filter(i => !i.checked);
    if (state.shoppingList[rId].items.length === 0) {
      delete state.shoppingList[rId];
    }
  });
  persistShopping();
  renderShoppingList();
  renderKitchenStats();
}

function copyShoppingList() {
  const lines = [];
  Object.values(state.shoppingList).forEach(group => {
    lines.push(`\n${group.emoji} ${group.title}`);
    group.items.forEach(item => lines.push(`  ${item.checked ? '✓' : '○'} ${item.name}`));
  });
  if (lines.length === 0) { showToast('Shopping list is empty', 'warning'); return; }
  navigator.clipboard.writeText(lines.join('\n').trim())
    .then(() => showToast('Shopping list copied! 📋', 'success'))
    .catch(() => showToast('Could not copy to clipboard', 'error'));
}

/* ═══════════════════════════════════════════════════════
   RECENTLY VIEWED
═══════════════════════════════════════════════════════ */
function addToRecentlyViewed(recipeId) {
  state.recentlyViewed = [recipeId, ...state.recentlyViewed.filter(id => id !== recipeId)].slice(0, 20);
  persistRecent();
  renderKitchenStats();
}

function renderRecentGrid() {
  const grid = document.getElementById('recent-grid');
  const emptyState = document.getElementById('empty-recent');
  grid.innerHTML = '';

  const recipes = state.recentlyViewed
    .map(id => RECIPE_DB.find(r => r.id === id))
    .filter(Boolean);

  if (recipes.length === 0) {
    emptyState.hidden = false;
    return;
  }
  emptyState.hidden = true;
  recipes.forEach(r => grid.appendChild(createRecipeCard(r, 'recent')));
}

/* ═══════════════════════════════════════════════════════
   FAVORITES GRID (Kitchen view)
═══════════════════════════════════════════════════════ */
function renderFavoritesGrid() {
  const grid = document.getElementById('favorites-grid');
  const emptyState = document.getElementById('empty-favorites');
  grid.innerHTML = '';

  const recipes = [...state.favorites]
    .map(id => RECIPE_DB.find(r => r.id === id))
    .filter(Boolean);

  if (recipes.length === 0) {
    emptyState.hidden = false;
    return;
  }
  emptyState.hidden = true;
  recipes.forEach(r => grid.appendChild(createRecipeCard(r, 'favorites')));
}

/* ═══════════════════════════════════════════════════════
   KITCHEN STATS
═══════════════════════════════════════════════════════ */
function renderKitchenStats() {
  document.getElementById('stat-saved').textContent = state.favorites.size;

  const totalItems = Object.values(state.shoppingList)
    .reduce((sum, g) => sum + g.items.length, 0);
  document.getElementById('stat-shopping').textContent = totalItems;

  document.getElementById('stat-recent').textContent = state.recentlyViewed.length;
}

/* ═══════════════════════════════════════════════════════
   VIEW SWITCHING
═══════════════════════════════════════════════════════ */
function switchView(viewId) {
  state.currentView = viewId;

  document.querySelectorAll('.nav-tab').forEach(tab => {
    const isActive = tab.dataset.view === viewId;
    tab.classList.toggle('nav-tab--active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });

  document.querySelectorAll('.view').forEach(view => {
    const isActive = view.id === `view-${viewId}`;
    view.classList.toggle('view--active', isActive);
    view.hidden = !isActive;
  });

  if (viewId === 'kitchen') {
    renderFavoritesGrid();
    renderShoppingList();
    renderRecentGrid();
    renderKitchenStats();
  }
}

function switchKitchenView(kviewId) {
  state.currentKitchenView = kviewId;

  document.querySelectorAll('.kitchen-tab').forEach(tab => {
    const isActive = tab.dataset.kview === kviewId;
    tab.classList.toggle('kitchen-tab--active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });

  document.querySelectorAll('.kitchen-view').forEach(view => {
    const isActive = view.id === `kview-${kviewId}`;
    view.classList.toggle('kitchen-view--active', isActive);
    view.hidden = !isActive;
  });

  if (kviewId === 'shopping') renderShoppingList();
  if (kviewId === 'recent') renderRecentGrid();
  if (kviewId === 'favorites') renderFavoritesGrid();
}

/* ═══════════════════════════════════════════════════════
   COPY RECIPE
═══════════════════════════════════════════════════════ */
function copyRecipe() {
  const recipe = RECIPE_DB.find(r => r.id === state.currentRecipeId);
  if (!recipe) return;
  const text = [
    `${recipe.emoji} ${recipe.title}`,
    `Time: ${recipe.time} min | Serves: ${recipe.servings} | ${recipe.calories} kcal`,
    '',
    'INGREDIENTS:',
    ...recipe.ingredients.map(i => `• ${i.amount} ${i.unit} ${i.name}`),
    '',
    'STEPS:',
    ...recipe.steps.map((s, i) => `${i + 1}. ${s}`),
  ].join('\n');

  navigator.clipboard.writeText(text)
    .then(() => showToast('Recipe copied to clipboard! 📋', 'success'))
    .catch(() => showToast('Copy failed — please try again', 'error'));
}

/* ═══════════════════════════════════════════════════════
   SURPRISE ME
═══════════════════════════════════════════════════════ */
function surpriseMe() {
  const pool = state.filteredRecipes.length > 0 ? state.filteredRecipes : RECIPE_DB;
  const recipe = pool[Math.floor(Math.random() * pool.length)];
  openModal(recipe.id);
}

/* ═══════════════════════════════════════════════════════
   VOICE INPUT
═══════════════════════════════════════════════════════ */
function initVoiceInput() {
  const voiceBtn = document.getElementById('voice-btn');
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    voiceBtn.title = 'Voice input not supported in this browser';
    voiceBtn.style.opacity = '0.4';
    voiceBtn.disabled = true;
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;

  let listening = false;

  voiceBtn.addEventListener('click', () => {
    if (listening) {
      recognition.stop();
      return;
    }
    recognition.start();
    listening = true;
    voiceBtn.classList.add('btn-voice--active');
    voiceBtn.setAttribute('aria-label', 'Listening…');
    showToast('Listening for ingredients… 🎤', 'info', 2000);
  });

  recognition.onresult = e => {
    const transcript = e.results[0][0].transcript;
    document.getElementById('ingredient-input').value = transcript;
    addIngredients(transcript);
  };

  recognition.onend = () => {
    listening = false;
    voiceBtn.classList.remove('btn-voice--active');
    voiceBtn.setAttribute('aria-label', 'Add ingredient by voice');
  };

  recognition.onerror = () => {
    listening = false;
    voiceBtn.classList.remove('btn-voice--active');
    showToast('Voice input failed. Please try again.', 'error');
  };
}

/* ═══════════════════════════════════════════════════════
   FOOTER YEAR
═══════════════════════════════════════════════════════ */
function updateFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ═══════════════════════════════════════════════════════
   EVENT LISTENERS — WIRE EVERYTHING UP
═══════════════════════════════════════════════════════ */
function initEventListeners() {

  // ── Ingredient Input ──────────────────────────────
  const input = document.getElementById('ingredient-input');
  const addBtn = document.getElementById('add-btn');

  input.addEventListener('input', () => {
    const val = input.value.trim();
    showAutocomplete(val);
    updateGenerateButton();
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { e.preventDefault(); navigateAutocomplete(1); return; }
    if (e.key === 'ArrowUp')   { e.preventDefault(); navigateAutocomplete(-1); return; }
    if (e.key === 'Escape')    { hideAutocomplete(); return; }
    if (e.key === 'Enter') {
      e.preventDefault();
      if (selectHighlightedAutocomplete()) return;
      if (input.value.trim()) addIngredients(input.value);
    }
    if (e.key === ',') {
      e.preventDefault();
      if (input.value.replace(',', '').trim()) addIngredients(input.value.replace(',', ''));
    }
  });

  input.addEventListener('blur', () => setTimeout(hideAutocomplete, 150));

  addBtn.addEventListener('click', () => {
    if (input.value.trim()) addIngredients(input.value);
  });

  // ── Generate button ───────────────────────────────
  document.getElementById('generate-btn').addEventListener('click', generateRecipes);

  // ── Surprise Me ───────────────────────────────────
  document.getElementById('surprise-btn').addEventListener('click', surpriseMe);

  // ── Dark Mode ─────────────────────────────────────
  document.getElementById('dark-mode-toggle').addEventListener('click', toggleTheme);

  // ── Filter chips ──────────────────────────────────
  document.querySelectorAll('.filter-chip').forEach(btn => {
    btn.addEventListener('click', () => toggleFilter(btn));
  });

  document.getElementById('clear-filters-btn').addEventListener('click', clearAllFilters);

  // ── Reset filters (no-results state) ─────────────
  document.getElementById('reset-filters-btn').addEventListener('click', () => {
    clearAllFilters();
    if (state.ingredients.length > 0) generateRecipes();
  });

  // ── Results search ────────────────────────────────
  document.getElementById('results-search').addEventListener('input', e => {
    state.resultSearchQuery = e.target.value.trim();
    applyFiltersAndRender();
  });

  // ── Sort select ───────────────────────────────────
  document.getElementById('sort-select').addEventListener('change', e => {
    state.sortBy = e.target.value;
    applyFiltersAndRender();
  });

  // ── Nav tab switches ──────────────────────────────
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => switchView(tab.dataset.view));
  });

  // ── Kitchen sub-tabs ──────────────────────────────
  document.querySelectorAll('.kitchen-tab').forEach(tab => {
    tab.addEventListener('click', () => switchKitchenView(tab.dataset.kview));
  });

  // ── Clear favorites ───────────────────────────────
  document.getElementById('clear-favorites-btn').addEventListener('click', () => {
    if (state.favorites.size === 0) { showToast('No favorites to clear', 'info'); return; }
    if (!confirm('Clear all favorites?')) return;
    state.favorites.clear();
    persistFavorites();
    updateFavBadge();
    renderFavoritesGrid();
    renderKitchenStats();
    showToast('Favorites cleared', 'info');
  });

  // ── Go discover button (from empty favorites) ─────
  document.getElementById('go-discover-btn').addEventListener('click', () => switchView('discover'));

  // ── Modal open/close ──────────────────────────────
  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (!document.getElementById('modal-overlay').classList.contains('modal-overlay--open')) return;
      closeModal();
    }
  });

  // ── Modal tabs ────────────────────────────────────
  document.querySelectorAll('.modal-tab').forEach(tab => {
    tab.addEventListener('click', () => switchModalTab(tab.dataset.mview));
  });

  // ── Servings adjuster ─────────────────────────────
  document.getElementById('servings-decrease').addEventListener('click', () => adjustServings(-1));
  document.getElementById('servings-increase').addEventListener('click', () => adjustServings(1));

  // ── Modal favorite button ─────────────────────────
  document.getElementById('modal-fav-btn').addEventListener('click', () => {
    if (state.currentRecipeId) toggleFavorite(state.currentRecipeId);
  });

  // ── Modal shopping button ─────────────────────────
  document.getElementById('modal-shopping-btn').addEventListener('click', () => {
    const recipe = RECIPE_DB.find(r => r.id === state.currentRecipeId);
    if (!recipe) return;
    addMissingIngredientsToShoppingList(recipe);
    showToast('Missing ingredients added to shopping list 🛒', 'success');
  });

  // ── Modal copy button ─────────────────────────────
  document.getElementById('modal-copy-btn').addEventListener('click', copyRecipe);

  // ── Shopping list controls ────────────────────────
  document.getElementById('check-all-btn').addEventListener('click', checkAllShoppingItems);
  document.getElementById('clear-checked-btn').addEventListener('click', clearCheckedItems);
  document.getElementById('copy-list-btn').addEventListener('click', copyShoppingList);
}

/* ═══════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════ */
function init() {
  loadPersistedData();
  initTheme();
  initEventListeners();
  initVoiceInput();
  updateFooterYear();

  // Restore chips from persisted ingredients
  renderChips();
  updateGenerateButton();

  // Restore fav badge
  updateFavBadge();
  renderKitchenStats();

  // If ingredients were persisted, auto-generate
  if (state.ingredients.length > 0) {
    generateRecipes();
  }
}

document.addEventListener('DOMContentLoaded', init);
