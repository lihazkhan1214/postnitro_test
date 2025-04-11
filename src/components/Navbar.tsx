"use client";

import {
  Box,
  Group,
  Menu,
  UnstyledButton,
  Image,
  Button,
  Badge,
  Drawer,
  Stack,
  Burger,
  rem,
  useMantineTheme,
  Title,
} from "@mantine/core";
import { useMediaQuery, useDisclosure } from "@mantine/hooks";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CaretDown, Sparkle } from "phosphor-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
export default function Navbar() {
  const t = useTranslations("Navbar");
  const isDesktop = useMediaQuery("(min-width: 56.25em)", true, {
    getInitialValueInEffect: true,
  });
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  const renderMenu = (
    label: string,
    items: { href: string; text: string }[]
  ) => {
    if (isDesktop) {
      return (
        <Menu trigger="hover">
          <Menu.Target>
            <UnstyledButton
              px="sm"
              py="10"
              style={{
                color: theme.colors.black[9],
                borderRadius: rem(6),
                transition: "background-color 150ms ease, color 150ms ease",
                fontSize: theme.fontSizes.lg,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  theme.colors.gray[0];
                (e.currentTarget as HTMLElement).style.color =
                  theme.colors.black[9];
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "transparent";
                (e.currentTarget as HTMLElement).style.color =
                  theme.colors.black[9];
              }}
            >
              <span>{label}</span>
              <CaretDown size={16} style={{ marginLeft: "4px" }} />
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>
            {items.map((item) => (
              <Menu.Item
                component={Link}
                style={{
                  textDecoration: "none",
                  fontSize: theme.fontSizes.md,
                  color: theme.colors.black[9],
                }}
                href={item.href}
                key={item.href}
                fw={600}
              >
                {item.text}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      );
    } else {
      return (
        <Stack align="center" justify="center">
          <Title fz={theme.fontSizes.md}>{label}</Title>
          {items.map((item) => (
            <>
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: theme.fontSizes.md,
                  color: theme.colors.black[9],
                }}
                href={item.href}
                key={item.href}
              >
                {item.text}
              </Link>
            </>
          ))}
          <Link
            style={{
              textDecoration: "none",
              fontSize: theme.fontSizes.md,
              color: theme.colors.black[9],
            }}
            href="/plans"
          >
            {t("plans")}
          </Link>
        </Stack>
      );
    }
  };

  return (
    <Box
      component="header"
      px="xl"
      py="sm"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        zIndex: 100,
      }}
    >
      {isDesktop ? (
        <Group gap="xl" align="center">
          <Group gap="sm">
            <UnstyledButton onClick={() => router.push("/")}>
              <Image src="/logo-full.svg" alt="PostNitro" height={30} />
            </UnstyledButton>
            {!isDesktop && <Burger opened={opened} onClick={open} />}
          </Group>

          {renderMenu(t("gettingStarted"), [
            { href: "https://postnitro.ai/docs", text: t("docs") },
            { href: "https://postnitro.ai/blog", text: t("blog") },
            {
              href: "https://ls.postnitro.ai/affiliates",
              text: t("affiliates"),
            },
          ])}

          {renderMenu(t("products"), [
            { href: "/carousels/linkedin", text: t("linkedinCarousel") },
            { href: "/carousels/instagram", text: t("instagramCarousel") },
            { href: "/carousels/tiktok", text: t("tiktokCarousel") },
            { href: "/carousels/x-twitter", text: t("twitterCarousel") },
            { href: "/products/embed", text: t("embed") },
            { href: "/products/extension", text: t("extension") },
          ])}

          {renderMenu(t("freeTools"), [
            {
              href: "/free-ai-tools/twitter-free-banner-header-image-maker",
              text: t("twitterBannerMaker"),
            },
            {
              href: "/free-ai-tools/linkedin-free-banner-header-image-maker",
              text: t("linkedinBannerMaker"),
            },
            {
              href: "/free-ai-tools/instagram-free-image-splitter-grid-maker",
              text: t("instagramGridMaker"),
            },
            {
              href: "/free-ai-tools/linkedin-free-text-formatter",
              text: t("linkedinTextFormatter"),
            },
            {
              href: "/free-ai-tools/linkedin-free-post-generator",
              text: t("linkedinPostGenerator"),
            },
          ])}

          <Link
            style={{
              textDecoration: "none",
              fontSize: theme.fontSizes.lg,
              fontWeight: 600,
              color: theme.colors.black[9],
            }}
            href="/plans"
          >
            {t("plans")}
          </Link>
        </Group>
      ) : (
        <Drawer
          opened={opened}
          onClose={close}
          padding="md"
          size="100%"
          position="right"
        >
          <Stack gap="md" mt="md">
            {renderMenu(t("gettingStarted"), [
              { href: "https://postnitro.ai/docs", text: t("docs") },
              { href: "https://postnitro.ai/blog", text: t("blog") },
              {
                href: "https://ls.postnitro.ai/affiliates",
                text: t("affiliates"),
              },
            ])}

            {renderMenu(t("products"), [
              { href: "/carousels/linkedin", text: t("linkedinCarousel") },
              { href: "/carousels/instagram", text: t("instagramCarousel") },
              { href: "/carousels/tiktok", text: t("tiktokCarousel") },
              { href: "/carousels/x-twitter", text: t("twitterCarousel") },
              { href: "/products/embed", text: t("embed") },
              { href: "/products/extension", text: t("extension") },
            ])}

            {renderMenu(t("freeTools"), [
              {
                href: "/free-ai-tools/twitter-free-banner-header-image-maker",
                text: t("twitterBannerMaker"),
              },
              {
                href: "/free-ai-tools/linkedin-free-banner-header-image-maker",
                text: t("linkedinBannerMaker"),
              },
              {
                href: "/free-ai-tools/instagram-free-image-splitter-grid-maker",
                text: t("instagramGridMaker"),
              },
              {
                href: "/free-ai-tools/linkedin-free-text-formatter",
                text: t("linkedinTextFormatter"),
              },
              {
                href: "/free-ai-tools/linkedin-free-post-generator",
                text: t("linkedinPostGenerator"),
              },
            ])}
          </Stack>
        </Drawer>
      )}

      <Group gap="sm" align="center" mt={{ base: "sm", md: 0 }}>
        {!isDesktop && (
          <>
            <Group gap="lg" w="100%" justify="space-between">
              <UnstyledButton onClick={() => router.push("/")}>
                <Image src="/logo-full.svg" alt="PostNitro" height={30} />
              </UnstyledButton>
              <Group gap="sm">
                <LanguageSwitcher />
                <Burger opened={opened} onClick={open} />
              </Group>
            </Group>
          </>
        )}
        {isDesktop && <LanguageSwitcher />}
        <Button
          component={Link}
          href="/app/post-maker"
          leftSection={<Sparkle size={16} />}
          variant="outline"
          fz={theme.fontSizes.md}
          radius="md"
        >
          {t("createImagePost")}
          <Badge ml={6} size="md" color="lime">
            BETA
          </Badge>
        </Button>
        <Button
          component={Link}
          href="/app/carousel-maker"
          leftSection={<Sparkle size={20} />}
          bg={theme.colors.brand[5]}
          fz={theme.fontSizes.md}
          radius="md"
        >
          {t("createCarousel")}
        </Button>
      </Group>
    </Box>
  );
}
