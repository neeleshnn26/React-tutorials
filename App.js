//  React: ReactDOM.createRoot
// React is a library for building user interfaces. It abstracts away direct DOM manipulation to manage the UI in a more declarative and efficient way. Instead of directly modifying the DOM, React uses a virtual DOM to determine the most efficient way to update the actual DOM.


/* <div id="parent">
    <div id="child">
        <h1>hello im h1 tag</h1>
        <h2>Hello im h2 tag</h2>
    </div>
    <div id="child 2">
        <h1>hello im h1 tag in child 2</h1>
        <h2>Hello im h2 tag in child 2</h2>
    </div>
</div> 
 



*/

const parent=React.createElement("div",{id:"parent"},
    [
        React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"Hello im h1 tag"),React.createElement("h2",{},"Hello im h2 tag")]),
    
        React.createElement("div",{id:"child2"},
            [React.createElement("h1",{},"Hello im h1 tag 2"),React.createElement("h2",{},"Hello im h2 tag 2")])

    ]
);

// the above code becomes very complicated , through this react is not making our lives easy it is making our lives much more diffiuclt, this is the core of react , so inorder to make our lives easy through react , we will be using JSX.

// const heading=React.createElement("h1",{id:"heading"},"Hello world from react"); // console.log(heading),gives us an object
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);