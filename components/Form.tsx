import { useState } from 'react';
import Input from './Input';
import Button from './Button';
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
      <Button
        buttonType="submit"
        classNames=" text-lg text-white px-4 py-2 rounded-lg"
      >
        Search
      </Button>
    </form>
  );
}
