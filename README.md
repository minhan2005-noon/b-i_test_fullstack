# Top VPN Services 2026

Đây là concept homepage cho website so sánh VPN dành cho thị trường global. Toàn bộ nội dung hiển thị trên website được viết bằng tiếng Anh theo đúng yêu cầu đề bài. README này dùng tiếng Việt để trình bày phần research, design system, quyết định thiết kế và tư duy triển khai.

## 1. UI Research

### Nguồn tham khảo

1. TechRadar - Best VPN Service 2026  
   URL: https://www.techradar.com/vpn/best-vpn

   Điểm mạnh:
   - Cấu trúc ranking rõ ràng, có câu trả lời nhanh cho lựa chọn "best overall" trước khi người dùng đọc sâu.
   - Card của từng nhà cung cấp kết hợp được giá, nhận xét ngắn, ưu điểm và CTA.
   - Visual hierarchy tốt: số thứ hạng, tên provider, verdict và CTA được tách rõ.

   Điểm học được và áp dụng:
   - Mình đặt section "Best overall" trước danh sách đầy đủ để người dùng có thể ra quyết định nhanh.
   - Mỗi provider card đều có score, price, strengths và CTA trong cùng một khối nội dung.

2. Tom's Guide - Best VPN in 2026  
   URL: https://www.tomsguide.com/best-picks/best-vpn

   Điểm mạnh:
   - Dùng các thông tin thực tế như tốc độ, server locations, giới hạn thiết bị và refund terms.
   - Trang hỗ trợ cả hành vi scan nhanh và đọc chi tiết.
   - CTA được đặt gần các tiêu chí mua hàng, phù hợp với nhóm user có intent cao.

   Điểm học được và áp dụng:
   - Bảng comparison trong thiết kế của mình dùng các cột ra quyết định: best for, score, speed, devices và price.
   - CTA được lặp lại gần dữ liệu quan trọng thay vì chỉ đặt ở đầu trang.

3. Security.org - VPN Provider Comparison  
   URL: https://www.security.org/vpn/compare/

   Điểm mạnh:
   - Tập trung vào tiêu chí thực tế và giải thích cách người dùng nên so sánh VPN.
   - Nội dung tạo cảm giác tin cậy vì nói về testing, nhu cầu người dùng và tiêu chí đánh giá, không chỉ tập trung vào deal.
   - Layout kết hợp tốt giữa nội dung giáo dục và bảng so sánh provider.

   Điểm học được và áp dụng:
   - Mình thêm section methodology với các tiêu chí có trọng số.
   - Mình thêm FAQ/buyer questions để giảm băn khoăn trước khi người dùng click CTA.

## 2. Design System

### Màu sắc

- Ink: `#10202f` dùng cho text chính, đảm bảo độ tương phản tốt.
- Primary: `#0b4f6c` dùng cho cảm giác tin cậy, bảo mật và CTA chính.
- Accent: `#14b8a6` dùng cho trạng thái tích cực, privacy và highlight phụ.
- Warning: `#f5a524` dùng làm điểm nhấn cho top ranking/winner.
- Background: `#f6f8fb` kết hợp surface trắng để tạo cảm giác sạch, editorial và dễ đọc.

Lý do chọn: Người dùng VPN quan tâm nhiều đến privacy và reliability, nên palette chính dùng nhóm xanh lam - xanh teal để gợi cảm giác bảo mật. Màu amber chỉ dùng tiết chế ở các điểm ranking để kéo sự chú ý vào lựa chọn tốt nhất mà không làm trang quá "salesy".

### Typography

- Heading: Geist Sans, weight đậm, line-height chặt nhưng vẫn dễ đọc.
- Body: Geist Sans, regular/medium, kích thước 16-18px để đọc thoải mái.
- Hierarchy: hero headline lớn, section heading vừa phải, card heading và table label gọn hơn.

Lý do chọn: Trang comparison cần người dùng scan nhanh. Heading lớn giúp tạo sự tự tin và nhấn mạnh chủ đề, trong khi text trong card/table được giữ gọn để thông tin có mật độ tốt.

### Spacing

- Sử dụng hệ spacing 8px.
- Gap nhỏ: 8-16px.
- Padding card: 18-24px.
- Spacing giữa section: 72-104px tùy viewport.

Lý do chọn: Hệ 8px giúp khoảng cách giữa button, card, table và section nhất quán trên desktop lẫn mobile.

