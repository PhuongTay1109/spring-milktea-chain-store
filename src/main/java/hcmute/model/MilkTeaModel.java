package hcmute.model;

import org.springframework.web.multipart.MultipartFile;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MilkTeaModel {
	private int idMilkTea;
	private String name;
	private int cost;
	private String description;
	private int orderQuantity;
	private String image;
	private MultipartFile imageFile;

	// use for product detail
	private String milkTeaType;
	private String size;
	private int milkTeaTypeId;
	private int branchId;

	private MilkTeaTypeModel milkTeaTypeByMilkTea;
	private CartDetailModel cartDetails;

	private Boolean isEdit = false;
}
