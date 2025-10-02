// ✅ Validate math function input
export function validateFunctionInput(func) {
  if (!func || func.trim() === "") {
    return { valid: false, error: "Function cannot be empty." };
  }

  // Only allow valid math characters (x, numbers, + - * / ^ ( ) .)
  const validPattern = /^[0-9xX+\-*/^().\s]+$/;
  if (!validPattern.test(func)) {
    return { valid: false, error: "Invalid characters in function." };
  }

  return { valid: true, error: null };
}

// ✅ Validate range values
export function validateRange(start, end, step) {
  if (isNaN(start) || isNaN(end) || isNaN(step)) {
    return { valid: false, error: "Range values must be numbers." };
  }

  if (start >= end) {
    return { valid: false, error: "Start must be less than End." };
  }

  if (step <= 0) {
    return { valid: false, error: "Step must be greater than 0." };
  }

  if ((end - start) / step > 10000) {
    return {
      valid: false,
      error: "Too many points. Try increasing step size."
    };
  }

  return { valid: true, error: null };
}