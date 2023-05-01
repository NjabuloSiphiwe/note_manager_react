import "./index.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store,persistor } from "./store";
import { ProtectedApp } from "App";
import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NoteBrowser } from "pages/NoteBrowser/NoteBrowser";
import { Note } from "pages/Notes/Note";
import { NoteCreate } from "pages/NoteCreate/NoteCreate";
import { PageNotFound } from "pages/PageNotFound/PageNotFound";
import { Signin } from "pages/SignIn/Signin";
import { Signup } from "pages/SignUp/Signup";
import { firebaseApp } from "utils/firebase";

import { PersistGate } from "redux-persist/integration/react";
firebaseApp.init();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

    <Provider store={store}>
      <PersistGate persistor ={persistor}>
  <BrowserRouter >
  <Routes>
  <Route path ="/signin" element={<Signin/>}/>
    <Route path ="/signup" element={<Signup/>}/>
    <Route path="/" element={<ProtectedApp/>}>
    <Route path ="/" element={<NoteBrowser/>}/>
    <Route path ="/note/:noteId" element={<Note/>}/>
    <Route path ="/note/new" element={<NoteCreate/>}/>
    <Route path ="*" element={<PageNotFound/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  </PersistGate>
    </Provider>
 
);
