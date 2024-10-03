import { AreaDetailDataDto, AreaListDataDto } from './data-contracts'

export namespace Area {
	/**
	 * @description 모든 지역 목록을 조회합니다.
	 * @tags Area
	 * @name AreaList
	 * @summary 지역 목록 조회
	 * @request GET:/area
	 * @secure
	 * @response `200` `AreaListDataDto` 지역 목록 조회 성공
	 */
	export namespace AreaList {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = AreaListDataDto
	}

	/**
 * @description 특정 지역의 상세 정보를 조회합니다.
 * @tags Area
 * @name AreaDetail
 * @summary 지역 상세 조회
 * @request GET:/area/{id}
 * @secure
 * @response `200` `AreaDetailDataDto` 지역 상세 조회 성공
 * @response `400` `{
  \** 오류 메시지 *\
    message: string,

}` 잘못된 요청
 * @response `404` `{
  \** 오류 메시지 *\
    message: string,

}` 해당 ID의 지역을 찾을 수 없음
*/
	export namespace AreaDetail {
		export type RequestParams = {
			/**
			 * 지역 ID
			 * @min 1
			 */
			id: number
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = AreaDetailDataDto
	}
}
