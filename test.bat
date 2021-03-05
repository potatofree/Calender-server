curl http://localhost:3000/calender/events
echo ""
curl http://localhost:3000/calender/events/5f60c71e05b1262f54c15a50
echo ""
curl http://localhost:3000/calender/events/5
echo ""
curl -H "Content-Type: application/json" -d "{\"name\":\"Event\",\"body\":\"Cool_event\",\"start\":\"September 17, 2020 10:00:00\",\"end\":\"September 17, 2020 11:00:00\"}" http://localhost:3000/calender/events/
echo "
curl http://localhost:3000/calender/events
echo ""
curl -d "name=Event" -d "body=Cool_event" http://localhost:3000/calender/events/
echo ""
curl http://localhost:3000/calender/events
echo ""
curl -X DELETE http://localhost:3000/calender/events/5
echo ""
curl http://localhost:3000/calender/events?name=first
echo ""
curl http://localhost:3000/calender/events?sort_by_name=desc
echo ""
curl http://localhost:3000/calender/events?sort_by_name=asc
echo ""
curl "http://localhost:3000/calender/events?sort_by_name=asc&name=Event"
echo ""
curl http://localhost:3000/calender/events?sort_by_name=xxx
