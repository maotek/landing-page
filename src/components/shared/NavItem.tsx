import React from 'react'

interface NavItemProps {
    href: string;
    text: string;
}

const NavItem = ({href, text}: NavItemProps) => {
  return (
    <li>
        <a href={href} className='duration-300 font-medium ease-linear hover:text-primary py-3'>
            {text}
        </a>
    </li>
  )
}

export default NavItem;