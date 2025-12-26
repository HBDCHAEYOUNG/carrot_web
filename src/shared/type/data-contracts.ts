/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AreaDetailDataDto {
	/** 지역 ID */
	id: number
	/** 지역 이름 */
	name: string
}

export type AreaDetailErrorDto = {
	/** 오류 메시지 */
	message: string
}

export interface AreaListDataDto {
	/** 지역 목록 데이터 */
	data: {
		/** 지역 ID */
		id: number
		/** 지역 이름 */
		name: string
	}[]
}

export interface AuthCreateDataDto {
	/** 사용자 닉네임 */
	nickname: string
	/** 인증 토큰 (JWT 등) */
	token: string
}

export type AuthCreateErrorDto = {
	/** 오류 메시지 */
	message: string
}

export interface AuthCreatePayloadDto {
	/**
	 * 이메일
	 * @example "user@naver.com"
	 */
	email: string
	/**
	 * 비밀번호
	 * @example "123123"
	 */
	password: string
}

export interface AuthDeleteDataDto {
	/**
	 * 성공 메시지
	 * @example "로그아웃 되었습니다."
	 */
	message: string
}

export type AuthDeleteErrorDto = {
	/**
	 * 오류 메시지
	 * @example "인증되지 않은 사용자입니다."
	 */
	message: string
}

export interface AuthListDataDto {
	/**
	 * 저장 지역
	 * @maxItems 2
	 * @minItems 1
	 * @example [{"id":1,"name":"서울특별시"},{"id":2,"name":"경기도"}]
	 */
	area: {
		id: number
		name: string
	}[]
	/** 이메일 */
	email: string
	/** 닉네임 */
	nickname: string
	notice?: {
		/**
		 * 알림 생성 일시
		 * @format date-time
		 */
		createdAt: string
		/** 알림 읽음 여부 */
		isRead: boolean
		/** 알림 메시지 내용 */
		message: string
		/** 알림 유형 (현재는 "activity"만 지원) */
		type: NoticeTypeEnumDto
	}
	noticeKeyword?: {
		/**
		 * 알림 키워드 생성 일시
		 * @format date-time
		 */
		createdAt: string
		/** 알림 키워드 */
		keyword: string
	}
	/** 프로필 이미지 URL */
	profile?: string
	/** 인증 토큰 (JWT 등) */
	token: string
}

export type AuthListErrorDto = {
	/** 오류 메시지 */
	message: string
}

export interface AuthPartialUpdateDataDto {
	/**
	 * 성공 메시지
	 * @example "사용자 정보가 성공적으로 업데이트되었습니다."
	 */
	message: string
}

export type AuthPartialUpdateErrorDto =
	| {
			/**
			 * 오류 메시지
			 * @example "비밀번호는 최소 6자 이상이어야 합니다."
			 */
			message: string
	  }
	| {
			/**
			 * 오류 메시지
			 * @example "인증되지 않은 사용자입니다."
			 */
			message: string
	  }
	| {
			/**
			 * 오류 메시지
			 * @example "사용자를 찾을 수 없습니다."
			 */
			message: string
	  }
	| {
			/**
			 * 오류 메시지
			 * @example "이미 사용 중인 닉네임입니다."
			 */
			message: string
	  }

export interface AuthPartialUpdatePayloadDto {
	/**
	 * 수정할 닉네임 (2자에서 20자 사이)
	 * @example "NewNickname"
	 */
	nickname?: string
	/**
	 * 수정할 비밀번호 (최소 6자 이상)
	 * @example "newPassword123"
	 */
	password?: string
	/**
	 * 수정할 프로필 이미지 URL
	 * @example "https://picsum.photos/200/300"
	 */
	profile?: string
}

export interface AuthUpdateDataDto {
	/**
	 * 성공 메시지
	 * @example "도시 정보가 성공적으로 업데이트되었습니다."
	 */
	message: string
}

