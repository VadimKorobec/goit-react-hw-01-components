export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li class="item">
      <span status={isOnline}></span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};
