import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <h1 className="blog">Blog</h1>
      <div className="QnA">
        <h2>Q1:How does react works?</h2>
        <h3>
          Answer:-{" "}
          <small>
            React working procedure: ReactJS divides the UI into isolated
            reusable pieces of code known as components. React components work
            similarly to JavaScript functions as they accept arbitrary inputs
            called properties or props. It's possible to have as many components
            as necessary without cluttering our code.
          </small>{" "}
        </h3>
        <h2>Q2:Differences between props and states?</h2>
        <h3>
          Answer:-{" "}
          <small>
            Props:<br></br> (i) Props are known as properties it can be used to
            pass data from one component to another. Props cannot be modified,
            read-only, and Immutable. <br></br> (ii)The Data is passed from one
            component to another.<br></br>(iii)Props can be used with state and
            functional components. <br></br> (iv)Props are read-only.<br></br>
            States:<br></br>(i)The state represents parts of an Application that
            can change. Each component can have its State. The state is Mutable
            and It is local to the component only.<br></br> (ii)The Data is
            passed within the component only.<br></br>(iii)State is both read
            and write.
          </small>{" "}
        </h3>

        <h2>Q3: Useeffect usage except dataloading.</h2>
        <h3>
          Answer:-{" "}
          <small>
            The useEffect Hook allows us to perform side effects in our
            components. Some examples of side effects are: fetching data,
            directly updating the DOM, and timers. useEffect accepts two
            arguments. The second argument is optional.By using this Hook, we
            tell React that our component needs to do something after render.
            React will remember the function we passed (we’ll refer to it as our
            “effect”), and call it later after performing the DOM updates. In
            this effect, we set the document title, but we could also perform
            data fetching or call some other imperative API.
          </small>{" "}
        </h3>
      </div>
    </div>
  );
};

export default Blog;
