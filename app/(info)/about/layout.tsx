export default function AboutLayout({children}: {children: React.ReactNode}) {
  return (
    <div style={{backgroundColor: "darkgreen"}}>
      <p>This is layout ABOUT</p>
      {children}
    </div>
  );
}
