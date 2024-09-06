import AfricaText from '@/components/common/AfricaText';
import React from 'react';
import { Image, StyleSheet, SafeAreaView, View, FlatList } from 'react-native';


interface DataItem {
  date: string;
  receiver: string;
  amount: string;
}

const data: DataItem[] = [
  { date: '2023-01-01', receiver: 'John Doe', amount: '$100.00' },
  { date: '2023-01-02', receiver: 'Jane Smith', amount: '$200.00' },
  { date: '2023-01-03', receiver: 'Alice Johnson', amount: '$150.00' },
  { date: '2023-01-01', receiver: 'John Doe', amount: '$100.00' },
  { date: '2023-01-02', receiver: 'Jane Smith', amount: '$200.00' },
  { date: '2023-01-03', receiver: 'Alice Johnson', amount: '$150.00' },
  { date: '2023-01-01', receiver: 'John Doe', amount: '$100.00' },
  { date: '2023-01-02', receiver: 'Jane Smith', amount: '$200.00' },
  { date: '2023-01-03', receiver: 'Alice Johnson', amount: '$150.00' },
  { date: '2023-01-01', receiver: 'John Doe', amount: '$100.00' },
  { date: '2023-01-02', receiver: 'Jane Smith', amount: '$200.00' },
  { date: '2023-01-03', receiver: 'Alice Johnson', amount: '$150.00' },
  { date: '2023-01-01', receiver: 'John Doe', amount: '$100.00' },
  { date: '2023-01-02', receiver: 'Jane Smith', amount: '$200.00' },
  { date: '2023-01-03', receiver: 'Alice Johnson', amount: '$150.00' },
  { date: '2023-01-01', receiver: 'John Doe', amount: '$100.00' },
  { date: '2023-01-02', receiver: 'Jane Smith', amount: '$200.00' },
  { date: '2023-01-03', receiver: 'Alice Johnson', amount: '$150.00' },
  { date: '2023-01-01', receiver: 'John Doe', amount: '$100.00' },
  { date: '2023-01-02', receiver: 'Jane Smith', amount: '$200.00' },
  { date: '2023-01-03', receiver: 'Alice Johnson', amount: '$150.00' },
  { date: '2023-01-01', receiver: 'John Doe', amount: '$100.00' },
  { date: '2023-01-02', receiver: 'Jane Smith', amount: '$200.00' },
  { date: '2023-01-03', receiver: 'Alice Johnson', amount: '$150.00' },
  { date: '2023-01-01', receiver: 'John Doe', amount: '$100.00' },
  { date: '2023-01-02', receiver: 'Jane Smith', amount: '$200.00' },
  { date: '2023-01-03', receiver: 'Alice Johnson', amount: '$150.00' },
  { date: '2023-01-01', receiver: 'John Doe', amount: '$100.00' },
  { date: '2023-01-02', receiver: 'Jane Smith', amount: '$200.00' },
  { date: '2023-01-03', receiver: 'Alice Johnson', amount: '$150.00' },
  { date: '2023-01-01', receiver: 'John Doe', amount: '$100.00' },
  { date: '2023-01-02', receiver: 'Jane Smith', amount: '$200.00' },
  { date: '2023-01-03', receiver: 'Alice Johnson', amount: '$150.00' },

];


export default function Report() {

  const TableItem = ({ date, receiver, amount }: DataItem) => (
    <View style={styles.row}>
      <AfricaText style={styles.cell}>{date}</AfricaText>
      <AfricaText style={styles.cell}>{receiver}</AfricaText>
      <AfricaText style={styles.cell}>{amount}</AfricaText>
    </View>
  );


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AfricaText style={styles.headerText}>Date</AfricaText>
        <AfricaText style={styles.headerText}>Receiver</AfricaText>
        <AfricaText style={styles.headerText}>Amount</AfricaText>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TableItem date={item.date} receiver={item.receiver} amount={item.amount} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 8,
    marginBottom: 8,
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    justifyContent: 'space-between'
  },
  cell: {
    flex: 1,
  },
})
