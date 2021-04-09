import React from 'react';

const PageWrapper = ({ page: Page }) => {
	return (
		<div style={{ display: 'flex' }}>
			{ /* <-- HEADER goes here */ }
			<div style={{ flex: 1, height: '100%' }}>
				<Page />
			</div>
		</div>
	);
};

export default PageWrapper;