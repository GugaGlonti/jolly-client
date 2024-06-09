import { useRef } from 'react';
import useRedux from '../hooks/useRedux';
import { clear, consoleSlice, log } from '../store/console/consoleSlice';
import { useThemeMode } from 'flowbite-react';

export default function Console() {
  const { content, dispatch } = useRedux(consoleSlice);
  const inputRef = useRef<HTMLInputElement>(null);

  function clearHanlder() {
    dispatch(clear());
  }

  function logHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = inputRef.current?.value;
    if (value) {
      try {
        if (value === 'theme') {
          const themeMode = useThemeMode();
          themeMode.setMode(themeMode.mode === 'dark' ? 'light' : 'dark');
          return;
        }

        dispatch(log(value));

        eval(value);
      } catch (error) {}
      inputRef.current!.value = '';
    }
  }

  return (
    <>
      <div className='bg-gray-200 p-8 gap-8 flex flex-col border-black m-2 border-2 rounded-md'>
        <div>
          {content.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
        <form onSubmit={logHandler}>
          <input
            type='text'
            placeholder='Type here...'
            className='w-full p-2 border-2 border-gray-400 rounded-md'
            ref={inputRef}
          />
          <div className='flex justify-between m-4 p-2'>
            <button>Send</button>
            <button
              type='button'
              onClick={clearHanlder}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
