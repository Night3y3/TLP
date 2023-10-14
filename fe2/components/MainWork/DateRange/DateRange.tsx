import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;

// const DateRange: React.FC = () => (
//     <div className="flex items-center justify-center">
//         <Space direction="vertical" size={5} className="p-10">
//             <DatePicker.RangePicker className="w-72 h-14 text-lg" />
//         </Space>
//     </div>
// );

const DateRange: React.FC = () => {
    const [selectedDateRange, setSelectedDateRange] = useState<[moment.Moment, moment.Moment] | null>([null, null]);

    const handleDateChange = (dates: [moment.Moment, moment.Moment] | null) => {
        setSelectedDateRange(dates);
        console.log(dates);
    };

    return (
        <div className="flex items-center justify-center">
            <Space direction="vertical" size={5} className="p-10">
                <DatePicker.RangePicker
                    className="w-72 h-14 text-lg"
                    value={selectedDateRange}
                    onChange={handleDateChange}
                />
            </Space>
        </div>
    );
};

export default DateRange;