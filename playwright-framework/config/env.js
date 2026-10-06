/**
 * Environment configuration.
 * LOGIN_URL is the Keycloak (MicroCube_QA realm) authorization endpoint
 * for the LauncherApp client.
 */
const ENV = {
  BASE_URL: 'https://192.168.10.227',
  LOGIN_URL:
    'http://192.168.10.227:9080/realms/MicroCube_QA/protocol/openid-connect/auth?client_id=LauncherApp&redirect_uri=https%3A%2F%2F192.168.10.227%2Flauncher-app%2Ffeature%2Fuserapp&state=cc5ecd1f-b627-4fff-9146-518b64c25528&response_mode=fragment&response_type=code&scope=openid&nonce=a607a049-baaa-47be-9491-46c5614aca1b&code_challenge=1FbkK1lTwhRRLig7IwpKFHt7rqu4oGTnXGpSwu_X4TE&code_challenge_method=S256',
};

module.exports = { ENV, ENV_NAME: process.env.TEST_ENV || 'qa' };
