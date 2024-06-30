import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import styles from './SuggestedAccounts.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

const renderPreview = (props) => {
    return (
        <div tabIndex="-1" {...props}>
            <PopperWrapper>
                <AccountPreview />
            </PopperWrapper>
        </div>
    );
};

function AccountItem() {
    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom-start" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img className={cx('avatar')} src={images.noImage} alt="noImage" />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>nguyenvanA</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Nguyễn Văn A</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
