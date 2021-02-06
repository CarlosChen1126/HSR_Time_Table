import time
from flask import *
import json
from flask_cors import CORS

import requests
from bs4 import BeautifulSoup


url = 'https://www.thsrc.com.tw/TimeTable/Search'


app = Flask(__name__)
CORS(app)


@app.route("/time")
def get_current_time():
    return {"time": time.ctime()}


@app.route("/test", methods=['POST'])
def test():
    postdata = request.get_json()
    print('hey')
    print('postdata', postdata)
    response_post = requests.post(url, data=postdata)
    print(response_post)

    data = json.loads(response_post.text)

    train_item = data['data']['DepartureTable']['TrainItem']
    # print(train_item)
    print("=======")

    # 所有班車(train_number)
    train_numbers = []
    t = []
    for item in train_item:
        train_numbers.append(item['TrainNumber'])
        t.append(item['TrainNumber'].split())

    train = []
    for tt in t:
        train.append(tt[0])

    # 所有出發時間(departure_time)
    departure_times = []
    d = []
    for item in train_item:
        departure_times.append(item['DepartureTime'])
        d.append(item['DepartureTime'].split())
    departure = []
    for dd in d:
        departure.append(dd[0])

    # 所有到達時間(arrival_time)
    arrival_times = []
    a = []
    for item in train_item:
        arrival_times.append(item['DestinationTime'])
        a.append(item['DestinationTime'].split())
    arrival = []
    for aa in a:
        arrival.append(aa[0])
    print(type(arrival))
    print(arrival)

    # 所有行車時間(duration)
    duration = []
    du = []
    for item in train_item:
        duration.append(item['Duration'])
        du.append(item['Duration'].split())
    durationn = []
    for dudu in du:
        durationn.append(dudu[0])

    # highway_df = pd.DataFrame({
    #     '車次': train_numbers,
    #     '出發時間': departure_times,
    #     '到達時間': arrival_times,
    #     '行車時間': duration},
    #     columns=['車次', '出發時間', '到達時間', '行車時間'])
    # print(highway_df)

    # i = 0
    # for item in train_item:
    #     new_data.append({
    #         "trainnumbers": item['TrainNumber'][i],
    #         "departure_times": item['DepartureTime'][i],
    #         "arrival_times": item['DestinationTime'][i],
    #         "duration": item['Duration'][i],

    #     })
    #     i = i+1

    test_dict_array = [{"trainnumbers": train[i], "departure_times": departure[i],
                        "arrival_times": arrival[i], "duration": durationn[i]} for i in range(len(train))]
    print('hello', test_dict_array[0])
    return {"data": test_dict_array}


# if __name__ == "__main__":
#     app.run()

# print(time.ctime())
