import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {

  const onClick = () =>{  
    console.log('onClick')
  }

  return (
    <header className='header'>
     <h1 style={{color:'red'}}> {title} </h1>
    <Button color='green' text='Add' 
    onClick= {onClick} />
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header