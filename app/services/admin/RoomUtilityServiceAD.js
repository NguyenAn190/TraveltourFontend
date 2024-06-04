travel_app.service('RoomUtilityServiceAD', function ($http, $q) {

    let API_TYPE = BASE_API + 'admin/type/';

    /**
     * API show list
     */
    this.findAllType = function (page, size, sortBy, sortDir, searchTerm) {
        const deferred = $q.defer();
        $http({
            method: 'GET',
            url: API_TYPE + 'find-all-room-utility-type',
            params: {
                page: page || 0,
                size: size || 5,
                sortBy: sortBy || 'id',
                sortDir: sortDir || 'desc',
                searchTerm: searchTerm || ''
            }
        }).then(deferred.resolve, deferred.reject);
        return deferred.promise;
    };

    /**
     * API tạo loại
     */
    this.createThisType = function (data) {
        return $http({
            method: 'POST',
            url: API_TYPE + 'create-room-utility-type',
            data: data
        })
    };

    /**
     * API update loại
     */
    this.updateThisType = function (data) {
        return $http({
            method: 'PUT',
            url: API_TYPE + 'update-room-utility-type',
            data: data
        })
    };

    /**
     * API delete loại
     */
    this.deleteThisType = function (id) {
        return $http({
            method: 'DELETE',
            url: API_TYPE + 'delete-room-utility-type/' + id
        })
    };

    /**
     * API tìm bằng id
     */
    this.findById = function (id) {
        return $http({
            method: 'GET',
            url: API_TYPE + 'find-room-utility-type-by-id/' + id
        })
    };

    /**
     * API check trùng tên loại
     */
    this.checkExistTypeName = function (name) {
        return $http({
            method: 'GET',
            url: API_TYPE + 'check-duplicate-room-utility-type-name/' + name,
            param: 'name' + name
        })
    }

    this.checkTypeIsWorking = function (id) {
        return $http({
            method: 'GET',
            url: API_TYPE + 'check-room-utility-type-working/' + id,
            param: 'id' + id
        })
    }
});
