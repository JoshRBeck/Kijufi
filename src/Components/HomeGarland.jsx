import React from 'react';
import garland from '../Assets/garlandHome.png';

function HomeGarland() {
	return (
		<div className="hidden xl:block">
			<img className="m-auto h-[630px] max-w-full overflow-hidden" src={garland} alt="garland" />
		</div>
	);
}

export default HomeGarland;