export type AuthUpdateErrorDto =
	| {
			/**
			 * 오류 메시지
			 * @example "지역은 1개 또는 2개를 선택해야 합니다."
			 */
			message: string
	  }
	| {
			/**
			 * 오류 메시지
			 * @example "인증되지 않은 사용자입니다."
			 */
			message: string
	  }
	| {
			/**
			 * 오류 메시지
			 * @example "사용자를 찾을 수 없습니다."
			 */
			message: string
	  }

export interface AuthUpdatePayloadDto {
	/**
	 * 수정할 지역 ID 목록
	 * @maxItems 2
	 * @minItems 1
	 * @example [1,2]
	 */
	areaIds: number[]
}

export interface CategoryDetailDataDto {
	/** 카테고리 ID */
	id: number
	/** 카테고리 이름 */
	name: string
}

export type CategoryDetailErrorDto = {
	/** 오류 메시지 */
	message: string
}

export interface CategoryListDataDto {
	/** 카테고리 목록 데이터 */
	data: {
		/** 카테고리 ID */
		id: number
		/** 카테고리 이름 */
		name: string
	}[]
}

export interface EmailCheckCreateDataDto {
	/** 성공 메시지 */
	message: string
}

export type EmailCheckCreateErrorDto = {
	/** 오류 메시지 */
	message: string
}

export interface EmailCheckCreatePayloadDto {
	/**
	 * 이메일
	 * @example "user@naver.com"
	 */
	email: string
}

export interface LikeCreateDataDto {
	/** 좋아요가 추가된 상품의 ID */
	id: number
}

export type LikeCreateErrorDto = {
	/** 오류 메시지 */
	message: string
}

export type LikeDeleteDataDto = any

export type LikeDeleteErrorDto = {
	/** 오류 메시지 */
	message: string
}

export interface LikeListDataDto {
	/** 현재 페이지 번호 */
	currentPage: number
	product: {
		areas: {
			/** 지역 ID */
			id: number
			/** 지역 이름 */
			name: string
		}[]
		/**
		 * 상품 생성 날짜
		 * @format date-time
		 */
		createdAt: string
		/** 좋아요 ID */
		id: number
		/** 좋아요 수 */
		like: number
		/** 상품 가격 */
		price: number
		/** 상품 ID */
		productId: number
		/**
		 * 상품 상태
		 * - `reserved`: 예약됨
		 * - `sold`: 판매완료
		 * - `sale`: 판매중
		 */
		status: ProductStatusEnumDto
		/** 상품 썸네일 URL */
		thumbnail: string
		/** 상품 제목 */
		title: string
	}[]
	/** 전체 좋아요한 상품 수 */
	total: number
	/** 전체 페이지 수 */
	totalPages: number
}

export type LikeListErrorDto = {
	/** 오류 메시지 */
	message: string
}

export interface LikeListParamsDto {
	/**
	 * 한 페이지당 항목 수 (기본값: 10)
	 * @min 1
	 * @max 100
	 * @example 10
	 */
	limit?: number
	/**
	 * 페이지 번호 (기본값: 1)
	 * @min 1
	 * @example 1
	 */
	page?: number
}

export interface NicknameCheckCreateDataDto {
	/** 성공 메시지 */
	message: string
}

export type NicknameCheckCreateErrorDto = {
	/** 오류 메시지 */
	message: string
}

export interface NicknameCheckCreatePayloadDto {
	/**
	 * 닉네임
	 * @example "test"
	 */
	nickname: string
}

/** 알림 유형 (현재는 "activity"만 지원) */
export enum NoticeTypeEnumDto {
	Activity = 'activity',
}

export interface ProductCreateDataDto {
	/** 생성된 상품의 ID */
	id: number
}

export type ProductCreateErrorDto = {
	/** 오류 메시지 */
	message: string
}

