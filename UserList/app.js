const Main = () => {
return (
    
)
}

const Header = (props) => {
    
    return (
        <nav>
            <div class="nav-wrapper">
                <a href="" class="brand-logo">{props.title}</a>
            </div>
        </nav>
    )
}

const App = () => {
    const title = "React Users"
    return (
        <Header title={title}/>
        <Main/>
    )
}

const dom = document.querySelector("#root");
ReactDOM.render(< App data={
    usersData
}
/>, dom);