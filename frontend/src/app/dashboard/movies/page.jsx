"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { GoPencil, GoTrash, GoLinkExternal } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";

import { DummyUser } from "@/static/images";
import { Modal } from "@/components";
import { showAlert } from "@/store/slices/alertSlice";
import { showModal } from "@/store/slices/modalSlice";

const Movies = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);

  // Fetch Movies
  const [movies, setMovies] = useState([]);
  const [setselectedMovie, setSelectedMovie] = useState(null);

  // Handle Open Modal
  const handleOpenModal = (videoId) => {
    setSelectedMovie(videoId);
    dispatch(showModal());
  };

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/videos/`
      );

      setMovies(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [modal.visible]);

  // Handle Delete Video
  const handleDeleteVideo = async (videoId) => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/videos/${videoId}/delete`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch(
        showAlert({
          type: "success",
          message: "Video deleted successfully",
        })
      );
      fetchMovies();
    } catch (error) {
      console.error(error);
    }
  };

  const imageUrl = (item) => {
    return item
      ? `http://localhost:8000/${item
          .replace(/\\/g, "/")
          .replace("public/", "")}`
      : DummyUser;
  };

  return (
    <>
      <div className="flex items-center justify-between gap-10 mb-10">
        <h4 className="text-2xl font-bold">Movies</h4>
        <Link
          href="/dashboard/movies/add"
          className="button button-sm button-primary"
        >
          Add Movie
        </Link>
      </div>

      {!movies && <h3 className="heading">No Movies</h3>}

      {movies && (
        <>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right">
              <thead className="text-xs bg-darkAlt uppercase">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tags
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie) => (
                  <tr
                    key={movie._id}
                    className="border-b border-solid border-darkAlt"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="flex items-center justify-start gap-2">
                        <div className="relative w-20 h-14 rounded overflow-hidden">
                          <Image
                            src={imageUrl(movie.thumbnail_url)}
                            alt={movie.title}
                            fill
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                        <span className="truncate w-52">{movie.title}</span>
                      </div>
                    </th>
                    <td className="px-6 py-4">
                      <span>{movie.category.name}</span>
                    </td>
                    <td className="px-6 py-4">
                      {movie.genres.map((genre) => (
                        <span key={genre._id}>{genre.name}</span>
                      ))}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-5">
                        <button>
                          <GoLinkExternal
                            onClick={() => handleOpenModal(movie._id)}
                            className="text-white"
                          />
                        </button>
                        <button>
                          <GoPencil
                            onClick={() => handleOpenModal(movie._id)}
                            className="text-primary"
                          />
                        </button>
                        <button onClick={() => handleDeleteVideo(movie._id)}>
                          <GoTrash className="text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {modal.visible && (
        <Modal title="Update Video">
          <h1>Hello</h1>
        </Modal>
      )}
    </>
  );
};

export default Movies;
