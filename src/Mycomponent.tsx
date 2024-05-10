import React, { useState, useEffect } from "react";

interface Beer {
	id: number;
	name: string;
	description: string;
}

const MyComponent: React.FC = () => {
	const [beers, setBeers] = useState<Beer[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("https://api.sampleapis.com/beers/ale");
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data: Beer[] = await response.json();
				setBeers(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<h1>Ale Beers</h1>
			<ul>
				{beers.map((beer) => (
					<li key={beer.id}>
						<h2>{beer.name}</h2>
						<p>{beer.description}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MyComponent;
