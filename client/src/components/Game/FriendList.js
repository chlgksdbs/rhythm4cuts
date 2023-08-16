import { List, ListItem, Typography } from "@mui/material";
import React from "react";
import axios from "axios";
import { getCookie } from "../../utils/cookie";

function FriendList({ friends }) {
  // 먼저 "온라인 상태"에 따라 정렬하고, 같은 "온라인 상태"를 가진 친구들 사이에서 "이름"에 따라 정렬합니다
  const sortedFriends = [...friends].sort((a, b) => {
    if (a.isOnline === b.isOnline) {
      // 두 친구의 온라인 상태가 동일한 경우 이름으로 정렬합니다
      return a.name.localeCompare(b.name);
    } else if (a.isOnline) {
      // 친구 'a'가 온라인 상태이고 'b'는 아닌 경우, 'a'가 먼저 옵니다
      return -1;
    } else {
      // 친구 'b'가 온라인 상태이고 'a'는 아닌 경우, 'b'가 먼저 옵니다
      return 1;
    }
  });

  return (
    <List>
      {sortedFriends.map((friend, index) => (
        <ListItem key={index}>
          <Typography
            variant="body1"
            style={{ color: "#ffffff", fontFamily: "Ramche" }}
            component="span"
          >
            {friend.isOnline ? "🟢" : "⚫"}
          </Typography>
          <Typography
            variant="body1"
            style={{
              color: "#ffffff",
              paddingLeft: "10px",
              padding: "5px",
              fontFamily: "Ramche",
            }}
            component="span"
          >
            {friend.name}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
}

export default FriendList;
