import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const supabase = createClient("https://lulybjdirjvvpfqgfbzk.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1bHliamRpcmp2dnBmcWdmYnprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMwNDMxNTcsImV4cCI6MjAyODYxOTE1N30.4Aoczgu7M2H3dX8zwBySn2tvr3YpR-2zf2gh88cMreY");


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
