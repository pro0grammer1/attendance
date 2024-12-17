'use client'

import React, { useState } from 'react';
const months: String[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function Home() {

  const [currMonth, changeMonth] = useState("January");
  let dateArray = [...Array(new Date(2025, months.indexOf(currMonth) + 1, 0).getDate())];

  return (

    <section className='w-[9.25in] border m-auto '>
      <div className="width-full flex place-content-center print:hidden mt-3">
        {/*<input type='text' placeholder="Page width" className='border border-1 border-black mr-2 rounded-sm'></input>*/}

        <select onChange={e => changeMonth(e.target.value)} className="text-center bg-red-400 rounded-sm p-1">
          {months.map((month, i) => (
            <option key={i}>{month}</option>
          ))}
        </select>
      </div>

      {/* Body, where data will be displayed */}
      <h3 className="width-full text-center font-bold text-3xl">{currMonth}</h3>
      <table className='border-black border'>
        <thead>
          <tr className="[&_:not(:first-child)]:w-1">
            <th className='w-[2in]'>Name</th>
            {dateArray.map((m, i) => (
              <th key={i} className='p-1'>{i + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </section>
  );
}
