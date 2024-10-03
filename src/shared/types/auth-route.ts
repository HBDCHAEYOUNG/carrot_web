import {
	AuthCreateDataDto,
	AuthCreatePayloadDto,
	AuthListDataDto,
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
	 * @response `401` `void` 인증 실패 (예: 유효하지 않은 토큰)
	 * @response `403` `void` 권한 거부 (예: 토큰이 없거나 잘못됨)
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
	 * @response `401` `void` 인증 실패 (예: 잘못된 이메일 또는 비밀번호)
	 */
	export namespace AuthCreate {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = AuthCreatePayloadDto
		export type RequestHeaders = {}
		export type ResponseBody = AuthCreateDataDto
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
