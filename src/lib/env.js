// src/lib/env.js

/**
 * Получить обязательную переменную окружения
 * @param {string} name - Имя переменной окружения
 * @returns {string} Значение переменной
 * @throws {Error} Если переменная не найдена
 */
function getEnvVariable(name) {
  const value = process.env[name];
  
  if (value === undefined || value === null || value === '') {
    throw new Error(`Environment variable not found: ${name}`);
  }
  
  return value;
}

/**
 * Проверить несколько переменных окружения
 * @param {string[]} requiredVars - Массив имён обязательных переменных
 * @throws {Error} Если какая-либо переменная не найдена
 */
function validateEnvVariables(requiredVars) {
  const missingVars = [];
  
  for (const varName of requiredVars) {
    if (!process.env[varName]) {
      missingVars.push(varName);
    }
  }
  
  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}`
    );
  }
}

/**
 * Объект с обязательными переменными окружения
 * Будет выбрасывать ошибку при доступе, если переменной нет
 */
const env = {
  get DATABASE_URL() {
    return getEnvVariable('DATABASE_URL');
  },
  // Добавьте другие обязательные переменные здесь:
  // get API_KEY() {
  //   return getEnvVariable('API_KEY');
  // },
  // get SECRET_TOKEN() {
  //   return getEnvVariable('SECRET_TOKEN');
  // },
};

/**
 * Список всех обязательных переменных окружения
 * Можно использовать для предварительной проверки при старте приложения
 */
const REQUIRED_ENV_VARS = [
  'DATABASE_URL',
  // добавьте другие обязательные переменные
];

// Экспортируем всё необходимое
module.exports = {
  getEnvVariable,
  validateEnvVariables,
  env,
  REQUIRED_ENV_VARS,
};

// Или если вы используете ES6 модули:
// export { getEnvVariable, validateEnvVariables, env, REQUIRED_ENV_VARS };
