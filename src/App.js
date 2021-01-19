import React, { useState, useEffect } from "react";
import { useForm } from "./useForm";
import { Hello } from "./Hello";
import { useFetch } from "./useFetch";

const App = () => {
  // 1. method
  // const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });

  // HOOKS 1 ############################################################
  // 2. method
  // no need to write an object like above, you can write it also like below
  // const [count, setCount] = useState(10);
  // const [count2, setCount2] = useState(20);

  // when you update simultaneously => use first method (commented out one)
  // when you update separately => use second method
  // #####################################################################

  // HOOKS 2 ############################################################
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });

  // USE STATE & EFFECT WITH FETCH ########################################
  const { data, loading } = useFetch("http://numbersapi.com/43/trivia")
  // #####################################################################

  // 1. toggle mount and unmount 
  // const [showHello, setShowHello] = useState(true)

  // you could also add multiple forms easily (also not necessary) like below f.e.
  // const [values2, handleChange2] = useForm({firstName: "", lastName: ""});

  // #####################################################################

  // USE STATE & USE EFFECT ############################################################
  // can be used to influence render behaviour
  // f.e. only render whe password get's changed
  // the parameters after the function (values.email etc.) define when the function useEffect() gets called
  // this can be used replace componentDidMount etc.

  // 1. toggle mount and unmount
  // useEffect(() => {
  //   console.log("render");

  //   // cleanup logic
  //   return () => {
  //     console.log("unmount");
  //   };
  // }, [values.email, values.password]);

  
  useEffect(() => {

    // 2. toggle mount and unmount
    // console.log("render");

    // 3. show mouse event on move and clean it up afterwards
    // const onMouseMove = e => {
    //   console.log(e)
    // }

    // window.addEventListener("mousemove", onMouseMove)

    // return () => {
    //   window.removeEventListener("mousemove", onMouseMove)
    // }

    // 2. toggle mount and unmount
    // cleanup logic
    // return () => {
    //   console.log("unmount");
    // };
    // whenever email changes it's going to cleanup (not unmounting! just deleting old value)
  }, []
  // 2. toggle mount and unmount
  // [values.email]
  );

  // 4. you can use as many useEffect as you want
  // useEffect(() => {
  //   console.log("mount1");
  // }, [])

  // useEffect(() => {
  //   console.log("mount2");
  // }, [])

  // #####################################################################

  return (
    <div>
      {/* USE STATE & EFFECT WITH FETCH ######################################## */}
      <div>
        {loading ? "loading..." : data}
      </div>
      {/* ###################################################################### */}

      {/* HOOKS 1 ############################################################ */}
      {/* currentCount is the current state, so it returns the new state "currentCount + 1". This doesn't overwrite the old state.
      <button
        onClick={() =>
          // 1. method
          // setCount(currentState => ({ 
          //   // spread operator tells to use every currentState value and afterwards I override 'count' with 'currentState.count + 1'
          //   ...currentState,
          //   count: currentState.count + 1
          //   // instead of writing '...currentState,' you could also write after the first 'count' 'count2: currentState.count2'
          // }))

          // 2. method
          {
            setCount(c => c + 1);
            setCount2(c => c + 1);
          }
        }
      >
        +
      </button>
      <div>count 1: {count}</div>
      <div>count 2: {count2}</div> */}
      {/* ############################################################ */}

      {/* HOOKS 2 ############################################################ */}
      {/* USE EFFECT 2 ############################################################ */}
      <>
      {/* 1. toggle mount and unmount 
      <button onClick={() => setShowHello(!showHello)}>toggle</button>
      <br/>
        {showHello && <Hello />}
        <br/> */}
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="email"
        />
        <br />
        <input
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          placeholder="first name"
        />
        <br />
        <input
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          placeholder="password"
        />
        <h1>START AT 29:49 ON YOUTUBE https://www.youtube.com/watch?v=f687hBjwFcM (as of 19.01.2021)</h1>
      </>
      {/* ############################################################ */}
    </div>
  );
};

export default App;
