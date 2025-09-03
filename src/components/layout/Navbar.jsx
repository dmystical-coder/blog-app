import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Flex, Box, Heading, Button } from '@chakra-ui/react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <Flex
      as="nav"
      bg="#FFFFFF/98"
      px="120px"
      py="16px"
      color="#222726"
      justify="space-between"
      align="center"
      boxShadow="md"
    >
      <Heading size="md" cursor="pointer" onClick={() => navigate('/')}>
        D'mystical's Blog
      </Heading>

      <Box>
        <Button
          variant="link"
          color={isActive('/') ? '#008463' : '#222726'}
          mr={4}
          onClick={() => navigate('/')}
        >
          Home
        </Button>
        <Button
          variant="link"
          color={isActive('/posts') ? '#008463' : '#222726'}
          onClick={() => navigate('/posts')}
        >
          Posts
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
