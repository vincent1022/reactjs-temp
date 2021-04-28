import styles from './style.module.scss'
import { Link } from 'react-router-dom'
import { useTitle } from 'ahooks'

const Home = () => {
	useTitle('e起點')
	return (
		<div id="top" className={styles.root}>
			<div className={'logo'}>
				<img src="/logo.png" alt="" />
			</div>
			<div className={'banner-1'}>
				<img src="/banner-1.png"/>
			</div>
			<div className={'title-1'}>
				<img src="/title-1.png"/>
			</div>
			<img className={'bg-1'} src="/bg1.png"/>
			<div className={'device-group'}>
				<img className={'toast'} src="/toast.png"/>
				<a href="#self-service"><img src="/01.png"/></a>
				<a href="#phone"><img src="/02.png"/></a>
				<a href="#POS"><img src="/03.png"/></a>
				<img className={'airplane'} src="/Paper-airplane.png"/>
			</div>
			<div className={'banner-2'}>
				<img src="/banner-2.png"/>
				<img className={'chicken'} src="/chicken.png"/>
			</div>
			<div id="self-service"></div>
			<div className={'banner-3'}>
				<img src="/self.png"/>
				<img src="/self-text.png"/>
				<img className={'hotDog'} src="/hotdog.png"/>
			</div>
			<div id="phone"></div>
			<div className={'banner-4'}>
				<img className={'pot'} src="/pot.png"/>
				<img src="/mobile-text.png"/>
				<img src="/mobile.png"/>
			</div>
			<div id="POS"></div>
			<div className={'banner-5'}>
				<img src="/POS.png"/>
				<img src="/POS-text.png"/>
				<img className={'pizza'} src="/pizza.png"/>
			</div>
			<div className={'banner-6'}>
				<img src="/banner-6.png"/>
			</div>
			<div className={'contact-block'}>
				<img src="/phone.png"/>
				<div className={'button-group'}>
					<img src="/title-2.png"/>
					<img className={'contact-btn'} src="/contactUs.png"/>
				</div>
				<img className={'thumbs'} src="/thumbs.png"/>
			</div>
			<div className={'footer'}>
				<img src="/footer.png"/>
				<img className={'mail'} src="/mail.png"/>
			</div>
			<div className={'goTop'}>
				<a href="#top"><img src="/btn-top.png"/></a>
			</div>
			{/*<div className={'tip'}>*/}
			{/*	範例*/}
			{/*	<Link to={'/dash/example'}>*/}
			{/*		{' <'}點擊前往111{'>'}*/}
			{/*	</Link>*/}
			{/*</div>*/}
		</div>
	)
}

export default Home
