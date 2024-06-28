
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
           {
            protocol: 'https',
            hostname: 'www.themealdb.com',
            port: '',
            pathname: '*/**'
           },
           {
            protocol: 'https',
            hostname: 'cdn.pixabay.com',
            port: '',
            pathname: '*/**'
           },
           {
            protocol: 'https',
            hostname: 'www.codewithharry.com',
            port: '',
            pathname: '*/**'
           },
           {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
            pathname: '*/**'
           },
           {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
            port: '',
            pathname: '*/**'
           },
        ],
      },

    }

export default nextConfig;

    // redirects:async()=>{
    //   return [
    //     {
    //       source:'/about',
    //       destination:'/post',
    //       permanent:true
    //     }
    //   ]
    // }  