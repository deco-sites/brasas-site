export function formatPhoneNumber(number: string) {
  const cleaned = number.replace(/\D/g, "");

  if (cleaned.length === 10) {
    // Fixo: (XX) XXXX-XXXX
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${
      cleaned.slice(6)
    }`;
  } else if (cleaned.length === 11) {
    // Celular: (XX) 9XXXX-XXXX
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${
      cleaned.slice(7)
    }`;
  }

  // Caso não tenha formato esperado, retorna como está
  return number;
}
