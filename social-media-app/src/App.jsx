import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Feed from './components/Feed'
import CreatePostForm from './components/CreatePostForm'
import './App.css'
import {useState} from 'react'

function App(){

  let [feedData, setFeedData] = useState([])

  let onNewPost = (data) => {
    setFeedData([...feedData, data])
  }


  return(
    <div>
      <h1>Fakebook!</h1>
        <CreatePostForm handleSubmit={onNewPost}/>
        <Feed data={feedData}/>
    </div>
  )

}

export default App
