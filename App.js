import React, { useRef, useState } from "react"
import { FlashList } from '@shopify/flash-list';
import { FlatList, Text, View, SafeAreaView } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler, NativeViewGestureHandler } from "react-native-gesture-handler"

const USE_FLASHLIST = true

const DATA = [
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  }, {
    title: "First Item",
  },
  {
    title: "Second Item",
  }, {
    title: "First Item",
  },
  {
    title: "Second Item",
  }, {
    title: "First Item",
  },
  {
    title: "Second Item",
  }, {
    title: "First Item",
  },
  {
    title: "Second Item",
  }, {
    title: "First Item",
  },
  {
    title: "Second Item",
  }, {
    title: "First Item",
  },
  {
    title: "Second Item",
  }, {
    title: "First Item",
  },
  {
    title: "Second Item",
  }, {
    title: "First Item",
  },
  {
    title: "Second Item",
  }, {
    title: "First Item",
  },
  {
    title: "Second Item",
  }, {
    title: "First Item",
  },
  {
    title: "Second Item",
  }, {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
];

export default function App() {
  const [active, setActive] = useState(false)
  const scrollRef = useRef()
  const panRef = useRef()

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <PanGestureHandler ref={panRef} onActivated={() => setActive(true)} onEnded={() => setActive(false)} simultaneousHandlers={scrollRef}>
          <View style={{ flex: 1, backgroundColor: active ? "lightgreen" : null }}>
            <NativeViewGestureHandler ref={scrollRef} simultaneousHandlers={panRef} >
              {USE_FLASHLIST ? <FlashList
                data={DATA}
                renderItem={({ item }) => <Text>{item.title}</Text>}
                estimatedItemSize={200}
              /> : <FlatList data={DATA}
                renderItem={({ item }) => <Text>{item.title}</Text>} />
              }
            </NativeViewGestureHandler>
          </View>
        </PanGestureHandler >
        <Text>Gesture state: {active ? "ACTIVE" : "NOT ACTIVE"}</Text>
      </SafeAreaView>
    </GestureHandlerRootView >
  );
}