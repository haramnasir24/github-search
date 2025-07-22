import { css } from "../../../../styled-system/css";
import { card } from "../../../../styled-system/recipes";
import type { RepoResult } from "../../../shared/types/type";


type RepoCardProps = {
  repo: RepoResult;
  refProp?: React.Ref<HTMLDivElement>;
};

const RepoCard = ({ repo, refProp }: RepoCardProps) => (
  <div key={repo.id} ref={refProp} className={card({ type: "repo" })}>
    <div>{repo.full_name}</div>
    <div>
      Owner:{" "}
      <a
        href={`https://github.com/${repo.owner.login}`}
        target="_blank"
        rel="noopener noreferrer"
        className={css({ color: "blue.500", textDecoration: "underline" })}
      >
        {repo.owner.login}
      </a>
      <div>
        <b>Stars: </b>
        {repo.stargazers_count}
      </div>
      <div>
        <b> Forks:</b> {repo.forks_count}
      </div>
      <div>
        <b> Language: </b>
        {repo.language || "N/A"}
      </div>
      <a
        href={`https://github.com/${repo.full_name}`}
        target="_blank"
        rel="noopener noreferrer"
        className={css({
          textDecoration: "underline",
          color: "blue.500",
          fontSize: "sm",
          marginTop: 2,
          display: "inline-block",
        })}
      >
        View Repo
      </a>
    </div>
  </div>
);

export default RepoCard;
