import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import './featuredInfo.css';

const FeaturedInfo = () => {
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <span className='featuredTitle'>Revanue</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$2,999</span>
                    <span className='featuredMoneyRate'>
                        -11.5{' '}
                        <ArrowDownward className='featuredIcon negative' />
                    </span>
                </div>
                <span className='featuredSub'>Compared to last month</span>
            </div>

            <div className='featuredItem'>
                <span className='featuredTitle'>Sales</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$4,999</span>
                    <span className='featuredMoneyRate'>
                        -1.5 <ArrowDownward className='featuredIcon negative' />
                    </span>
                </div>
                <span className='featuredSub'>Compared to last month</span>
            </div>

            <div className='featuredItem'>
                <span className='featuredTitle'>Cost</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$5,999</span>
                    <span className='featuredMoneyRate'>
                        +9.5 <ArrowUpward className='featuredIcon' />
                    </span>
                </div>
                <span className='featuredSub'>Compared to last month</span>
            </div>
        </div>
    );
};

export default FeaturedInfo;
