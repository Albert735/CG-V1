import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Calendar, CalendarUtils } from "react-native-calendars";
import { Colors } from "../constants/Theme";

export default function BaseCalendar() {
  const [selected, setSelected] = useState("");
  const [currentMonth, setCurrentMonth] = useState(
    CalendarUtils.getCalendarDateString(new Date()),
  );

  const handleMonthChange = (offset: number) => {
    const date = new Date(currentMonth);
    date.setMonth(date.getMonth() + offset);
    setCurrentMonth(CalendarUtils.getCalendarDateString(date));
  };

  return (
    <Calendar
      current={currentMonth}
      onMonthChange={(month) => setCurrentMonth(month.dateString)}
      enableSwipeMonths
      hideExtraDays
      firstDay={1}
      hideArrows={true}
      markedDates={{
        [selected]: { selected: true },
      }}
      onDayPress={(day) => {
        setSelected(day.dateString);
        console.log("Selected day:", day);
      }}
      renderHeader={(date) => {
        const dateObj = new Date(date.toString());
        const monthName = dateObj.toLocaleString("default", {
          month: "long",
        });

        return (
          <View style={styles.headerContainer}>
            <Text style={styles.monthText}>{monthName}</Text>
            <View style={styles.arrowsContainer}>
              <TouchableOpacity
                onPress={() => handleMonthChange(-1)}
                style={styles.arrowButton}
              >
                <Ionicons
                  name="chevron-back"
                  size={20}
                  color={Colors.primary}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleMonthChange(1)}
                style={styles.arrowButton}
              >
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={Colors.primary}
                />
              </TouchableOpacity>
            </View>
          </View>
        );
      }}
      theme={{
        calendarBackground: "transparent",
        monthTextColor: Colors.textLight,
        arrowColor: Colors.primary,
        textSectionTitleColor: Colors.text,
      }}
      dayComponent={({ date, state, marking, onPress }) => {
        const isToday = state === "today";
        const isDisabled = state === "disabled";
        const isSelected = marking?.selected;

        return (
          <TouchableOpacity
            onPress={() => onPress?.(date)}
            disabled={isDisabled}
            style={[
              styles.dayWrapper,
              isToday && styles.todayWrapper,
              isSelected && styles.daySelected,
            ]}
          >
            <Text
              style={[
                styles.dayText,
                isToday && styles.todayText,
                isSelected && styles.dayTextSelected,
                isDisabled && styles.dayTextDisabled,
              ]}
            >
              {date?.day}
            </Text>
          </TouchableOpacity>
        );
      }}
      style={styles.calendar}
    />
  );
}

const styles = StyleSheet.create({
  calendar: {
    padding: 10,
    backgroundColor: Colors.background,
    borderColor: Colors.border,
  },
  dayWrapper: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  daySelected: {
    backgroundColor: "#3D242E",
  },
  dayText: {
    fontSize: 16,
    color: Colors.textLight,
  },
  dayTextSelected: {
    color: "#fff",
    fontWeight: "600",
  },
  dayTextDisabled: {
    color: Colors.border,
  },
  todayWrapper: {
    backgroundColor: Colors.secondaryBackground,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  todayText: {
    color: Colors.primary,
    fontWeight: "700",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingBottom: 10,
  },
  monthText: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.textLight,
    textTransform: "capitalize",
  },
  arrowsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowButton: {
    padding: 8,
    marginLeft: 8,
    backgroundColor: Colors.secondaryBackground,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
});
