import ScrollToTop from "react-scroll-to-top";
import backtoTop from "./images/up-arrow.png"
import Allroutes from "./Components/HomePage/Allroutes"
import Footer from "./Components/Utils/Footer";
import { Flex } from "@chakra-ui/react";
import Navbar from "./Components/Utils/Navbar";
export const App = () => {

  return <Flex direction={'column'} minH={'100vh'}>
    <Navbar />
    <Allroutes/>
    {/* <Footer /> */}
    <ScrollToTop smooth={true} top="20" style={{backgroundColor:'transparent',boxShadow:'none'}} component={<img src={backtoTop} style={{mixBlendMode:'multiply'}} alt='btt'></img>}/>
  </Flex>
}

