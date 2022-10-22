import 'assets/styles/globals.scss';
import './layout.scss';

function Layout({ children }: propTypes) {
    return <main className="layout__main">{children}</main>;
}

type propTypes = {
    children: React.ReactNode;
};

export { Layout };
