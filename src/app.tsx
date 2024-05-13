import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
import './app.less'
import { QueryProvider } from "@/utils/QueryProvider";
import { useAppUpdate } from "@/utils/hooks";

function App({ children }: PropsWithChildren<any>) {

  useLaunch(() => {
    console.log('App launched.')
  })

  useAppUpdate()

  // children 是将要会渲染的页面
  return (
    <QueryProvider>
      {children}
    </QueryProvider>
  )
}

export default App
