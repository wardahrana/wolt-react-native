import BottomSheet from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import { Text, View } from "react-native";

export default function OtherOptionsScreen() {
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = ["60%"]; // height like sheetAllowedDetents

  return (
    <View style={{ flex: 1 }}>
      <BottomSheet
        ref={sheetRef}
        index={0} // automatically open
        snapPoints={snapPoints}
        enablePanDownToClose // swipe down to close
        backgroundStyle={{ borderRadius: 16 }} // like sheetCornerRadius
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Other Options Content</Text>
        </View>
      </BottomSheet>
    </View>
  );
}
