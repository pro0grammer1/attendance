'use client'

import React, { useState } from 'react';
const months: String[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function Home() {

  const [currMonth, changeMonth] = useState("January");
  ;

  return (
    <section>
      <div className="width-full flex place-content-center print:hidden mt-3">
        <select onChange={e => changeMonth(e.target.value)} className="text-center bg-red-400 rounded-sm p-1">
          {months.map((month, i) => (
            <option key={i}>{month}</option>
          ))}
        </select>
      </div>

      {/* Body, where data will be displayed */}
      <h3>{currMonth}</h3>
      <table>
        <thead>
          <tr>
            { }
          </tr>
        </thead>
      </table>
    </section>
  );
}
