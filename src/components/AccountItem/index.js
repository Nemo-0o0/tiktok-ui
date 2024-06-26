import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src={images.image} alt="Vi" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Huyen Vi</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>@huyenvi</span>
            </div>
        </div>
    );
}

export default AccountItem;
