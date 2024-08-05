import "./styles.css";

function Test(props) {
  return (
    <div className="divBg">
      <div className="exitBtn">X</div>
      <h1>{props.text}</h1>
      <div>
        <p>{props.bodyText}</p>
      </div>
      <div className="button-container">
        <button>{props.btnText}</button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <section>
        <Test
          text="Test Box"
          bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          btnText="Next"
        />
        <Test
          text="Test Box 2"
          bodyText="But I really must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
          btnText="Continue"
        />
      </section>
    </div>
  );
}
