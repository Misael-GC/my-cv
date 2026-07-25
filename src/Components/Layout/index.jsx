

import PropTypes from 'prop-types';

function Layout({ children }) {
  return (
    <div className='flex flex-col mt-20 text-slate-800 dark:text-white items-center mx-4 md:mx-auto '>
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
