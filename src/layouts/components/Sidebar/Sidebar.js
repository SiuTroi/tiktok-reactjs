import classNames from 'classnames/bind';
import config from '~/config';
import { Menu, MenuItem } from './Menu';
import {
  HomeIcon,
  UserGroupIcon,
  LiveIcon,
  HomeIconActive,
  UserGroupIconActive,
  LiveIconActive,
} from '~/components/Icons';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For you" icon={<HomeIcon />} activeIcon={<HomeIconActive />} to={config.routes.home} />
        <MenuItem
          title="Following"
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupIconActive />}
          to={config.routes.following}
        />
        <MenuItem title="LIVE" icon={<LiveIcon />} activeIcon={<LiveIconActive />} to={config.routes.live} />
      </Menu>
    </aside>
  );
}

export default Sidebar;
