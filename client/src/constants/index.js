import {FiUser, FiDollarSign, FiGrid, FiRadio} from "react-icons/fi"
import {BiMoneyWithdraw, BiLogOut} from "react-icons/bi"


export const navlinks = [
    {
      name: 'Dashboard',
      icon: FiGrid,
      link: '/',
    },
    {
      name: 'Campaign',
      icon: FiRadio,
      link: '/create',
    },
    {
      name: 'Payment',
      icon: FiDollarSign,
      link: '/payment',
      disabled: true,
    },
    {
      name: 'Withdraw',
      icon: BiMoneyWithdraw,
      link: '/withdraw',
      disabled: true,
    },
    {
      name: 'Profile',
      icon: FiUser,
      link: '/Profile',
    }
  ];