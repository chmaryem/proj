import React from 'react'
import Rodal from 'rodal'
import "rodal/lib/rodal.css";
import css from './AddCardModal.module.css'


const AddCardModal = ({ visible, onClose, handleCardAdd }) => {
    const customStyles = {
        background: "rgb(58 58 58)",
        padding: "20px",
        width: "50%",
        top: "-3rem",
        height: "fit-content",
        maxWidth: "40rem"

    }
    const [title, setTitle] = React.useState('')
    const [detail, setDetail] = React.useState('')

    return (
        <Rodal customStyles={customStyles} visible={visible} onClose={onClose}>
            <div className={css.containerAdd}>
                <div>
                    <span className={css.labelAdd}>Card Title</span>
                    <input type="text" className={css.inputAdd} value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div>
                    <span className={css.labelAdd}>Detail</span>
                    <textArea
                        rows={10} className={css.inputAdd} value={detail}
                        type="text" onChange={(e) => setDetail(e.target.value)} />
                </div>

                <button 
                disabled={title=== "" && detail === ""}
                className={css.saveButtonAdd}
                onClick={()=> {
                    handleCardAdd(title, detail)
                    setDetail("")
                    setTitle("")
                }}
                >
                    Add
                </button>
            </div>
        </Rodal>
    )
}

export default AddCardModal