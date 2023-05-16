import './styles.css';

export const Input = ({value, onChange}) => {
  return(
    <input 
      name="user" 
      value={value} 
      onChange={onChange} 
      placeholder="@username"
    />
  )
}