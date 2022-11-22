import PropTypes from 'prop-types'

const FirstApp = (props) => {

    const { title, subTitle, name } = props


  return (
    <>
        <h1 data-testid='test-title'> { title } </h1>
        <p>{ subTitle }</p>
        <p>{ subTitle }</p>
        <p>{ name }</p>
    </>
  )
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

FirstApp.defaultProps = {
    name: 'Kennet Urrutia',
    subTitle: 'Programador JR',
    // title: 'Ingeniero en sistemas'
}
export default FirstApp