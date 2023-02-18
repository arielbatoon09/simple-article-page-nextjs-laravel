import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Main({children}) {
    return (
        <div className="antialiased bg-blue-50">
            <div>
                <div>
                    <div className="max-w-xl px-8 mx-auto">
                        <Nav />
                    </div>
                </div>
            </div>
            <div className="max-w-xl mx-10 mt-6  sm:mt-0 sm:py-12">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Main;
