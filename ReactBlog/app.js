const SinglePost = (props) => {

    const {title, body} = props.post;

     
    return (
        <div className="row">
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{title}</span>
                        <p>{body}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


const PostList = (props) => {
    const posts = props.data

    return (
        <div>
            {posts.map((post) => <SinglePost post={post} key={post.id} />)}
        </div>

    )
}

const Main = (props) => {
    const posts = props.data

    return (
        <div className="container">
            <PostList data={posts}/>
        </div>
    )
}


const Title = (props) => {
    return (

        <nav>
            <div className="nav-wrapper">
                <a href="" className="brand-logo">{props.title}</a>
            </div>
        </nav>

    )
}

const App = (props) => {
    const posts = props.data

    return (
        <div>
            <Title title="bla" />
            <Main data={posts} />
        </div>
    )
}


const divEl =  document.querySelector("#root");
ReactDOM.render(<App data={postData}/>, divEl)

