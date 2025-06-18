"use client";

import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    };
  }, []);

  const navItems = [
    { name: 'Our Mission', href: '#our-mission' },
    { name: 'Performance', href: '/performance' },
    { name: 'Methodology', href: '/methodology' }
  ];

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navItems.map((item) => (
        <Typography
          key={item.name}
          as="li"
          variant="small"
          color="white"
          className="font-medium"
        >
          <a
            href={item.href}
            className="flex items-center hover:text-blue-500 transition-colors"
            onClick={() => setOpenNav(false)}
          >
            {item.name}
          </a>
        </Typography>
      ))}
    </ul>
  );

  return (
    <Navbar 
      className={`fixed top-0 left-0 right-0 z-50 max-w-none rounded-none px-4 py-2 lg:px-8 lg:py-4 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/90 backdrop-blur-md border-b border-gray-800' 
          : 'bg-transparent border-transparent'
      }`}
      blurred={false}
    >
      <div className="flex items-center justify-between text-white">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <Logo size="sm" />
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-bold text-xl"
            color="white"
          >
            Forecast<span className="text-blue-500">Labs</span>
          </Typography>
        </div>

        {/* Desktop Navigation */}
        <div className="mr-4 hidden lg:block">{navList}</div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <Button 
              variant="gradient" 
              size="sm" 
              className="bg-gradient-to-r from-blue-500 to-purple-600"
            >
              <span>Explore the Data</span>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <X className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
      </div>

      {/* Mobile Menu */}
      <Collapse open={openNav}>
        {navList}
        <div className="flex items-center gap-x-1">
          <Button fullWidth variant="gradient" size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600">
            <span>Explore the Data</span>
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default Header;