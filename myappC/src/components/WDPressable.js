import { Pressable } from "react-native";

const WDPressable = ({ children, ...props }) => {
  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      // style={({ pressed }) => (pressed ? { opacity: '0.5' } : null)}
      {...props}
    >
      {children}
    </Pressable>
  );
};

export default WDPressable;
