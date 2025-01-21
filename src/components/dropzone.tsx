/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { ReactNode, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import UploadIcon from '../../public/cloud-computing.svg';

const activeStyle = {
    borderColor: '#2196f3 !important',
};

const acceptStyle = {
    borderColor: '#00e676 !important',
};

const rejectStyle = {
    borderColor: '#ff1744 !important',
};

interface DropzoneProps {
    getFile?: (file: File | undefined, type: any) => void;
    acceptFiles: any;
    name?: any;
    uploadTitle: ReactNode;
    uploadProgress?: number;
    iconSrc?: string;
}

export default function Dropzone({ acceptFiles, uploadTitle }: DropzoneProps) {
    const theme = useTheme();

    // const onDrop = useCallback((acceptedFiles) => {
    //     console.log('🚀 ~ onDrop ~ acceptedFiles:', acceptedFiles);
    //     // Do something with the files
    // }, []);

    const {
        getRootProps,
        getInputProps,
        isDragAccept,
        isDragReject,
        isDragActive,
    } = useDropzone({
        accept: acceptFiles,
        maxFiles: 1,
        // onDrop,
        noClick: true,
    });

    const style_accept_file: any = useMemo(
        () => ({
            ...(isDragActive ? activeStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {}),
        }),
        [isDragActive, isDragAccept, isDragReject]
    );
    return (
        <Box
            {...getRootProps()}
            component="label"
            sx={{
                width: '100%',
                height: '100px',
                bgcolor: 'white',
                color: 'black',
                border: `1px solid #ccc !important`,
                ':hover': {
                    borderColor: `${theme.palette.primary.main} !important`,
                },
                borderColor: style_accept_file,
            }}
        >
            <Box
                height={'100%'}
                justifyContent={'center'}
                display={'flex'}
                alignItems={'center'}
                flexDirection={'column'}
            >
                <Image
                    src={UploadIcon}
                    width={40}
                    height={40}
                    alt="Upload Icon"
                />
                <Typography variant="h6" color="#ababab">
                    {uploadTitle}
                </Typography>
            </Box>
            <input {...getInputProps()} type="file" accept="image/*" hidden />
        </Box>
    );
}
