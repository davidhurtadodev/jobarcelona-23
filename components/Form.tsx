import { useState } from 'react';
import Input from './Input';
import recipesService from '@/lib/services/recipesService';
import { useAppDispatch } from '@/store/hooks';
import { fetchRecipesAsync } from '@/store/recipesSlice';

export default function Form() {
  const dispatch = useAppDispatch();
  const [queryText, setQueryText] = useState('');
  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(fetchRecipesAsync(queryText));
    setQueryText('');
  };
  return (
    <form className="mb-10" onSubmit={onSubmitHandler}>
      <div className="flex flex-col mb-3 ">
        <Input
          value={queryText}
          onChange={(e) => setQueryText(e.currentTarget.value)}
        />
      </div>
      <button
        className="bg-[#00843c] text-lg text-white px-4 py-2 rounded-lg"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
