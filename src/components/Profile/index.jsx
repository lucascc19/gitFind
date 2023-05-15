import './styles.css';

export const Profile = () => {
  return(
    <div className='profile'>
      <img src="https://avatars.githubusercontent.com/u/62766998?v=4" alt="profile" />
      <div className='profileInfo'>
        <h3>Lucas Oliveira</h3>
        <p>@llucasoliv</p>
        <p className='description'>Front-end Developer at @Fitbank</p>
      </div>
    </div>
  )
}