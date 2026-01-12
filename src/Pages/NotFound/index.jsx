
import './index.css'
import Layout from '../../Components/Layout'
function NotFound() {

  return (
    <>
      <Layout>
        <div className='notfound-container flex flex-col justify-center items-center h-48 mt-40'>
          <h1 className='notfound-title text-4xl'>404</h1>
          <p className='notfound-text text-slate-300'>Página no encontrada</p>
          <div className='mt-4'>
            <a href='/' className='notfound-link text-blue-500 hover:underline border-2 border-blue-500 px-4 py-2 rounded-md'>
              Volver al inicio
            </a>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default NotFound
