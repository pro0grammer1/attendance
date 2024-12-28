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

    const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const monthDay = new Date(2025, monthIndex, 0).getDay() - 1;
    let tempMonthDay = monthDay;

    return (
        <section className='bg-white print:[@page_{size:landscape}] w-[11.69in] m-auto max-h-[8.2in] h-100% border overflow-scroll print:overflow-hidden'>
            <h3 className="width-full text-center font-bold text-3xl">{currMonth}</h3>
            <table className='border-black border w-full table-fixed'>
                <thead>
                    <tr className="table-fixed">
                        <th className='w-[1in]'>Name</th>
                        {dateArray.map((_, i) => (
                            <th key={i} className='p-1 border border-black text-black border-collapse'>{i + 1}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {/**Column with week names*/}
                    <tr>
                        <Column key={-1} index={1} />
                        {dateArray.map((_, i) => {
                            tempMonthDay++;
                            if (tempMonthDay > 6) tempMonthDay = 0;
                            return (
                                <Column key={i} index={1} value={weekdays[tempMonthDay]} />
                            )
                        })}
                    </tr>

                    {dateArray.map((_, i) => {
                        const i_is_odd: boolean = (i % 2 === 1);
                        return (
                            <tr key={i}>
                                {/** Column 1, which contains names */}
                                <Column key={i} index={i} value={(i_is_odd) ? employeeArray[(i - 1) / 2] : undefined} />

                                {dateArray.map((m, j) => (
                                    <Column key={m} index={((monthDay+j+4)%7) ? i : 1} value="" />
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