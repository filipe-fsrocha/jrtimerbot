def endpoint_factory(method, endpoint):
    return "/api/bot/{}/{}".format(method, endpoint)

OS_NAME = endpoint_factory('queries', 'osName')