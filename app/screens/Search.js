import React, { useState, useEffect } from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
  FlatList,
  ListItem,
} from "react-native";
import ModalDropdown from "react-native-modal-dropdown";

function Search(props) {
  const PlaceName = [
    "NanGang",
    "TaiPei",
    "BanQiao",
    "TaoYuan",
    "HsinChu",
    "MiaoLi",
    "TaiZhong",
    "ZhangHua",
    "YunLin",
    "JiaYi",
    "TaiNan",
    "ZuoYing",
  ];
  const PlaceNameC = [
    "南港",
    "臺北",
    "板橋",
    "桃園",
    "新竹",
    "苗栗",
    "臺中",
    "彰化",
    "雲林",
    "嘉義",
    "臺南",
    "左營",
  ];
  const monthC = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const dayC = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];
  const hourC = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
  ];
  const minuteC = [
    "00",
    "05",
    "10",
    "15",
    "20",
    "25",
    "30",
    "35",
    "40",
    "45",
    "50",
    "55",
  ];
  const [PlaceStart, setPlaceStart] = useState("");
  const [PlaceEnd, setPlaceEnd] = useState("");
  const [Year, setYear] = useState("2021");
  const [Month, setMonth] = useState("0");
  const [Day, setDay] = useState("0");
  const [Hour, setHour] = useState("0");
  const [Minute, setMinute] = useState("00");
  const [Dated, setDated] = useState("0");
  const [Timed, setTimed] = useState("0");
  const [indexx, setIndexx] = useState(3);
  const [postdata, setPostdata] = useState("");
  const [timedata, setTimedata] = useState([]);
  const CombineDate = (year, month, day, hour, minute) => {
    // var year_s = year.toString();
    // var month_s = month.toString();
    // var day_s = day.toString();
    var dated = year + "/" + month + "/" + day;
    setDated(dated);
    console.log("dated", Dated);
    var timed = hour + ":" + minute;
    setTimed(timed);
    console.log("timed", Timed);
  };

  // const CombineTime = (hour, minute) => {
  //   // var hour_s = hour.toString();
  //   // var minute_s = minute.toString();
  //   var timed = hour + ":" + minute;
  //   setTimed(timed);
  //   console.log("timed", Timed);
  // };

  const handlePlaceStart = (placeid) => {
    console.log("im in handleplacestart");
    setPlaceStart(PlaceName[placeid]);
    console.log(placeid);
    console.log("placestart", PlaceStart);
    setIndexx(indexx + 1);
  };
  const handlePlaceEnd = (placeid) => {
    setPlaceEnd(PlaceName[placeid]);
    console.log("placeend", PlaceEnd);
    setIndexx(indexx + 1);
  };
  const handleMonth = (monthid) => {
    setMonth(monthC[monthid]);
    console.log("month", Month);

    setIndexx(indexx + 1);
  };
  const handleDay = (dayid) => {
    setDay(dayC[dayid]);
    console.log("day", Day);

    setIndexx(indexx + 1);
  };
  const handleHour = (hourid) => {
    setHour(hourC[hourid]);
    console.log("hour", Hour);

    setIndexx(indexx + 1);
  };
  const handleMinute = (minuteid) => {
    setMinute(minuteC[minuteid]);
    console.log("minute", Minute);
    setIndexx(indexx + 1);
  };
  //   const get_year = () => {
  //     var today = new Date();
  //     var yearr = today.getFullYear();
  //     setYear(yearr.toString());
  //   };

  const handletime = (data) => {
    setTimedata(data);
    console.log("dataa", data);
  };
  // const listitem = timedata.map((item) => <li>{item.DestinationTime}</li>);
  // useEffect(() => {
  //   const FetchData = async () => {
  //     if (indexx) {
  //       console.log("in useEffect");
  //       // await get_year();
  //       CombineDate(Year, Month, Day);
  //       CombineTime(Hour, Minute);
  //       setPostdata({
  //         StartStation: PlaceStart,
  //         EndStation: PlaceEnd,
  //         OutWardSearchDate: Dated,
  //         OutWardSearchTime: Timed,
  //         SearchType: "S",
  //         Lang: "TW",
  //         ReturnSearchDate: Dated,
  //         ReturnSearchTime: Timed,
  //       });

  //       await fetch("http://127.0.0.1:5000/test", {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         method: "POST",
  //         body: JSON.stringify(postdata),
  //       })
  //         .then((res) => res.json())
  //         .then((data) => console.log(data))
  //         .catch((err) => console.log("err", err));
  //     }
  //   };
  //   FetchData();

  //   console.log("timedata", timedata);
  // }, [indexx]);
  const FetchData = async (postdata) => {
    console.log("in useEffect");
    // await get_year();

    await fetch("http://127.0.0.1:5000/test", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(postdata),
    })
      .then((res) => res.json())
      .then((data) => setTimedata(data))
      .catch((err) => console.log("err", err));
  };
  useEffect(() => {
    CombineDate(Year, Month, Day, Hour, Minute);
    setPostdata({
      StartStation: PlaceStart,
      EndStation: PlaceEnd,
      OutWardSearchDate: Dated,
      OutWardSearchTime: Timed,
      SearchType: "S",
      Lang: "TW",
      ReturnSearchDate: Dated,
      ReturnSearchTime: Timed,
    });
    console.log("postdata", postdata);
    FetchData(postdata);

    console.log("timedata", timedata.data);
  }, [indexx]);
  // const handleclick = () => {
  //   const FetchData = async () => {
  //     if (indexx) {
  //       await console.log("in useEffect");
  //       // await get_year();
  //       await CombineDate(Year, Month, Day);
  //       await CombineTime(Hour, Minute);
  //       await setPostdata({
  //         StartStation: PlaceStart,
  //         EndStation: PlaceEnd,
  //         OutWardSearchDate: Dated,
  //         OutWardSearchTime: Timed,
  //         SearchType: "S",
  //         Lang: "TW",
  //         ReturnSearchDate: Dated,
  //         ReturnSearchTime: Timed,
  //       });
  //       await fetch("http://127.0.0.1:5000/test", {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         method: "POST",
  //         body: JSON.stringify(postdata),
  //       })
  //         .then((res) => res.json())
  //         .then((data) => setTimedata(data))
  //         .catch((err) => console.log("err", err));
  //     }
  //   };
  //   FetchData();
  //   // setIndexx(false);

  //   console.log("timedata", timedata.data);
  // };

  return (
    <>
      <ModalDropdown
        defaultValue="起點"
        options={PlaceNameC}
        onSelect={(placeID) => handlePlaceStart(placeID)}
        textStyle={styles.list}
        dropdownTextStyle={styles.list}
      ></ModalDropdown>
      <ModalDropdown
        defaultValue="終點"
        options={PlaceNameC}
        onSelect={(placeID) => handlePlaceEnd(placeID)}
        textStyle={styles.list}
        dropdownTextStyle={styles.list}
      ></ModalDropdown>
      <ModalDropdown
        defaultValue="月"
        options={monthC}
        onSelect={(monthID) => handleMonth(monthID)}
        textStyle={styles.list}
        dropdownTextStyle={styles.list}
      ></ModalDropdown>
      <ModalDropdown
        defaultValue="日"
        options={dayC}
        onSelect={(dayID) => handleDay(dayID)}
        textStyle={styles.list}
        dropdownTextStyle={styles.list}
      ></ModalDropdown>
      <ModalDropdown
        defaultValue="時"
        options={hourC}
        onSelect={(hourID) => handleHour(hourID)}
        textStyle={styles.list}
        dropdownTextStyle={styles.list}
      ></ModalDropdown>
      <ModalDropdown
        defaultValue="分"
        options={minuteC}
        onSelect={(minuteID) => handleMinute(minuteID)}
        textStyle={styles.list}
        dropdownTextStyle={styles.list}
      ></ModalDropdown>
      <View>
        <Button title="確認" onPress={() => setIndexx(indexx + 1)}></Button>
      </View>
      {
        <View>
          <Text>heyhey</Text>
          <FlatList
            data={timedata.data}
            renderItem={({ item }) => (
              <>
                <Text>departure arrival</Text>
                <Text>
                  {item.departure_times + "      "}
                  {item.arrival_times}
                </Text>
              </>
              // <Text>{item.departure_times}</Text>
              // <Text>{item.duration}</Text>
              // <Text>{item.trainnumbers}</Text>
            )}
          />
          <Text>hhhh</Text>
        </View>
      }
    </>
  );
}
const styles = StyleSheet.create({
  list: {
    fontSize: 20,
  },
});

export default Search;
