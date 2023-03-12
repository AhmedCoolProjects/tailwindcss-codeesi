function App() {
  return (
    <div
      className="w-full h-screen bg-[#343541] text-white
    flex flex-col items-center justify-center
    ">
      <h1 className="text-xl font-semibold mb-8">ChatGPT</h1>
      <main className="text-[10px] w-9/12 flex flex-row space-x-3">
        <ul>
          <h2 className="text-center text-xs font-semibold">Examples</h2>
          <li className="card cursor-pointer hover:bg-[#202123]">
            Explain quantum computing in simple terms 1
          </li>
          <li className="card cursor-pointer hover:bg-[#202123]">
            Explain quantum computing in simple terms 2
          </li>
          <li className="card cursor-pointer hover:bg-[#202123]">
            Explain quantum computing in simple terms 3
          </li>
        </ul>
        <ul>
          <h2 className="text-center text-xs font-semibold">Capabilities</h2>
          <li className="card">Explain quantum computing in simple terms 4</li>
          <li className="card">Explain quantum computing in simple terms 5</li>
          <li className="card">Explain quantum computing in simple terms 6</li>
        </ul>
        <ul>
          <h2 className="text-center text-xs font-semibold">Limitations</h2>
          <li className="card">Explain quantum computing in simple terms 7</li>
          <li className="card">Explain quantum computing in simple terms 8</li>
          <li className="card">Explain quantum computing in simple terms 9</li>
        </ul>
      </main>
    </div>
  );
}

export default App;
