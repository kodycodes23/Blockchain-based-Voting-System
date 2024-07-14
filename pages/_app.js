import "../styles/globals.css";

//INTERNAL IMPORT
import { VotingProvider } from "../context/Voter";
import NavBar from '../components/NavBar/NavBar';

const MyApp = ({ Component, pageProps }) =>
(
    <VotingProvider>
    <div>
        <NavBar />
        <div>
            <Component {...pageProps} />;
        </div>
    </div>
    </VotingProvider>

);


export default MyApp;

// import React from "react";

// const HOME = () => {
//   return <div>HOME</div>;
// };

// export default HOME;

