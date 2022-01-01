import FlatPickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css';
import flatpickrLib from 'flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';
import './styles.css';

flatpickrLib.localize(Portuguese);

const Filter = () => {
  const onChangeDate = (dates: Date[]) => {
    console.log(dates);
  };

  return (
    <div className="filter-container base-card">
      <FlatPickr
        options={{
          mode: 'range',
          dateFormat: 'd/m/Y',
          // eslint-disable-next-line prettier/prettier
          showMonths: 2
        }}
        className="filter-input"
        onChange={onChangeDate}
        placeholder="Selecione um período"
      />
      <select className="filter-input">
        <option value="">Selecione um gênero</option>
        <option value="FEMALE">Feminino</option>
        <option value="MALE">Masculino</option>
        <option value="OTHER">Outros</option>
      </select>
    </div>
  );
};

export default Filter;
