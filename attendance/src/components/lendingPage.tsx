import React from 'react';
import Column from '@/components/column';

const LendingPage = () => {

    let arr: React.ReactElement[] = [];
    let arr2: React.ReactElement[] = [];
    let keyConstant = 500;
    let ColumnArray = () => {
        for (let j = 0; j < 30; j++) {
            for (let i = 1; i < 12; i++) {
                arr = [<Column key={keyConstant++} index={j} value="" />, ...arr];
            }
            arr2 = [<tr key={j}>{...arr}</tr>, ...arr2];
            arr = [];
        }
    }

    ColumnArray();
    return (
        <section className='print:[@page_{size:landscape}] w-[11.69in] m-auto h-[8.2in] h-100% border overflow-scroll print:overflow-hidden'>
            <table className='border-black border w-full table-fixed'>
                <tbody>
                    {arr2}
                </tbody>
            </table>
        </section>
    );
};

export default LendingPage;