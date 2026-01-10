import perfil from '../../images/mgc_pro.png'
import './index.css'

function Perfilimag() {
  return (
    <div className='flex justify-center items-center w-full'>
      <img
        src={perfil}
        alt='profile'
        className='float w-64 h-64 md:w-80 md:h-80 transition duration-500 shadow-xl shadow-purple-500/50 rounded-full bg-transparent object-cover block'
      />
    </div>
  )
}

export default Perfilimag