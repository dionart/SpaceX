import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_LAUNCH_DETAILS } from "../../services/queries";
import { LaunchDetailsResponse } from "../../types";
import "./styles.css";

const LaunchDetails: React.FC = () => {
  let { id } = useParams();
  const { data, loading } = useQuery<LaunchDetailsResponse>(
    GET_LAUNCH_DETAILS,
    {
      variables: { id: id },
    }
  );

  return (
    <div className="container">
      {loading && <h1>Loading...</h1>}
      {data && (
        <>
          <div className="info-card">
            <h1>{data?.launch.mission_name}</h1>
            <img src={data?.launch.links.mission_patch} alt="patch" />
            <p>{data.launch.details}</p>
          </div>
          <div className="images">
            <h1>Images {`(${data.launch.links.flickr_images.length})`}</h1>
            {data.launch.links.flickr_images.map((image) => (
              <img src={image} alt="launch" />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LaunchDetails;
