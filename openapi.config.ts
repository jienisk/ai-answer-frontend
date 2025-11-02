const { generateService } = require("@umijs/openapi");

// 这是老版本的，不可用的话用新版本openapi2ts.config.ts
generateService({
  requestLibPath: "import request from '@/request'",
  schemaPath: "http://localhost:8101/api/v2/api-docs",
  serversPath: "./src",
});