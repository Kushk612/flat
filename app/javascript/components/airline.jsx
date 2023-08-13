import React, { useState, useEffect } from 'react'

export default function Airline() {
    const [airLines, setAirLines] = useState([]);

    const getAirLines = '/api/v1/airlines'

    useEffect(() => {
        fetch(getAirLines)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setAirLines(data['airlines'])
            });
    }, []);

    const air = (
        <>
            {airLines && airLines.map((airline, index) => {

                return (
                    <div key={index}>
                        <li> {airline.name}</li>
                        <li>{airline.image_url}</li>
                        <li>{airline.slug}</li>
                        <hr />
                    </div>
                )
            }
            )
            }
        </>
    )

    return (air)

}
