import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const users = [
    {
      id: 1,
      name: "Rahim Ahmed",
      email: "rahim@example.com",
      role: "admin",
      isActive: true,
      age: 25,
    },
    {
      id: 2,
      name: "Karim Hasan",
      email: "karim@example.com",
      role: "user",
      isActive: true,
      age: 28,
    },
    {
      id: 3,
      name: "Sadia Akter",
      email: "sadia@example.com",
      role: "moderator",
      isActive: true,
      age: 24,
    },
    {
      id: 4,
      name: "Nusrat Jahan",
      email: "nusrat@example.com",
      role: "user",
      isActive: false,
      age: 21,
    },
    {
      id: 5,
      name: "Tanvir Hossain",
      email: "tanvir@example.com",
      role: "user",
      isActive: true,
      age: 30,
    },
    {
      id: 6,
      name: "Ayesha Rahman",
      email: "ayesha@example.com",
      role: "admin",
      isActive: true,
      age: 27,
    },
    {
      id: 7,
      name: "Sabbir Islam",
      email: "sabbir@example.com",
      role: "user",
      isActive: false,
      age: 23,
    },
    {
      id: 8,
      name: "Mehedi Hasan",
      email: "mehedi@example.com",
      role: "user",
      isActive: true,
      age: 26,
    },
    {
      id: 9,
      name: "Fatima Begum",
      email: "fatima@example.com",
      role: "moderator",
      isActive: true,
      age: 29,
    },
    {
      id: 10,
      name: "Arif Hossain",
      email: "arif@example.com",
      role: "user",
      isActive: true,
      age: 22,
    },
    {
      id: 11,
      name: "Jannatul Ferdous",
      email: "jannatul@example.com",
      role: "user",
      isActive: false,
      age: 25,
    },
    {
      id: 12,
      name: "Rakib Hasan",
      email: "rakib@example.com",
      role: "admin",
      isActive: true,
      age: 31,
    },
    {
      id: 13,
      name: "Mim Akter",
      email: "mim@example.com",
      role: "user",
      isActive: true,
      age: 20,
    },
    {
      id: 14,
      name: "Imran Khan",
      email: "imran@example.com",
      role: "user",
      isActive: false,
      age: 27,
    },
    {
      id: 15,
      name: "Sumaiya Islam",
      email: "sumaiya@example.com",
      role: "moderator",
      isActive: true,
      age: 24,
    },
    {
      id: 16,
      name: "Fahim Ahmed",
      email: "fahim@example.com",
      role: "user",
      isActive: true,
      age: 28,
    },
    {
      id: 17,
      name: "Tania Sultana",
      email: "tania@example.com",
      role: "user",
      isActive: false,
      age: 23,
    },
    {
      id: 18,
      name: "Shakib Al Hasan",
      email: "shakib@example.com",
      role: "admin",
      isActive: true,
      age: 32,
    },
    {
      id: 19,
      name: "Raisa Rahman",
      email: "raisa@example.com",
      role: "user",
      isActive: true,
      age: 22,
    },
    {
      id: 20,
      name: "Hasan Mahmud",
      email: "hasan@example.com",
      role: "user",
      isActive: true,
      age: 26,
    },
    {
      id: 21,
      name: "Priya Das",
      email: "priya@example.com",
      role: "moderator",
      isActive: false,
      age: 25,
    },
    {
      id: 22,
      name: "Anik Chowdhury",
      email: "anik@example.com",
      role: "user",
      isActive: true,
      age: 29,
    },
    {
      id: 23,
      name: "Mariya Akter",
      email: "mariya@example.com",
      role: "user",
      isActive: true,
      age: 21,
    },
    {
      id: 24,
      name: "Sohan Ahmed",
      email: "sohan@example.com",
      role: "admin",
      isActive: false,
      age: 30,
    },
    {
      id: 25,
      name: "Lamisa Haque",
      email: "lamisa@example.com",
      role: "user",
      isActive: true,
      age: 24,
    },
    {
      id: 26,
      name: "Rifat Islam",
      email: "rifat@example.com",
      role: "user",
      isActive: false,
      age: 27,
    },
    {
      id: 27,
      name: "Nabila Noor",
      email: "nabila@example.com",
      role: "moderator",
      isActive: true,
      age: 26,
    },
    {
      id: 28,
      name: "Adnan Karim",
      email: "adnan@example.com",
      role: "user",
      isActive: true,
      age: 23,
    },
    {
      id: 29,
      name: "Ishrat Jahan",
      email: "ishrat@example.com",
      role: "user",
      isActive: false,
      age: 28,
    },
    {
      id: 30,
      name: "Asif Mahmud",
      email: "asif@example.com",
      role: "admin",
      isActive: true,
      age: 33,
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-red-500">
      {/* Header & Button */}
      <View className="p-10">
        <Text className="text-xl font-bold text-white">Welcome to my app!</Text>
        <TouchableOpacity
          onPress={() => {
            console.log("Button pressed!");
            alert("Button pressed!");
          }}
          className="mt-5 p-2.5 bg-blue-600 rounded-md"
        >
          <Text className="text-white font-bold text-center">Press me</Text>
        </TouchableOpacity>
      </View>

      {/* User List Section */}
      <View className="flex-1 p-10 bg-neutral-100">
        <Text className="text-lg font-bold mb-2">User List</Text>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View className="my-2.5 bg-white p-2.5 rounded-xl shadow-sm">
              <Text className="font-bold text-base text-blue-600">
                {item.name}
              </Text>
              <Text className="font-bold text-base text-blue-600">
                {item.email}
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
