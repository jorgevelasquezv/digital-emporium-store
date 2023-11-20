import React from 'react';
import { Spinner } from '@/components/atoms/Spinner/Spinner';

export const Spinners = () => {
    const repeat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {repeat.map((spin) => (
                <Spinner key={`${spin}-spinner`} />
            ))}
        </section>
    );
};
