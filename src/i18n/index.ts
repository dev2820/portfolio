import en from "@/i18n/meta.en.json";
import ko from "@/i18n/meta.en.json";
import Item from "@/interfaces/Item";

export default function i18n(
  key: string,
  lang: string
): string | string[] | Item[] | undefined {
  const namespaces = key.split(".");

  const langPack = lang === "KO" ? ko : en;
  let result: Record<string, any> = langPack;
  namespaces.forEach((namespace: string) => {
    result = result[namespace];
  });

  return result as string | string[];
}
