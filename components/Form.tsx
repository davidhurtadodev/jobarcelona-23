import { useState } from 'react';
import Input from './Input';
import recipesService from '@/lib/services/recipesService';

export default function Form() {
  const [queryText, setQueryText] = useState('');
  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data = recipesService.getData(queryText);
  };
  return (
    <form>
      <Input
        value={queryText}
        onChange={(e) => setQueryText(e.currentTarget.value)}
      />
      <button onSubmit={onSubmitHandler} type="submit">
        Search
      </button>
    </form>
  );
}