### Component Style

- Button: radius 8px, chiều cao tối thiểu 44px, primary CTA dạng filled, secondary CTA dạng outlined.
- Card: radius 8px, border nhẹ, shadow nhẹ, rank badge rõ.
- Table: bố cục dày thông tin ở desktop, mobile dùng horizontal scroll để giữ dữ liệu dễ đọc.
- Pill: label nhỏ cho strengths và trust signals.

## 3. Cấu trúc Homepage

1. Sticky header  
   Giúp người dùng truy cập nhanh các phần Rankings, Compare và Method.

2. Hero  
   Nêu rõ mục đích trang ngay từ đầu và đặt "Compare VPNs" làm CTA chính. Visual dashboard được generate riêng để hỗ trợ chủ đề VPN/global/security mà không dùng logo thật của thương hiệu.

3. Best overall recommendation  
   Đặt trước full list vì người dùng tìm "best VPN" thường muốn có câu trả lời nhanh trước khi đọc bảng so sánh dài hơn.

4. Provider ranking cards  
   Thiết kế để scan nhanh. Mỗi card có rank, best-use label, score, price, strengths và CTA.

5. Comparison table  
   Hỗ trợ người dùng ra quyết định lý tính hơn khi muốn so sánh chi tiết.

6. Methodology  
   Tăng trust bằng cách giải thích ranking được chấm theo tiêu chí nào.

7. Research applied và FAQ  
   Thể hiện tư duy thiết kế và giảm do dự trước bước click cuối.

## 4. Tư duy triển khai

### Chia section/component

Nếu triển khai bằng React hoặc Next.js, mình sẽ chia thành các component:

- `Header`
- `Hero`
- `TrustStrip`
- `WinnerBanner`
- `ProviderCard`
- `ProviderGrid`
- `ComparisonTable`
- `Methodology`
- `ResearchApplied`
- `FAQ`
- `Footer`

Dữ liệu provider nên được lưu trong một structured array để ranking cards và comparison table có thể dùng chung một nguồn dữ liệu, tránh nhập trùng và dễ cập nhật.

### Responsive

- Desktop: hero dùng 2 cột, provider cards dùng 5 cột compact, comparison table full width.
- Tablet: hero chuyển thành 1 cột, provider cards chuyển thành 2 cột.
- Mobile: cards xếp 1 cột, header wrap, comparison table dùng horizontal scroll để giữ nội dung dễ đọc.

### Phần khó implement

Phần khó nhất là comparison table trên mobile. Nếu ép tất cả cột vào màn hình nhỏ thì text sẽ khó đọc, nên mình chọn horizontal scroll. Trong phiên bản production, có thể cải thiện thêm bằng cách chuyển mỗi row thành mobile card, nhưng hướng đó cần thêm logic component và QA responsive kỹ hơn.

## 5. Giải thích quyết định thiết kế

### Vì sao chọn bảng màu này?

Nhóm màu xanh lam - teal tạo cảm giác bảo mật, công nghệ và đáng tin mà không quá lạnh. Màu amber chỉ dùng cho ranking emphasis để người dùng nhận ra top recommendation nhanh hơn.

### Vì sao chọn typography này?

Trang cần cảm giác editorial và trustworthy, nên mình chọn sans-serif sạch, heading weight mạnh và body text dễ đọc. Typography cũng hỗ trợ hành vi scan vì người dùng so sánh VPN bằng cách di chuyển nhanh giữa score, price và label.

### Lấy cảm hứng từ đâu?

Cảm hứng chính đến từ TechRadar, Tom's Guide và Security.org vì các trang này kết hợp tốt giữa editorial trust, comparison density và CTA phục vụ conversion.

### Nếu có thêm thời gian, mình sẽ cải thiện gì?

- Thêm affiliate disclosure và bằng chứng testing thực tế.
- Thêm bộ lọc theo use case như streaming, gaming, travel và privacy.
- Thêm logo provider nếu có quyền sử dụng asset hợp lệ.
- Làm thêm Figma prototype cho mobile interaction và table-to-card behavior.

## Deliverables

- Homepage chạy được: `app/page.tsx`
- Design system và responsive styling: `app/globals.css`
- Hero visual được generate riêng: `public/vpn-dashboard-hero.png`
- Research và giải thích thiết kế: README này
