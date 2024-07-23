import { 
    IoIosMenu,
    IoIosSearch,
} from 'react-icons/io'


/**
 * 메뉴 아이콘
 * @param {*} props 
 * @returns 
 */
export const MenuIcon = (props) => {
    return (
        <IoIosMenu size={props.size} color={props.color}/>
    )
}


/**
 * 검색 아이콘
 * @param {*} props 
 * @returns 
 */
export const SearchIcon = (props) => {
    return (
        <IoIosSearch size={props.size} color={props.color}/>
    )
}