/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Navigation } from '@toolpad/core/AppProvider';
import { Home, LayoutTemplate, LogOut } from 'lucide-react';

export const NAVIGATION: Navigation = [
    {
        kind: 'header',
        title: 'Main items',
    },
    // {
    //     segment: 'services',
    //     // @ts-ignore
    //     title: <span className="text-sm">Services</span>,
    //     icon: <List size={16} />,
    // },
    // {
    //     segment: 'my-order',
    //     title: <span className="text-sm">My order</span>,
    //     icon: <ShoppingCartIcon ize={16} />,
    // },
    {
        segment: 'dashboard',
        // @ts-ignore
        title: <span>Statistic</span>,
        icon: <Home />,
    },
    // {
    //     segment: 'refund',
    //     title: 'Refund',
    //     icon: <CircleDollarSign />,
    // },
    // {
    //     segment: 'cash-flow',
    //     title: 'Cash flow',
    //     icon: <Banknote />,
    // },
    // {
    //     segment: 'my-profile',
    //     title: 'My profile',
    //     icon: <User />,
    // },
    // {
    //     segment: 'api',
    //     title: 'API',
    //     icon: <FileCheck />,
    // },
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
        segment: 'login',
        title: 'Logout',
        icon: <LogOut />,
    },
];
