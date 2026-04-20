function getEnvVariable(name) {
  const value = process.env[name];
 
  return value;
}

const env = {
  get DATABASE_URL() {
    return getEnvVariable('DATABASE_URL');
  },

module.exports = {
  getEnvVariable,
  validateEnvVariables,
  env,
  REQUIRED_ENV_VARS,
};
