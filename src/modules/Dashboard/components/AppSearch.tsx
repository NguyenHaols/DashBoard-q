import { OnSearchType } from '@/hooks/useFilter';
import ClearIcon from '@mui/icons-material/Clear';
import {
    IconButton,
    InputAdornment,
    TextField,
    TextFieldProps,
} from '@mui/material';
import _ from 'lodash';
import { useState } from 'react';
type Props = {
    onChange?: OnSearchType;
    delay?: number;
} & TextFieldProps;

export default function AppSearch({
    onChange = () => {},
    delay = 300,
    ...props
}: Props) {
    const [value, setValue] = useState('');

    const debounceSearchChange = _.debounce(onChange, delay);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        debounceSearchChange(e);
    };

    const handleClear = () => {
        setValue('');
        debounceSearchChange({
            target: { value: '' },
        } as React.ChangeEvent<HTMLInputElement>);
    };

    return (
        <TextField
            value={value}
            onChange={handleChange}
            placeholder="Enter search"
            size="small"
            sx={{ bgcolor: 'white' }}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton disableRipple onClick={handleClear}>
                            <ClearIcon
                                sx={{
                                    visibility: value ? 'visible' : 'hidden',
                                }}
                            />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
            {...props}
        />
    );
}
