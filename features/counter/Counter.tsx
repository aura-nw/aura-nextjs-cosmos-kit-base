import { Button } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hook";
import { decrease, increase, selectCounter } from "./counter.slice";
import { useGetBreedsQuery } from "../dog/dog.slice";

const Counter = () => {
  const count = useAppSelector(selectCounter)
  const dispatch = useAppDispatch()
  const handleClickAdd = () => dispatch(increase())
  const handleClickMinus = () => dispatch(decrease())

  const [numDogs, setNumDogs] = useState(10)
  const { data, isFetching } = useGetBreedsQuery(numDogs)

  return (
    <div>
      <Button variant="contained" onClick={handleClickAdd}>Add</Button>
      <Button variant="contained" onClick={handleClickMinus}>Minus</Button>
      <br />
      <span>{count}</span>

      {data && (
        <>
          <div>
            <p>Dogs to fetch:</p>
            <select value={numDogs} onChange={(e) => setNumDogs(Number(e.target.value))}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </div>
          <div>Number of dogs fetched: {data.length}</div>
          <table>
            <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
            </thead>

            <tbody>
            {data.map(breed => (
              <tr key={breed.id}>
                <td>{breed.name}</td>
                <td><img width={50} height={50} src={breed.image.url} alt={breed.name} /></td>
              </tr>
            ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  )
}

export default Counter
