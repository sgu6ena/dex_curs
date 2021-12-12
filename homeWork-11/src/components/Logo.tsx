
const Logo = ({name, path}: { path: string; name: string; }) => {
    return (
        <div className={'logo'}>
            <img src={path} alt={name} className={'logo-img'}/>
            <div style={{ margin: '10px'}}>{name.toUpperCase()}</div>
        </div>
    )
}

export default Logo;