import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// @RestController
// @RequestMapping("/api")
// public class Controller {

//     @GetMapping("/hello")
//     public String sayHello() {
//         return "Hello, World!";
//     }

//     @GetMapping("/greet/{name}")
//     public String greetPerson(@PathVariable String name) {
//         return "Hello, " + name + "!";
//     }

//     @PostMapping("/message")
//     public String receiveMessage(@RequestBody String message) {
//         return "Received message: " + message;
//     }
// // }
function App() {
  const [apiResponse, setApiResponse] = useState<string>('')

  // Add API calling functions
  function callHelloApi() {
    fetch('/api/hello')
      .then((response) => response.text())
      .then((text) => setApiResponse(text))
      .catch((error) => setApiResponse('Error: ' + error.message))
  }

  function callGreetApi() {
    const name = 'User'
    fetch(`/api/greet/${name}`)
      .then((response) => response.text())
      .then((text) => setApiResponse(text))
      .catch((error) => setApiResponse('Error: ' + error.message))
  }

  function callMessageApi() {
    fetch('/api/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: 'Hello from React!',
    })
      .then((response) => response.text())
      .then((text) => setApiResponse(text))
      .catch((error) => setApiResponse('Error: ' + error.message))
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>API Testing</h1>
      <div className="card">
        <button onClick={callHelloApi}>Test /hello endpoint</button>
        <button onClick={callGreetApi}>Test /greet endpoint</button>
        <button onClick={callMessageApi}>Test /message endpoint</button>
        <div className="api-response">
          <h3>API Response:</h3>
          <p>{apiResponse}</p>
        </div>
      </div>
    </>
  )
}

export default App
