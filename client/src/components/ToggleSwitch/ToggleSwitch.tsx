import './toggle-switch.scss'

interface Props {
  id: string
  checked: boolean
  action: React.Dispatch<React.SetStateAction<boolean>>
}

const ToggleSwitch: React.FC<Props> = ({ id, checked, action }) => {
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox t-switch"
        checked={checked}
        onChange={() => action(!checked)}
        name="toggleSwitch"
        id={id}
      />
      <label className="toggle-switch-label" htmlFor={id}>
        <span data-yes="Yes" data-no="No" className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
    </div>
  )
}

export default ToggleSwitch