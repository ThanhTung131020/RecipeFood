import Category from '../models/category';
import Product from '../models/product';

export const CAT = [
    new Category('C1', 'món mì', require('../data/image/category/food1.jpg')),
    new Category('C2', 'món bánh ', require('../data/image/category/food2.jpg'))
];
export const PRO = [
    new Product("m1", "C1", "Cách xào lòng lợn với dưa cải chua không đắng, đậm đà hao cơm", require('../data/image/meal/meal1.jpg'), 130, 67, "Lòng lợn xào dưa cải chua là sự kết hợp không chỉ từ hương vị chua chua nhờ cải chua. Món xào đặc biệt này còn mang tới cho thực khách một cảm nhận hoàn toàn mới lạ, khác hẳn so với các món ăn cổ truyền được chế biến từ lòng lợn, và bây giờ các bạn hãy chuẩn bị nguyên liệu để cùng vào bếp thực hành chế biến món xào này ", "1 bộ lòng non\n1 bát dưa chua\/\n1 chút hành lá\n1 củ hành tím\n1-2 quả cà chua\n1 chút tỏi\n1 thìa nước mắm\n1 chút bột nêm, bột ngọt, tiêu\n1 nhánh gừng\nỚt vừa ăn\nDầu ăn", "– Bước 1: Lấy một mẩu gừng cho vào đầu lòng non để lọt vào trong, vuốt cho miếng gừng chạy dọc từ đầu này qua đầu kia. Sau đó bóp lòng với 1 chút giấm, muối rồi rửa lại cho sạch.\n– Bước 2: Đổ nước vào nồi đun sôi cùng với 1 nhánh gừng đập dập, 1 chút muối cho nước sôi mới cho lòng heo luộc trong 30 giây là vớt ngay. Thả lòng vào chén nước lạnh ngâm trong 30 phút cho nguội và lòng được trắng giòn.\n– Bước 3: Tiếp theo, bạn rửa sạch cà chua, cắt bỏ núm và thái múi cau. Hành tỏi băm nhỏ, hành lá thái khúc.\n– Bước 4: Vớt lòng non ra cho ráo nước rồi thái miếng dài chừng 2 đốt ngón tay.\n– Bước 5: Đặt chảo lên bếp, cho vào 2 thìa dầu ăn, khi dầu đã bắt đầu nóng thì cho tỏi, hành phi thơm vàng, cho cà chua vào xào, nêm thêm chút muối cho cà chua chín mềm.\n– Bước 6: Sau đó, bạn cho dưa chua vào xào sơ qua rồi cho chút lòng nong vào, nêm thêm với gia vị gồm: mắm, ớt, tiêu, hạt nêm, bột ngọt cho vừa miệng. Bạn dùng đũa đảo đều, rắc thêm hành lá lên trên là hoàn thành món ăn rồi."),
    new Product("m2", "C1", "Hướng Dẫn Cách Xào Cà Tím Chuẩn Vị Đậm Đà Ngon Ngất Ngây", require('../data/image/meal/meal2.jpg'), 150, 122, "Ngoài các loại rau củ như cà rốt, khoai tây, bí đỏ… thì cà tím là loại nguyên liệu được khá nhiều chị em yêu thích và chọn lựa. Bên cạnh những món như cà tím chiên, kho, thì cà tím xào thịt và xào tỏi là 2 món ăn vừa đơn giản dễ làm lại vô cùng ngon miệng", "2 quả cà tím\n100g thịt nạc vai\nGừng\n2 tép tỏi\n2 cây hành lá", "Bước 1: Sơ chế Cà tím khi mua về, bạn cắt miếng vừa ăn, rồi cho vào ngâm trong chậu nước có pha chút muối để cà không bị thâm đen. Ngâm cà trong khoảng 10 phút rồi vớt ra để ráo nước.\nTỏi bóc vỏ, băm nhỏ.\nHành lá rửa sạch, cắt nhỏ.\nGừng gọt sạch, một phần cắt sợi, một phần băm nhỏ.\nThịt heo khi mua về, rửa sạch rồi băm nhỏ. Tiếp đến, đem ướp thịt với chút muối, gừng băm nhỏ và ít rượu. Sau đó, trộn đều rồi để khoảng 10 phút cho thấm gia vị. Tiếp theo, bạn làm nóng chảo, cho vào ít tỏi băm phi thơm, rồi cho thịt heo vào xào đến khi thấy thịt chuyển sang màu trắng thì cho thịt ra bát riêng.\nBước 2: Chiên cà tím\n– Bạn làm nóng chảo, rồi cho dầu ăn vào, chờ dầu nóng thì cho cà tím đã ráo nước vào chảo chiên thật nhanh trong 2 – 3 phút rồi vớt ra. Sau đó, bạn tiếp tục cho cà vào nồi nước đang sôi luộc thêm khoảng 3 phút nữa rồi vớt ra rổ, để ráo. Đây là bí quyết giúp cà tím khi xào có độ săn, bóng và không bám nhiều dầu trong quá trình chế biến.\nBước 3: Xào cà tím với thịt\n– Tiếp tục phi thơm tỏi với dầu ăn, rồi cho gừng cắt sợi vào xào thơ. Sau đó, cho cà tím cùng thịt băm vào xào đều.\nBước 4: Nêm nếm\n– Xào khoảng 3 phút, bạn nêm nếm cà tím xào thịt với 1 muỗng đường, ½ muỗng cà phê dầu mè, 1 muỗng hạt nêm rồi trộn đều cho vừa ăn. Cuối cùng, bạn rắc hành lá cắt nhỏ lên trên, rồi tắt bếp và cho món ăn ra đĩa."),
    new Product("m3", "C1", "Cách làm bạch tuột xào đậm vị cho bữa cơm thêm hấp dẫn", require('../data/image/meal/meal3.jpg'), 100, 50, "Bạch tuột có vị giòn giòn, tươi ngọt có thể chế biến thành nhiều món ăn hấp dẫn, đậm đà. Do đó, đây là nguyên liệu được rất nhiều các chị em nội trợ yêu thích", "Nguyên liệu bạch tuột xào chua ngọt\n1kg bạch tuột\n1 quả cà chua\n1 củ hành tây\nRau cần, tỏi\nChanh\nDầu ăn, hạt nêm, đường, bột ngọt", "Cách làm bạch tuột xào chua ngọt\/Bước 1: Sơ chế – Bạch tuột khi mua về, bạn sơ chế như trên rồi cắt bạch tuột thành từng miếng vừa ăn.\n– Cà chua bạn đem rửa sạch, cắt múi cau.\n– Hành tây bóc vỏ cắt múi cau.\n– Rau cần rửa sạch cắt khúc.\n– Tỏi bóc vỏ, đập dập.\nBước 2: Xào bạch tuột\n– Bạn cho chảo lên bếp, cho dầu ăn và tỏi vào phi thơm, rồi cho bạch tuột vào. Nêm nếm với hạt nêm, bột ngọt rồi xào săn rồi trút ra đĩa, không nên xào chín.\nBước 3: Xào rau củ\n– Bạn cho chảo lên bếp, cho dầu ăn và tỏi vào phi thơm. Tiếp đến, bạn cho cà chua, hành tây vào xào đều. Khi nguyên liệu vừa chín tới, bạn cho bạch tuột đã xào sơ vào rồi nêm nếm cho vừa miệng. Rồi cho cần tây vào xào khoảng 5 phút thì tắt bếp\nBước 4: Làm nước xốt và hoàn thành món bạch tuột xào chua ngọt\n– Bạn cho nước cốt chanh, đường, nước mắm, bột ngọt vào chén, khuấy đều cho gia vị tan hẳn. Tiếp theo, cho từ từ bột năng hòa tan với nước vào rồi khuấy đều lên. Sau đó, bạn cho hỗn hợp này vào nồi và nấu đến khi món ăn sền sệt và có màu đẹp mắt. Vậy là hoàn thành món bạch tuột xào chua ngọt rồi đấy!"),
    new Product("m4", "C1", "“Bí Kíp” Làm Măng Tây Xào Thịt Bò Thơm Ngon Bổ Dưỡng Cho Gia Đình", require('../data/image/meal/meal4.jpg'), 140, 88, "Những ngày bận bịu công việc mà vẫn muốn tự tay làm cơm cho gia đình thì bạn nên chọn món ăn gì? Măng tây xào thịt bò là một gợi ý phù hợp, vừa chế biến đơn giản vừa cung cấp đầy đủ chất dinh dưỡng cho cả nhà. Vậy để hiểu rõ hơn về món ăn này cũng như cách chế biến thì bạn đừng bỏ qua bài viết sau nhé!", "Măng tây: 300g\nThịt thăn bò: 200g\nTỏi băm: 1 muỗng canh\nDầu ăn: 1 muỗng canh\nGia vị: đường, muối, tiêu, bột nêm,…", "Cách thực hiện\nBước 1: Sơ chế Thịt bò sau khi mua về đem rửa sạch, thái miếng mỏng. Sau đó cho vào tô ướp với 1 thìa cafe dầu ăn, ½ thìa cafe tiêu, ½ thìa cafe hạt nêm và 1 chút tỏi băm. Trộn đều và để khoảng 20 phút cho thịt thấm gia vị.\nChọn mua những cây măng tây non, màu xanh nhạt thì khi xào mới giòn và không bị xơ. Bỏ phần gốc già và bào vỏ thật mỏng khoảng 1/3 thân măng tính từ gốc trở lên, còn phần ngọn giữ nguyên. Ngâm với nước muối pha loảng để loại bỏ đất cát, rửa lại với nước sạch và để ráo sau đó cắt thành từng đoạn dài khoảng 5-7cm.\nBước 2: Chế biến\nĐầu tiên, bạn nấu nước để luộc sơ măng tây, thêm đường vào nồi với tỉ lệ 1 lít nước tương ứng 5g đường. Công đoạn này giúp măng tây sau khi xào vừa giữ được màu xanh vừa giòn, ngọt. Khi nước sôi, bạn cho măng tây vào và đậy nắp. Luộc măng tây trong 1 phút thì vớt ra và cho vào nước đá sau đó để ráo.\nTiếp theo, bạn cho dầu ăn vào chảo rồi phi thơm tỏi băm, xào thịt bò nhanh tay với lửa lớn. Khi thịt bò săn lại thì bạn cho ra dĩa, phần nước ngọt tiết ra vẫn để lại trong chảo. Tiếp tục cho măng tây vào xào, nêm nếm gia vị vừa miệng. Khi măng gần chín thì cho thịt bò vào và xào đều tay thêm 2 phút thì tắt bếp.\nBước 3: Trình bày và thưởng thức\nCho thành phẩm ra dĩa, rắc một chút tiêu xay lên trên để tăng hương vị, thưởng thức khi còn nóng và ăn cùng cơm trắng sẽ rất ngon. Món ăn đạt chuẩn khi vẫn  giữ được độ mềm của thịt bò, màu xanh và độ giòn của măng tây cùng hương vị vừa miệng."),
    new Product("m5", "C2", "Công Thức Làm Cua Rang Me Tại Nhà “Ngon Khó Cưỡng”", require('../data/image/meal/meal5.jpg'), 223, 130, "Cua là một trong những loại hải sản được rất nhiều người yêu thích. Loại thực phẩm này không chỉ dễ tìm mua, có cách chế biến đa dạng mà còn chứa rất nhiều dưỡng chất có lợi cho sức khỏe.", "1 con cua biển\n200 gram me\n5 gram ớt băm\n50 gram tỏi băm\n50 gram gừng băm\n100 gram bột chiên giòn\n50 gram hành tím\n100 gram sả băm\n15 gram bột bắp\nCác loại gia vị: đường, bột ngọt, muối, tiêu, …\nRau răm", "Thực hiện\nBước 1: Sơ chế, ướp cua\nSau khi rửa sạch cua, bạn dùng dao có mũi nhọn đâm vào dưới yếm cua đến khi cua ngừng hoạt động. Sau đó, dùng kéo tách mai, cắt thân cua ra làm 4 phần vừa ăn. Tiếp theo, cho hạt nêm, tiêu, bột ngọt, muối, tím băm và tỏi băm vào cua để ướp trong khoảng 10 – 15 phút.\nBước 2: Chiên cua\nSau khi cua thấm gia vị, bạn nhúng cua vào bột chiên giòn sao cho phần bột bám đều vào thịt cua, trừ phần chân cua. Bỏ cua vào chảo dầu ăn đang nóng, chiên giòn trên lửa lớn. Vớt cua ra cho vào đĩa cho ráo dầu.\nBước 3: Nấu xốt me\nCho hành tím, sả, tỏi và gừng vào nồi và phi cho thơm, sau đó đó đổ nước sôi cùng ớt hột. xác me vào nấu chung. Tiếp theo, bạn cho bột ngọt, đường, muối, nước mắm vào hỗn hợp trên, khuấy đều cho gia vị hòa tan đều. Sau cùng, thêm bột bắp và nước vào, tiếp tục khuấy đều cho đến khi xốt sệt lại.\nBước 4: Rang cua với xốt me\nCho cua vào phần xốt vừa mới pha, sau đó rang trên lửa lớn. Trong lúc rang, bạn có thể thêm ớt bột hoặc sa tế tùy ý nếu muốn ăn cay. Để cho sốt sôi lại thì tắt bếp và có thể gắp ra dĩa để dùng cua ra dĩa, trang trí kèm với rau răm."),
    new Product("m6", "C2", "Mách Bạn Cách Làm Mì Ý Đơn Giản, Chuẩn Vị Tại Nhà", require('../data/image/meal/meal6.jpg'), 180, 60, "Mì Ý là một ăn đặc trưng của ẩm thực phương Tây nhưng hiện nay đã rất phổ biến và được yêu thích tại Việt Nam. Công thức của món ăn không rườm rà như bạn vẫn hay nghĩ. Hãy học ngay cách làm mì Ý dưới đây để tự tay chuẩn bị cho gia đình thưởng thức nhé!", "Chuẩn bị Mì Spaghetti: 300g\nThịt bò: 300g\nHành tây: 1 củ\nCần tây: 50g\nCà chua: 200g (2-3 quả)\nXốt cà chua: 250g\nDầu olive: 20ml\nTỏi băm:  1 muỗng café\nBơ thực vật: 15g\nGia vị: muối, đường, tiêu, hạt nêm, dầu ăn", "Quy trình thực hiện\nBước 1: Sơ chế nguyên liệu tươi sống\nThịt bò rửa sạch rồi đem đi băm nhỏ hoặc xay nhuyễn, sau đó ướp với các gia vị hạt nêm, đường, dầu olive, tỏi băm trong 15-20 phút để thấm gia vị.\nCà chua, hành tây, cần tây rửa sạch với nước muối pha loãng. Để lột vỏ cà chua dễ dàng bạn luộc sơ rồi bỏ hạt và băm nhuyễn. Hai nguyên liệu còn lại thái hạt lựu nhỏ, để riêng từng phần.\nBước 2: Luộc mì\nĐun sôi nước, cho 1 muỗng cafe muối vào để mì sau khi luộc có màu vàng bóng và đậm vị hơn. Khi nước sôi, bạn cho mì từ từ vào luộc, sau khoảng 1 phút sợi mì mềm ra và ngập trong nước. Lúc này, dùng đũa đảo nhẹ để mì không dính vào nhau. Luộc thêm 8 -10 phút, khi mì chín hẳn thì bạn vớt ra, rửa sơ qua nước lạnh để mì dai, cho thêm 1 muỗng dầu ăn và trộn đều để sợi mì không bị dính lại với nhau.\nBước 3: Làm nước xốt\nLàm nóng chảo với một chút dầu olive rồi phi thơm tỏi và hành tây. Sau đó cho cần tây, cà chua vào xào, khi thấy nguyên liệu chín mềm thì tiếp tục thêm xố cà chua có sẵn vào nấu. Hỗn hợp sôi thì bạn thêm thịt bò vào đảo đều, nêm nếm gia vị cho vừa miệng thì đậy nắp, nấu hỗn hợp xốt với lửa nhỏ trong khoảng 20 phút thì tắt bếp\nBước 4: Trình bày\nBạn dùng nĩa xoắn mì thành những cuộn tròn ra dĩa và cho phần xốt cà chua thịt bằm đã chuẩn bị lên trên. Bạn có thể cho thêm chút phô mai sợi, lá húng quế để trang trí. Yêu cầu thành phẩm là sợi mì dai, không nát; phần xốt hòa quyện gia vị giữa thịt bò và cà chua, không bị quá chua hoặc quá mặn."),
    new Product("m7", "C2", "Cách Nấu Lẩu Thái Hải Sản Chua Cay, Đậm Đà Đơn Giản Tại Nhà", require('../data/image/meal/meal7.jpg'), 155, 54, "Những buổi bạn bè họp mặt hay tối cuối tuần gia đình sum vầy thì ăn gì sẽ thích hợp nhất nhỉ? Lẩu Thái chua chua, cay cay, giàu chất đạm và cũng rất nhiều chất xanh sẽ là lựa chọn hàng đầu đấy", "Nguyên liệu nấu lẩu thái chua cay\nCải thảo: 1kg\nSắp: 2 trái\nNấm rơm: 500 gram\nĐậu phụ: 0.5kg\nThịt bò: 1kg\nTôm sú tươi: 1kg\nCá viên: 800 gram\nMì ăn liền hoặc miến, bún\nRau các loại", "Các bước thực hiện nấu lẩu Thái\nBước 1: Bắp lột vỏ, bỏ sạch râu, rửa sạch rồi cắt khúc tầm 3cm. Cải thảo tách lá, rửa sạch rồi cắt miếng nhỏ, mỗi miếng dài tầm 4cm.\nBước 2: Nấm rửa sạch, cắt miếng vừa ăn. Rau các loại đem ngâm với nước muối loãng rồi rửa sạch, thái khúc nhỏ.\nBước 3: Đậu phụ cắt thành 9 miếng nhỏ. Thịt bò rửa sạch, thái lát càng mỏng càng tốt. Tôm bỏ đuôi, đầu.\nBước 4: Cho 1 muỗng cà phê gia vị tom yum, 2 muỗng cà phê đường, 2 muỗng canh nước tương, 1 muỗng cà phê dầu mè cùng ít ớt tươi thái nhỏ, hạt mè rang vào chung một bát rồi trộn đều.\nBước 5: Cà chua rửa sạch, thái múi cau. Riềng, sả, lá chanh, ớt, hành tây cắt miếng nhỏ.\nBước 6: Chuẩn bị một nồi lớn, đổ nước hầm gà hoặc heo vào rồi cho lên bếp đun sôi. Khi nước sôi, bạn cho riềng, ớt, lá chanh, sả, hành tây, cà chua đã được sơ chế vào nồi.\nBước 7: Cho 2 muỗng cà phê gia vị lẩu Thái, 4 – 6 muỗng canh nước mắm và nước cốt của một quả chanh vào nồi. Sau đó, nêm nếm gia vị vừa miệng rồi đậy nắp đun sôi.\nBước 8: Bạn đổ nước dùng ra một nồi lẩu chuyên dụng hoặc nồi nhỏ và sử dụng bếp ga mini rồi dọn ra cùng với các nguyên liệu ăn kèm đã được sơ chế.\nBước 9: Bạn cho bắp vào đầu tiên để nước dùng thêm ngọt. Sau đó nhúng các nguyên liệu bạn thích vào và bắt đầu thưởng thức lẩu Thái thơm ngon, nóng hổi."),
]
