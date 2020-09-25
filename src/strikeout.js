import React from 'react';
import Strike from './strike'
function Strikeout() {
    const data = [
        {
            id:1,
            name: "person 1",
            city: "Chennai"
        },
        {
            id:2,
            name: "Person 2",
            city: "Hyderbad"
        },
        {
            id:3,
            name: "person 3",
            city: "Cbe"
        }
    ]
    const list = data.map(e =>
        <Strike key={e} data={e} />)
    return (
        <div class="container">
            {list}
        </div>
    )
}
export default Strikeout