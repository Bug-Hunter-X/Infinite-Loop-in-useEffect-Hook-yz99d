```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Adding count as a dependency prevents the infinite loop
    setCount(count + 1);
  }, [count]); // Correct: Add count as dependency

  return <div>Count: {count}</div>;
}

export default MyComponent;
```