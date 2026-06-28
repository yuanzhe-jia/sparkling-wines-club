import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar = ({ value, onChange, placeholder = "Search..." }: SearchBarProps) => {
  return (
    <div className="relative max-w-xl mx-auto">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-caramel/50 z-10" size={20} />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-4 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-lg text-caramel placeholder-caramel/40 focus:outline-none focus:ring-2 focus:ring-seafoam/50 transition"
      />
    </div>
  );
};

export default SearchBar;
