import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal } from "react-native";
import colors from "../Colors";
import ToDoModal from "./ToDoModal";

export default class TodoList extends React.Component {
  state = {
    showListVisible: false,
  };

  toggleListModal() {
    this.setState({
      showListVisible: !this.state.showListVisible,
    });
  }

  render() {
    const list = this.props.list;

    const completeCount = list.todos.filter((todo) => todo.completed).length;
    const remindingCount = list.todos.length - completeCount;

    return (
      <TouchableOpacity
        style={[styles.listContainer, { backgroundColor: list.color }]}
        onPress={() => this.toggleListModal()}
      >
        <Modal
          visible={this.state.showListVisible}
          onRequestClose={() => this.toggleListModal()}
          animationType="slide"
        >
          <ToDoModal list={list} closeModal={() => this.toggleListModal()} />
        </Modal>
        <Text style={styles.listTitle} numberOfLines={1}>
          {list.name}
        </Text>

        <View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.count}>{completeCount}</Text>
            <Text style={styles.subtitle}>Remanings</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <Text style={styles.count}>{remindingCount}</Text>
            <Text style={styles.subtitle}>Completed</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 12,
    alignItems: "center",
    width: 200,
  },

  listTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.white,
    marginBottom: 18,
  },
  count: {
    fontSize: 48,
    fontWeight: "200",
    color: colors.white,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.white,
  },
});
