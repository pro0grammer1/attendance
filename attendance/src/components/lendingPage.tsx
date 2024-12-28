import React from 'react';
import Column from '@/components/column';

interface LendingPageProps {
    employeeArray: string[];
    currMonth: string;
}

const LendingPage: React.FC<LendingPageProps> = ({ employeeArray, currMonth }) => {

    let arr: React.ReactElement[] = [];
    const arr2: React.ReactElement[] = [];
    let keyConstant = 500;
    const ColumnArray = () => {
        arr.push(<Column key={keyConstant++} index={1}/>);

        for (let j = 0; j < 12; j++) {
            arr.push(<Column key={keyConstant++} index={1} value={employeeArray[j]} />);
        }

        arr2.push(<tr key={-1}>{...arr}</tr>); arr = [];
        for (let j = 0; j < 30; j++) {
            arr.push(<Column key={keyConstant++} index={1} value={(j % 2) ? 'Amount' : 'Date'} />);
            for (let i = 1; i < 13; i++) {
                arr.push(<Column key={keyConstant++} index={j} value="" />);
            }
            arr2.push(<tr key={j}>{...arr}</tr>);
            arr = [];
        }
    }

    ColumnArray();
    return (
        <section className='bg-white w-[11.69in] m-auto h-[8.2in] h-100% border overflow-scroll'>
            <h3 className="width-full text-center text-black font-bold text-2xl">{currMonth} Month Lending and Payment Record</h3>
            <table className='border-black border w-full table-fixed'>
                <tbody>
                    {arr2}
                </tbody>
            </table>
        </section>
    );
};

export default LendingPage;