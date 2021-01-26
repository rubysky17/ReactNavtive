import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Colors from "../Colors";

export default class ToDoModal extends Component {
  state = {
    name: this.props.list.name,
    color: this.props.list.color,
    todos: this.props.list.todos,
  };

  renderToDo(todo) {
    return (
      <View style={styles.todoContainer}>
        <TouchableOpacity>
          <Ionicons
            name={todo.completed ? "ios-square" : "ios-square-outline"}
            size={24}
            color={Colors.gray}
            style={{ width: 32 }}
          />
        </TouchableOpacity>

        <Text
          style={[
            styles.todo,
            {
              color: todo.completed ? Colors.lightGray : Colors.black,
              textDecorationLine: todo.completed ? "line-through" : "none",
            },
          ]}
        >
          {todo.title}
        </Text>
      </View>
    );
  }

  render() {
    const { list, closeModal } = this.props;
    const taskCount = this.state.todos.length;
    const completeCount = this.state.todos.filter((todo) => todo.completed)
      .length;

    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 30,
            right: 20,
            zIndex: 10,
          }}
          onPress={closeModal}
        >
          <AntDesign name="close" color={Colors.black} size={24} />
        </TouchableOpacity>

        <View
          style={[
            styles.section,
            styles.header,
            { borderBottomColor: this.state.color },
          ]}
        >
          <Text style={styles.title}>{this.state.name}</Text>

          <Text style={styles.taskCount}>
            {completeCount} of {taskCount} tasks
          </Text>
        </View>

        <View style={[styles.section, { flex: 3 }]}>
          <FlatList
            data={this.state.todos}
            renderItem={({ item }) => this.renderToDo(item)}
            keyExtractor={(item) => item.title}
            contentContainerStyle={{
              paddingHorizontal: 32,
              paddingVertical: 64,
            }}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <KeyboardAvoidingView style={[styles.section, styles.footer]}>
          <TextInput
            style={[styles.input, { borderColor: this.state.color }]}
          />

          <TouchableOpacity
            style={[styles.addToDo, { backgroundColor: this.state.color }]}
          >
            <AntDesign name="plus" size={16} color={Colors.white} />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  section: {
    flex: 1,
    alignSelf: "stretch",
  },

  header: {
    justifyContent: "flex-end",
    marginLeft: 64,
    borderBottomWidth: 3,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: Colors.black,
  },

  taskCount: {
    marginTop: 4,
    marginBottom: 16,
    color: Colors.gray,
    fontWeight: "600",
  },

  footer: {
    paddingHorizontal: 32,
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    flex: 1,
    height: 48,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    marginRight: 8,
    paddingHorizontal: 8,
  },

  addToDo: {
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  todoContainer: {
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },

  todo: {
    color: Colors.black,
    fontWeight: "700",
    fontSize: 16,
  },
});
