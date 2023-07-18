import SearchingResults from 'features/SearchingResults/SearchingResults.component';
import SearchingPanel from 'features/SearchingPanel/SearchingPanel.component';
import { HomeContextProvider } from './homeContext/Home.context';

function Home() {
    return (
        <HomeContextProvider>
            <h1>NASA images</h1>
            <SearchingPanel />
            <SearchingResults />
        </HomeContextProvider>
    );
}

export default Home;
