interface SpreadProps {
  items: any[];
}

export default function Spread({ items }: SpreadProps) {
  return (
    <>
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </>
  );
}
