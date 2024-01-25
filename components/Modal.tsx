import React, {useEffect, useState} from "react";
import ReactPlayer from "react-player";
import MuiModal from "@mui/material/Modal";
import {useRecoilState, useRecoilValue} from "recoil";
import {modalState} from "../atoms/modalAtom";
import {XMarkIcon} from "@heroicons/react/24/solid";
import {Movie} from "../typings";

function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setMovie] = useState<Movie | null>(null); //wtf is the <movie | mull shit>

  useEffect(() => {
    if (!movie) return;

    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === "tv" ? "tv" : "movie"
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      ).then((response) => response.json())

      console.log(data)

      // if(data?.videos){
      //   const index = data.videos.results.findIndex()
      // }
    }
    fetchMovie()
  }, [movie]);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <>
        <button
          onClick={handleClose}
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]">
          <XMarkIcon className="h-6 w-6"></XMarkIcon>
        </button>

        <div></div>
      </>
    </MuiModal>
  );
}

export default Modal;
