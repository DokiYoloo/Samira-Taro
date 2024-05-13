import type {UserConfigExport} from "@tarojs/cli";

export default {
  logger: {
    quiet: false,
    stats: true
  },
  mini: {},
  h5: {
    devServer: {
      host: 'localhost',
      port: 10086,
      proxy: {
        '/api': {
          target: process.env.TARO_APP_PROXY,
          changeOrigin: true
        }
      }
    }
  }
} satisfies UserConfigExport
