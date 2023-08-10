# USE rhythm;
#
# # ALTER TABLE profile_image
# # MODIFY profile_image_seq INT NOT NULL AUTO_INCREMENT;
# #
# # ALTER TABLE user
# # MODIFY user_seq INT NOT NULL AUTO_INCREMENT;
# #
# # ALTER TABLE song_rank
# # MODIFY song_rank_seq INT NOT NULL AUTO_INCREMENT;
# #
# # ALTER TABLE song
# # MODIFY song_seq INT NOT NULL AUTO_INCREMENT;
#
# INSERT INTO profile_image (profile_image_seq, image_name, description, file_name)
# VALUES (1, '1 profile image', '1 image', '1 file name'),
#        (2, '2 profile image', '2 image', '2 file name'),
#        (3, '3 profile image', '3 image', '3 file name'),
#        (4, '4 profile image', '4 image', '4 file name'),
#        (5, '5 profile image', '5 image', '5 file name');
#
# # INSERT INTO user (user_seq, name, nickname, email, profile_image_seq, gender, password, point)
# # VALUES (1, 'Han', 'ssafy', 'ssafy@naver.com', 1, 'M', '$2a$10$vssYDJemY9v8AAkwLLwHvu3fDFQERHWzSYRRFg0JnXOsMzfDHPtOS', 0),
# #        (2, 'hyun', 'hyun', 'abc@gmail.com', 1, 'F', '$2a$10$VFXy93wiuII9frJpYVwkaunhA4yC5.t3PObLeOWDmFSOkif9UUJlG', 0),
# #        (3, '민국', '민국', 'acd4548@naver.com', 1, 'M', '$2a$10$LPFxF8MpOlHoN.gjdcwGNOyAYwK6UaEYzAlTKupTW7aVCi0dMK5li', 0),
# #        (4, '강현', '현', 'a@naver.com', 1, 'F', '$2a$10$izEmiiCiWgy7YPeuI0Gn5eBG7Fko0SWugFRyEg3ydJBZYYImnaYW2', 1200),
# #        (5, '홍유빈', '홍유콩', 'ab@naver.com', 2, 'M', '$2a$10$GnzKA038lOiaZ/dUMOhAiucG7xgs9MVadxTnw1eaY.euum86itJMu', 1000),
# #        (6, '최재용', '최재드래곤', 'b@naver.com', 3, 'M', '$2a$10$mH8IoINNgYrqwcUaGcCub.5/G8L0R2hWE3zMZdN0CYMEkJSOwH2Nm', 800),
# #        (7, '최한윤', '최고다한윤', 'bc@naver.com', 3, 'F', '$2a$10$H95InRSRPg1tEW4X/DUu8.pO0NXOl.A7Hqef6iHF.1FF9h7iggsMq', 600),
# #        (8, '강혀니', '현순', 'z@naver.com', 1, 'F', '$2a$10$YBlzKtNiX4Q/eX2bc2GiKeuy98ie4pXXgjldU80pR7ba.B1kX3OaK', 1100);
#
# INSERT INTO song_rank (song_rank_seq, ranking, singer, title)
# VALUES (1,1,'NewJeans','Super Shy'),
#        (2,2,'정국','Seven (feat. Latto) - Clean Ver.'),
#        (3,3,'NewJeans','ETA'),
#        (4,4,'박재정','헤어지자 말해요'),
#        (5,5,'(여자)아이들','퀸카 (Queencard)'),
#        (6,7,'임영웅','모래 알갱이'),
#        (7,6,'IVE (아이브)','I AM'),
#        (8,8,'임영웅','사랑은 늘 도망가'),
#        (9,9,'LE SSERAFIM (르세라핌)','이브, 프시케 그리고 푸른 수염의 아내'),
#        (10,10,'aespa','Spicy'),
#        (11,11,'임영웅','우리들의 블루스'),
#        (12,12,'Lauv','Steal The Show (From “엘리멘탈”)'),
#        (13,13,'임영웅','다시 만날 수 있을까'),
#        (14,14,'NewJeans','New Jeans'),
#        (15,15,'임영웅','무지개'),
#        (16,16,'임영웅','이제 나만 믿어요'),
#        (17,17,'임영웅','London Boy'),
#        (18,18,'임영웅','Polaroid'),
#        (19,19,'임영웅','아버지'),
#        (20,20,'임영웅','인생찬가'),
#        (21,21,'NewJeans','Hype boy'),
#        (22,22,'임영웅','A bientot'),
#        (23,23,'LE SSERAFIM (르세라핌)','UNFORGIVEN (feat. Nile Rodgers)'),
#        (24,24,'임영웅','손이 참 곱던 그대'),
#        (25,25,'임영웅','사랑해 진짜'),
#        (26,26,'임영웅','연애편지'),
#        (27,27,'IVE (아이브)','Kitsch'),
#        (28,28,'정국','Still With You'),
#        (29,29,'임영웅','보금자리'),
#        (30,30,'NewJeans','Ditto'),
#        (31,31,'NewJeans','Cool With You'),
#        (32,32,'우디 (Woody)','사막에서 꽃을 피우듯'),
#        (33,33,'NCT DREAM','ISTJ'),
#        (34,34,'NCT DREAM','Candy'),
#        (35,35,'NewJeans','Attention'),
#        (36,36,'방탄소년단','Dynamite'),
#        (37,37,'NewJeans','OMG'),
#        (38,38,'세븐틴 (SEVENTEEN)','손오공'),
#        (39,39,'Paul Blanco','Summer (Feat. BE’O (비오))'),
#        (40,40,'윤하 (YOUNHA)','사건의 지평선'),
#        (41,41,'방탄소년단','Take Two'),
#        (42,42,'NCT DREAM','Broken Melodies'),
#        (43,43,'방탄소년단','Butter'),
#        (44,44,'IVE (아이브)','After LIKE'),
#        (45,45,'지민','Like Crazy'),
#        (46,46,'지수 (JISOO)','꽃'),
#        (47,47,'방탄소년단','봄날'),
#        (48,48,'IVE (아이브)','LOVE DIVE'),
#        (49,49,'정국','Dreamers [Music from the FIFA World Cup Qatar 2022 Official Soundtrack] (Feat. FIFA Sound)'),
#        (50,50,'방탄소년단','I Don\'t Think That I Like Her'),
#        (51,51,'Charlie Puth','사람 Pt.2 (feat. 아이유)'),
#        (52,52,'Agust D','Permission to Dance'),
#        (53,53,'방탄소년단','심(心)'),
#        (54,54,'DK(디셈버)','Dangerously'),
#        (55,55,'Charlie Puth','The Planet'),
#        (56,56,'방탄소년단','파이팅 해야지 (Feat. 이영지)'),
#        (57,57,'부석순 (SEVENTEEN)','그중에 그대를 만나'),
#        (58,58,'김호중','사랑하지 않아서 그랬어'),
#        (59,59,'임한별','ASAP'),
#        (60,60,'NewJeans','파랑 (Blue Wave)'),
#        (61,61,'NCT DREAM','Teddy Bear'),
#        (62,62,'STAYC(스테이씨)','물론'),
#        (63,63,'허각','In Bloom'),
#        (64,64,'ZEROBASEONE (제로베이스원)','나에게 그대만이'),
#        (65,65,'탑현','Cupid'),
#        (66,66,'FIFTY FIFTY','잠깐 시간 될까'),
#        (67,67,'이무진','여름이 들려 (Summer Comes)'),
#        (68,68,'오마이걸 (OH MY GIRL)','사랑인가 봐'),
#        (69,69,'멜로망스','on the street (with J. Cole)'),
#        (70,70,'j-hope','너의 모든 순간'),
#        (71,71,'J. Cole','Like We Just Met'),
#        (72,72,'성시경','건물 사이에 피어난 장미 (Rose Blossom)'),
#        (73,73,'NCT DREAM','ANTIFRAGILE'),
#        (74,74,'H1-KEY (하이키)','Yogurt Shake'),
#        (75,75,'LE SSERAFIM (르세라핌)','사랑..그게 뭔데'),
#        (76,76,'NCT DREAM','Allergy'),
#        (77,77,'지아','첫 키스에 내 심장은 120BPM'),
#        (78,78,'(여자)아이들','LIP GLOSS'),
#        (79,79,'경서','사실말야내가말야그게그러니까말이야'),
#        (80,80,'더보이즈 (THE BOYZ)','당신을 만나'),
#        (81,81,'케이시 (Kassy)','취중고백'),
#        (82,82,'김호중','Poison (모래성)'),
#        (83,83,'송가인','Skateboard'),
#        (84,84,'김민석 (멜로망스)','해요 (2022)'),
#        (85,85,'NCT DREAM','STAY'),
#        (86,86,'NCT DREAM','나의 목소리로'),
#        (87,87,'#안녕','Fast Forward'),
#        (88,88,'The Kid LAROI','Cream Soda'),
#        (89,89,'Justin Bieber','SOS'),
#        (90,90,'김호중','Heaven(2023)'),
#        (91,91,'전소미','TOMBOY'),
#        (92,92,'EXO','다정히 내 이름을 부르면'),
#        (93,93,'NCT DREAM','사랑의 바보'),
#        (94,94,'임재현','Pretzel (♡)'),
#        (95,95,'(여자)아이들','인생은 뷰티풀'),
#        (96,96,'경서예지','Monologue'),
#        (97,97,'전건호','민들레 (single ver.)'),
#        (98,98,'제이세라','애인이 되어줄게요 (Prod. 알고보니, 혼수상태)'),
#        (99,99,'NCT DREAM','빛이 나는 사람'),
#        (100,100,'김호중','That\'s Hilarious');
#
# INSERT INTO song (song_seq, play_count, singer, title, url)
# VALUES (1, 0, 'NewJeans', 'Super Shy', '8-HPStXQ4tY'),
#        (2, 0, 'NCT DREAM', 'Candy', 'DalyHh0PYoo'),
#        (3, 0, '윤하', '사건의지평선', 'Qj1Gt5z4zxo'),
#        (4, 0, '임영웅', '사랑은늘도망가(신사와아가씨OST)', 'fmiEetlCGtA'),
#        (5, 0, '이무진', '잠깐시간될까', '8-9iT2Z8CLY');
#
# INSERT INTO lyrics (lyrics_seq, start_time, end_time, song_seq, song_order, lyric)
# VALUES (1, 13, 25, 1, 1, 'I’m super shy, super shy But wait a minute while I Make you mine, make you mine 떨리는 지금도 You’re on my mind All the time I wanna tell you but I’m Super shy, super shy'),
#        (2, 26, 38, 1, 2, 'I’m super shy, super shy But wait a minute while I Make you mine, make you mine 떨리는 지금도 You’re on my mind All the time I wanna tell you but I’m Super shy, super shy'),
#        (3, 38, 50, 1, 3, 'And I wanna go out with you Where you wanna go? (Huh?) Find a lil spot Just sit and talk Looking pretty Follow me 우리 둘이 나란히 보이지? (봐) 내 눈이 (heh) 갑자기 빛나지 When you say I’m your dream'),
#        (4, 51, 64, 1, 4, 'You don’t even know my name Do ya? You don’t even know my name Do ya-a? 누구보다도'),
#        (5, 64, 76, 1, 1, 'I’m super shy, super shy But wait a minute while I Make you mine, make you mine 떨리는 지금도 You’re on my mind All the time I wanna tell you but I’m Super shy, super shy'),
#        (6, 77, 89, 1, 2, 'I’m super shy, super shy But wait a minute while I Make you mine, make you mine 떨리는 지금도 You’re on my mind All the time I wanna tell you but I’m Super shy, super shy'),
#        (7, 89, 100, 1, 3, '나 원래 말도 잘하고 그런데 왜 이런지 I don’t like that Something odd about you Yeah you’re special and you know it You’re the top babe'),
#        (8, 102, 115, 1, 4, 'I’m super shy, super shy But wait a minute while I Make you mine, make you mine 떨리는 지금도 You’re on my mind All the time I wanna tell you but I’m Super shy, super shy'),
#        (9, 115, 128, 1, 1, 'I’m super shy, super shy But wait a minute while I Make you mine, make you mine 떨리는 지금도 You’re on my mind All the time I wanna tell you but I’m Super shy, super shy'),
#        (10, 128, 152, 1, 2, 'You don’t even know my name Do ya? You don’t even know my name Do ya-a? 누구보다도 You don’t even know my name Do ya? You don’t even know my name Do ya-a?'),
#        (11, 13, 14, 2, 1, 'Candy'),
#        (12, 29, 45, 2, 2, '사실은 오늘 너와의 만남을 정리하고 싶어 널 만날 거야 이런 날 이해해 어렵게 맘 정한 거라 네게 말할 거지만 사실 오늘 아침에 그냥 나 생각한 거야'),
#        (13, 45, 62, 2, 3, '햇살에 일어나 보니 너무나 눈부셔 모든 게 다 변한 거야 널 향한 마음도 그렇지만 널 사랑 않는 게 아냐 이제는 나를 변화시킬 테니까'),
#        (14, 62, 70, 2, 4, '너 몰래 몰래 몰래 다른 여자들과 비교 비교했지 자꾸만 깨어지는 환상 속에 혼자서 울고 있는 초라하게 갇혀버린 나를 보았어'),
#        (15, 70, 78, 2, 1, '널 떠날 거야 uh 널 떠날 거야 uh 하지만 아직까지 사랑하는 걸 그래 그렇지만 내 맘속에 너를 잊어갈 거야'),
#        (16, 78, 95, 2, 2, '머리 위로 비친 내 하늘 바라다보며 널 향한 마음을 이제는 굳혔지만 웬일인지 네게 더 다가갈수록 우린 같은 하늘 아래 서 있었지'),
#        (17, 95, 113, 2, 3, '단지 널 사랑해 이렇게 말했지 이제껏 준비했던 많은 말을 뒤로한 채 언제나 니 옆에 있을게 이렇게 약속을 하겠어 저 하늘을 바라다보며'),
#        (18, 114, 122, 2, 4, '내게 하늘이 열려있어 그래그래 너는 내 앞에 서 있고 그래 다른 연인들은 키스를 해 하지만 항상 나는 너의 뒤에 있어야만 해'),
#        (19, 122, 130, 2, 1, '이제 그만해 나도 남잔데 내 마음 너도 알고 있는 걸 알아 그래 이제 나도 지쳐서 하늘만 바라볼 수밖에'),
#        (20, 130, 145, 2, 2, '내게 하늘이 열려있어 그래그래 너는 내 앞에 서 있고 그래 다른 연인들은 키스를 해 왜 난 너의 뒤에 있어야 할까'),
#        (21, 145, 153, 2, 3, '햇살에 일어나 보니 너무나 눈부셔 모든 게 다 변한 거야 널 향한 마음도'),
#        (22, 153, 161, 2, 4, '그렇지만 널 사랑 않는 게 아냐 이제는 나를 변화시킬 테니까'),
#        (23, 162, 179, 2, 1, '머리 위로 비친 내 하늘 바라다보며 널 향한 마음을 이제는 굳혔지만 웬일인지 네게 더 다가갈수록 우린 같은 하늘 아래 서 있었지'),
#        (24, 180, 196, 2, 2, '단지 널 사랑해 이렇게 말했지 이제껏 준비했던 많은 말을 뒤로한 채 언제나 니 옆에 있을게 이렇게 약속을 하겠어 저 하늘을 바라보며'),
#        (25, 196, 213, 2, 3, '한 번 더 한 번 더 말했지 이제껏 준비했던 많은 말을 뒤로한 채 (준비했던 많은 말을 뒤로한 채 다시 널 사랑한다고 했지) 언제나 니 옆에 있을게 다신 너 혼자 아냐 너의 곁엔 내가 있잖아'),
#        (26, 24, 43, 3, 1, '생각이 많은 건 말이야 당연히 해야 할 일이야 나에겐 우리가 지금 1순위야 안전한 유리병을 핑계로 바람을 가둬 둔 것 같지만'),
#        (27, 44, 63, 3, 2, '기억나? 그날의 우리가 잡았던 그 손엔 말이야 설레임보다 커다란 믿음이 담겨서 난 함박웃음을 지었지만 울음이 날 것도 같았어 소중한 건 언제나 두려움이니까'),
#        (28, 63, 78, 3, 3, '문을 열면 들리던 목소리 너로 인해 변해있던 따뜻한 공기 여전히 자신 없지만 안녕히'),
#        (29, 78, 97, 3, 4, '저기, 사라진 별의 자리 아스라이 하얀 빛 한동안은 꺼내 볼 수 있을 거야 아낌없이 반짝인 시간은 조금씩 옅어져 가더라도 너와 내 맘에 살아 숨 쉴 테니'),
#        (30, 98, 122, 3, 1, '여긴, 서로의 끝이 아닌 새로운 길 모퉁이 익숙함에 진심을 속이지 말자 하나 둘 추억이 떠오르면 많이 많이 그리워할 거야 고마웠어요 그래도 이제는 사건의 지평선 너머로'),
#        (31, 139, 154, 3, 2, '솔직히 두렵기도 하지만 노력은 우리에게 정답이 아니라서 마지막 선물은 산뜻한 안녕'),
#        (32, 154, 173, 3, 3, '저기, 사라진 별의 자리 아스라이 하얀 빛 한동안은 꺼내 볼 수 있을 거야 아낌없이 반짝인 시간은 조금씩 옅어져 가더라도 너와 내 맘에 살아 숨 쉴 테니'),
#        (33, 174, 198, 3, 4, '여긴, 서로의 끝이 아닌 새로운 길 모퉁이 익숙함에 진심을 속이지 말자 하나 둘 추억이 떠오르면 많이 많이 그리워할 거야 고마웠어요 그래도 이제는 사건의 지평선 너머로'),
#        (34, 215, 235, 3, 1, '저기, 사라진 별의 자리 아스라이 하얀 빛 한동안은 꺼내 볼 수 있을 거야 아낌없이 반짝인 시간은 조금씩 옅어져 가더라도 너와 내 맘에 살아 숨 쉴 테니'),
#        (35, 235, 259, 3, 2, '여긴, 서로의 끝이 아닌 새로운 길 모퉁이 익숙함에 진심을 속이지 말자 하나 둘 추억이 떠오르면 많이 많이 그리워할 거야 고마웠어요 그래도 이제는 사건의 지평선 너머로'),
#        (36, 274, 279, 3, 3, '사건의 지평선 너머로'),
#        (37, 2, 29, 4, 1, '눈물이 난다 이 길을 걸으면 그 사람 손길이 자꾸 생각이 난다 붙잡지 못하고 가슴만 떨었지 내 아름답던 사람아'),
#        (38, 30, 58, 4, 2, '사랑이란 게 참 쓰린 거더라 잡으려 할수록 더 멀어지더라 이별이란 게 참 쉬운 거더라 내 잊지 못할 사람아'),
#        (39, 59, 88, 4, 3, '사랑아 왜 도망가 수줍은 아이처럼 행여 놓아버릴까 봐 꼭 움켜쥐지만 그리움이 쫓아 사랑은 늘 도망가 잠시 쉬어가면 좋을 텐데'),
#        (40, 103, 131, 4, 4, '바람이 분다 옷깃을 세워도 차가운 이별의 눈물이 차올라 잊지 못해서 가슴에 사무친 내 소중했던 사람아'),
#        (41, 132, 160, 4, 1, '사랑아 왜 도망가 수줍은 아이처럼 행여 놓아버릴까 봐 꼭 움켜쥐지만 그리움이 쫓아 사랑은 늘 도망가 잠시 쉬어가면 좋을 텐데'),
#        (42, 160, 181, 4, 2, '기다림도 애태움도 다 버려야 하는데 무얼 찾아 이 길을 서성일까 무얼 찾아 여기 있나'),
#        (43, 184, 222, 4, 3, '사랑아 왜 도망가 수줍은 아이처럼 행여 놓아버릴까 봐 꼭 움켜쥐지만 그리움이 쫓아 사랑은 늘 도망가 잠시 쉬어가면 좋을 텐데 잠시 쉬어가면 좋을 텐데'),
#        (44, 0, 20, 5, 1, '잠깐 시간 될까 만날 수 있을까 별일은 아니고 그냥 보고 싶어 그래 웃지 말고 대답해줄래 그럼 나 괜히 설레 장난치지 말고 내게 답 해줄래 어떻게 생각해'),
#        (45, 21, 37, 5, 2, '만나서 반가워 아마 첫 인사부터 이런 맘이었었는지도 몰라 나 이제 네게 다가서려 해 거릴 좁혀보려 해 나 망설이지 않기를'),
#        (46, 37, 54, 5, 3, '우리가 만약 시작한다면 그 누구보다 예쁘디 예쁠 거라 생각해 혹시 넌 어때 할 얘기가 많은데 마침 너희 집 근처야 혹시나 괜찮다면'),
#        (47, 54, 72, 5, 4, '잠깐 시간 될까 만날 수 있을까 별일은 아니고 그냥 보고 싶어 그래 웃지 말고 대답해줄래 그럼 나 괜히 설레 장난치지 말고 내게 답 해줄래'),
#        (48, 73, 93, 5, 1, '혹시 근데 말이야 내 고백 말이야 답 안 해줬잖아 너는 나 어떤 것 같애 부담 안 가져도 돼 진짜야 나는 괜찮아 마음이 정리될 때까지 기다릴게 내가 그리 갈게'),
#        (49, 111, 127, 5, 2, '흠 아마도 내가 이런 맘을 보내다 보면 너에게 닿겠지만 혹시 그렇게 되진 못하더라도 이 순간만큼은 설렜던 기억으로 남기를'),
#        (50, 128, 145, 5, 3, '이대로 너와 내 시간이 멈춰버렸음 해 아직 우린 아무 사이도 아닌데 난 괜히 그래 할 얘기가 많은데 마침 너희 집 근처야 혹시나 괜찮다면'),
#        (51, 145, 165, 5, 4, '잠깐 시간 될까 만날 수 있을까 별일은 아니고 그냥 보고 싶어 그래 웃지 말고 대답해줄래 그럼 나 괜히 설레 장난치지 말고 내게 답 해줄래 내가 그리 갈게'),
#        (52, 174, 192, 5, 1, '잠깐 시간 될까 그 한마디보다 사실 지금 당장 널 보러 가고 싶은데 이게 맘처럼 안 돼 그냥 보고 싶어 나 너 좋아해 말로 다 못할 정도야 널 좋아해'),
#        (53, 193, 213, 5, 2, '널 보고 싶단 말 날 안아달란 말 너에게 했던 모든 말 전부 다 진심이야 단 한 순간도 가볍거나 쉽게 생각했던 적 없어 이젠 너도 답 해줄래 내가 그리 갈게');