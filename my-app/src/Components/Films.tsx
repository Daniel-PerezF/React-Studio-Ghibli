import { useEffect, useState } from 'react';
import { FilmsProps } from '../Types/types';
export function Films() {
  const [films, setFilms] = useState<FilmsProps[]>([]);

  console.log(films);

  useEffect(() => {
    async function getFilms() {
      try {
        const res = await fetch('https://ghibliapi.vercel.app/films');
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const result = await res.json();
        setFilms(result);
      } catch (error) {
        console.error(error);
      }
    }
    getFilms();
  }, []);

  return (
    <div className="bg-[#3A3A3A] min-h-screen overflow-x-hidden py-3">
      <h3 className="flex justify-center text-2xl lg:text-4xl text-white py-4">
        Films
      </h3>

      <div className="flex flex-col gap-4 justify-center px-[1rem] md:flex-col lg:flex-row lg:flex-wrap">
        {films.map((film) => (
          <div className="flex md:justify-center" key={film.id}>
            <div className="flex justify-between items-center px-4 rounded-md border border-black bg-white md:w-2/3 w-full lg:w-[28rem]">
              <div className="flex flex-col mr-4">
                <div className="max-w-[9rem] lg:max-w-[11rem] my-2">
                  <img src={film.image} className="rounded-md " />
                </div>
              </div>
              <div className="flex flex-col">
                <p>{film.original_title}</p>
                <p>{film.title}</p>
                <p>{film.release_date}</p>
                <div className="flex max-w-[12rem]">
                  <p>{film.description.slice(0, 98) + '...'}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
