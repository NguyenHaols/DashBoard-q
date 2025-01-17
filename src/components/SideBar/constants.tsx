import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Navigation } from '@toolpad/core/AppProvider'
import {
  CircleDollarSign,
  Banknote,
  User,
  FileCheck,
  List,
  LogOut,
  Home
} from 'lucide-react'

export const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items'
  },
  {
    segment: 'services',
    title: 'Services',
    icon: <List />
  },
  {
    segment: 'my-order',
    title: 'Orders',
    icon: <ShoppingCartIcon />
  },
  {
    segment: 'dashboard',
    title: 'Statistic',
    icon: <Home />
  },
  {
    segment: 'refund',
    title: 'Refund',
    icon: <CircleDollarSign />
  },
  {
    segment: 'cash-flow',
    title: 'Cash flow',
    icon: <Banknote />
  },
  {
    segment: 'my-profile',
    title: 'My profile',
    icon: <User />
  },
  {
    segment: 'api',
    title: 'API',
    icon: <FileCheck />
  },
  {
    kind: 'divider'
  },
  {
    kind: 'header',
    title: 'More'
  },
  {
    title: 'Logout',
    icon: <LogOut />
  }
]
