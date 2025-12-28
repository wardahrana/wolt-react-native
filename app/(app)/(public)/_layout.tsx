import BottomSheet from '@gorhom/bottom-sheet';
import { Slot } from "expo-router";
import React, { useMemo, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function OtherOptionsScreen() {
  const sheetRef = useRef<React.ComponentRef<typeof BottomSheet>>(null); // reference to control sheet
  const snapPoints = useMemo(() => ["60%"], []); // sheet height

  return (
    <View style={{ flex: 1 }}>
      <Slot />

      <BottomSheet
        ref={sheetRef}
        index={0} // automatically open
        snapPoints={snapPoints}
        enablePanDownToClose // swipe down to close
        backgroundStyle={{ borderRadius: 16 }} // like sheetCornerRadius
      >
        {/* ✅ Children added to fix TypeScript error */}
        <View style={styles.sheetContent}>
          <Text style={styles.sheetText}>Other Options Content Here</Text>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  sheetContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  sheetText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

