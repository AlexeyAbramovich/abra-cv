import { useEffect } from 'react'
import { Location } from 'react-router-dom'
import { getPageName } from '../utils/get-page-name.util'

export const useUpdateDocumentTitle = (path: Location<any>) => {
	useEffect(() => {
		document.title = `ABRA | ${getPageName(path.pathname)}`
	}, [path])
}
