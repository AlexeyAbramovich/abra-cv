import React from 'react'

type Props = {
	reference: React.MutableRefObject<HTMLButtonElement | null>
	ctrlIcon?: React.MutableRefObject<HTMLImageElement | null>
	songLauncher: () => void
	imgName: string
	alt: string
}

const ControlButton = ({
	reference,
	ctrlIcon,
	songLauncher,
	imgName,
	alt
}: Props) => {
	return (
		<button
			aria-label={alt}
			type='button'
			ref={reference}
			onClick={(e) => {
				e.stopPropagation()
				songLauncher()
			}}
			data-class='music'
		>
			<img
				ref={ctrlIcon}
				src={`/icons/${imgName}.svg`}
				alt={alt}
				data-class='music'
			/>
		</button>
	)
}

export default ControlButton
