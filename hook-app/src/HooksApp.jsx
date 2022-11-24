// import CounterApp from './01-useState/CounterApp'
// import CounterWithCustomHook from './01-useState/CounterWithCustomHook'
// import FormWithCustomHook from './02-useEffect/FormWithCustomHook'
// import SimpleForm from './02-useEffect/SimpleForm'
// import MultipleCustomHooks from './03-examples/MultipleCustomHooks'
// import FocusScreen from './04-useRef/FocusScreen'
// import Layout from './05-useLayautEffect/Layout'
// import MemoHook from './06-memos/MemoHook'
// import Memorize from './06-memos/Memorize'
// import CallBackHook from './06-memos/CallBackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import TodoApp from './08-useReducer/TodoApp'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './08-useReducer/intro-reducer'
import MainApp from './09-useContext/MainApp'

const HooksApp = () => {
  return (
    <>
      {/* <CounterApp /> */}
      {/* <CounterWithCustomHook /> */}
      {/* <SimpleForm /> */}
      {/* <FormWithCustomHook /> */}
      {/* <MultipleCustomHooks /> */}
      {/* <FocusScreen /> */}
      {/* <Layout /> */}
      {/* <Memorize /> */}
      {/* <MemoHook /> */}
      {/* <CallBackHook /> */}
      {/* <Padre /> */}
      {/* <TodoApp /> */}
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
    </>
  )
}

export default HooksApp