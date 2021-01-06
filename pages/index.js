//import Head from 'next/head';
//import styles from '../styles/Home.module.css';
import { Box, Container } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initialLists } from '../lib/reducers/cardReducer';

export default function Home() {
  //The useDispatch-hook provides any React component access to the dispatch-function
  const dispatch = useDispatch();
  let lists = useSelector((state) => console.log(state));

  useEffect(() => {
    dispatch(initialLists());
  }, []);

  return (
    <Container>
      <Box>adsa</Box>
    </Container>
  );
}
