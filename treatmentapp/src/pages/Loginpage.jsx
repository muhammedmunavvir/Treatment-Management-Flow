export const   LoginPage=()=> {
  const handleLogin = () => {
    window.location.href = "/treatments"; 
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-6 bg-white shadow rounded">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}
