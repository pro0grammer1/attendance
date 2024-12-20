import React from 'react';
import Column from '@/components/column';

interface MonthPageProps {
    currMonth: string;
    monthIndex: number;
    employeeArray: string[];
}

const MonthPage: React.FC<MonthPageProps> = ({ currMonth, monthIndex, employeeArray }) => {

    //a null array to iterate over elements
    const dateArray = React.useMemo(() => {
        const daysInMonth = new Date(2025, monthIndex + 1, 0).getDate();
        return Array.from({ length: daysInMonth }, (_, index) => index + 1);
    }, [currMonth]);

    return (
        <section className='print:[@page_{size:landscape}] w-[11.69in] m-auto max-h-[8.2in] h-100% border overflow-scroll print:overflow-hidden'>
            <h3 className="width-full text-center font-bold text-3xl">{currMonth}</h3>
            <table className='border-black border w-full table-fixed'>
                <thead>
                    <tr className="table-fixed">
                        <th className='w-[1in]'>Name</th>
                        {dateArray.map((_, i) => (
                            <th key={i} className='p-1 border border-black border-collapse'>{i + 1}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dateArray.map((_, i) => {
                        const i_is_odd: boolean = (i % 2 === 1);
                        return (
                            <tr key={i}>
                                {/** Column 1, which contains names */}
                                <Column key={i} index={i} value={(i_is_odd) ? employeeArray[(i - 1) / 2] : ""} />

                                {dateArray.map((m, j) => (
                                    <Column key={m} index={i} value="" />
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </section>
    );
};

export default MonthPage;