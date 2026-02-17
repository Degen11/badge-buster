import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function InfoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Badge Buster</Text>
      <Text style={styles.lede}>
        Badge Buster is a UX concept exploring the idea of clearing notification
        badges and reducing interface noise.
      </Text>

      <Section title="How It Works">
        <Text style={styles.paragraph}>
          Badge Buster is built around a simple idea: clearing every
          notification badge across your phone.
        </Text>
        <Text style={styles.paragraph}>
          In practice, modern mobile operating systems prevent apps from
          modifying notifications or badges belonging to other apps.
        </Text>
      </Section>

      <Section title="What It Won’t Do">
        <Text style={styles.paragraph}>
          Mobile operating systems sandbox apps for security and privacy.
        </Text>
        <Text style={styles.paragraph}>
          This means Badge Buster cannot reset badges or notifications from
          other apps like Messages, WhatsApp, Instagram, or Mail.
        </Text>
        <Text style={styles.paragraph}>
          If badges persist, they must be cleared directly within those apps or
          adjusted through your device’s notification settings.
        </Text>
      </Section>

      <Section title="About">
        <Text style={styles.paragraph}>
          Badge Buster is a UX concept exploring notification reset, attention
          management, and digital decluttering.
        </Text>
        <Text style={styles.paragraph}>
          While platform restrictions prevent global badge control, the project
          reflects a common user frustration: persistent interface noise.
        </Text>
      </Section>
    </ScrollView>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 8,
  },
  lede: {
    fontSize: 15,
    lineHeight: 22,
    opacity: 0.85,
    marginBottom: 18,
  },
  section: {
    marginTop: 18,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    opacity: 0.9,
    marginBottom: 10,
  },
});
