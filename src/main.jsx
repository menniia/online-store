import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import './index.css'
import store from './app/store'

const root = createRoot(document.getElementById('root'))

const render = () => {
  root.render(
    <StrictMode>
      <App
        state={store.getState()}
        dispatch={store.dispatch}
      />
    </StrictMode>,
  )
}

render()

store.subscribe(render)