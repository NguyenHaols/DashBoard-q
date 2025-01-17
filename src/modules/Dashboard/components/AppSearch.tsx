import { OnSearchType } from '@/hooks/useFilter';
import ClearIcon from '@mui/icons-material/Clear';
import {
    IconButton,
    InputAdornment,
    TextField,
    TextFieldProps,
} from '@mui/material';
import _ from 'lodash';
type Props = {
    value?: string;
    onChange?: OnSearchType;
    delay?: number;
} & TextFieldProps;

export default function AppSearch({
    value = '',
    onChange = () => {},
    delay = 300,
    ...props
}: Props) {
    const debounceSearchChange = _.debounce(onChange, delay);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        debounceSearchChange({
            target: { value: e.target.value },
        } as React.ChangeEvent<HTMLInputElement>);
    };

    const handleClear = () => {
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
