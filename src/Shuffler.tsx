export const Shuffler = (list: any[]) =>
  
[...list].sort(()=>Math.random()-0.5);
