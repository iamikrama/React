import { useState, useCallback } from 'react';

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%&*";

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-6 my-8 bg-gray-800">
        <h1 className="text-white text-center text-2xl font-semibold mb-4">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-4 text-black bg-white rounded-md"
            placeholder="Password"
            readOnly
          />
          <button
            onClick={handleCopy}
            className="bg-blue-700 text-white px-3 py-1 rounded-md hover:bg-blue-800 ml-2"
          >
            Copy
          </button>
        </div>
        <div className="flex flex-col gap-4 text-sm">
          <div className="flex items-center justify-between">
            <label className="text-white flex items-center gap-x-2">
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed(!numberAllowed)}
                className="cursor-pointer"
              />
              Include Numbers
            </label>
            <label className="text-white flex items-center gap-x-2">
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed(!charAllowed)}
                className="cursor-pointer"
              />
              Include Special Characters
            </label>
          </div>
          <div className="flex items-center justify-between">
            <label className="text-white">Length: {length}</label>
            <input
              type="range"
              min={6}
              max={14}
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="cursor-pointer"
            />
          </div>
          <button
            onClick={passwordGenerator}
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 mt-4"
          >
            Generate Password
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
