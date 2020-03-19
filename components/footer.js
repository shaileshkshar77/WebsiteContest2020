var style = {
  backgroundColor: "#0000A0",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "20px",
  width: "100%",
}

var ph = {
  display: 'block',
  padding: '20px',
  height: '30px',
  width: '100%',
  }

function Footer({ children }) {
  return (
      <div>
          <div style={ph} />
          <div style={style}>
              { children }
          </div>
      </div>
  )
}

export default Footer
