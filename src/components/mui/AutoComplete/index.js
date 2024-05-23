import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const AutoComplete = ({
    options,
    label,
    limitTags,
    size,
    getOptionLabel,
    multiple,
    value,
    onChange,
    freeSolo,
    filterOptions
}) => {
    return (
        <Autocomplete
            filterOptions={filterOptions}
            freeSolo={freeSolo}
            limitTags={limitTags}
            multiple={multiple}
            options={options}
            disableCloseOnSelect={multiple}
            getOptionLabel={getOptionLabel}
            fullWidth
            value={value}
            onChange={onChange}
            size={size}
            renderInput={(params) => (
                <TextField {...params} label={label} />
            )}
        />
    );
}

export default AutoComplete;