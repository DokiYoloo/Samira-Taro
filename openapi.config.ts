const { generateService } = require('@umijs/openapi').default

generateService({
  requestLibPath: "import request from '@/utils/request'",
  schemaPath: process.env.TARO_APP_BASE_URL + '/api/v1/api-docs',
  serversPath: './src/generated',
})

