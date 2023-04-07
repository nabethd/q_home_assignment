import React, {useState} from "react";
import {Text} from "react-native";
import Popup from 'reactjs-popup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Button} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import {useLocalStorage} from "../../Hooks/useLocalStorge";
import {Styles} from "../../Assets/styles";
import LBlackBlue from "../../Assets/L-black-blue.svg";
import './DeletePopup.css'

const DeletePopup = ({isOpen, onClose, onApprove}) => {
    const [dontShowAgain, setDontShowAgain] = useLocalStorage("dontShowDeletePopupAgain", false);
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(prevState => {
            return !prevState
        });
    }

    const onApproveDelete = () => {
        if (isChecked) {
            setDontShowAgain(true)
        }
        onApprove()
    }
    if (isOpen && dontShowAgain) {
        onApprove()
        return null

    }

    return (
        <Popup className="delete-popup-container" open={isOpen} closeOnDocumentClick onClose={onClose} modal nested>
            <div className="delete-popup-container">
                <img src={LBlackBlue} alt="L-black-blue svg" className='delete-popup-svg' height={53} width={50}/>
                <div className='delete-popup-title'>
                    <Text style={Styles.popupTitle}>Are you sure you want to delete this
                        person</Text>
                </div>
                <div>
                    <Text style={Styles.popupText}>This action cannot be undone and all data
                        associated with this person
                        will be permanently removed.
                    </Text>
                </div>
                <div className="delete-popup-approve-buttons">
                    <Button variant="contained"
                            onClick={onApproveDelete}>
                        Yes
                    </Button>
                    <Button sx={{color: "Black"}}
                            variant="text"
                            onClick={onClose}>
                        No
                    </Button>
                    <FormControlLabel
                        control={<Checkbox defaultChecked={isChecked}/>}
                        onChange={handleChange}
                        label="Don't show again"/>

                </div>
            </div>
        </Popup>

    );

}

export default DeletePopup;