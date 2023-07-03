/**
 *
 *
 * <div id="parent">
 *  <div id="child">
 *      <h1>I'm h1 tag</h1>
 *      <h2>I'm h2 tag</h2>
 *  </div>
 *  <div id="child2">
 *      <h1>I'm h1 tag</h1>
 *      <h2>I'm h2 tag</h2>
 *  </div>
 * </div>
 *
 *
 * ReactElement(Object) => HTML(Browser Understands)
 *
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm H1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);

const header = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world in React!"
);

console.log(header); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(header);

root.render(parent);
