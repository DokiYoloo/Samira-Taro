import Taro from "@tarojs/taro"

export const isDev = () => process.env.NODE_ENV === 'development' || window?.navigator.userAgent.includes('wechatdevtools')
export const isWeapp = () => process.env.TARO_ENV === 'weapp'
export const isH5 = () => process.env.TARO_ENV === 'h5'

/**
 * 检测是否为受限模式
 */
export const isRestricted = () => {
  if (isH5()) {
    return false
  } else if (isWeapp()) {
    const { scene } = Taro.getEnterOptionsSync()
    const RESTRICTED_SCENES = [
      1155, // 单页模式
    ]
    return RESTRICTED_SCENES.includes(scene)
  } else {
    warnNoImplementation('isRestricted')
    return true
  }
}

/**
 * 检测是否为桌面模式
 */
export const isDesktop = () => {
  const DESKTOP_PLATFORMS = ['windows', 'mac']
  const { platform } = Taro.getSystemInfoSync()
  return DESKTOP_PLATFORMS.includes(platform)
}

/**
 * 检测是否为微信浏览器
 */
export const isWxBrowser = () => {
  return /micromessenger/i.test(window.navigator.userAgent)
}

/**
 * 抛出未实现的错误
 */
export class UnsupportedPlatformError extends Error {
  constructor(location?: string) {
    super(`[${location}] unhandled platform: ${process.env.TARO_ENV}`)
  }
}

export const warnNoImplementation = (location?: string) => {
  console.warn(`[${location}] no implementation: ${process.env.TARO_ENV}`)
}
