package com.b109.rhythm4cuts.model.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter @Setter
public class UserDto {
    private int userSeq;
    private String email;
    private String password;
    private String name;
    private String nickname;
    private LocalDate birthDate;
    private int point;
    private int playCount;
    private int scoreSum;
}
