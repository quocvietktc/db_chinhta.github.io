let score = 0;
    let level = 1;
    let time = 10;
    let fullTime = 10;
    let widthTime = 0;
    let dapan =0;
    
    let dulieu=[['1','"Trầu cau" hay "Chầu Cau"?','Trầu cau','Chầu Cau','chinhta'],['2','"Châu sa" hay "Châu xa"?','Châu sa','Châu xa','chinhta'],['3','"Đại rịch" hay "Đại dịch" ?','Đại dịch','Đại rịch','chinhta'],['4','"Đậu nướt ván" hay là "Đậu lướt ván" ?','Đậu lướt ván','Đậu nướt ván','chinhta'],['5','"Bún chả" hay "Bún trả" ?','Bún chả','Bún trả','chinhta'],['6','"Sở thú" hay "Xở thú" ?','Sở thú','Xở thú','chinhta'],['7','"Châu chấu" hay "Châu trấu"?','Châu chấu','Châu trấu','chinhta'],['8','"Xúc sích" hay "Xúc xích" ?','Xúc xích','Xúc sích','chinhta'],['9','"Bò xốt vang" hay "Bò sốt vang" ?','Bò sốt vang','Bò xốt vang','chinhta'],['10','"Suôn sẻ" là tính từ hay động từ ?','Tính từ','Động từ','tudo'],['11','"Chật trội" hay "Trật trội" ?','Chật trội','Trật trội','chinhta'],['12','"Rau dáu" hay "Rau ráu" ?','Rau ráu','Rau dáu','chinhta'],['13','"Giại khờ" hay "Dại khờ" ?','Dại khờ','Giại khờ','chinhta'],['14','"Chí khôn" hay "Trí khôn" ?','Trí khôn','Chí khôn','chinhta'],['15','"Giỏi giang" hay "Giỏi dang" ?','Giỏi giang','Giỏi dang','chinhta'],['16','"Càn rỡ" là động từ hay tính từ ?','Tính từ','Động từ','tudo'],['17','"Su nịnh" hay "Xu nịnh" ?','Xu nịnh','Su nịnh','chinhta'],['18','"Khoác nác" hay "Khoác lác" ?','Khoác lác','Khoác nác','chinhta'],['19','"Ngớ ngẩn" là động từ hay tính từ ?','Tính từ','Động từ','tudo'],['20','"Qụy lụy" là danh từ hay động từ ?','Động từ','Danh từ','tudo'],['21','"Mập mờ" là tính từ hay động từ ?','Tính từ','Động từ','tudo'],['22','"Trọc phú" hay "Chọc phú" ?','Trọc phú','Chọc phú','chinhta'],['23','"Giãy giụa" hay "Giãy dụa" ?','Giãy giụa','Giãy dụa','chinhta'],['24','"Trỗng dỗng" hay "Trống rỗng" ?','Trống rỗng','Trỗng dỗng','chinhta'],['25','"Đắc trí" hay "Đắc chí" ?','Đắc chí','Đắc trí','chinhta'],['26','"Giang sơn" hay "Dang sơn" ?','Giang sơn','Dang sơn','chinhta'],['27','"Danh lam" hay "Gianh lam" ?','Danh lam','Gianh lam','chinhta'],['28','"Giục giã" hay "Giục dã" ?','Giục giã','Giục dã','chinhta'],['29','"Quốc thiều" hay "Cuốc thiều" ?','Quốc thiều','Cuốc thiều','chinhta'],['30','"Ca dao" hay "Ca giao" ?','Ca dao','Ca giao','chinhta'],['31','"Nông trường" hay "Nông chường" ?','Nông trường','Nông chường','chinhta'],['32','"Dập dìu" hay "Rập rìu" ?','Dập dìu','Rập rìu','chinhta'],['33','"Chùa chiền" hay "Chùa triền" ?','Chùa chiền','Chùa triền','chinhta'],['34','"Ngênh xuân" hay "Nghênh xuân" ?','Nghênh xuân','Ngênh xuân','chinhta'],['35','"Gia nhập" hay "Ra nhập" ?','Gia nhập','Ra nhập','chinhta'],['36','"Môi trường" hay "Môi chường" ?','Môi trường','Môi chường','chinhta'],['37','chinhta','Bánh giầy','Bánh dầy','chinhta'],['38','chinhta','Tréo ngoe','Chéo ngoe','chinhta'],['39','chinhta','Sung công','Xung công','chinhta'],['40','chinhta','Giằng xé','Dằng xé','chinhta'],['41','Chiến tranh','Danh từ','Động từ','danhtu-dongtu'],['42','Áp bức','Động từ','Tính từ','dongtu-tinhtu'],['43','Sâu sắc','Tính từ','Động từ','tinhtu-dongtu'],['44','Nông cạn','Tính từ','Động từ','tinhtu-dongtu'],['45','Hiệu quả','Tính từ','Động từ','tinhtu-dongtu'],['46','Thiết thực','Tính từ','Động từ','tinhtu-dongtu'],['47','Quần quật','Tính từ','Động từ','tinhtu-dongtu'],['48','"Nõn nà" hay "Nõn là" ?','Nõn nà','Nõn là','chinhta'],['49','"Quẫn trí" hay "Quấn chí" ?','Quẫn trí','Quấn chí','chinhta'],['50','"Suy sụp" hay "Syt xụp" ?','Suy sụp','Syt xụp','chinhta'],['51','"Dón rén" hay "Rón rén" ?','Rón rén','Dón rén','chinhta'],['52','"Da diết" hay "Da giết" ?','Da diết','Da giết','chinhta'],['53','"Ngóng chông" hay "Ngóng trông" ?','Ngóng trông','Ngóng chông','chinhta'],['54','"Chứa chan" hay "Chứa tran" ?','Chứa chan','Chứa tran','chinhta'],['55','"Rung động" hay "Dung động" ?','Rung động','Dung động','chinhta'],['56','"Giay dứt" hay "Day dứt" ?','Day dứt','Giay dứt','chinhta'],['57','"Giãy nảy" hay "Dãy nảy" ?','Giãy nảy','Dãy nảy','chinhta'],['58','"Cù lần" hay "Cù nần" ?','Cù lần','Cù nần','chinhta'],['59','"Chớp thời cơ" hay "Trớp thời cơ" ?','Chớp thời cơ','Trớp thời cơ','chinhta'],['60','"Giày vò" hay "Dày vò" ?','Giày vò','Dày vò','chinhta'],['61','"Dao duyên" hay "Giao duyên" ?','Giao duyên','Dao duyên','chinhta'],['62','"Xao xuyến" hay "Xao suyến" ?','Xao xuyến','Xao suyến','chinhta'],['63','"Xá xùng" hay "Sá sùng" ?','Sá sùng','Xá xùng','chinhta'],['64','"Liếm láp" hay "Niếm náp" ?','Liếm láp','Niếm náp','chinhta'],['65','"Xườn sụn" hay "Sườn sụn" ?','Sườn sụn','Xườn sụn','chinhta'],['66','"Ăn trực" hay "Ăn chực" ?','Ăn chực','Ăn trực','chinhta'],['67','"Mông sấn" hay "Mông xấn" ?','Mông sấn','Mông xấn','chinhta'],['68','"Trạn bát" hay "Chạn bát" ?','Chạn bát','Trạn bát','chinhta'],['69','"Thịt ba dọi" hay "Thịt ba rọi" ?','Thịt ba rọi','Thịt ba dọi','chinhta'],['70','"Lòng già" hay "Lòng dà" ?','Lòng già','Lòng dà','chinhta'],['71','"Chan canh" hay "Tran canh" ?','Chan canh','Tran canh','chinhta'],['72','"Sùng sục" hay "Sùng xục" ?','Sùng sục','Sùng xục','chinhta'],['73','"Lồng bàn" hay "Nồng bàn" ?','Lồng bàn','Nồng bàn','chinhta'],['74','"Rôm rả" hay "Rôm dả" ?','Rôm rả','Rôm dả','chinhta'],['75','"Dạ giày" hay "Dạ dày" ?','Dạ dày','Dạ giày','chinhta'],['76','"Cùi dìa" hay "Cùi rìa" ?','Cùi dìa','Cùi rìa','chinhta'],['77','"Trợn trừng" hay "Trợn chừng" ?','Trợn trừng','Trợn chừng','chinhta'],['78','"Suồng xã" hay "Suồng sã" ?','Suồng sã','Suồng xã','chinhta'],['79','chinhta','Sẩy miệng','Xẩy miệng','chinhta'],['80','"Xoành xoạch" hay "Soành soạch" ?','Xoành xoạch','Soành soạch','chinhta'],['81','"Dở chứng" hay "Dở trứng" ?','Dở chứng','Dở trứng','chinhta'],['82','"Rỗi hơi" hay "Dỗi hơi" ?','Rỗi hơi','Dỗi hơi','chinhta'],['83','"Xoắn xuýt" hay "Xoắn suýt" ?','Xoắn xuýt','Xoắn suýt','chinhta'],['84','"Giành giật" hay "Dành giật" ?','Giành giật','Dành giật','chinhta'],['85','"Chế diễu" hay "Chế giễu" ?','Chế giễu','Chế diễu','chinhta'],['86','"Dùng dằng" hay "Dùng giằng" ?','Dùng dằng','Dùng giằng','chinhta'],['87','"Siêng năng" hay "Xiêng năng" ?','Siêng năng','Xiêng năng','chinhta'],['88','chinhta','Truân chuyên','Chuân chuyên','chinhta'],['89','"Gian nan" hay "Dan nan" ?','Gian nan','Dan nan','chinhta'],['90','"Súc tích" hay "Xúc tích" ?','Súc tích','Xúc tích','chinhta'],['91','"Chần chừ" hay "Trần trừ" ?','Chần chừ','Trần trừ','chinhta'],['92','"Tự túc" là tính từ hay động từ ?','Động từ','Tính từ','tinhtu-dongtu'],['93','"Rèn dũa" hay "Rèn giũa" ?','Rèn giũa','Rèn dũa','chinhta'],['94','"Thước quộn" hay "Thước cuộn" ?','Thước cuộn','Thước quộn','chinhta'],['95','"Đàn đúm" là động từ hay danh từ ?','Động từ','Danh từ','tudo'],['96','"Dập dìu" là tính từ hay động từ ?','Tính từ','Động từ','tudo'],['97','"Quốc Tử Dám" hay "Quốc Tử Giám" ?','Quốc Tử Giám','Quốc Tử Dám','chinhta'],['98','Nôn nao','Động từ','Tính từ','dongtu-tinhtu'],['99','Sao nhãng','Động từ','Danh từ','danhtu-dongtu'],['100','"Rung rinh" là tính từ hay động từ?','Động từ','Tính từ','tudo'],['101','"Lều trõng" hay "Lều chõng" ?','Lều chõng','Lều trõng','chinhta'],['102','"Dềnh dàng" hay "Dềnh giàng" ?','Dềnh dàng','Dềnh giàng','chinhta'],['103','"Giấu giếm" hay "Giấu diếm" ?','Giấu giếm','Giấu diếm','chinhta'],['104','Tự giác','Tính từ','Động từ','tinhtu-dongtu'],['105','chinhta','Mưa rào','Mưa giào','chinhta'],['106','chinhta','Gió giật','Gió dật','chinhta'],['107','chinhta','Dằng dặc','Giằng dặc','chinhta'],['108','chinhta','Trần trụi','Trần chụi','chinhta'],['109','chinhta','Sấm sét','Sấm xét','chinhta'],['110','chinhta','Bọ xít','Bọ sít','chinhta'],['111','Sinh quyển','Danh từ','Động từ','tudo'],['112','"Sầm sì" là danh từ hay tính từ ?','Tính từ','Danh từ','tudo'],['113','"Vô tư" là danh từ hay tính từ ?','Tính từ','Danh từ','tudo'],['114','Rầy rà','Tính từ','Động từ','tinhtu-dongtu'],['115','Sững sờ','Tính từ','Động từ','tinhtu-dongtu'],['116','Hòa hợp','Động từ','Danh từ','danhtu-dongtu'],['117','chinhta','Rắn rỏi','Rắn dỏi','chinhta'],['118','chinhta','Giàn mướp','Dàn mướp','chinhta'],['119','chinhta','Rạn nứt','Dạn nứt','chinhta'],['120','chinhta','Rường cột','Giường cột','chinhta'],['121','chinhta','Giấy dầu','Giấy giầu','chinhta'],['122','Tiến độ','Danh từ','Động từ','danhtu-dongtu'],['123','Tiện dụng','Tính từ','Danh từ','tinhtu-danhtu'],['124','chinhta','Dột nát','Giột nát','chinhta'],['125','chinhta','Chạm trổ','Trạm trổ','chinhta'],['126','Phân hạng','Động từ','Danh từ','danhtu-dongtu'],['127','chinhta','Nông choẹt','Nông troẹt','chinhta'],['128','chinhta','Trơ trọi','Trơ chọi','chinhta'],['129','Vĩnh viễn','Tính từ','Danh từ','tinhtu-danhtu'],['130','chinhta','Hải trình','Hải chình','chinhta'],['131','chinhta','Dập dềnh','Dập giềnh','chinhta'],['132','chinhta','Xoáy ốc','Soáy ốc','chinhta'],['133','Cuồn cuộn','Động từ','Tính từ','dongtu-tinhtu'],['134','chinhta','Réo rắt','Déo dắt','chinhta'],['135','Sóng sánh','Động từ','Tính từ','tudo'],['136','chinhta','Chèo chống','Chèo trống','chinhta'],['137','chinhta','Ẩn chứa','Ẩn trứa','chinhta'],['138','chinhta','Cám dỗ','Cám rỗ','chinhta'],['139','Âm ỉ','Tính từ','Động từ','tinhtu-dongtu'],['140','Bồng bột','Tính từ','Danh từ','tinhtu-danhtu'],['141','chinhta','Hoài niệm','Hoài liệm','chinhta'],['142','chinhta','Tươi rói','Tươi dói','chinhta'],['143','chinhta','Sõng soài','Sõng xoài','chinhta'],['144','Rền rĩ','Tính từ','Động từ','dongtu-tinhtu'],['145','Hết hồn','Động từ','Danh từ','danhtu-dongtu'],['146','Chí chóe','Tính từ','Động từ','tinhtu-dongtu'],['147','chinhta','Nghẹn ngào','Ngẹn ngào','chinhta'],['148','chinhta','Dìu dặt','Dìu rặt','chinhta'],['149','chinhta','Giàn giáo','Giàn dáo','chinhta'],['150','chinhta','Rục rịch','Rục dịch','chinhta'],['151','chinhta','Xông xênh','Xông sênh','chinhta'],['152','chinhta','Trúc trắc','Trúc chắc','chinhta'],['153','chinhta','Liều lĩnh','Niều lĩnh','chinhta'],['154','chinhta','Xoàng xĩnh','Soàng xĩnh','chinhta'],['155','chinhta','Canh riêu','Canh diêu','chinhta'],['156','chinhta','Trống trải','Trống chải','chinhta'],['157','chinhta','Lập lờ','Lập nờ','chinhta'],['158','chinhta','Xử sự','Sử sự','chinhta'],['159','chinhta','Xồ xề','Sồ sề','chinhta'],['160','chinhta','Nô nức','Nô lức','chinhta'],['161','chinhta','Sâu sắc','Sâu xắc','chinhta'],['162','chinhta','Sắc sảo','Sắc xảo','chinhta'],['163','chinhta','Lão luyện','Não luyện','chinhta'],['164','chinhta','Chê trách','Chê chách','chinhta'],['165','chinhta','Chuyền cành','Truyền cành','chinhta'],['166','chinhta','No lê','Lo lê','chinhta'],['167','chinhta','Rộn ràng','Dộn ràng','chinhta'],['168','chinhta','Rả rích','Dả rích','chinhta'],['169','chinhta','Dân dã','Dân giã','chinhta'],['170','chinhta','Chín chắn','Chín trắn','chinhta'],['171','chinhta','Chấp chới','Trấp chới','chinhta'],['172','chinhta','Xúng xính','Súng xính','chinhta'],['173','chinhta','Chỉ trích','Chỉ chích','chinhta'],['174','chinhta','Nỗi niềm','Lỗi niềm','chinhta'],['175','chinhta','Dặt dẹo','Dặt rẹo','chinhta'],['176','chinhta','Giao du','Dao du','chinhta'],['177','chinhta','Chăm sóc','Chăm xóc','chinhta'],['178','chinhta','Danh giá','Gianh giá','chinhta'],['179','chinhta','Dò dẫm','Dò giẫm','chinhta'],['180','chinhta','Lem lém','Nem lém','chinhta'],['181','chinhta','Líu la líu lô','Líu la níu lô','chinhta'],['182','chinhta','Trả giá','Trả rá','chinhta'],['183','chinhta','Rộn rã','Rộn dã','chinhta'],['184','chinhta','Ròng rã','Dòng dã','chinhta'],['185','chinhta','Chật chội','Trật chội','chinhta'],['186','chinhta','Sâu xa','Xâu xa','chinhta'],['187','chinhta','Chập chờn','Chập trờn','chinhta'],['188','chinhta','Xoay xở','Xoay sở','chinhta'],['189','chinhta','Sôi sục','Sôi xục','chinhta'],['190','chinhta','Xuất sắc','Suất sắc','chinhta'],['191','chinhta','Xui xẻo','Sui sẻo','chinhta'],['192','chinhta','Trung trực','Chung trực','chinhta'],['193','chinhta','Chậm chạp','Chậm trạp','chinhta'],['194','chinhta','Trắc trở','Chắc trở','chinhta'],['195','chinhta','Trầy trật','Chầy trật','chinhta'],['196','chinhta','Tranh chấp','Chanh chấp','chinhta'],['197','chinhta','Sa trường','Xa trường','chinhta'],['198','chinhta','Sẩy chân','Xẩy chân','chinhta'],['199','chinhta','Sỉ nhục','Xỉ nhục','chinhta'],['200','chinhta','Sưng sỉa','Xưng xỉa','chinhta'],['201','chinhta','Gieo rắc','Reo rắc','chinhta'],['202','chinhta','Sóng soài','Xóng xoài','chinhta'],['203','chinhta','Trìu mến','Chìu mến','chinhta'],['204','chinhta','Sừng sộ','Xừng sộ','chinhta'],['205','chinhta','Sới chọi gà','Xới chọi gà','chinhta'],['206','chinhta','Khinh suất','Khinh xuất','chinhta'],['207','chinhta','Để dành','Để Giành','chinhta'],['208','chinhta','Sung sướng','Xung sướng','chinhta'],['209','chinhta','Giành giải nhất','Dành giải nhất','chinhta'],['210','chinhta','Xơ xác','Sơ xác','chinhta'],['211','chinhta','Xuất xứ','Xuất sứ','chinhta'],['212','chinhta','Ráo riết','Dáo riết','chinhta'],['213','chinhta','Xung phong','Sung phong','chinhta'],['214','chinhta','Trong trẻo','Trong chẻo','chinhta'],['215','chinhta','Châu sa ','Châu xa ','chinhta'],['216','Suôn sẻ','Tính từ','Động từ','tinhtu-dongtu'],['217','chinhta','Rách rưới','Rách dưới','chinhta'],['218','chinhta','Rửa ráy','Rửa dáy','chinhta'],['219','chinhta','Sư sãi','Sư xãi','chinhta'],['220','Chiêm nghiệm','Động từ','Danh từ','dongtu-danhtu'],['221','chinhta','Nguyên dạng','Nguyên rạng','chinhta'],['222','Quáng gà','Tính từ','Động từ','tinhtu-dongtu'],['223','chinhta','Vặt trụi','Vặt chụi','chinhta'],['224','Lụt lội','Tính từ','Động từ','tinhtu-dongtu'],['225','chinhta','Chất phác','Trất phác','chinhta'],['226','chinhta','Dật dờ','Giật dờ','chinhta'],['227','Nheo nhéo','Động từ','Tính từ','dongtu-tinhtu'],['228','chinhta','Xào xạc','Sào xạc','chinhta'],['229','chinhta','Han gỉ','Han rỉ','chinhta'],['230','An nghỉ','Động từ','Tính từ','dongtu-tinhtu'],['231','An nhàn','Tính từ','Danh từ','tinhtu-danhtu'],['232','An phận','Động từ','Tính từ','dongtu-tinhtu'],['233','An tâm','Tính từ','Động từ','tinhtu-dongtu'],['234','An thần','Động từ','Tính từ','dongtu-tinhtu'],['235','An bài','Động từ','Tính từ','dongtu-tinhtu'],['236','An dưỡng','Động từ','Tính từ','dongtu-tinhtu'],['237','Án ngữ','Động từ','Tính từ','dongtu-tinhtu'],['238','Án treo','Danh từ','Tính từ','danhtu-tinhtu'],['239','Anh dũng','Tính từ','Danh từ','tinhtu-danhtu'],['240','Anh minh','Tính từ','Động từ','tinhtu-dongtu'],['241','Anh tài','Danh từ','Tính từ','danhtu-tinhtu'],['242','Ánh sáng','Danh từ','Động từ','danhtu-dongtu'],['243','Ảo ảnh','Danh từ','Động từ','danhtu-dongtu'],['244','Ảo thuật','Danh từ','Động từ','danhtu-dongtu'],['245','Ào ào','Tính từ','Động từ','tinhtu-dongtu'],['246','Ào ạt','Tính từ','Động từ','tinhtu-dongtu'],['247','Áp chảo','Động từ','Danh từ','dongtu-danhtu'],['248','Áp dụng','Động từ','Tính từ','dongtu-tinhtu'],['249','Áp đảo','Động từ','Tính từ','dongtu-tinhtu'],['250','Áp giá','Động từ','Tính từ','dongtu-tinhtu'],['251','Áp lực','Danh từ','Động từ','danhtu-dongtu'],['252','Áp suất','Danh từ','Động từ','danhtu-dongtu'],['253','Áp thấp','Danh từ','Động từ','danhtu-dongtu'],['254','Áy náy','Động từ','Tính từ','dongtu-tinhtu'],['255','Ăm ắp','Tính từ','Động từ','tinhtu-dongtu'],['256','Ăn bám','Động từ','Tính từ','dongtu-tinhtu'],['257','Ăn diện','Động từ','Tính từ','dongtu-tinhtu'],['258','Ăn gian','Động từ','Tính từ','dongtu-tinhtu'],['259','Ăn mòn','Động từ','Tính từ','dongtu-tinhtu'],['260','Ẩm ương','Tính từ','Động từ','tinhtu-dongtu'],['261','Âm mưu','Danh từ','Tính từ','danhtu-tinhtu'],['262','Âm lượng','Danh từ','Tính từ','danhtu-tinhtu'],['263','Âm nhạc','Danh từ','Tính từ','danhtu-tinhtu'],['264','Ân oán','Danh từ','Động từ','danhtu-dongtu'],['265','chinhta','Dặn dò','Rặn dò','chinhta'],['266','chinhta','Trau chuốt','Chau chuốt','chinhta'],['267','chinhta','Siết chặt','Xiết chặt','chinhta'],['268','chinhta','Khoanh giò','Khoanh dò','chinhta'],['269','chinhta','Vô hình trung','Vô hình chung','chinhta'],['270','chinhta','Trót yêu','Chót yêu','chinhta'],['271','chinhta','Nối tiếp','Lối tiếp','chinhta'],['272','chinhta','Săm soi','Xăm soi','chinhta'],['273','chinhta','Trân trọng','Chân trọng','chinhta'],['274','chinhta','Gà trống','Gà chống','chinhta'],['275','chinhta','Dây chuyền','Dây truyền','chinhta'],['276','chinhta','Tâm lý','Tâm lí','chinhta'],['277','chinhta','Vật lý','Vật lí','chinhta'],['278','chinhta','Trực nhật','Chực nhật','chinhta'],['279','chinhta','Trồng cây','Chồng cây','chinhta'],['280','chinhta','Sợ sệt','Sợ xệt','chinhta'],['281','chinhta','Bắt nạt','Bắt lạt','chinhta'],['282','Huyền ảo','Tính từ','Danh từ','tinhtu-danhtu'],['283','chinhta','Tráng lệ','Cháng lệ','chinhta'],['284','chinhta','Vàng rộm','Vàng giộm','chinhta'],['285','chinhta','Dông tố','Giông tố','chinhta'],['286','Xao xuyến','Động từ','Tính từ','dongtu-tinhtu'],['287','Nhong nhóng','Tính từ','Động từ','tinhtu-dongtu'],['288','Phai nhạt','Động từ','Tính từ','dongtu-tinhtu'],['289','Xuýt xoa','Động từ','Tính từ','dongtu-tinhtu'],['290','Hẹn ước','Động từ','Tính từ','dongtu-tinhtu'],['291','Tần ngần','Động từ','Tính từ','dongtu-tinhtu'],['292','chinhta','Trải dài','Chải dài','chinhta'],['293','chinhta','Túi xách','Túi sách','chinhta'],['294','chinhta','Trà chanh','Trà tranh','chinhta'],['295','chinhta','Cá chày','Cá trày','chinhta'],['296','chinhta','Sâu róm','Sâu dóm','chinhta'],['297','Sinh sản','Động từ','Danh từ','dongtu-danhtu'],['298','Tuyệt chủng','Động từ','Tính từ','dongtu-tinhtu'],['299','chinhta','Chuồng trại','Chuồng chại','chinhta'],['300','Chuột rút','Danh từ','Động từ','danhtu-dongtu'],['301','Di cư','Động từ','Danh từ','dongtu-danhtu'],['302','Quý hiếm','Tính từ','Danh từ','tinhtu-danhtu'],['303','Phù du','Danh từ','Tính từ','danhtu-tinhtu'],['304','chinhta','Rình rập','Dình dập','chinhta'],['305','Tiến hóa','Động từ','Danh từ','dongtu-danhtu'],['306','Véo von','Tính từ','Danh từ','tinhtu-danhtu'],['307','Lênh đênh','Động từ','Danh từ','dongtu-danhtu'],['308','Dồn dập','Động từ','Tính từ','dongtu-tinhtu'],['309','chinhta','Phù sa','Phù xa','chinhta'],['310','chinhta','Trầm tích','Chầm tích','chinhta'],['311','Uốn lượn','Động từ','Tính từ','dongtu-tinhtu'],['312','Ô nhiễm','Động từ','Tính từ','dongtu-tinhtu'],['313','chinhta','Xói lở','Sói lở','chinhta'],['314','chinhta','Chòng chành','Tròng trành','chinhta'],['315','Hữu tình','Tính từ','Danh từ','tinhtu-danhtu'],['316','Lấp lánh','Tính từ','Danh từ','tinhtu-danhtu'],['317','chinhta','Yến sào','Yến xào','chinhta'],['318','chinhta','Sực nức','Xực nức','chinhta'],['319','chinhta','Cồng chiêng','Cồng triêng','chinhta'],['320','Báu vật','Danh từ','Tính từ','danhtu-tinhtu'],['321','chinhta','Gia truyền','Gia chuyền','chinhta'],['322','chinhta','Trung kiên','Chung kiên','chinhta'],['323','Cảm xúc','Danh từ','Tính từ','danhtu-tinhtu'],['324','chinhta','Đặc sắc','Đặc xắc','chinhta'],['325','chinhta','Quảng trường','Quảng chường','chinhta'],['326','Cảm tình','Danh từ','Tính từ','danhtu-tinhtu'],['327','chinhta','Giật mình','Dật mình','chinhta'],['328','chinhta','Dứa dại','Dứa giại','chinhta'],['329','Rèn giũa','Động từ','Tính từ','dongtu-tinhtu'],['330','chinhta','Chăm bẵm','Trăm bẵm','chinhta'],['331','chinhta','Giản dị','Dản dị','chinhta'],['332','Nhặng xị','Tính từ','Động từ','tinhtu-dongtu'],['333','chinhta','Ra đời','Da đời','chinhta'],['334','chinhta','Dốc túi','Giốc túi','chinhta'],['335','Tần tảo','Động từ','Tính từ','dongtu-tinhtu'],['336','chinhta','Dạt dào','Giạt dào','chinhta'],['337','chinhta','Sắt son','Xắt son','chinhta'],['338','Báo hiếu','Động từ','Tính từ','dongtu-tinhtu'],['339','chinhta','Dẻo dai','Rẻo dai','chinhta'],['340','chinhta','Bươn chải','Bươn trải','chinhta'],['341','Nhọc nhằn','Tính từ','Động từ','tinhtu-dongtu'],['342','chinhta','Nắng ráo','Nắng dáo','chinhta'],['343','Quang đãng','Tính từ','Động từ','tinhtu-dongtu'],['344','chinhta','Trùng lặp','Chùng lặp','chinhta'],['345','chinhta','Rạng đông','Dạng đông','chinhta'],['346','Hòa quyện','Động từ','Tính từ','dongtu-tinhtu'],['347','chinhta','Bão rớt','Bão giớt','chinhta'],['348','chinhta','Lốc xoáy','Lốc soáy','chinhta'],['349','Cực đoan','Tính từ','Động từ','tinhtu-dongtu'],['350','chinhta','Nhiễu sự','Nhiễu xự','chinhta'],['351','chinhta','Sưởi nắng','Xưởi nắng','chinhta'],['352','Hiệu ứng','Danh từ','Tính từ','danhtu-tinhtu'],['353','chinhta','Rừng rậm','Rừng dậm','chinhta'],['354','chinhta','Sinh trưởng','Sinh chưởng','chinhta'],['355','Phì nhiêu','Tính từ','Danh từ','tinhtu-danhtu'],['356','chinhta','Củ riềng','Củ diềng','chinhta'],['357','chinhta','Rễ chùm','Rễ trùm','chinhta'],['358','Diễn tiến','Động từ','Tính từ','dongtu-tinhtu'],['359','chinhta','Giải tỏa','Dải tỏa','chinhta'],['360','Đầu cơ','Động từ','Tính từ','dongtu-tinhtu'],['361','chinhta','Ưa chuộng','Ưa truộng','chinhta'],['362','chinhta','Trơn tru','Trơn chu','chinhta'],['363','Sốt dẻo','Tính từ','Động từ','tinhtu-dongtu'],['364','chinhta','Tràng hoa','Chàng hoa','chinhta'],['365','chinhta','Chúm chím','Trúm chím','chinhta'],['366','Thụ phấn','Động từ','Tính từ','dongtu-tinhtu'],['367','chinhta','Rực rỡ','Dực rỡ','chinhta'],['368','Sống động','Tính từ','Động từ','tinhtu-dongtu'],['369','chinhta','Sặc sụa','Sặc xụa','chinhta'],['370','chinhta','Rườm rà','Rườm dà','chinhta'],['371','Héo mòn','Động từ','Tính từ','dongtu-tinhtu'],['372','chinhta','Hoa râm','Hoa dâm','chinhta'],['373','chinhta','Cẩm chướng','Cẩm trướng','chinhta'],['374','chinhta','Trao đổi','Chao đổi','chinhta'],['375','chinhta','Chất liệu','Trất liệu','chinhta'],['376','Đa năng','Tính từ','Danh từ','tinhtu-danhtu'],['377','chinhta','Lãi ròng','Lãi dòng','chinhta'],['378','chinhta','Cạnh tranh','Cạnh chanh','chinhta'],['379','Giao dịch','Động từ','Danh từ','dongtu-danhtu'],['380','chinhta','Xa hoa','Sa hoa','chinhta'],['381','chinhta','Tiêu chuẩn','Tiêu truẩn','chinhta'],['382','Lưu hành','Động từ','Tính từ','dongtu-tinhtu'],['383','chinhta','Sở hữu','Xở hữu','chinhta'],['384','chinhta','Cải trang','Cải chang','chinhta'],['385','Loay hoay','Động từ','Tính từ','dongtu-tinhtu'],['386','chinhta','Vùi dập','Vùi giập','chinhta'],['387','chinhta','Thanh trừng','Thanh chừng','chinhta'],['388','chinhta','Thảm sát','Thảm xát','chinhta'],['389','chinhta','Ý chí','Ý trí','chinhta'],['390','chinhta','Chiết khấu','Triết khấu','chinhta'],['391','chinhta','Trí óc','Chí óc','chinhta'],['392','chinhta','Dồi dào','Dồi giào','chinhta'],['393','chinhta','Kiên trì','Kiên chì','chinhta'],['394','chinhta','Năng suất','Năng xuất','chinhta'],['395','chinhta','Quấy rầy','Quấy dầy','chinhta'],['396','chinhta','Rúm ró','Dúm ró','chinhta'],['397','chinhta','Dễ dãi','Dễ rãi','chinhta'],['398','chinhta','Chưng hửng','Trưng hửng','chinhta'],['399','chinhta','Chằng chịt','Chằng trịt','chinhta'],['400','chinhta','Kĩ xảo','Kĩ sảo','chinhta'],['401','chinhta','Giảo hoạt','Dảo hoạt','chinhta'],['402','chinhta','Bằng chứng','Bằng trứng','chinhta'],['403','chinhta','Giả định','Dả định','chinhta']];
    function startGame() {
        time = fullTime;
        widthTime = document.getElementById("time").offsetWidth;
        document.getElementById("score").innerHTML = "Điểm: "+score;
        document.getElementById("level").innerHTML = "Level: "+level;
        generateCalculation();
        countDown();
    }
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function getRandomOperator() {
        let operators = ["+", "-", "*", "/"];
        let ran = Math.floor(Math.random() * operators.length);
        return operators[ran];
    }

    function generateCalculation() {
        let cauhoi = getRandomNumber(1, 403);
        let rnd_traloi = getRandomNumber(1,3);
        let string1,string2="";
       
        let cal="";
        console.log(rnd_traloi+dulieu[cauhoi][2]+dulieu[cauhoi][3]);
        switch(rnd_traloi){
            case 1:
                string1= dulieu[cauhoi][2];
                string2= dulieu[cauhoi][3];
                dapan = 1;
                break;
            case 2:
                string1= dulieu[cauhoi][3];
                string2= dulieu[cauhoi][2];
                dapan = 2;
                 break;
            default:
                    string1= dulieu[cauhoi][3];
                    string2= dulieu[cauhoi][2];
                    dapan = 2;
                     break;
        }
        if(dulieu[cauhoi][4]=='chinhta'){
            cal = '"' + string1 + '" hay là "'+ string2+'"';
        }else{
            generateCalculation();
            return;
            //cal = '<span style="color:red;">'+dulieu[cauhoi][1]+'</span></br>"' + string1 + '" hay là "'+ string2+'"';
        }
        
       
        
        
        document.getElementById("calculation").innerHTML = cal;
        document.getElementById("string1").innerHTML = string1;
        document.getElementById("string2").innerHTML = string2;
    }

    function getRandomResult() {

        let randomResult = Math.random() >= 0.5;
      
        return randomResult ? getResult() : getFakeResult();
    }

    function getResult() {
        let cal = document.getElementById("calculation").innerHTML;
        return eval(cal);
    }

    function getFakeResult() {
        let fakeResult = getRandomNumber(getResult() - getRandomNumber(2,20), getResult() + getRandomNumber(2,20));
       
        return (fakeResult === getResult()) ? getFakeResult() : fakeResult;
    }
     function countDown() {
        let timeDiv = document.getElementById("time");
        let run = setInterval(function () {
            time-=0.1;
            timeDiv.style.width = widthTime * time/fullTime + "px";
            if(time <= 0){
                clearInterval(run);
                gameOver();
            }
        },100);
     }
    function check(btn) {
        
        let check = false;
        switch (btn) {
            case "true":
                if (dapan==1) check = true;
                break;
            case "false":
                if (dapan==2) check = true;
                break;
        }

        check?nextLevel():gameOver();
    }
    function nextLevel() {
        score += level;
        level++;
        time = fullTime;
        document.getElementById("score").innerHTML = "Score: "+score;
        document.getElementById("level").innerHTML = "Level: "+level;
        document.getElementById("correct").currentTime = 0;
        document.getElementById("correct").play();
        generateCalculation();
    }
    function gameOver() {
        document.getElementById("true").style.display = "none";
        document.getElementById("false").style.display = "none";
        document.getElementById("wrong").play();
        alert("Game Over. Your score is "+ score + ". Replay?");
        location.reload();
    }

    startGame();