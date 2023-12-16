module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 443),
  app: {
    keys: env.array("APP_KEYS"),
  },
  url: "https://darkmode-serve.ru/",
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
