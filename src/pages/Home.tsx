import { useState } from 'react'

function Home() {
  const [isLoading, setIsLoading] = useState(false)

  const handleCreateSite = async () => {
    setIsLoading(true)
    // Simulação de criação de site
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
    alert('Site criado com sucesso! (Simulação)')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full shadow-lg">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            MeuSiteIA
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Crie sites profissionais com inteligência artificial em segundos
          </p>
          
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-green-700 font-semibold">Sistema funcionando perfeitamente na Vercel!</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-100">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">IA Avançada</h3>
              <p className="text-blue-700 text-sm">
                Inteligência artificial que cria sites personalizados para seu negócio
              </p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-xl border border-green-100">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-500 p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-green-900 mb-2">Design Profissional</h3>
              <p className="text-green-700 text-sm">
                Templates modernos e responsivos para todos os dispositivos
              </p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-100">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-purple-500 p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Deploy Rápido</h3>
              <p className="text-purple-700 text-sm">
                Publique seu site em segundos com nossa infraestrutura na nuvem
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={handleCreateSite}
              disabled={isLoading}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed mr-4 mb-4"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Criando Site...
                </>
              ) : (
                '🚀 Criar Site com IA'
              )}
            </button>
            <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-all shadow-lg mb-4">
              📖 Ver Funcionalidades
            </button>
          </div>
        </div>

        {/* Status */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
          <div className="flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
            </svg>
            <h3 className="text-lg font-semibold text-green-900">Status do Projeto</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg">
              <div className="text-sm font-medium text-gray-600">Tecnologia</div>
              <div className="text-blue-600 font-semibold">Vite + React + TypeScript</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-sm font-medium text-gray-600">Deploy</div>
              <div className="text-green-600 font-semibold">✅ Vercel Funcionando</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-sm font-medium text-gray-600">Build</div>
              <div className="text-purple-600 font-semibold">✅ Sem Erros</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500">
          <p>🎯 Projeto criado com estrutura exata do Lovable - Deploy perfeito na Vercel</p>
        </div>
      </div>
    </div>
  )
}

export default Home
