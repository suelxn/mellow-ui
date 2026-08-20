/*
  Wrapper tipado de `Object.prototype.hasOwnProperty`, usado para checar chaves de objetos com
  inferência correta do tipo da chave (type guard).
*/

/** Uma função utilitária para verificar se o objeto possui uma chave, inferindo o tipo de chave correto */
function hasOwnProperty<K extends string | number | symbol>(
  obj: Record<K, unknown>,
  key: string | number | symbol,
): key is K {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

export { hasOwnProperty };
