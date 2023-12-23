
const heading =React.createElement("h1", {id:"heading"}, "Hello world from React");

// Nested Elements

const parent= React.createElement("div", {id:'parent'},[
    React.createElement("div",{id:'children1'},
       [React.createElement("h1", {id:'head1'}, "Child1 heading"),
        React.createElement("h1", {id:'head2'}, "Child2 heading")]
        ),
    React.createElement("div",{id:'children2'},
       [React.createElement("h1", {id:'head1'}, "Child1 heading"),
       React.createElement("h1", {id:'head2'}, "Child2 heading")])
]
)


const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);




































