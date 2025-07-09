export const nameMask = (name: string): string => {
  // Remove tudo que não for letra, acento, espaço ou apóstrofo
  name = name.replace(/[^a-zA-ZÀ-ÿ\s']/g, "");

  // Remove múltiplos espaços seguidos
  name = name.replace(/\s{2,}/g, " ");

  // Limita a 50 caracteres
  name = name.slice(0, 50);

  return name;
};
