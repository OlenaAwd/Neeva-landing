import classes from './NavBar.module.css';
import NavLinks from './NavLinks';

export default function Navigation (){
    return (
        <nav className={classes.navigation}>
        <NavLinks />
        </nav>
    );
}