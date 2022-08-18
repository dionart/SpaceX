export interface PastLaunches {
  launchesPast: Launch[];
}

export interface LaunchDetailsResponse {
  launch: {
    id: string;
    mission_name: string;
    details: string;
    links: {
      flickr_images: string[];
      mission_patch: string;
      __typename: string;
    };
    __typename: string;
  };
}

interface Launch {
  id: string;
  mission_name: string;
  launch_site: {
    site_name: string;
  };
  links: {
    flickr_images: string[];
    mission_patch_small: string;
    __typename: string;
  };
  rocket: {
    rocket_name: string;
    __typename: string;
  };
  launch_date_utc: string;
  __typename: string;
}
