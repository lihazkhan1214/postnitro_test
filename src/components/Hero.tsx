"use client";
import { colors } from "@/theme/colors";
import { fontSizes } from "@/theme/fontSizes";
import {
  Button,
  ColorSwatch,
  Group,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { Star } from "phosphor-react";
import React from "react";
function Hero() {
  const theme = useMantineTheme();
  return (
    <>
      <Stack align="center" justify="center" gap="lg" px="xl" py="sm">
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
            AI-Powered Carousel Generator for Viral Content
          </Title>
        </Group>
        <Title
          style={{ color: colors.black[9] }}
          order={1}
          fz={theme.fontSizes.xxl}
          maw={750}
        >
          AI-Powered Carousel Generator for Instagram, LinkedIn & More
        </Title>
        <Title
          maw={840}
          order={4}
          fw={500}
          style={{ color: `${theme.colors.gray[8]}`, textAlign: "center" }}
        >
          PostNitro's AI-powered platform creates stunning carousels for
          Instagram, LinkedIn, TikTok, and more. Boost your social media
          engagement with customizable, brand-aligned content generated in
          minutes.
        </Title>
        <Group align="center" justify="center">
          <Group>
            <Image
              src="/user-collected.webp"
              alt="not found"
              width={180}
              height={40}
            />
            <Stack justify="center" gap={2}>
              <Group gap={2} fz={theme.fontSizes.md} fw={600}>
                {[0, 1, 2, 3, 4].map((item, index) => (
                  <Star key={index} size={20} color="yellow" weight="fill" />
                ))}
                5.0
              </Group>
              <Text
                fz={theme.fontSizes.xs}
                style={{ color: `${theme.colors.gray[8]}` }}
              >
                Join 32,000+ Creators
              </Text>
            </Stack>
          </Group>
          <Group>
            <Stack justify="center" gap={2}>
              <Text
                fz={theme.fontSizes.lg}
                style={{ color: `${theme.colors.black[9]}`, fontWeight: "600" }}
              >
                Embedded Into
              </Text>
              <Text
                fz={theme.fontSizes.xs}
                style={{ color: `${theme.colors.gray[8]}` }}
              >
                40+ SMM Platforms
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
          // leftSection={<Sparkle size={20} />}
          bg={theme.colors.brand[5]}
          fz={theme.fontSizes.md}
          radius="md"
        >
          Start Creating Free Carousels
        </Button>
        <Title
          fw={500}
          order={4}
          style={{ color: `${theme.colors.gray[8]}`, textAlign: "center" }}
        >
          No Credit Card Required | Free Downloads Every Month" text below the
          button
        </Title>
      </Stack>
    </>
  );
}

export default Hero;
