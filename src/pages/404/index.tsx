import type { PageConfig } from 'next';
import styles from './styles.module.css';
import Link from 'next/link';
import { AppRoutes } from '@/utils/routes';

export const config: PageConfig = { amp: false };

const Page404: React.FC = () => {
	return (
		<>
			<div className={`${styles.wrapper}`}>
				<div className={styles.container}>
					<p className={styles.title}>404</p>
					<p className={styles.text}>Oops! Trang bạn tìm kiếm không tồn tại.</p>
					<p className={styles.text}>
						Hãy truy cập{' '}
						<Link className={styles.link} href={AppRoutes.home}>
							trang chủ
						</Link>{' '}
						hoặc quay lại trang trước đó.
					</p>
				</div>
			</div>
		</>
	);
};

export default Page404;
