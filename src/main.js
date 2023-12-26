import { createApp } from 'vue'
import App from './App.vue'
import { GridLayout, GridItem } from 'grid-layout-plus'

const app=createApp(App)
app
  .component('GridLayout', GridLayout)
  .component('GridItem', GridItem)

app.mount('#app')
