import styles from '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css'
import Footer from '../src/component/Footer';
import Top from '../src/component/Top';

function MyApp ({ Component, pagePros }) {
    return (
        <div style={{ width:1000, margin: "0 auto" }}>
            <Top />
            <Component {...pagePros} />
            <Footer />
        </div> 
    )
}

export default MyApp;