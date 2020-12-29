import React, {useState} from 'react'
import './App.css'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
    Button,
    Card,
    Checkbox,
    FormControlLabel,
    MenuItem,
    Radio,
    RadioGroup, Select,
    TextField,
    Typography
} from '@material-ui/core'

function App() {

    const [position, setPosition] = useState('bottom-right')
    const [hideProgressBar, setHideProgressBar] = useState(true)
    const [currentType, setType] = useState('default')
    const [textVal, setTextVal] = useState('')
    const [limit, setLimit] = useState(3)

    const handleChangeLimit = (pos) => {
        setLimit(pos.target.value)
    }

    const handleCustomText = (pos) => {
        setTextVal(pos.target.value)
    }

    const handleType = (pos) => {
        setType(pos.target.value)
    }

    const handlePosition = (pos) => {
        setPosition(pos.target.value)
    }

    const notify = () => {
        const text = textVal.length > 0 ? textVal : 'Notification text'
        return currentType === 'default' ? toast(text) : toast[currentType](text)
    }

    return (
        <div className="App">
            <header className="App-header">

                <Card style={{padding: 20}}>
                    <Button variant='outlined' color='primary' onClick={notify}>Click for notify!</Button><br/>

                    {/* POSITION */}
                    <Typography variant={'h6'} style={{textAlign: 'left'}}>Position</Typography>
                    <RadioGroup value={position} onChange={handlePosition}
                                style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}>
                        {POSITIONS_ARR.map((currentPos) => <FormControlLabel value={currentPos.value} control={<Radio/>}
                                                                             label={currentPos.label}/>)}
                    </RadioGroup>

                    {/* TYPE */}
                    <Typography variant={'h6'} style={{textAlign: 'left'}}>Type</Typography>
                    <RadioGroup value={currentType} onChange={handleType}
                                style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}>
                        {TYPE_ARR.map((currentPos) => <FormControlLabel value={currentPos.value} control={<Radio/>}
                                                                        label={currentPos.label}/>)}
                    </RadioGroup>

                    {/* PROGRESS BAR */}
                    <Typography variant={'h6'} style={{textAlign: 'left'}}>
                        Progress Bar<Checkbox onClick={() => setHideProgressBar(!hideProgressBar)}/>
                    </Typography>

                    {/* LIMIT TO */}
                    <Typography variant={'h6'} style={{textAlign: 'left'}}>
                        Limit to  <span/>
                        <Select
                            value={limit}
                            onChange={handleChangeLimit}
                        >
                            {LIMIT_VALUE.map((elem) => <MenuItem value={elem.value}>{elem.label}</MenuItem>)}
                        </Select>
                    </Typography>

                    {/* TEXT */}
                    <TextField variant={'outlined'} style={{margin: 10}} label={'Write here'} value={textVal} onChange={handleCustomText}/>

                </Card>

                <ToastContainer position={position}
                                closeOnClick={false}
                                hideProgressBar={hideProgressBar}
                                limit={limit}
                                draggable
                                pauseOnFocusLoss
                                pauseOnHover
                                style={{minWidth: 200}}
                />

            </header>
        </div>
    )
}

export default App

const POSITIONS_ARR = [
    {value: 'top-left', label: 'top-left'},
    {value: 'top-right', label: 'top-right'},
    {value: 'top-center', label: 'top-center'},
    {value: 'bottom-left', label: 'bottom-left'},
    {value: 'bottom-right', label: 'bottom-right'},
    {value: 'bottom-center', label: 'bottom-center'}
]

const TYPE_ARR = [
    {value: 'info', label: 'info'},
    {value: 'success', label: 'success'},
    {value: 'warning', label: 'warning'},
    {value: 'error', label: 'error'},
    {value: 'default', label: 'default'},
    {value: 'dark', label: 'dark'}
]

const LIMIT_VALUE = [
    {value: 1, label: '1'},
    {value: 2, label: '2'},
    {value: 4, label: '4'},
    {value: 5, label: '5'},
    {value: 10, label: '10'},
    {value: 3, label: 'default'}
]
