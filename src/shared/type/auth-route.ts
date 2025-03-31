import {
	AuthCreateDataDto,
	AuthCreatePayloadDto,
	AuthDeleteDataDto,
	AuthListDataDto,
	AuthPartialUpdateDataDto,
	AuthPartialUpdatePayloadDto,
	AuthUpdateDataDto,
	AuthUpdatePayloadDto,
	EmailCheckCreateDataDto,
	EmailCheckCreatePayloadDto,
	NicknameCheckCreateDataDto,
	NicknameCheckCreatePayloadDto,
	SignupCreateDataDto,
	SignupCreatePayloadDto,
} from './data-contracts'

export namespace Auth {
	/**
	 * @description 회원가입 API입니다.
	 * @tags Auth
	 * @name SignupCreate
	 * @summary 회원가입
	 * @request POST:/auth/signup
	 * @secure
	 * @response `201` `SignupCreateDataDto` 사용자가 성공적으로 생성됨
	 * @response `400` `void` 잘못된 요청 (예: 필수 필드 누락 또는 유효성 검사 실패)
	 * @response `409` `void` 충돌 (예: 이미 존재하는 이메일 또는 닉네임)
	 */
	export namespace SignupCreate {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = SignupCreatePayloadDto
		export type RequestHeaders = {}
		export type ResponseBody = SignupCreateDataDto
	}

	/**
 * @description 내 정보 확인 API입니다. JWT 토큰을 사용하여 사용자 정보를 확인합니다.
 * @tags Auth
 * @name AuthList
 * @summary 내 정보 확인
 * @request GET:/auth
 * @secure
 * @response `200` `AuthListDataDto` 사용자 정보 확인 성공
 * @response `401` `{
  \** 오류 메시지 *\
    message: string,

}` 인증되지 않은 사용자
 * @response `404` `void` 사용자를 찾을 수 없음
*/
	export namespace AuthList {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = AuthListDataDto
	}

	/**
 * @description 로그인 API입니다.
 * @tags Auth
 * @name AuthCreate
 * @summary 로그인
 * @request POST:/auth
 * @secure
 * @response `200` `AuthCreateDataDto` 로그인 성공
 * @response `400` `void` 잘못된 요청 (예: 필수 필드 누락, 형식 오류)
 * @response `401` `{
  \** 오류 메시지 *\
    message: string,

}` 인증되지 않은 사용자
*/
	export namespace AuthCreate {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = AuthCreatePayloadDto
		export type RequestHeaders = {}
		export type ResponseBody = AuthCreateDataDto
	}

	/**
 * @description 내 정보 수정 API입니다. JWT 토큰을 사용하여 사용자 정보를 수정합니다.
 * @tags Auth
 * @name AuthPartialUpdate
 * @summary 내 정보 수정
 * @request PATCH:/auth
 * @secure
 * @response `200` `AuthPartialUpdateDataDto` 사용자 정보 수정 성공
 * @response `400` `{
  \**
   * 오류 메시지
   * @example "비밀번호는 최소 6자 이상이어야 합니다."
   *\
    message: string,

}` 잘못된 요청 (예: 유효성 검사 실패)
 * @response `401` `{
  \**
   * 오류 메시지
   * @example "인증되지 않은 사용자입니다."
   *\
    message: string,

}` 인증되지 않은 사용자
 * @response `404` `{
  \**
   * 오류 메시지
   * @example "사용자를 찾을 수 없습니다."
   *\
    message: string,

}` 사용자를 찾을 수 없음
 * @response `409` `{
  \**
   * 오류 메시지
   * @example "이미 사용 중인 닉네임입니다."
   *\
    message: string,

}` 충돌 (예: 이미 사용 중인 닉네임)
*/
	export namespace AuthPartialUpdate {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = AuthPartialUpdatePayloadDto
		export type RequestHeaders = {}
		export type ResponseBody = AuthPartialUpdateDataDto
	}

	/**
 * @description 내 도시 수정 API입니다. JWT 토큰을 사용하여 사용자의 도시 정보를 수정합니다.
 * @tags Auth
 * @name AuthUpdate
 * @summary 내 도시 수정
 * @request PUT:/auth
 * @secure
 * @response `200` `AuthUpdateDataDto` 도시 정보 수정 성공
 * @response `400` `{
  \**
   * 오류 메시지
   * @example "지역은 1개 또는 2개를 선택해야 합니다."
   *\
    message: string,

}` 잘못된 요청 (예: 유효성 검사 실패)
 * @response `401` `{
  \**
   * 오류 메시지
   * @example "인증되지 않은 사용자입니다."
   *\
    message: string,

}` 인증되지 않은 사용자
 * @response `404` `{
  \**
   * 오류 메시지
   * @example "사용자를 찾을 수 없습니다."
   *\
    message: string,

}` 사용자를 찾을 수 없음
*/
	export namespace AuthUpdate {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = AuthUpdatePayloadDto
		export type RequestHeaders = {}
		export type ResponseBody = AuthUpdateDataDto
	}

	/**
 * @description 로그아웃 API입니다.
 * @tags Auth
 * @name AuthDelete
 * @summary 로그아웃
 * @request DELETE:/auth
 * @secure
 * @response `200` `AuthDeleteDataDto` 로그아웃 성공
 * @response `401` `{
  \**
   * 오류 메시지
   * @example "인증되지 않은 사용자입니다."
   *\
    message: string,

}` 인증되지 않은 사용자
*/
	export namespace AuthDelete {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = AuthDeleteDataDto
	}

	/**
 * @description 이메일 중복 체크 API입니다.
 * @tags Auth
 * @name EmailCheckCreate
 * @summary 이메일 중복 체크
 * @request POST:/auth/email-check
 * @secure
 * @response `200` `EmailCheckCreateDataDto` 사용 가능한 이메일
 * @response `409` `{
  \** 오류 메시지 *\
    message: string,

}` 이미 사용 중인 이메일
*/
	export namespace EmailCheckCreate {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = EmailCheckCreatePayloadDto
		export type RequestHeaders = {}
		export type ResponseBody = EmailCheckCreateDataDto
	}

	/**
 * @description 닉네임 중복 체크 API입니다.
 * @tags Auth
 * @name NicknameCheckCreate
 * @summary 닉네임 중복 체크
 * @request POST:/auth/nickname-check
 * @secure
 * @response `200` `NicknameCheckCreateDataDto` 사용 가능한 닉네임
 * @response `409` `{
  \** 오류 메시지 *\
    message: string,

}` 이미 사용 중인 닉네임
*/
	export namespace NicknameCheckCreate {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = NicknameCheckCreatePayloadDto
		export type RequestHeaders = {}
		export type ResponseBody = NicknameCheckCreateDataDto
	}
}
