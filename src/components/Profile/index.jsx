import './styles.css';

export const Profile = ({name, bio, login, src}) => {
  return(
    <div className='profile'>
      <img src={src} alt="profile" />
      <div className='profileInfo'>
        <h3>{name}</h3>
        <p>@{login}</p>
        <p>{bio}</p>
      </div>
    </div>
  )
}