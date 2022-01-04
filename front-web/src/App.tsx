import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';
import SalesByDate from './components/sales-by-date';
import SalesSummary from './components/sales-summary';
import SalesTable from './components/sales-table';
import { buildSalesByPaymentMethod, buildSalesByStore } from './helpers';
import { FilterData, PieChartConfig, SalesByPaymentMethod, SalesByStore } from './types';
import { buildFiltersParams, makeRequest } from './utils/request';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const [salesByStore, setSalesByStore] = useState<PieChartConfig>();
  const [salesByPayment, setSalesByPayment] = useState<PieChartConfig>();
  const params = useMemo(() => buildFiltersParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesByStore[]>('/sales/by-store', { params })
      .then((response) => {
        const newSalesByStore = buildSalesByStore(response.data);
        setSalesByStore(newSalesByStore);
      })
      .catch(() => {
        console.error('Erro de integração coma API');
      });
  }, [params]);

  const onChangeFilterData = (filter: FilterData) => {
    setFilterData(filter);
  };

  useEffect(() => {
    makeRequest
      .get<SalesByPaymentMethod[]>('/sales/by-payment-method', { params })
      .then((response) => {
        const newSalesByPaymentMethod = buildSalesByPaymentMethod(response.data);
        setSalesByPayment(newSalesByPaymentMethod);
      })
      .catch(() => {
        console.error('Erro de integração coma API');
      });
  }, [params]);

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onChangeFilterData} />
        <SalesByDate filterData={filterData} />
        <div className="sales-overview-container">
          <SalesSummary filterData={filterData} />
          <PieChartCard name="Lojas" labels={salesByStore?.labels} series={salesByStore?.series} />
          <PieChartCard
            name="Pagamento"
            labels={salesByPayment?.labels}
            series={salesByPayment?.series}
          />
        </div>
        <SalesTable filterData={filterData} />
      </div>
    </>
  );
}

export default App;
