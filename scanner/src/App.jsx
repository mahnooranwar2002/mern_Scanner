import React, { useEffect, useState } from 'react'
import { Html5Qrcode, Html5QrcodeScanner } from 'html5-qrcode'
const App = () => {
  var [scanResult,Setresult]=useState();
useEffect(()=>{
   var scanner = new Html5QrcodeScanner ('reader',{


    qrbox:{
      width:150,
      height:50
    },
    fps:5
  })
  scanner.render(success,error);

  function success(result){
scanner.clear()
Setresult(result)
  }
  function error(err){
    console.warn(err)
  }
})
  return (
      <div style={styles.appContainer}>
      <h1 style={styles.title}>QR Code Scanner</h1>
      <div id="reader" style={styles.reader}></div>
      {scanResult && (
        <div style={styles.resultBox}>
          <h2>Scan Result:</h2>
          <p style={styles.resultText}>{scanResult}</p>
        </div>
      )}
    </div>
  )
}
const styles = {
  appContainer: {
    maxWidth: 400,
    margin: '40px auto',
    padding: 20,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },
  title: {
    marginBottom: 20,
    color: '#333'
  },
  reader: {
    margin: '0 auto',
    borderRadius: 8,
    overflow: 'hidden',
    boxShadow: '0 0 10px rgba(0,0,0,0.15)'
  },
  resultBox: {
    marginTop: 20,
    padding: 15,

  }
}
export default App
