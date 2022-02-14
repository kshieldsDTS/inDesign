import React from 'react';
import WorkerCard from './WorkerCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

function LFW(props) {
	const [displayData, setDisplayData] = useState()
	useEffect(() => {
		const url = 'https://indecoders.herokuapp.com/LFWork/';
		(async () => {
			try {
				const fetchedData = await axios.get(url)
				setDisplayData(fetchedData.data)
			} catch(err){
				console.error(err)
			}
		})()
	}, [])
    return (
        <div>
			{displayData ? 
				displayData.map((element, i) => (
                <WorkerCard
                    key={i}
                    id={element.id}
                    name={element.owner}
                    skills={element.skills}
                    email={element.email}
                    availability={element.availability}
                    payrate={element.payrate}
					sunday={element.sunday}
					monday={element.monday}
					tuesday={element.tuesday}
					wednesday={element.wednesday}
					thursday={element.thursday}
					friday={element.friday}
					saturday={element.saturday}
                />
            )) : 'Please wait... Heroku is waking up...'}
        </div> 
    );
}

export default LFW;