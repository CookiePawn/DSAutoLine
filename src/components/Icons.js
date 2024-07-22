import { 
    IoIosMenu,
    IoIosSearch,
} from 'react-icons/io'

export const MenuIcon = (props) => {
    return (
        <IoIosMenu size={props.size} color={props.color}/>
    )
}

export const SearchIcon = (props) => {
    return (
        <IoIosSearch size={props.size} color={props.color}/>
    )
}