import SalesSummaryCard from './sales-summary-card';
import { ReactComponent as MoneyIcon } from './../../assets/money-icon.svg';
import { ReactComponent as AmountIcon } from './../../assets/amount-icon.svg';
import { ReactComponent as MinimaIcon } from './../../assets/minima-icon.svg';
import { ReactComponent as MaximaIcon } from './../../assets/maxima-icon.svg';
import './styles.css';

const SalesSummary = () => {
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value={351.0} label="Média" icon={<MoneyIcon />} />
      <SalesSummaryCard value={56.0} label="Quantidade" icon={<AmountIcon />} />
      <SalesSummaryCard value={51.0} label="Mínima" icon={<MinimaIcon />} />
      <SalesSummaryCard value={31.0} label="Máxima" icon={<MaximaIcon />} />
    </div>
  );
};

export default SalesSummary;
