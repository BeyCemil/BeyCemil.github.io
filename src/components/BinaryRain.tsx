
import { useEffect, useState } from "react";

const BinaryRain = () => {
  const [binaryColumns, setBinaryColumns] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    // Create binary rain columns
    const columns = Array.from({ length: 25 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      delay: Math.random() * -20
    }));
    setBinaryColumns(columns);
  }, []);

  const generateBinaryString = () => {
    return Math.round(Math.random()).toString();
  };

  return (
    <div className="binary-rain">
      {binaryColumns.map(column => (
        <div
          key={column.id}
          className="binary-column"
          style={{
            left: `${column.left}%`,
            animationDelay: `${column.delay}s`
          }}
        >
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="binary-digit">
              {generateBinaryString()}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BinaryRain;
