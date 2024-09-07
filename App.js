/**
 * 
 *<div id="parent">
 *   <div id="child">
 *     <h1>i am h1 tag</h1> 
 *      <h2>i am h2 tag</h2>
 *   </div>
 * <div id="child2">
 *     <h1>i am h1 tag</h1> 
 *      <h2>i am h2 tag</h2>
 *   </div>
 *</div>
 * 
 *
 * /** */

const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"i am an H1 Tag"),
    React.createElement("h2",{},"hello i am h2 tag")
]),
React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"i am an H1 Tag"),
        React.createElement("h2",{},"hello i am h2 tag")
    ]),
]);





console.log(parent);


// const heading=React.createElement("h1",{id:"heading"},"hw r u samarth");
// console.log(heading);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);