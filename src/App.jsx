import { useEffect, useState } from 'react'
import * as tf from '@tensorflow/tfjs'
import Video from './Video'
import './App.css'

function App() {
  const [model, setModel] = useState()
  useEffect(() => {
    async function loadModel() {
      const m = await tf.loadLayersModel('/nn/model.json')
      setModel(m)
    }

    loadModel();
  }, [])

  return (
    <div className="w-screen h-screen">
      <Video className="w-screen h-screen" />
    </div>
  )
}

export default App
