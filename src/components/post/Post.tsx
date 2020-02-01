import React from 'react'

export interface IPostProps {
  postId?: string
}

const App = (props: IPostProps) => {
  console.log(props)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to {typeof 'postId'}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App