export interface ProductCreatePayloadDto {
	/**
	 * 저장 지역 (1개 또는 2개 선택)
	 * @maxItems 2
	 * @minItems 1
	 * @example [1,2]
	 */
	areaIds: number[]
	/**
	 * 카테고리 ID
	 * @example 1
	 */
	categoryId: number
	/**
	 * 상품 상세 설명
	 * @example "아이폰 14 Pro 256GB 모델입니다. 상태 좋습니다."
	 */
	description: string
	/**
	 * 상품 이미지 URL 목록
	 * @example ["https://picsum.photos/200/300","https://picsum.photos/200/301"]
	 */
	images: string[]
	/**
	 * 가격 제안 가능 여부
	 * @example true
	 */
	isOffer: boolean
	/**
	 * 상품 가격
	 * @example 1200000
	 */
	price: number
	/**
	 * 상품 상태
	 * - `reserved`: 예약됨
	 * - `sold`: 판매완료
	 * - `sale`: 판매중
	 * @example "sale"
	 */
	status: ProductCreatePayloadStatusEnumDto
	/**
	 * 상품 썸네일 이미지 URL
	 * @example "https://picsum.photos/200/300"
	 */
	thumbnail: string
	/**
	 * 상품 제목
	 * @example "아이폰 14 Pro"
	 */
	title: string
}

/**
 * 상품 상태
 * - `reserved`: 예약됨
 * - `sold`: 판매완료
 * - `sale`: 판매중
 * @example "sale"
 */
export enum ProductCreatePayloadStatusEnumDto {
	Reserved = 'reserved',
	Sold = 'sold',
	Sale = 'sale',
}

export type ProductDeleteDataDto = any

export type ProductDeleteErrorDto = {
	/** 오류 메시지 */
	message: string
}

export interface ProductDetailDataDto {
	/**
	 * 상품 거래 가능 지역 목록
	 * @example [{"id":1,"name":"서울"}]
	 */
	area: {
		/** 지역 ID */
		id: number
		/** 지역 이름 */
		name: string
	}[]
	/**
	 * 상품 카테고리 정보
	 * @example {"id":1,"name":"전자기기"}
	 */
	category: {
		/** 카테고리 ID */
		id: number
		/** 카테고리 이름 */
		name: string
	}
	/**
	 * 상품 등록 일시
	 * @format date-time
	 * @example "2023-06-15T09:30:00Z"
	 */
	createdAt: string
	/**
	 * 상품 상세 설명
	 * @example "아이폰 14 Pro 256GB 모델입니다. 상태 좋습니다."
	 */
	description: string
	/**
	 * 상품 ID
	 * @example 1
	 */
	id: number
	/**
	 * 상품 이미지 URL 목록
	 * @example ["https://picsum.photos/200/300","https://picsum.photos/200/301"]
	 */
	images: string[]
	/**
	 * 현재 사용자의 좋아요 여부
	 * @example false
	 */
	isLike: boolean
	/**
	 * 가격 제안 가능 여부
	 * @example true
	 */
	isOffer: boolean
	/**
	 * 상품 좋아요 수
	 * @example 24
	 */
	like: number
	/**
	 * 상품 가격
	 * @example 1200000
	 */
	price: number
	/**
	 * 상품 상태
	 * - `reserved`: 예약됨
	 * - `sold`: 판매완료
	 * - `sale`: 판매중
	 * @example "sale"
	 */
	status: StatusEnumDto
	/**
	 * 상품 제목
	 * @example "아이폰 14 Pro"
	 */
	title: string
	/**
	 * 판매자 정보
	 * @example {"id":1,"nickname":"판매자","profile":"https://picsum.photos/200/300"}
	 */
	user: {
		/** 판매자 ID */
		id: number
		/** 판매자 닉네임 */
		nickname: string
		/** 판매자 프로필 이미지 URL */
		profile?: string
	}
}

export type ProductDetailErrorDto = {
	/** 오류 메시지 */
	message: string
}

