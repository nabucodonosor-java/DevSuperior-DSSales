import SalesSummaryCard from './sales-summary-card';
import { ReactComponent as MoneyIcon } from './../../assets/money-icon.svg';
import { ReactComponent as AmountIcon } from './../../assets/amount-icon.svg';
import { ReactComponent as MinimaIcon } from './../../assets/minima-icon.svg';
import { ReactComponent as MaximaIcon } from './../../assets/maxima-icon.svg';
import { FilterData, SalesSummaryData } from '../../types';
import './styles.css';
import { useEffect, useMemo, useState } from 'react';
import { buildFiltersParams, makeRequest } from '../../utils/request';

type Props = {
  filterData?: FilterData;
};

const initalSummary = {
  avg: 0,
  count: 0,
  max: 0,
  min: 0
};

const SalesSummary = ({ filterData }: Props) => {
  const [summary, setSummary] = useState<SalesSummaryData>(initalSummary);
  const params = useMemo(() => buildFiltersParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesSummaryData>('/sales/summary', { params })
      .then((response) => {
        setSummary(response.data);
      })
      .catch(() => {
        console.error('Erro de integração coma API');
      });
  }, [params]);

  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value={summary?.avg?.toFixed(2)} label="Média" icon={<MoneyIcon />} />
      <SalesSummaryCard value={summary?.count} label="Quantidade" icon={<AmountIcon />} />
      <SalesSummaryCard value={summary?.min} label="Mínima" icon={<MinimaIcon />} />
      <SalesSummaryCard value={summary?.max} label="Máxima" icon={<MaximaIcon />} />
    </div>
  );
};

export default SalesSummary;
