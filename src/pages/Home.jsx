import React from 'react';
import Overview from '../components/Overview';
import FinancialPlanning from '../components/FinancialPlanning';
import BudgetingTips from '../components/BudgetingTips';

const Home = () => {
    return (
        <div>
            <section>
                 <Overview/>
            </section>
            <section>
                <BudgetingTips/>
            </section>
            <section>
                <FinancialPlanning/>
            </section>
        </div>
    );
};

export default Home;