export interface ProductListDataDto {
	/** 상품 목록 */
	products: {
		/** 상품 지역 */
		area: {
			id?: number
			name?: string
		}[]
		/**
		 * 상품 등록일
		 * @format date-time
		 */
		createdAt: string
		/** 상품 ID */
		id: number
		/** 현재 사용자의 좋아요 여부 */
		isLike: boolean
		/** 좋아요 수 */
		like: number
		/** 상품 가격 */
		price: number
		/**
		 * 상품 상태
		 * - `reserved`: 예약됨
		 * - `sold`: 판매완료
		 * - `sale`: 판매중
		 */
		status: ProductsStatusEnumDto
		/** 상품 썸네일 이미지 URL */
		thumbnail: string
		/** 상품 제목 */
		title: string
	}[]
	/** 전체 상품 수 */
	total: number
	/** 전체 페이지 수 */
	totalPages: number
}

export type ProductListErrorDto = {
	/** 오류 메시지 */
	message: string
}

/**
 * 정렬 방식
 * - `latest`: 최신순 (기본값)
 * - `priceAsc`: 낮은가격순
 * - `priceDesc`: 높은가격순
 */
export enum ProductListParams1SortEnumDto {
	Latest = 'latest',
	PriceAsc = 'priceAsc',
	PriceDesc = 'priceDesc',
}

export interface ProductListParamsDto {
	/** 지역 아이디로 필터링 */
	area?: string
	/** 검색 키워드 */
	keyword?: string
	/**
	 * 한 페이지당 항목 수 (기본값: 10)
	 * @min 1
	 * @max 100
	 * @example 10
	 */
	limit: number
	/** 최대 가격으로 필터링 (기본값: 100000000) */
	maxPrice?: number
	/**
	 * 최소 가격으로 필터링 (기본값: 0)
	 * @min 0
	 */
	minPrice?: number
	/**
	 * 페이지 번호 (기본값: 1)
	 * @min 1
	 * @example 1
	 */
	page: number
	/**
	 * 정렬 방식
	 * - `latest`: 최신순 (기본값)
	 * - `priceAsc`: 낮은가격순
	 * - `priceDesc`: 높은가격순
	 */
	sort?: SortEnumDto
}

export interface ProductPartialUpdateDataDto {
	/** 수정된 상품의 ID */
	id?: number
}

export type ProductPartialUpdateErrorDto = {
	/** 오류 메시지 */
	message: string
}

export interface ProductPartialUpdatePayloadDto {
	/**
	 * 상품 거래 가능 지역 ID 목록 (1개 또는 2개 선택 가능)
	 * @example [1,2]
	 */
	areaIds: number[]
	/**
	 * 카테고리 ID
	 * @example 1
	 */
	categoryId: number
	/**
	 * 상품 설명
	 * @example "거의 새 제품입니다. 1개월 사용했습니다."
	 */
	description: string
	/**
	 * 상품 이미지 URL 목록
	 * @example ["https://picsum.photos/200/300","https://picsum.photos/200/300"]
	 */
	images: string[]
	/**
	 * 가격 제안 가능 여부
	 * @example true
	 */
	isOffer: boolean
	/**
	 * 상품 가격
	 * @min 0
	 * @example 1500000
	 */
	price: number
	/**
	 * 상품 상태
	 * - `reserved`: 예약됨
	 * - `sold`: 판매완료
	 * - `sale`: 판매중
	 * @example "sale"
	 */
	status: ProductPartialUpdatePayloadStatusEnumDto
	/**
	 * 상품 썸네일 이미지 URL
	 * @example "https://picsum.photos/200/300"
	 */
	thumbnail: string
	/**
	 * 상품 제목
	 * @example "아이폰 14 Pro Max"
	 */
	title: string
}

/**
 * 상품 상태
 * - `reserved`: 예약됨
 * - `sold`: 판매완료
 * - `sale`: 판매중
 * @example "sale"
 */
export enum ProductPartialUpdatePayloadStatusEnumDto {
	Reserved = 'reserved',
	Sold = 'sold',
	Sale = 'sale',
}

/**
 * 상품 상태
 * - `reserved`: 예약됨
 * - `sold`: 판매완료
 * - `sale`: 판매중
 */
export enum ProductStatusEnumDto {
	Reserved = 'reserved',
	Sold = 'sold',
	Sale = 'sale',
}

