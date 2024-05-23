const SelectOption = (props) => {
    return (
        <option {...props} >{props.children}</option>
    )
}

export default SelectOption