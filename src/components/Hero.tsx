"use client";
import { colors } from "@/theme/colors";
import { fontSizes } from "@/theme/fontSizes";
import {
  Button,
  ColorSwatch,
  Group,
  Space,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Star } from "phosphor-react";
import React from "react";
import Navbar from "./Navbar";
import { useTranslations } from "next-intl";
function Hero() {
  const theme = useMantineTheme();
  const t = useTranslations("Hero");
  return (
    <>
      <Stack
        gap="lg"
        px="xl"
        align="center"
        justify="center"
        style={{
          backgroundImage: 'url("/grid-box.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "80vh",
          textAlign: "center",
        }}
      >
        <Group align="center" justify="center">
          <Title
            order={5}
            size={theme.fontSizes.md}
            style={{
              border: `1px solid ${theme.colors.brand[5]}`,
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              padding: "2px 8px",
            }}
          >
            <ColorSwatch size={12} color={theme.colors.brand[5]} />
            {t("tagline")}
          </Title>
        </Group>
        <Title
          style={{ color: colors.black[9] }}
          order={1}
          fz={theme.fontSizes.xxl}
          maw={750}
        >
          {t("headline")}
        </Title>
        <Title
          maw={840}
          order={4}
          fw={500}
          style={{ color: `${theme.colors.gray[8]}`, textAlign: "center" }}
        >
          {t("description")}
        </Title>
        <Group justify="center">
          <Group justify="center">
            <Image
              src="/user-collected.webp"
              alt="not found"
              width={180}
              height={40}
            />
            <Stack gap={2}>
              <Group gap={2} fz={theme.fontSizes.md} fw={600}>
                {[0, 1, 2, 3, 4].map((item, index) => (
                  <Star key={index} size={20} color="yellow" weight="fill" />
                ))}
                5.0
              </Group>
              <Text
                fz={theme.fontSizes.md}
                style={{ color: `${theme.colors.gray[8]}` }}
              >
                {t("ratingLabel")}
              </Text>
            </Stack>
          </Group>
          <Group justify="center">
            <Stack gap={2}>
              <Text
                fz={theme.fontSizes.lg}
                style={{
                  color: `${theme.colors.black[9]}`,
                  fontWeight: "600",
                }}
              >
                {t("embeddedInto")}
              </Text>
              <Text
                fz={theme.fontSizes.md}
                style={{ color: `${theme.colors.gray[8]}` }}
              >
                {t("platformCount")}
              </Text>
            </Stack>
            <Image
              src="/embed-collected.png"
              alt="not found"
              width={180}
              height={40}
            />
          </Group>
        </Group>
        <Button
          component={Link}
          href="/app/carousel-maker"
          rightSection={<ArrowRight size={20} weight="bold" />}
          bg={theme.colors.brand[5]}
          fz={theme.fontSizes.md}
          radius="md"
        >
          {t("ctaButton")}
        </Button>
        <Title
          fw={500}
          order={4}
          style={{
            color: `${theme.colors.gray[8]}`,
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Check size={20} color={theme.colors.gray[8]} />
          <span style={{ lineHeight: 1.4 }}>{t("footerNote")}</span>
        </Title>
      </Stack>
    </>
  );
}

export default Hero;
