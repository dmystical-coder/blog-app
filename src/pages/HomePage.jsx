import React from "react";
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Box,
  Input,
  InputGroup,
  Kbd,
} from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

const HomePage = () => {
  return (
    <>
      <Flex
        direction="column"
        bg="#008463"
        rounded="lg"
        py="64px"
        px="160px"
        align="center"
        mb="120px"
      >
        <Heading size="2xl" mb="8px">
          Blog
        </Heading>
        <Text color="#AADFD2" mb="32px" textAlign="center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
          nihil illum itaque dicta magnam laudantium fugit eveniet totam cumque
          ratione! Perferendis nemo aut error nisi, delectus impedit alias sequi
          quos!
        </Text>
        <InputGroup
          flex="1"
          startElement={<LuSearch color="#B8BAB9" />}
          endElement={<Kbd>⌘K</Kbd>}
        >
          <Input
            px="16px"
            py="14px"
            border="none"
            bg="#FFFFFF"
            color="#B8BAB9"
            rounded="full"
            placeholder="Search Articles"
          />
        </InputGroup>
      </Flex>

      <Box>
        <Heading color="#292F2E" mb="40px">
          Featured Articles
        </Heading>

        <Grid templateColumns="repeat(2, 1fr)" gap="6">
          <GridItem rowSpan={3}>
            <Box h="20" color="#292F2E">
              Box
            </Box>
          </GridItem>
          <GridItem rowSpan={1}>
            <Box h="20" color="#292F2E">
              Box
            </Box>
          </GridItem>
          <GridItem rowSpan={1}>
            <Box h="20" color="#292F2E">
              Box
            </Box>
          </GridItem>
          <GridItem rowSpan={1}>
            <Box h="20" color="#292F2E">
              Box
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
