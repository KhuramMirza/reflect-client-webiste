function Spinner({ label }: Readonly<{ label: string }>) {
  return (
    <div>
      <div className="spinner"></div>
      <p className="text-center text-lg">{label}</p>
    </div>
  );
}

export default Spinner;
