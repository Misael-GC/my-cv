import perfil from '../../images/perfil2.png'
import './index.css'

function Perfilimag() {
  return (
    <div className='mx-auto '>
      <img
        src={perfil}
        alt='profile'
        className='w-80 float transition duration-500 shadow-xl shadow-purple-500/50 rounded-full bg-transparent'
      />
    </div>
  )
}

export default Perfilimag