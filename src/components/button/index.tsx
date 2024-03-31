import cs from 'classnames';

type ButtonProp = {
  label: string;
};

export default function Button({
  label,
}: ButtonProp) {
  return (
    <button
      type="button"
      className={cs(
        'rounded-md',
        'p-3',
        'bg-blue-800',
        'text-white',
        'hover:bg-secondary',
      )}
    >
      {label}
    </button>
  );
}