/**
 * 상품 상태
 * - `reserved`: 예약됨
 * - `sold`: 판매완료
 * - `sale`: 판매중
 */
export enum ProductsStatusEnum1Dto {
	Reserved = 'reserved',
	Sold = 'sold',
	Sale = 'sale',
}

/**
 * 상품 상태
 * - `reserved`: 예약됨
 * - `sold`: 판매완료
 * - `sale`: 판매중
 */
export enum ProductsStatusEnumDto {
	Reserved = 'reserved',
	Sold = 'sold',
	Sale = 'sale',
}

export interface SalesListDataDto {
	products: {
		areas?: {
			/** 지역 ID */
			id?: number
			/** 지역 이름 */
			name?: string
		}[]
		/**
		 * 상품 등록일
		 * @format date-time
		 */
		createdAt?: string
		/** 상품 ID */
		id?: number
		/** 현재 사용자의 좋아요 여부 */
		isLike?: boolean
		/** 좋아요 수 */
		like?: number
		/** 상품 가격 */
		price?: number
		/**
		 * 상품 상태
		 * - `reserved`: 예약됨
		 * - `sold`: 판매완료
		 * - `sale`: 판매중
		 */
		status?: ProductsStatusEnum1Dto
		/** 상품 썸네일 이미지 URL */
		thumbnail?: string
		/** 상품 제목 */
		title?: string
	}[]
	/** 전체 판매 상품 수 */
	total: number
	/** 전체 페이지 수 */
	totalPages: number
}

export type SalesListErrorDto = {
	/** 오류 메시지 */
	message: string
}

/**
 * 판매 상태 (sold: 판매완료, sale: 판매중)
 * @example "sale"
 */
export enum SalesListParams1StatusEnumDto {
	Sold = 'sold',
	Sale = 'sale',
}

export interface SalesListParamsDto {
	/**
	 * 한 페이지당 항목 수 (기본값: 10)
	 * @min 1
	 * @max 100
	 * @example 10
	 */
	limit?: number
	/**
	 * 페이지 번호 (기본값: 1)
	 * @min 1
	 * @example 1
	 */
	page?: number
	/**
	 * 판매 상태 (sold: 판매완료, sale: 판매중)
	 * @example "sale"
	 */
	status?: StatusEnum1Dto
}

export interface SignupCreateDataDto {
	/** 닉네임 */
	nickname: string
	/** 인증 토큰 (JWT 등) */
	token: string
}

export interface SignupCreatePayloadDto {
	agreement: {
		/** 14세 이상 동의 */
		adultAgree: true
		/** 마케팅 동의 */
		snsAgree?: boolean
		/** 이용약관 동의 */
		termsAgree: true
	}
	/**
	 * 저장 지역
	 * @maxItems 2
	 * @minItems 1
	 * @example [1,2]
	 */
	areaIds: number[]
	/**
	 * 이메일
	 * @pattern ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
	 * @example "user@naver.com"
	 */
	email: string
	/**
	 * 닉네임
	 * @minLength 2
	 * @maxLength 20
	 * @example "test"
	 */
	nickname: string
	/**
	 * 비밀번호
	 * @minLength 6
	 * @example 123123
	 */
	password: string
}

/**
 * 정렬 방식
 * - `latest`: 최신순 (기본값)
 * - `priceAsc`: 낮은가격순
 * - `priceDesc`: 높은가격순
 */
export enum SortEnumDto {
	Latest = 'latest',
	PriceAsc = 'priceAsc',
	PriceDesc = 'priceDesc',
}

/**
 * 판매 상태 (sold: 판매완료, sale: 판매중)
 * @example "sale"
 */
export enum StatusEnum1Dto {
	Sold = 'sold',
	Sale = 'sale',
}

/**
 * 상품 상태
 * - `reserved`: 예약됨
 * - `sold`: 판매완료
 * - `sale`: 판매중
 * @example "sale"
 */
export enum StatusEnumDto {
	Reserved = 'reserved',
	Sold = 'sold',
	Sale = 'sale',
}
