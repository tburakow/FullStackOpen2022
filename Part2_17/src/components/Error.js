const Error = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className="Error">
        {message}
      </div>
    )
  }

  export default Error