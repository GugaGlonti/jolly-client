import { useRef } from 'react';
import useRedux from '../hooks/useRedux';
import { clear, consoleSlice, log } from '../store/console/consoleSlice';
import { useThemeMode } from 'flowbite-react';

export default function Console() {
  const { content, dispatch } = useRedux(consoleSlice);
  const inputRef = useRef<HTMLInputElement>(null);

  function commandHandler(command: string) {
    try {
      eval(command);
    } catch (error) {
    } finally {
      switch (command) {
        case 'theme':
          return toggleTheme(useThemeMode());
        case 'border':
          return redBorder();
        default:
          inputRef.current!.value = '';
          return dispatch(log(command));
      }
    }
  }

  function logHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = inputRef.current?.value;
    if (value) commandHandler(value);
    inputRef.current!.value = '';
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
              onClick={() => dispatch(clear())}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

function toggleTheme(themeMode: any) {
  if (themeMode.mode === 'dark') {
    return themeMode.setMode('light');
  } else {
    return themeMode.setMode('dark');
  }
}

function redBorder() {
  const allElements = document.querySelectorAll('*');
  const styles = {
    outline: 'inset red 2px',
  };

  allElements.forEach(element => {
    Object.assign((element as HTMLElement).style, styles);
  });
}
