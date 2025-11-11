export default function InputField({
    label,
    required,
    placeholder,
    errorText,
  }: {
    label?: string;
    required?: boolean;
    placeholder?:string;
    errorText?: string;
  }) {
    return (
      <div className="space-y-1.5">
        {label && <label className="block text-sm font-semibold text-zinc-700">{label}</label>}
        <input
          className="w-full rounded-lg border border-zinc-200 bg-zinc-100 px-3 lg:py-2 xl:py-4 xl:text-lg outline-none placeholder:text-zinc-400"
          placeholder={placeholder}
          aria-required={required}
        />
        {required ? (
          <p className="text-sm text-hero-light">{errorText}</p>
        ) : null}
      </div>
    );
  }