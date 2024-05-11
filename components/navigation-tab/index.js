export default function NavigationTab({ items, activeKey, onChange }) {
  return (
    <div className="w-full">
      <div className="h-[35px] border-b-[2px] border-b-[#efe62f] flex">
        {items?.map((item, idx) => (
          <div
            key={String(idx)}
            className={`pl-2 pr-2 text-neutral-400 text-[16px] font-semibold hover:cursor-pointer hover:text-neutral-600 ${
              activeKey === item?.key
                ? "border-b-[2px] border-b-[#efe62f] text-neutral-600"
                : ""
            }`}
            onClick={() => onChange(item?.key)}
          >
            {item?.title}
          </div>
        ))}
      </div>
      <div className="pt-4">
        {items?.find((item) => item?.key === activeKey)?.children}
      </div>
    </div>
  );
}
