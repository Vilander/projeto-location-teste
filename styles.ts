import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  cardMargin: {
    marginHorizontal: 20,
    padding: 10,
  },
  mapWrapper: {
    height: 220,
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
  },
  infoContainer: {
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    marginTop: 10,
  },
  labelTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  text: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  coordsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5',
    padding: 8,
    borderRadius: 6,
  },
  coordsText: {
    fontSize: 12,
    color: '#444',
  },
  bold: {
    fontWeight: 'bold',
  },
  saveButtonContainer: {
    paddingHorizontal: 20,
    marginTop: 15,
  }
});
