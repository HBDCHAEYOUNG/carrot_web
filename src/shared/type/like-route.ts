import { LikeCreateDataDto, LikeDeleteDataDto, LikeListDataDto } from './data-contracts'

export namespace Like {
	/**
 * @description 사용자가 좋아요한 상품 목록을 페이지네이션하여 조회합니다.
 * @tags Like
 * @name LikeList
 * @summary 좋아요한 상품 목록 조회
 * @request GET:/like
 * @secure
 * @response `200` `LikeListDataDto` 좋아요한 상품 목록 조회 성공
 * @response `400` `{
  \** 오류 메시지 *\
    message: string,

}` 잘못된 요청
 * @response `401` `{
  \** 오류 메시지 *\
    message: string,

}` 인증되지 않은 사용자
 * @response `404` `{
  \** 오류 메시지 *\
    message: string,

}` 사용자를 찾을 수 없음
*/
	export namespace LikeList {
		export type RequestParams = {}
		export type RequestQuery = {
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
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = LikeListDataDto
	}

	/**
 * @description 특정 상품에 좋아요를 추가합니다.
 * @tags Like
 * @name LikeCreate
 * @summary 상품 좋아요 추가
 * @request POST:/like/{id}
 * @secure
 * @response `200` `LikeCreateDataDto` 상품 좋아요 추가 성공
 * @response `400` `{
  \** 오류 메시지 *\
    message: string,

}` 잘못된 요청
 * @response `404` `{
  \** 오류 메시지 *\
    message: string,

}` 해당 ID의 상품을 찾을 수 없음
*/
	export namespace LikeCreate {
		export type RequestParams = {
			/**
			 * 상품 ID
			 * @min 1
			 */
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = LikeCreateDataDto
	}

	/**
 * @description 특정 상품의 좋아요를 삭제합니다.
 * @tags Like
 * @name LikeDelete
 * @summary 상품 좋아요 삭제
 * @request DELETE:/like/{id}
 * @secure
 * @response `204` `LikeDeleteDataDto` 상품 좋아요 삭제 성공
 * @response `400` `{
  \** 오류 메시지 *\
    message: string,

}` 잘못된 요청
 * @response `404` `{
  \** 오류 메시지 *\
    message: string,

}` 해당 ID의 상품을 찾을 수 없음
*/
	export namespace LikeDelete {
		export type RequestParams = {
			/**
			 * 상품 ID
			 * @min 1
			 */
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = LikeDeleteDataDto
	}
}
