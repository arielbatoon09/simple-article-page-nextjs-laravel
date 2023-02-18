import MainLayout from "../layouts/Main";

function Home() {
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    );
}

export default Home;

Home.getLayout = function getLayout(page) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    );
}