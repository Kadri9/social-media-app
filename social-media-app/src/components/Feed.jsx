import Post from './Post'


function Feed(props){

    let renderPosts = () => {

      return props.data.map((data)=>{
         return <Post author={data.author} content={data.content}/>
      }) 

    }

    return(
        <div>
          {renderPosts()}
        </div>
    )
}

export default Feed