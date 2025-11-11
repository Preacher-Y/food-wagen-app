export default function SelectField({
    label,
    options,
  }: {
    label?: string;
    options: string[];
  }) {
    return (
      <div className="space-y-1.5">
        {label && <label className="block text-sm font-semibold text-zinc-700">{label}</label>}
        <div className="relative">
          <select
            className="w-full appearance-none rounded-lg border border-zinc-200 bg-zinc-100 px-3 py-3 text-sm outline-none"
          >
            {options.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }