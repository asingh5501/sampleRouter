import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Search, Apps, Person, KeyboardArrowDown } from "@mui/icons-material";
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import { Language } from '../index'

function Header() {
    const navigate = useNavigate()
    const [mouseOn, setMouseOn] = useState(false)
    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            name: 'Movies',
            slug: '/contact',
            active: true
        },
        {
            name: 'TV Shows',
            slug: '/contact',
            active: true
        },
        {
            name: 'Live TV',
            slug: '/contact',
            active: true
        },
    ]

    const renderMousseEneter = (id) => {
        setMouseOn(id)
    }

    return (
        <header className='shadow py-2 bg-black text-white sticky top-0'>
            <div>
                <nav className='flex items-center justify-between px-14'>
                    <div className='flex items-center gap-4'>
                        <div>
                            <Link to={'/'}>
                                <button>prime video</button>
                            </Link>
                        </div>
                        <div>
                            <ul className='flex gap-2'>
                                {navItems.map(item => item.active ? (
                                    <li key={item.name}>
                                        <button
                                            onClick={() => navigate(item.slug)}
                                            className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 hover:text-black rounded-md'
                                        >{item.name}</button>
                                    </li>
                                ) : (<></>))}
                            </ul>
                        </div>
                        <div>
                            <Link to={'/'}>
                                <div className='hover:bg-blue-100 hover:text-black rounded-md flex justify-between px-6 py-2'>
                                    <div>
                                        <DashboardCustomizeIcon />
                                    </div>
                                    <div className='ml-2'>
                                        <button className='inline-block  duration-200 '>Subscription</button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='hover:bg-white hover:text-black p-2 rounded-full'>
                            <Search />
                        </div>
                        <div onMouseEnter={() => renderMousseEneter(false)} onMouseLeave={() => renderMousseEneter(true)} className='hover:bg-white hover:text-black rounded-sm p-2 flex justify-between'>
                            
                            <h1>EN</h1>
                            <KeyboardArrowDown />
                        </div>
                        <div className='hover:bg-white hover:text-black p-2 rounded-full'>
                            <Apps />
                        </div>
                        <div className='hover:bg-white hover:text-black p-2 rounded-full bg-slate-500 m-2'>
                            <Person color='lightgray' />
                        </div>
                        <div>
                            <button className='bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded-md'>Join Prime</button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header