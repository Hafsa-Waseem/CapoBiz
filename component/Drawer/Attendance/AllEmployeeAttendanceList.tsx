import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {useDrawer} from '../../DrawerContext';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {DateTimePickerEvent} from '@react-native-community/datetimepicker';


export default function AllEmployeeAttendanceList() {

  const {openDrawer} = useDrawer();

  const Info = [
    {
      Name: 'Naeem',
      Clockin: '10:09PM',
      Clockout: '2:0AM',
      Date: '5-0-9',
      Status: 'Present',
    },
    {
      Name: 'Asim',
      Clockin: '10:09PM',
      Clockout: '2:0AM',
      Date: '5-0-9',
      Status: 'Present',
    },
    {
      Name: 'Ali',
      Clockin: '10:09PM',
      Clockout: '2:0AM',
      Date: '5-0-9',
      Status: 'Present',
    },
  ];
const [startDate, setStartDate] = useState(new Date());

  const [showStartDatePicker, setShowStartDatePicker] = useState(false);

  const onStartDateChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date,
  ) => {
    const currentDate = selectedDate || startDate;
    setShowStartDatePicker(false);
    setStartDate(currentDate);
  };


  const [editDate, seteditDate] = useState(new Date());

  const [showeditDatePicker, setShoweditDatePicker] = useState(false);

 

  const oneditDateChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date,
  ) => {
    const currentDate = selectedDate || editDate;
    setShoweditDatePicker(false);
    seteditDate(currentDate);
  };
  {
    /*customer*/
  }
  const [customer, setcustomer] = useState(false);

  const togglecustomer = () => {
    setcustomer(!customer);
  };

  const [customerType, setcustomerType] = useState(false);
  const [currentcustomer, setCurrentcustomer] = useState<string | null>('');
  const customerItem = [
    {label: 'Ali', value: 'Ali'},
    {label: 'Asim', value: 'Asim'},
    {label: 'Naeem', value: 'Naeem'},
  ];

  
  const [customerArea, setcustomerArea] = useState(false);
  const [currentcustomerarea, setCurrentcustomerarea] = useState<string | null>(
    '',
  );
  const customerAreaItem = [
    {label: 'Present', value: 'Present'},
    {label: 'Leave', value: 'Leave'},
    {label: 'Absent', value: 'Absent'},
  ];
  
  const [btncustomerarea, setbtncustomerarea] = useState(false);

  const togglebtncustomerarea = () => {
    setbtncustomerarea(!btncustomerarea);
  };

  const [isModalV, setModalV] = useState(false);
  const tglModal = () => {
    setModalV(!isModalV);
  };

  {
    /*edit*/
  }
  const [edit, setedit] = useState(false);

  const toggleedit = () => {
    setedit(!edit);
  };

  const [editType, seteditType] = useState(false);
  const [currentedit, setCurrentedit] = useState<string | null>('');
  const editItem = [
    {label: 'Ali', value: 'Ali'},
    {label: 'Asim', value: 'Asim'},
    {label: 'Naeem', value: 'Naeem'},
  ];

  const [customereditArea, setcustomereditArea] = useState(false);
  const [currentcustomereditarea, setCurrentcustomereditarea] = useState<
    string | null
  >('');
  const customerAreaeditItem = [
    {label: 'Present', value: 'Present'},
    {label: 'Absent', value: 'Absent'},
    {label: 'Leave', value: 'Leave'},
  ];
 

  const [btncustomeraditarea, setbtncustomereditarea] = useState(false);

  const togglebtncustomereditarea = () => {
    setbtncustomereditarea(!btncustomeraditarea);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../assets/screen.jpg')}
        resizeMode="cover"
        style={styles.background}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 5,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={openDrawer}>
            <Image
              source={require('../../../assets/menu.png')}
              style={{
                width: 30,
                height: 30,
                tintColor: 'white',
              }}
            />
          </TouchableOpacity>

          <View style={styles.headerTextContainer}>
            <Text
              style={{
                color: 'white',
                fontSize: 22,
                fontWeight: 'bold',
              }}>
              Attendance List
            </Text>
          </View>
          <TouchableOpacity onPress={togglecustomer}>
            <Image
              style={{
                tintColor: 'white',
                width: 18,
                height: 18,
                alignSelf: 'center',
                marginRight: 5,
              }}
              source={require('../../../assets/add.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.exportBtn}>
            <Text style={styles.exportText}>Copy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.exportBtn}>
            <Text style={styles.exportText}>Export CSV</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.exportBtn}>
            <Text style={styles.exportText}>Export Excel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.exportBtn}>
            <Text style={styles.exportText}>Print</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View>
            <FlatList
              data={Info}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <ScrollView
                  style={{
                    padding: 5,
                  }}>
                  <View style={styles.table}>
                    <View style={styles.tablehead}>
                      <Text
                        style={{
                          color: '#144272',
                          fontWeight: 'bold',
                          marginLeft: 5,
                          marginTop: 5,
                        }}>
                        {item.Name}
                      </Text>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                        }}>
                        <TouchableOpacity onPress={toggleedit}>
                          <Image
                            style={{
                              tintColor: '#144272',
                              width: 15,
                              height: 15,
                              alignSelf: 'center',
                              marginTop: 8,
                            }}
                            source={require('../../../assets/edit.png')}
                          />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={tglModal}>
                          <Image
                            style={{
                              tintColor: '#144272',
                              width: 15,
                              height: 15,
                              alignSelf: 'center',
                              marginRight: 5,
                              marginTop: 8,
                            }}
                            source={require('../../../assets/delete.png')}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>

                    <View style={styles.infoRow}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={styles.text}>Clock In:</Text>
                        <Text style={styles.text}>{item.Clockin}</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={styles.text}>Clock Out:</Text>
                        <Text style={styles.text}>{item.Clockout}</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={styles.text}>Date:</Text>
                        <Text style={styles.text}>{item.Date}</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={[styles.value, {marginBottom: 5}]}>
                          Status:
                        </Text>
                        <Text style={[styles.value, {marginBottom: 5}]}>
                          {item.Status}
                        </Text>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              )}
            />
          </View>
        </ScrollView>

        {/*attendance*/}
        <Modal isVisible={customer}>
          <ScrollView
            style={{
              flex: 1,
              backgroundColor: 'white',
              width: '98%',
              maxHeight: 335,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#144272',
              overflow: 'hidden',
              alignSelf: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
              }}>
              <Text
                style={{
                  color: '#144272',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                Add New Attendance
              </Text>
              <TouchableOpacity onPress={() => setcustomer(!customer)}>
                <Image
                  style={{
                    width: 15,
                    height: 15,
                  }}
                  source={require('../../../assets/cross.png')}
                />
              </TouchableOpacity>
            </View>

            <DropDownPicker
              items={customerItem}
              open={customerType}
              setOpen={setcustomerType}
              value={currentcustomer}
              setValue={setCurrentcustomer}
              placeholder="Select Employee Nane"
              placeholderStyle={{color: '#144272'}}
              textStyle={{color: '#144272'}}
              arrowIconStyle={{tintColor: '#144272'}}
              style={[
                styles.dropdown,
                {
                  borderColor: '#144272',
                  width: 295,
                  marginLeft: 10,
                },
              ]}
              dropDownContainerStyle={{
                backgroundColor: 'white',
                borderColor: '#144272',
                width: 295,
                marginLeft: 10,
              }}
              labelStyle={{color: '#144272'}}
              listItemLabelStyle={{color: '#144272'}}
            />

            <DropDownPicker
              items={customerAreaItem}
              open={customerArea}
              setOpen={setcustomerArea}
              value={currentcustomerarea}
              setValue={setCurrentcustomerarea}
              placeholder="Select Status"
              placeholderStyle={{color: '#144272'}}
              textStyle={{color: '#144272'}}
              arrowIconStyle={{tintColor: '#144272'}}
              style={[
                styles.dropdown,
                {
                  borderColor: '#144272',
                  width: 295,
                  marginLeft: 10,
                },
              ]}
              dropDownContainerStyle={{
                backgroundColor: 'white',
                borderColor: '#144272',
                width: 295,
                marginLeft: 10,
              }}
              labelStyle={{color: '#144272'}}
              listItemLabelStyle={{color: '#144272'}}
            />
            <View style={styles.row}>
              <View
                style={[
                  styles.productinput,
                  {
                    marginLeft: 10,
                    marginRight: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  },
                ]}>
                <Text style={{color: '#144272'}}>Clock In:</Text>
                <Text style={{color: '#144272'}}>9:00pm</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View
                style={[
                  {
                    marginLeft: 10,
                    marginRight: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: 35,
                    borderWidth: 1,
                    marginTop: 6,
                    flex: 1,
                    borderColor: '#144272',
                    borderRadius: 6,
                    padding: 8,
                  },
                ]}>
                <Text style={{color: '#144272'}}>Clock Out:</Text>
                <Text style={{color: '#144272'}}>9:00pm</Text>
              </View>
            </View>

            <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#144272',
            borderRadius: 5,
            padding: 5,
            alignSelf: 'center',
            width: 295,marginLeft:10,marginRight:10,marginTop:12
          }}>
          <Text style={{marginLeft: 8, color: '#144272'}}>
            {`${startDate.toLocaleDateString()}`}
          </Text>
          <TouchableOpacity onPress={() => setShowStartDatePicker(true)}>
            <Image
              style={{
                height: 20,
                width: 20,
                marginLeft: 190,
                tintColor: '#144272',
              }}
              source={require('../../../assets/calendar.png')}
            />
          </TouchableOpacity>
          {showStartDatePicker && (
            <DateTimePicker
              testID="startDatePicker"
              value={startDate}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onStartDateChange}
            />
          )}
        </View>
      
            <TouchableOpacity onPress={togglebtncustomerarea}>
              <View
                style={{
                  backgroundColor: '#144272',
                  height: 30,
                  width: 120,
                  margin: 10,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  Add Attendance
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </Modal>

        {/*btn */}
        <Modal isVisible={btncustomerarea}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              width: '98%',
              maxHeight: 220,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#144272',
              overflow: 'hidden',
              alignSelf: 'center',
            }}>
            <Image
              style={{
                width: 60,
                height: 60,
                tintColor: '#144272',
                alignSelf: 'center',
                marginTop: 30,
              }}
              source={require('../../../assets/tick.png')}
            />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 22,
                textAlign: 'center',
                marginTop: 10,
                color: '#144272',
              }}>
              Added
            </Text>
            <Text
              style={{
                color: '#144272',
                textAlign: 'center',
              }}>
              Attendance has been added successfully
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => setbtncustomerarea(!btncustomerarea)}>
                <View
                  style={{
                    backgroundColor: '#144272',
                    borderRadius: 5,
                    width: 50,
                    height: 30,
                    padding: 5,
                    marginRight: 5,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    OK
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/*delete*/}
        <Modal isVisible={isModalV}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              width: 'auto',
              maxHeight: 220,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#144272',
              overflow: 'hidden',
            }}>
            <Image
              style={{
                width: 60,
                height: 60,
                tintColor: '#144272',
                alignSelf: 'center',
                marginTop: 30,
              }}
              source={require('../../../assets/info.png')}
            />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 22,
                textAlign: 'center',
                marginTop: 10,
                color: '#144272',
              }}>
              Are you sure?
            </Text>
            <Text
              style={{
                color: '#144272',
                textAlign: 'center',
              }}>
              You won't be able to revert this record!
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                justifyContent: 'center',
              }}>
              <TouchableOpacity onPress={() => setModalV(!isModalV)}>
                <View
                  style={{
                    backgroundColor: '#144272',
                    borderRadius: 5,
                    width: 100,
                    height: 30,
                    padding: 5,
                    marginRight: 5,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    Cancel
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: '#144272',
                    borderRadius: 5,
                    width: 100,
                    height: 30,
                    padding: 5,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    Yes, delete it
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/*edit*/}
        <Modal isVisible={edit}>
          <ScrollView
            style={{
              flex: 1,
              backgroundColor: 'white',
              width: '98%',
              maxHeight: 335,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#144272',
              overflow: 'hidden',
              alignSelf: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
              }}>
              <Text
                style={{
                  color: '#144272',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                Edit Attendance
              </Text>
              <TouchableOpacity onPress={() => setedit(!edit)}>
                <Image
                  style={{
                    width: 15,
                    height: 15,
                  }}
                  source={require('../../../assets/cross.png')}
                />
              </TouchableOpacity>
            </View>

       
           
              <DropDownPicker
                items={editItem}
                open={editType}
                setOpen={seteditType}
                value={currentedit}
                setValue={setCurrentedit}
                placeholder="Select Employee"
                placeholderStyle={{color: '#144272'}}
                textStyle={{color: '#144272'}}
                arrowIconStyle={{tintColor: '#144272'}}
                style={[
                  styles.dropdown,
                  {
                    borderColor: '#144272',
                    width: 295,marginLeft:10
                  },
                ]}
                dropDownContainerStyle={{
                  backgroundColor: 'white',
                  borderColor: '#144272',
                  width: 295,marginLeft:10
                }}
                labelStyle={{color: '#144272'}}
                listItemLabelStyle={{color: '#144272'}}
              />
           
       
              <DropDownPicker
                items={customerAreaeditItem}
                open={customereditArea}
                setOpen={setcustomereditArea}
                value={currentcustomereditarea}
                setValue={setCurrentcustomereditarea}
                placeholder="Select Status"
                placeholderStyle={{color: '#144272'}}
                textStyle={{color: '#144272'}}
                arrowIconStyle={{tintColor: '#144272'}}
                style={[
                  styles.dropdown,
                  {
                    borderColor: '#144272',
                    width: 295,marginLeft:10
                  },
                ]}
                dropDownContainerStyle={{
                  backgroundColor: 'white',
                  borderColor: '#144272',
                  width: 295,marginLeft:10
                }}
                labelStyle={{color: '#144272'}}
                listItemLabelStyle={{color: '#144272'}}
              />
              <View style={styles.row}>
              <View
                style={[
                  styles.productinput,
                  {
                    marginLeft: 10,
                    marginRight: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  },
                ]}>
                <Text style={{color: '#144272'}}>Clock In:</Text>
                <Text style={{color: '#144272'}}>9:00pm</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View
                style={[
                  {
                    marginLeft: 10,
                    marginRight: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: 35,
                    borderWidth: 1,
                    marginTop: 6,
                    flex: 1,
                    borderColor: '#144272',
                    borderRadius: 6,
                    padding: 8,
                  },
                ]}>
                <Text style={{color: '#144272'}}>Clock Out:</Text>
                <Text style={{color: '#144272'}}>9:00pm</Text>
              </View>
            </View>

            <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#144272',
            borderRadius: 5,
            padding: 5,
            alignSelf: 'center',
            width: 295,marginLeft:10,marginRight:10,marginTop:12
          }}>
          <Text style={{marginLeft: 8, color: '#144272'}}>
            {`${editDate.toLocaleDateString()}`}
          </Text>
          <TouchableOpacity onPress={() => setShoweditDatePicker(true)}>
            <Image
              style={{
                height: 20,
                width: 20,
                marginLeft: 190,
                tintColor: '#144272',
              }}
              source={require('../../../assets/calendar.png')}
            />
          </TouchableOpacity>
          {showeditDatePicker && (
            <DateTimePicker
              testID="startDatePicker"
              value={startDate}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={oneditDateChange}
            />
          )}
        </View>
     
            <TouchableOpacity onPress={togglebtncustomereditarea}>
              <View
                style={{
                  backgroundColor: '#144272',
                  height: 30,
                  width: 140,
                  margin: 10,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  Update Attendance
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </Modal>

        {/*btn customer*/}
        <Modal isVisible={btncustomeraditarea}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              width: '98%',
              maxHeight: 230,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#144272',
              overflow: 'hidden',
              alignSelf: 'center',
            }}>
            <Image
              style={{
                width: 60,
                height: 60,
                tintColor: '#144272',
                alignSelf: 'center',
                marginTop: 30,
              }}
              source={require('../../../assets/tick.png')}
            />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 22,
                textAlign: 'center',
                marginTop: 10,
                color: '#144272',
              }}>
              Updated
            </Text>
            <Text
              style={{
                color: '#144272',
                textAlign: 'center',
              }}>
              Attendance has been updated successfully
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => setbtncustomereditarea(!btncustomeraditarea)}>
                <View
                  style={{
                    backgroundColor: '#144272',
                    borderRadius: 5,
                    width: 50,
                    height: 30,
                    padding: 5,
                    marginRight: 5,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    OK
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    flex: 1,
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  table: {
    borderWidth: 1,
    borderColor: 'white',
    alignSelf: 'center',
    height: 'auto',
    width: 314,
    borderRadius: 5,
  },
  tablehead: {
    backgroundColor: 'white',
    height: 30,
    overflow: 'hidden',
    borderTopEndRadius: 5,
    borderTopLeftRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    marginLeft: 5,
    color: 'white',
    marginRight: 5,
  },
  value: {
    marginLeft: 5,
    color: 'white',
    marginRight: 5,
  },
  infoRow: {
    marginTop: 5,
  },
  lastrow: {
    backgroundColor: 'white',
    height: 30,
    overflow: 'hidden',
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
  },
  card: {
    borderColor: '#144272',
    backgroundColor: 'white',
    height: 'auto',
    borderRadius: 12,
    elevation: 15,
    marginBottom: 5,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 6,
    padding: 8,
    marginVertical: 8,
    color: 'white',
  },
  inputSmall: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 6,
    padding: 8,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  addButton: {
    marginLeft: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    width: 60,
  },
  completeButton: {
    marginTop: 16,
    backgroundColor: 'white',
    borderRadius: 15,
    width: 320,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: 'white',
    minHeight: 35,
    borderRadius: 6,
    padding: 8,
    marginVertical: 8,
    backgroundColor: 'transparent',
    width: 285,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
  },
  search: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#144272',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
  productinput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#144272',
    borderRadius: 6,
    padding: 8,
  },
  cardContainer: {
    margin: 20,
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    paddingBottom: 24,
    marginBottom: 40,
  },
  customerImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#144272',
  },
  noImageText: {
    color: '#144272',
    fontStyle: 'italic',
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  labl: {
    width: '68%',
    fontWeight: 'bold',
    color: '#144272',
    marginBottom: 4,
  },
  valu: {
    width: '68%',
    marginBottom: 8,
    color: '#144272',
  },
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  exportBtn: {
    backgroundColor: '#144272',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  exportText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
