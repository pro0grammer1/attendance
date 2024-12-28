'use client'
'use strict'

import React, { useState, useMemo, useRef, JSX } from 'react';
import MonthPage from '@/components/tableMain';
import LendingPage from '@/components/lendingPage';
import { useReactToPrint } from 'react-to-print';
import classNames from 'classnames';

export default function Home() {

  const contentRef = useRef<HTMLDivElement>(null);
  const [allDivs, setAllDivs] = useState<JSX.Element[] | []>([]);
  const [printElemVisible, changePrintElemState] = useState<boolean>(false);
  const TotalDiv = () => <div ref={contentRef} className={classNames(printElemVisible ? "visible" : "hidden", "bg-white")}>{allDivs}</div>;
  //@ts-expect-error error due to react-print, can't reproduce error
  const reactToPrintFn = useReactToPrint({ contentRef });

  //memorizing the string for faster access using useMemo
  const months: string[] = useMemo(() => {
    return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  }, []);

  const [currMonth, changeMonth] = useState("January");
  const [name, setName] = useState("");
  const [emp_array, setEmpArray] = useState<string[]>(["Vasanta", "Aashish", "Aslam", "Anjum Baji"]);

  //add name to employee array
  const addName = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name.trim() !== "") {
      setEmpArray([...emp_array, name]);
      setName("");
    }
  };

  //print function, append all the divs to another div and then render it
  const printAll = async () => {
    setAllDivs([]);

    for (const month of months) {
      changeMonth(month);
      await new Promise(resolve => setTimeout(resolve, 500)); // Wait for the state to update and render
      await setAllDivs(prevDivs => [<div key={month}><MonthPage key={month} currMonth={month} monthIndex={months.indexOf(month)} employeeArray={emp_array} />< LendingPage currMonth={month} employeeArray={emp_array}/></div>, ...prevDivs]);
    }

    async function prepareToPrint() {
      changePrintElemState(true);

      await new Promise(resolve => setTimeout(resolve, 500));
      alert("Preparing to print, please wait..");
      await new Promise(resolve => setTimeout(resolve, 500));
      await reactToPrintFn();
      await new Promise(resolve => setTimeout(resolve, 500));
      await changePrintElemState(false);
    }
    prepareToPrint();
  }

  return (
    <section className='bg-white'>
      <div className="width-full flex place-content-center print:hidden mt-3">
        <form onSubmit={addName} className='mr-2 flex'>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder="Add Name" className='border border-1 border-black w-28 pl-1 rounded-sm'></input>
          <button type="submit" className='bg-slate-800 text-white ml-2 pr-1 pl-1 rounded-sm'>Add</button>
        </form>

        <select onChange={e => changeMonth(e.target.value)} value={currMonth} className="cursor-pointer text-center bg-red-400 rounded-sm p-1">
          {months.map((month, i) => (
            <option key={i}>{month}</option>
          ))}
        </select>

        <button className='bg-slate-800 text-white ml-2 pr-1 pl-1 rounded-sm' onClick={printAll}>Print</button>
      </div>

      {/* Body, where data will be displayed */}
      <div ref={contentRef} className="bg-white">
        {(
          <>
            <MonthPage currMonth={currMonth} monthIndex={months.indexOf(currMonth)} employeeArray={emp_array} />
            <LendingPage currMonth={currMonth} employeeArray={emp_array} />
          </>
        )}
      </div>
      <TotalDiv />
    </section>
  );
}
