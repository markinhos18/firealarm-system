import { useState } from 'react'
import * as S from './styles'

const Checkbox = ({ label }: any) => {
  // const [checked, setChecked] = useState(false)
  const [isShown, setIsShown] = useState(false)

  // const handleChecked = () => {
  //   setChecked(!checked)
  // }

  return (
    <S.Wrapper>
      {/* <p>{checked ? 'Checked' : 'Not checked'}</p> */}
      <label>
        <input
          type="checkbox"
          onChange={(event) => setIsShown(event.target.checked)}
          checked={isShown}
        />
        <span className="checkboxLabel">{label}</span>
      </label>

      {/* {!isShown && <div className="shippingInputs">
              <h2>Shipping Address</h2>
              <div className="inputs">
                <div className="formColumn">
                  <TextField placeholder="Address *" mandatory={true} />
                  <TextField placeholder="Zip Code *" mandatory={true} />
                </div>

                <div className="formColumn">
                  <TextField placeholder="City *" mandatory={true} />
                  <DropdownList />
                </div>
              </div>
            </div>} */}
    </S.Wrapper>
  )
}
export default Checkbox
