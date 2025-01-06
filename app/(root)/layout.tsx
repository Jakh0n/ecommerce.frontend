import { ChildProps } from '@/types'
import React from 'react'

function Layout({ children }: ChildProps) {
	return (
		<div>
			<main>{children}</main>
		</div>
	)
}

export default Layout
