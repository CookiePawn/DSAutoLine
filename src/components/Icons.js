import { 
    IoIosMenu,
    IoIosSearch,
    IoMdClose,
} from 'react-icons/io'
import { 
    SlArrowDown, 
    SlArrowUp,
} from "react-icons/sl";


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




/**
 * X 아이콘
 * @param {*} props 
 * @returns 
 */
export const CloseIcon = (props) => {
    return (
        <IoMdClose size={props.size} color={props.color}/>
    )
}



/**
 * up 아이콘
 * @param {*} props 
 * @returns 
 */
export const UpIcon = (props) => {
    return (
        <SlArrowUp size={props.size} color={props.color}/>
    )
}




/**
 * down 아이콘
 * @param {*} props 
 * @returns 
 */
export const DownIcon = (props) => {
    return (
        <SlArrowDown size={props.size} color={props.color}/>
    )
}