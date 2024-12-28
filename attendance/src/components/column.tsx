import React from 'react';
import classNames from 'classnames';

const Column = ({ index, value }: { index: number, value?: string|undefined}) => {
    const i_is_odd: boolean = (index % 2 === 1);

    return (
        <td className={classNames('text-black text-center border border-black border-collapse', {
            'bg-gray-200 print:bg-gray-200': !i_is_odd,
            'pt-4 pb-3': (!value)
        })}>
            {value}
        </td>
    );
};

export default Column;