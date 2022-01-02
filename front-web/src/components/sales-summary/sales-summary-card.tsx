import React from 'react';
import './styles.css';

type Props = {
  value: number;
  label: string;
  icon: React.ReactNode;
};

const SalesSummaryCard = ({ value, label, icon }: Props) => {
  return (
    <div className="sales-summary-card-container base-card">
      {icon}
      <h3 className="sales-summary-card-value">{value}</h3>
      <span className="sales-summary-card-label">{label}</span>
    </div>
  );
};

export default SalesSummaryCard;
