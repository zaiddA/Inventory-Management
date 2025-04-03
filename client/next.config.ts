import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images:{
     remotePatterns:[
        {
           protocol:"https",
           hostname:"s3-inventorymanagementzaid.s3.us-east-1.amazonaws.com",
           port:"",
           pathname:"/**",
        },
     ],
  },
};

export default nextConfig;
