import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../auth/hooks/use_auth';

const NavBar = () => {
  const {logout} = useAuth();

  return (
    <Navbar position='sticky'>
      <NavbarBrand>
        <p className="text-red-700 text-3xl font-bold text-inherit">REACTFILMS</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      {
        /*
          <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
        */
      }
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button onPress={logout} color="danger" href="#" variant="ghost">
            Logout
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default NavBar