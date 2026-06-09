import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Colors from '@/Theme/Colors';
import { Attendance } from '@/hooks/useAttendance';

interface AttendanceModalProps {
  visible: boolean;
  selectedDate: string;
  selectedEntry: Attendance | undefined;
  onClose: () => void;
}

interface DetailRowProps {
  label: string;
  value: string;
}

const DetailRow: React.FC<DetailRowProps> = ({ label, value }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
  );
};

const AttendanceModal: React.FC<AttendanceModalProps> = ({
  visible,
  selectedDate,
  selectedEntry,
  onClose,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      presentationStyle="overFullScreen"
      statusBarTranslucent={true}
      hardwareAccelerated={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
       
          <View style={styles.modalHandle} />
 
          <View style={styles.modalHeader}>
            <View>
              <Text style={styles.modalTitle}>Attendance Details</Text>
              <Text style={styles.modalSubtitle}>{selectedDate}</Text>
            </View>

            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>
          </View>

       
          <View style={styles.summaryCard}>
            <View style={styles.summaryInfo}>
              <Text style={styles.summaryLabel}>Status</Text>
              <View
                style={[
                  styles.statusPill,
                  selectedEntry
                    ? styles.presentPill
                    : styles.absentPill,
                ]}
              >
                <Text
                  style={[
                    styles.statusText,
                    selectedEntry
                      ? styles.presentText
                      : styles.absentText,
                  ]}
                >
                  {selectedEntry ? 'Present' : 'Absent'}
                </Text>
              </View>
            </View>

            <View style={styles.summaryInfo}>
              <Text style={styles.summaryLabel}>Hours</Text>
              <Text style={styles.summaryValue}>
                {selectedEntry &&
                selectedEntry.inTime &&
                selectedEntry.outTime
                  ? `${selectedEntry.inTime} - ${selectedEntry.outTime}`
                  : 'Absent'}
              </Text>
            </View>
          </View>
 
          <View style={styles.detailCard}>
            <DetailRow
              label="Date"
              value={selectedEntry?.date ?? selectedDate}
            />

            <DetailRow
              label="Check In"
              value={selectedEntry?.inTime ?? '-'}
            />

            <DetailRow
              label="Check Out"
              value={selectedEntry?.outTime ?? '-'}
            />

            <DetailRow
              label="Check In Location"
              value={selectedEntry?.checkInLocation ?? '-'}
            />

            <DetailRow
              label="Check Out Location"
              value={selectedEntry?.checkOutLocation ?? '-'}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: Colors.attendanceScreen.modalBackground,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },

  modalContent: {
    width: '100%',
    minHeight: 280,
    backgroundColor: Colors.attendanceScreen.modalContent,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 10,
  },

  modalHandle: {
    width: 60,
    height: 5,
    borderRadius: 3,
    backgroundColor: Colors.attendanceScreen.modalHandle,
    alignSelf: 'center',
    marginBottom: 16,
  },

  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.attendanceScreen.modalTitle,
  },

  modalSubtitle: {
    fontSize: 13,
    color: Colors.attendanceScreen.modalSubtitle,
    marginTop: 4,
  },

  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: Colors.attendanceScreen.closeButtonBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },

  closeText: {
    fontSize: 24,
    color: Colors.attendanceScreen.closeButtonText,
  },

  summaryCard: {
    backgroundColor: Colors.attendanceScreen.summaryCardBackground,
    borderRadius: 18,
    padding: 16,
  },

  summaryInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  summaryLabel: {
    color: Colors.attendanceScreen.summaryLabel,
    fontSize: 13,
  },

  summaryValue: {
    fontWeight: '700',
    color: Colors.attendanceScreen.summaryValue,
  },

  statusPill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
  },

  presentPill: {
    backgroundColor: Colors.attendanceScreen.statusPillPresentBackground,
  },

  absentPill: {
    backgroundColor: Colors.attendanceScreen.statusPillAbsentBackground,
  },

  statusText: {
    fontWeight: '700',
    fontSize: 12,
  },

  presentText: {
    color: Colors.attendanceScreen.presentColorDark,
  },

  absentText: {
    color: Colors.attendanceScreen.absentColorDark,
  },

  detailCard: {
    marginTop: 10,
    backgroundColor: Colors.attendanceScreen.cardBackground,
    borderRadius: 16,
    padding: 16,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.attendanceScreen.borderColor,
  },

  rowLabel: {
    color: Colors.attendanceScreen.detailRowLabel,
    fontWeight: '500',
    fontSize: 13,
  },

  rowValue: {
    color: Colors.attendanceScreen.detailRowValue,
    fontWeight: '500',
    fontSize: 12,
    paddingHorizontal: 20,
    maxWidth: '80%',
  },
});

export default AttendanceModal;
