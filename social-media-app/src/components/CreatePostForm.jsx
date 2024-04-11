import {useState} from "react"

function CreatePostForm(props){

    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("")
    
     const handleChange = (event) => {
            setAuthor(event.target.value)
        }

     const handleContentChange = (event) => {
            setContent(event.target.value)
        }

    return(
        <form onSubmit={(event)=>{
            event.preventDefault()

            if(author !== "") {
                props.handleSubmit({author: author, content: content})
                setAuthor('')
                setContent('')
            } else {
                alert("Posts need a message")
            }

        }}>
        <label>
        <h3>Author</h3>
        <input type="text" onChange={handleChange} value={author}/>
        </label>

        <label>
        <h3>Content</h3>
        <input type="text" onChange={handleContentChange} value={content}/>
        </label>

        <input type="submit"/>
        </form>
    )
}

export default CreatePostForm