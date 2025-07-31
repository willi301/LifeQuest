# 🌱 LifeQuest

**LifeQuest** is a gamified productivity app built with React Native and Expo.  
Inspired by RPG mechanics, it turns your real-life tasks into quests — earn coins, collect pets, and build your own story as you stay productive.

---

## 📋 Summary

LifeQuest helps you complete daily goals and habits through a fun quest-based system.  
You can track main and side quests, earn coins for each task completed, and spend coins in a pet shop to collect companions.  
It’s your to-do list... with a game face on.

---

## ✅ Features

### 🧩 Quest System
- [x] Add and remove **Main Quests** and **Side Quests**
- [x] Complete tasks with checkbox toggle
- [x] Tasks reset automatically each day

### 💰 Coin Mechanics
- [x] Earn 1 coin for every task you complete
- [x] Lose 1 coin if you uncheck a completed task
- [x] Coin balance is shown globally in the app header
- [x] Coins persist across sessions with AsyncStorage

### 🧍 Profile Screen
- [x] Character avatar displayed in center
- [x] Two main actions: **Battle** and **Shop**
- [x] Battle is a placeholder for future pet fights

### 🐾 Pet Shop
- [x] Scrollable shop page for discovering pets
- [x] Each pet shows image, name, and price
- [x] Buy pets with coins
- [x] When purchased, the **Buy** button turns green and says “Owned”
- [x] Ownership is saved with AsyncStorage

### 🧭 Navigation
- [x] Bottom tab navigator for switching between:
  - QuestBoard (Main + Side quests)
  - Profile (Character and Pet Shop)
- [x] Stack navigation inside Profile for nested Shop screen
- [x] Return button to go back from Shop to Profile

### 🛠 Dev & Reset Tools
- [x] Reset pets (clears owned pets)
- [x] Reset all data (clear AsyncStorage)
- [x] Coin and ownership changes update header automatically

---

## 🚀 Tech Stack

- **React Native (Expo)**
- **React Navigation** (Tabs + Stack)
- **AsyncStorage** for persistent local storage
- **React Native Paper / Vector Icons** for UI

---

## 📦 Future Plans

- [ ] Pet battle system with animations
- [ ] Leveling system for pets or player
- [ ] Equip hats and costumes to avatar
- [ ] Achievements and streak rewards
- [ ] Sound effects and background music

---

## 🧪 Run Locally

1. Clone the repo  
   `git clone https://github.com/your-username/LifeQuest.git`

2. Install dependencies  
   `npm install`

3. Start the project  
   `npx expo start`

> Make sure you have **Expo Go** installed on your mobile device.

---

## 💬 Feedback & Contributions

This is a passion project in progress — feel free to fork, contribute, or suggest ideas!  
Let's make productivity fun again 🧠⚔️
