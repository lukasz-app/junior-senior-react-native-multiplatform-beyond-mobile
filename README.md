# React Native: multiplatform beyond mobile

Dokumentacja i repozytorium komplementujące [livestream Junior Senior z 9 marca 2021](https://www.youtube.com/watch?v=jXtqgcFguik)

![cover](cover.png)

## Zawartość repozytorium
Repozytorium podzielone jest na 4 oddzielne moduły, każdy z nich to oddzielny projekt który można uruchomić na kilku platformach.


## Agenda:

### 1: React Native - przede wszystkim mobilny framework 
- Czysty `react-native init` boilerplate 
- Dzielenie kodu między platformami:
    - Natywne moduły
    - JS build time
    - JS run time
- wydajność, i jak ją poprawić wykorzystując natywność
- wparcie dla android TV

### 2: Monorepo React Native + React.js - mobilny i webowy react dz
- Współdzielenie logiki
- Wspołdzielenie styli
- Możliwość wykorzystania electron

### 3: react-native-${platform}: dodatkowe rozszerzenia mobilnego frameworka: 
- Jakie istnieją paczki rozszerzające framework:
    - react-native-windows
    - react-native-macos
    - react-native-tvos
    - react-native-web 
    - react-native-yourPlatformHere
- zalety / wady / konsekwencje 

### 4: Monorepo React Native Web
- Współdzielenie komponentów
- Buld-time vs. Compile-time i implikacje
- W dalszym ciągu możliwość wykorzystanie electrona
