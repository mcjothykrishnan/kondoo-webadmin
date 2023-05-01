import Router from 'next/router';
import React, { useEffect } from 'react';

export default function Auth() {
	useEffect(() => {
		Router.push('/kondoo-web-admin/auth/sign-in');
	});

	return <div />;
}
