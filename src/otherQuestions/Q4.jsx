function ConditionalRendering({ isLoggedIn }) {
  return <>{isLoggedIn ? <div>Component1</div> : <div>Component2</div>}</>;
}

export default ConditionalRendering;
