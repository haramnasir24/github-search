import { css } from "../../styled-system/css";
import type { UserResult } from "../types/type";

type UserCardProps = {
  user: UserResult;
  refProp?: React.Ref<HTMLDivElement>;
};

const UserCard = ({ user, refProp }: UserCardProps) => (
  <div
    key={user.id}
    ref={refProp}
    className={css({
      border: "1px solid #eee",
      p: 2,
      display: "flex",
      flexDir: "column",
      gap: 2,
    })}
  >
    <a
      href={`https://github.com/${user.login}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={user.avatar_url} alt={user.login} width={300} height={100} />
    </a>
    <div>{user.login}</div>
  </div>
);

export default UserCard;
