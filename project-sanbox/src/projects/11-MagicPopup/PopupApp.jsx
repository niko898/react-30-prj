import React, { useState, useEffect } from 'react'
import Popup from '../components/Popup.component'
import Button from '../components/Button'
import Title from '../components/Title'

export default function PopupApp() {
    const [trigger, setTrigger] = useState(false);
    const [timeTrigger, setTimeTrigger] = useState(false);
    const [timeTriggerWarning, setTimeTriggerWarning] = useState(false);
    const triggerPopup = () => {
        setTrigger(true);
    }

    useEffect(()=>{
        setTimeout(() => {
            setTimeTrigger(true);
        }, 3000);
        setTimeout(() => {
            setTimeTriggerWarning(true);
        }, 5000);
    }, [trigger])
  return (
    <div className='text-center'>
        <Title text={"CLick for popup, or wait 3 seconds"}/>

        <Button btnClass={"btn-primary"} onClick={triggerPopup}/>
        <Popup
            type={"alert-info"}
            title={"Triggered Popup"}
            text={" this is poupup triggered by btn"}
            handleClose={setTrigger}
            trigger={trigger}
        />
        <Popup
            type={"alert-danger"}
            title={"Time Triggered Popup"}
            text={" this is poupup triggered by delay"}
            handleClose={setTimeTrigger}
            trigger={timeTrigger}
        />
        <Popup
            type={"alert-warning"}
            title={"Time Triggered Popup"}
            text={" this is poupup triggered by delay"}
            handleClose={setTimeTriggerWarning}
            trigger={timeTriggerWarning}
        />
    </div>
  )
}
