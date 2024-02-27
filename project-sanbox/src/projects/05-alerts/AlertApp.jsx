import React, { useState, useEffect } from 'react'
import Alert from '../components/Alert'

export default function AlertApp() {
  return (
    <div className='container mx-auto'>
      
      <Alert type={"success"} message={"Succefull login"}/>
      <Alert type={"info"} message={"Time triggered"} delay={true}/>
    </div>
  )
}
