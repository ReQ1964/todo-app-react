import classes from './Header.module.css'
import img from '../../assets/task.png'

const Header = () => {
    return <header className={classes.header}>
        <div className={classes.header__heading}>
                <a href="#"><img src={img} alt="Notepad with a pen" /></a>
                <a href="#"><h1>Todo Track</h1></a>
        </div>
    </header>
}

export default Header