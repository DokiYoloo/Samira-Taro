import Taro, { useLaunch } from "@tarojs/taro";
import { isRestricted, isWeapp } from "@/utils/platformGuard";

/**
 * 应用更新
 */
export const useAppUpdate = () => {
  useLaunch(() => {
    if (isWeapp() && !isRestricted()) {
      const updateManager = Taro.getUpdateManager()
      updateManager.onUpdateReady(function () {
        Taro.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success({ confirm }) {
            if (confirm) {
              Taro.clearStorageSync()
              updateManager.applyUpdate()
            }
          }
        })
      })
    }
  })
}
