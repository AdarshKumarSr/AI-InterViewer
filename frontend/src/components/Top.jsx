import TextPressure from '../components/TextPressure/TextPressure';

function Top() {
  return (
    <div style={{ position: 'relative', height: '600px' }}>
      <TextPressure
        text="Welcome !!"
        flex={false}
        alpha={false}
        stroke={false}
        width={false}
        weight={true}
        italic={true}
        textColor="#000000"
        strokeColor="#ff0000"
        minFontSize={36}
      />
    </div>
  );
}

export default Top; // Ensure default export
