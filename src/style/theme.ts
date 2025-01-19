import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Màu chính
        },
        secondary: {
            main: '#9c27b0', // Màu phụ
        },
        error: {
            main: '#f44336', // Màu lỗi
        },
        background: {
            default: 'rgb(241, 245, 249)',
        },
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
        h1: {
            fontWeight: 700,
        },
        h2: {
            fontWeight: 700,
        },
        h3: {
            fontWeight: 700,
        },
        h4: {
            fontWeight: 700,
            color: '#3f4254',
        },
        h5: {
            fontWeight: 700,
            color: '#3f4254',
        },
        h6: {
            fontWeight: 700,
            color: '#3f4254',
            fontSize: '1rem',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
    },
});

export default theme;
