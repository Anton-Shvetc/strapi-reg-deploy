module.exports = [
  "strapi::errors",
  "strapi::security",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::cors",
    config: {
      origin: [
        "http://darkmode-serve.ru",
        "http://darkmode-serve.ru:443",
        "https://1e14-185-67-246-119.ngrok-free.app",
      ],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
      keepHeaderOnError: true,
    },
  },
];

// module.exports = {
//   settings: {
//     cors: {
//       origin: [
//         "http://darkmode-serve.ru",
//         "https://1e14-185-67-246-119.ngrok-free.app",
//       ],
//       methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
//       headers: [
//         "Content-Type",
//         "Authorization",
//         "X-Frame-Options",
//         "User-Agent",
//         "X-Requested-With",
//         "If-Modified-Since",
//         "Cache-Control",
//         "Accept-Language",
//       ],
//     },
//   },
// };
