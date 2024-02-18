import { useEffect, RefObject } from 'react'

type Event = MouseEvent | TouchEvent

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
	ref: RefObject<T>,
	handler: (event: Event) => void,
	scope: string
) => {
	useEffect(() => {
		const listener = (event: any) => {
			const el = ref?.current

			const element = document.querySelector<HTMLDivElement>(scope)
			const checkScope: boolean = event.path.includes(element)

			if (!el || el.contains((event?.target as Node) || null)) {
				return
			}
			if (checkScope) {
				handler(event)
			}
		}

		document.addEventListener('click', listener)

		return () => {
			document.removeEventListener('click', listener)
		}
	}, [ref, handler, scope])
}

export default useOnClickOutside
