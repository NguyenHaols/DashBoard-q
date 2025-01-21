import { useModalStore } from '@/hooks/useModal';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Box,
    Button,
    IconButton,
    Modal,
    TextField,
    Typography,
    useTheme,
} from '@mui/material';
import { X } from 'lucide-react';
import Image from 'next/image';
import { Controller, useForm } from 'react-hook-form';
import { infer as Infer, string, z } from 'zod';
import TrashIcon from '../../public/recycle-bin.svg';
import Dropzone from './dropzone';

interface Props {}

export default function CreateUploadPlatForm(props: Props) {
    const theme = useTheme();
    const closeModal = useModalStore((state) => state.closeModal);
    const dataEdit = useModalStore((state) => state.dataEdit);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
    };

    const platFormScema = z.object({
        name: string().max(16),
        icon: string(),
    });
    type Schema = Infer<typeof platFormScema>;

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<Schema>({
        mode: 'onChange',
        resolver: zodResolver(platFormScema),
        defaultValues: {
            name: dataEdit.name || '',
            icon: dataEdit.icon || '',
        },
    });

    // const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = event.target.files?.[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onload = () => {
    //             // setRowItem({});
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };

    const onSubmit = (data: Schema) => {
        console.log('Submitted Data:', data);
    };

    return (
        <div>
            <Modal
                {...props}
                open
                onClose={closeModal}
                sx={{
                    '.MuiBox-root': {
                        border: 'none',
                        borderRadius: '0.5rem',
                        outline: 'none',
                    },
                }}
            >
                <Box sx={style}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box
                            display={'flex'}
                            justifyContent={'space-between'}
                            p={'1rem 2rem 0rem 2rem'}
                            alignItems={'center'}
                        >
                            <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h2"
                            >
                                {dataEdit?.id ? ' Update' : 'Create'}
                            </Typography>
                            <IconButton onClick={closeModal}>
                                <X />
                            </IconButton>
                        </Box>
                        <Box p={'0rem 2rem 2rem 2rem'}>
                            <Box display={'flex'} alignItems={'center'} mt={2}>
                                <Controller
                                    name="name"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            variant="outlined"
                                            label="Name"
                                            size="small"
                                            error={!!errors.name}
                                            helperText={errors.name?.message}
                                            sx={{
                                                width: '100%',
                                                '& .MuiOutlinedInput-root': {
                                                    '&:hover fieldset': {
                                                        borderColor:
                                                            theme.palette
                                                                .primary.main,
                                                    },
                                                },
                                            }}
                                        />
                                    )}
                                ></Controller>
                            </Box>

                            <Box display={'flex'} alignItems={'center'} mt={2}>
                                <Dropzone
                                    uploadTitle={
                                        'Drag and drop your image icon here'
                                    }
                                    acceptFiles={{
                                        'image/*': ['.jpeg', '.png'],
                                    }}
                                />
                            </Box>
                            {dataEdit?.id && (
                                <Box
                                    display={'flex'}
                                    marginTop={'1rem'}
                                    bgcolor={'#f5f5f5'}
                                    p={'.5rem'}
                                >
                                    <Box
                                        width={'100%'}
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        gap={1}
                                        alignItems={'center'}
                                    >
                                        <Box>
                                            <Image
                                                src={dataEdit.icon}
                                                alt="icon"
                                                width={50}
                                                height={1}
                                            />
                                        </Box>
                                        <Typography
                                            variant="body2"
                                            flex={3}
                                            sx={{
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                textWrap: 'nowrap',
                                            }}
                                        >
                                            {dataEdit.icon}
                                        </Typography>
                                        <IconButton sx={{ width: '40px' }}>
                                            <Image
                                                alt="icon"
                                                width={25}
                                                height={1}
                                                src={TrashIcon}
                                            />
                                        </IconButton>
                                    </Box>
                                </Box>
                            )}

                            <Box
                                display={'flex'}
                                justifyContent={'flex-end'}
                                gap={2}
                                mt={2}
                            >
                                <Button
                                    onClick={closeModal}
                                    variant="outlined"
                                    sx={{ width: '10%' }}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ width: '10%' }}
                                >
                                    {dataEdit?.id ? ' Update' : 'Create'}
                                </Button>
                            </Box>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
