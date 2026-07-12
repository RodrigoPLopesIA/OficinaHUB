

export function VerificationCode() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Código de Verificação</h2>
        <p className="mb-4 text-center">Por favor, insira o código de verificação enviado ao seu email.</p>
        <form>
          <input
            type="text"
            placeholder="Insira o código de verificação"
            className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-200"
          >
            Verificar
          </button>
        </form>
      </div>
    </div>
  )
}