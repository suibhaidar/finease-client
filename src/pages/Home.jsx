import React from 'react';
import Overview from '../components/Overview';
import FinancialPlanning from '../components/FinancialPlanning';

const Home = () => {
    return (
        <div>
            <section>
                 <Overview/>
            </section>
            <section>
                <FinancialPlanning/>
            </section>
        </div>
    );
};

export default Home;