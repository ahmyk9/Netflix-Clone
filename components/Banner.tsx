import Image from "next/image";
import React, {useEffect, useState} from "react";
import { baseUrl } from "../constants/movie";
import { FaPlay } from "react-icons/fa";
import { InformationCircle } from "heroicons-react";


//wtf is the interface shit // interface's only typescript and it allows for easy readbility and allows for certain parts of object to be used
interface Props {
  netflixOriginals: Movie[]; //netflixOriginals is the variable that holds the Movie array and to access Movies, u use netflixOrinals
}

function Banner({netflixOriginals}: Props) { //wtf is this props shit 
  const [movie, setMovie] = useState<Movie | null>(null); //wtf is the <movie | mull shit> 

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]); //wtf was the brackets over here mean again in useEffect should probably make notes aye 


  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end
    lg:pb-12">
      <div className="absolute top-0 -z-10 left-0 h-[95vh] w-screen">
        {/* <Image></Image> */}
        <Image src={`${baseUrl}${movie?.backdrop_path}` || movie?.poster_path} //wtf was baseURL
        layout="fill"
        objectFit="cover"
        ></Image>
      </div>
      

       {/* wtf does the ? mean in the className  */}
      <h1 className="text-2xl lg:text-7xl md:text-4xl font-bold "> 
        {movie?.title || movie?.name || movie?.original_name}</h1>  
      <p className=" text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">{movie?.overview}</p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black"><FaPlay className="h-4 w-4 text-black md:h-7 md:w-7"></FaPlay> Play</button>
        <button className="bannerButton bg-[grey]/70"> <InformationCircle></InformationCircle> Play</button>
      </div>
    </div>
  );
}

export default Banner;
