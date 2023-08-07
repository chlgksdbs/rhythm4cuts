package com.b109.rhythm4cuts.model.service;

import com.b109.rhythm4cuts.model.domain.SongRank;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

@Service
@Transactional
public interface MelonService {

    void clearMelonChart() throws SQLException;
    List<SongRank> scrapeAndSaveMelonChart() throws SQLException, IOException;
}
