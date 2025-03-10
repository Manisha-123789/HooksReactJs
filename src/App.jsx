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

      <Reducer/>
    </>
  )
}

export default App

