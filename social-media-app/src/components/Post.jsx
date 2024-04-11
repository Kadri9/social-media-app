import {useState} from 'react'


function ReplyForm(props){
    
    const [reply, setReply] = useState("")

    return(
        <form onSubmit={(event)=>{
            event.preventDefault()

            props.onNewReply(reply)

            setReply('')
        }}>

            <textarea placeholder='Add your comment!' onChange={(event)=>{
                setReply(event.target.value)
            }}  value={reply}/>

            <input type="submit"/>

        </form>
    )
}

function ReplyList(props){

    let renderList = () => {
        console.log(props.data)
        return props.data.map((data)=>{
            return <p>{data}</p>
          }) 
    }

    return (
        <div>
            {renderList()}
        </div>
    )

}


function Post(props){

    let [likes, setLikes] = useState(0)

    let [replies, setReplies] = useState([])

    let handleLike = (event) => {
        console.log(likes)
        setLikes(likes + 1)
    }

    let handleReply = (reply) => {
      console.log(reply)
      setReplies([...replies, reply])
    }

    return(
        <div className="message-container">
          <h1>{props.author}</h1>
          <h2>{props.content}</h2>
          <h5>Likes: {likes} </h5>
          <div>
              <button onClick={handleLike}>Like!</button>
          </div>

          <div>
              <h4>Comments</h4>
              <ReplyForm onNewReply={handleReply}/>

              <ReplyList data={replies}/>
          </div>

        </div>

    )
}

export default Post