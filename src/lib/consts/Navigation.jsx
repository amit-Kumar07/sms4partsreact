
import {
	HiOutlineAnnotation,
} from 'react-icons/hi'

import {BsGrid3X3GapFill} from 'react-icons/bs';
import {GiNetworkBars} from 'react-icons/gi';
import {IoMdSettings} from 'react-icons/io';
export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <BsGrid3X3GapFill fontSize={40}/>
	},
	{
		key: 'reports',
		label: 'Reports',
		path: '/reports',
		icon: <GiNetworkBars fontSize={40}/>
	},
	{
		key: 'messages',
		label: 'Messages',
		path: '/messages',
		icon: <HiOutlineAnnotation fontSize={40}/>
	},
    {
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <IoMdSettings fontSize={40}/>
	},
]

export const DASHBOARD_LINKS = [
	{
		key: 'requests',
		label:'REQUESTS',
	},
	{
		key: 'payments',
		label:'PAYMENTS',
		
	},
	{
		key: 'shipment',
		label:'SHIPMENT',
	},
	{
		key: 'openissues',
		label:'OPEN ISSUES',
	},
	{
		key: 'totalorders',
		label:'TOTAL ORDERS',
	},
	
]



