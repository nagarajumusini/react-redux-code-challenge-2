import types from './types';

function addCompany(company) {
    return {
        type: types.ADD_COMPANY,
        company: company,
    }
}

export default {
    addCompany,
}