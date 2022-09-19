import './toggle-switch.scss'

interface Props {
  checked: boolean
  action: React.Dispatch<React.SetStateAction<boolean>>
}

const ToggleSwitch: React.FC<Props> = ({ checked, action }) => {
  return (
    <div className="toggle-switch small-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        checked={checked}
        onChange={() => action(!checked)}
        name="toggleSwitch"
        id="toggleSwitch"
      />
      <label className="toggle-switch-label" htmlFor="toggleSwitch">
        <span data-yes="Yes" data-no="No" className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
    </div>
  )
}

export default ToggleSwitch