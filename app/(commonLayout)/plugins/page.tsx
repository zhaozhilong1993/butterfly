import PluginPage from '@/app/components/plugins/plugin-page'
import PluginsPanel from '@/app/components/plugins/plugin-page/plugins-panel'
import { getLocaleOnServer } from '@/i18n/server'

const PluginList = async () => {
  const locale = await getLocaleOnServer()
  return (
    <PluginPage
      plugins={<PluginsPanel />}
    />
  )
}

export default PluginList
