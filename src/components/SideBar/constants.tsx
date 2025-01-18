/* eslint-disable @typescript-eslint/ban-ts-comment */
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Navigation } from '@toolpad/core/AppProvider';
import {
    Banknote,
    CircleDollarSign,
    FileCheck,
    Home,
    LayoutTemplate,
    List,
    LogOut,
    User,
} from 'lucide-react';

export const NAVIGATION: Navigation = [
    {
        kind: 'header',
        title: <p>Main items</p>,
    },
    {
        segment: 'services',
        // @ts-ignore
        title: <p className="text-red-400">Services</p>,
        icon: <List size={14} />,
    },
    {
        segment: 'my-order',
        title: 'Orders',
        icon: <ShoppingCartIcon />,
    },
    {
        segment: 'dashboard',
        title: 'Statistic',
        icon: <Home />,
    },
    {
        segment: 'refund',
        title: 'Refund',
        icon: <CircleDollarSign />,
    },
    {
        segment: 'cash-flow',
        title: 'Cash flow',
        icon: <Banknote />,
    },
    {
        segment: 'my-profile',
        title: 'My profile',
        icon: <User />,
    },
    {
        segment: 'api',
        title: 'API',
        icon: <FileCheck />,
    },
    {
        segment: 'platform',
        title: 'Platform',
        icon: <LayoutTemplate />,
    },
    {
        kind: 'divider',
    },
    {
        kind: 'header',
        title: 'More',
    },
    {
        title: 'Logout',
        icon: <LogOut />,
    },
];
