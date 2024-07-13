import DemoBlock from './demo-block/demo-block'
import * as Components from '@/components/index'
import LineChart from '@/components/Charts/LineChart'
import BarChart from '@/components/Charts/BarChart'
import PieChart from '@/components/Charts/PieChart'
import Sidebar from '@/components/SidebarPlugin/SideBar'
import SidebarItem from '@/components/SidebarPlugin/SidebarItem'
import Notification from '@/components/NotificationPlugin/Notification'
import Dashboard from '@/plugins/dashboard-plugin'
import VueClipboard from 'vue-clipboard2'
import Element from 'element-ui'
import './docs.css'
import './doc_styles.scss'
import getElements from './utils/get-sidebar-elements';
import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import './demo.css'

export default ({
                  Vue, // the version of Vue being used in the VuePress app
                  options, // the options for the root Vue instance
                  router, // the router instance for the app
                  siteData
                }) => {
  Vue.use(VueClipboard);
  Vue.use(Element);
  locale.use(lang);
  Vue.use(Dashboard);
  Vue.component('demo-block', DemoBlock);
  Vue.component(LineChart.name, LineChart);
  Vue.component(BarChart.name, BarChart);
  Vue.component(PieChart.name, PieChart);
  let componentEntries = Object.entries(Components);
  for(let [name, component] of componentEntries) {
    Vue.component(component.name || name, component)
  }
  let allComponents = Object.values(Components);
  allComponents = allComponents.concat([LineChart, BarChart, PieChart, SidebarItem, Sidebar, Notification]);
  Vue.prototype.$docs = allComponents;
  let docComponents = getElements(componentEntries);
  siteData.themeConfig.sidebar = siteData.themeConfig.sidebar.concat(docComponents);
}
