package com.b109.rhythm4cuts.model.service;

import com.b109.rhythm4cuts.model.dto.LobbyDto;
import com.b109.rhythm4cuts.model.dto.SongDto;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.SQLException;
import java.util.List;

@Service
@Transactional
public interface LobbyService {

    List<LobbyDto> getLobbyList() throws SQLException;
    LobbyDto getSeqLobby(int gameSeq) throws SQLException;
    List<LobbyDto> getTitleLobbyList(String title) throws SQLException;
    void addGameRoom(LobbyDto lobbyDto) throws SQLException;
    List<SongDto> getSongTitle(String title) throws SQLException;
    String getPw(int gameSeq) throws SQLException;
}