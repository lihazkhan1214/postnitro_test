"use client";
import { usePathname } from "@/i18n/navigation";
import { Menu, UnstyledButton, Image, useMantineTheme } from "@mantine/core";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
const languages = [
  { code: "en", label: "English", flag: "/flags/GB-UKM - United Kingdom.svg" },
  { code: "zh", label: "中文", flag: "/flags/CN - China.svg" },
  { code: "es", label: "Español", flag: "/flags/ES - Spain.svg" },
  { code: "fr", label: "Français", flag: "/flags/FR - France.svg" },
];
export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const currentLang = languages.find((l) => l.code === locale);
  const theme = useMantineTheme();

  return (
    <>
      <Menu
        shadow="md"
        trigger="hover"
        openDelay={100}
        closeDelay={100}
        withArrow
        position="bottom"
        width={150}
      >
        <Menu.Target>
          <UnstyledButton p={4} style={{ borderRadius: "4px" }} bg="gray.9">
            <Image
              src={currentLang?.flag}
              alt={currentLang?.label}
              width={24}
              height={24}
            />
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
          {languages.map((lang) => (
            <Menu.Item
              key={lang.code}
              leftSection={
                <Image
                  src={lang.flag}
                  alt={lang.label}
                  width={20}
                  height={20}
                />
              }
              component={Link}
              href={`/${lang.code}${pathname}`}
              locale={lang.code}
              style={{
                textDecoration: "none",
                fontSize: theme.fontSizes.md,
                color: theme.colors.black[9],
              }}
              fw={600}
            >
              {lang.label}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </>
  );
}
