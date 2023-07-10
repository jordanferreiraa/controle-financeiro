import { createRoot } from 'react-dom/client'
import GlobalSttyle from './styles/global'
import Header from './components/Header'
import Resume from './components/Resume'

const root = createRoot(document.querySelector('#root'))

root.render()

function App() {

  return (
    <>
      <Header />
      <Resume />
      <GlobalSttyle/>
    </>
  )
}

export default App
