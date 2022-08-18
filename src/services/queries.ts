import { gql } from "@apollo/client";

export const GET_PAST_LAUNCHES = gql`
  query pastLaunchesList($limit: Int!, $offset: Int) {
    launchesPast(limit: $limit, offset: $offset) {
      id
      mission_name
      launch_site {
        site_name
      }
      links {
        flickr_images
        mission_patch_small
      }
      rocket {
        rocket_name
      }
      launch_date_utc
    }
  }
`;

export const GET_LAUNCH_DETAILS = gql`
  query launchDetails($id: ID!) {
    launch(id: $id) {
      id
      mission_name
      details
      links {
        flickr_images
        mission_patch
      }
    }
  }
`;
