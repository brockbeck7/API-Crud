const Header = ({ title }) => {

    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: "Brock & Aubrey Grocery List"
}

export default Header;