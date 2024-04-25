type Props = {}
import Image from 'next/image'
import messageIcon from '../icons/message.svg'
import { ButtonHeader } from '../ui/buttonHeader'

function ButtonMessage({}: Props) {
	return (
		<ButtonHeader variant='ghost'>
			<Image src={messageIcon} width={24} height={24} alt='MessageIcon' />
		</ButtonHeader>
	)
}

export default ButtonMessage
