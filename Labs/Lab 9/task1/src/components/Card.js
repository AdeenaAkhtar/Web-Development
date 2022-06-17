import React from 'react';

const Card = ({id}) => {
	return (
		<div className ='tc bg-black dib br3 pa3 ma2 grow bw2 shadow-5'>
		<img src={`https://robohash.org/${id}/set_set4/?size=200x200`} alt="cats" />
		</div>
		);
};
export default Card;
