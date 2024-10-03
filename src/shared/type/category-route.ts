import { CategoryDetailDataDto, CategoryListDataDto } from './data-contracts'

export namespace Category {
	/**
	 * @description 모든 카테고리 목록을 조회합니다.
	 * @tags Category
	 * @name CategoryList
	 * @summary 카테고리 목록 조회
	 * @request GET:/category
	 * @secure
	 * @response `200` `CategoryListDataDto` 카테고리 목록 조회 성공
	 */
	export namespace CategoryList {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = CategoryListDataDto
	}

	/**
 * @description 특정 카테고리의 상세 정보를 조회합니다.
 * @tags Category
 * @name CategoryDetail
 * @summary 카테고리 상세 조회
 * @request GET:/category/{id}
 * @secure
 * @response `200` `CategoryDetailDataDto` 카테고리 상세 조회 성공
 * @response `400` `{
  \** 오류 메시지 *\
    message: string,

}` 잘못된 요청
 * @response `404` `{
  \** 오류 메시지 *\
    message: string,

}` 해당 ID의 카테고리를 찾을 수 없음
*/
	export namespace CategoryDetail {
		export type RequestParams = {
			/**
			 * 카테고리 ID
			 * @min 1
			 */
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = CategoryDetailDataDto
	}
}
