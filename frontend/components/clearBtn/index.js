import { ClearBtn } from './clearBtn.js';//Clear button Logic

const useClearBtn = (data) => {
    const clearBtn = new ClearBtn(data);
    clearBtn.showOnInput();
    clearBtn.clearOnClick();
    return clearBtn;
};
