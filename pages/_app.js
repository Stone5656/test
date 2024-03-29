import Layout from "@/components/layout";
import "styles/globals.css"

function Myapp({ Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
export default Myapp;