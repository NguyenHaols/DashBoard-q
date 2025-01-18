import { formatDate } from '@/helper';
import {
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { DeleteIcon, EditIcon } from 'lucide-react';
import Image from 'next/image';
import { PlatformData } from '../types';

export default function PlatFormTable({ data }: { data: PlatformData[] }) {
    console.log('🚀 ~ PlatFormTable ~ data:', data);
    const rows = data.map((item) => ({
        id: item.id,
        name: item.name,
        icon: item.icon,
        dateCreated: item.createdAt,
    }));

    const handleEdit = () => {
        console.log('Editing:');
    };

    const handleDelete = () => {
        console.log('Deleting:');
    };
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead sx={{ bgcolor: '#fafafa' }}>
                    <TableRow>
                        <TableCell sx={{ fontWeight: '700' }}>No.</TableCell>
                        <TableCell sx={{ fontWeight: '700' }}>Name</TableCell>
                        <TableCell sx={{ fontWeight: '700' }}>Icon</TableCell>
                        <TableCell sx={{ fontWeight: '700' }}>
                            Date created
                        </TableCell>

                        <TableCell sx={{ fontWeight: '700' }}>
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((item, index) => (
                        <TableRow key={item.id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>
                                <Image
                                    src={item.icon}
                                    alt={item.name}
                                    width="24"
                                    height="24"
                                />
                            </TableCell>
                            <TableCell>
                                {formatDate(item.dateCreated)}
                            </TableCell>
                            <TableCell>
                                <IconButton onClick={() => handleEdit()}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={() => handleDelete()}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
