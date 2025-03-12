import { createContext, useState } from "react";
import { Contextprovider, ThemeContextProvider } from "./Component/Appcontext";
import Effect from "./Component/Effect"
import Memooo from "./Component/Memooo";
import Parent from "./Component/Reactmemo/Parent";
import UseState from "./Component/UseState"
import Useeeeref from "./Component/Useref";
import Parentcallback from "./Component/callback/Parentcallback";
import Footer from "./Component/usecontexthook/Footer";
import Profile from "./Component/usecontexthook/Profile";
import Main from "./Component/usecontexthook/Main";
import Reducer from "./Component/Reducer";
import Idhook from "./Component/Idhook";
import Layout from "./Component/Layout";
import Statusbar from "./Component/custom/Statusbar";
import Formm from "./Component/custom/Formm";
import Details from "./Component/customhook/Details";


function App() {

  const callbackhookfunction = () => {
    return "hellow"
  }

  return (
    <>
      {/* <UseState/>
      {/* <Effect city="Jaipur" /> */}
      {/* {/* <Useeeeref /> */}
      {/* <Memooo information="let's see, it will re-render when i pass props as well"/>  */}
      {/* <Parent/>  */}
      {/* <Parentcallback/> */}
      {/* <ThemeContextProvider>
        <Contextprovider>
          <Profile />
          <Footer />
        </Contextprovider>
        <Main />
      </ThemeContextProvider> */}
      {/* <Idhook/>

      <Reducer/>
      <Layout/> */}
      {/* <Select/> */}
      <Statusbar/>
      <Formm/>
    <Details/>
    </>
  )
}

export default App

