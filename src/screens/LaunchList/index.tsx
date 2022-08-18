import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { GET_PAST_LAUNCHES } from "../../services/queries";
import { PastLaunches } from "../../types";
import "./styles.css";

const LaunchList: React.FC = () => {
  const { data, loading, fetchMore } = useQuery<PastLaunches>(
    GET_PAST_LAUNCHES,
    { variables: { limit: 20 }, notifyOnNetworkStatusChange: true }
  );
  return (
    <div className="container">
      <img
        className="logo"
        src="https://logodownload.org/wp-content/uploads/2021/02/spacex-logo-1.png"
        alt="logo"
      />
      <h1 className="launches-title">
        Past Launches {`(${data?.launchesPast.length ?? 0})`}
      </h1>
      <ul className="launch-list">
        {data &&
          data.launchesPast.map((launch) => (
            <Link className="launch-card" to={`/${launch.id}`}>
              <li key={launch.id}>
                <img
                  className="launch-image"
                  src={launch.links.flickr_images[0]}
                  alt="launch"
                />
                <div className="launch-info">
                  <img
                    className="mission-patch"
                    src={launch.links.mission_patch_small}
                    alt="patch"
                  />
                  <div className="text-container">
                    <h1 className="mission-title">{launch.mission_name}</h1>
                    <h2>{launch.rocket.rocket_name}</h2>
                    <h2>{launch.launch_site.site_name}</h2>
                  </div>
                </div>
              </li>
            </Link>
          ))}
      </ul>
      <h1
        className="load-more"
        onClick={() =>
          fetchMore({
            variables: {
              limit: 20,
              offset: data?.launchesPast.length,
            },
          })
        }
      >
        {loading ? "Loading..." : "Load More"}
      </h1>
    </div>
  );
};

export default LaunchList;
