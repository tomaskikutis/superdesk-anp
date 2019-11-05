import photo from './photo';
import {startApp} from 'superdesk-core/scripts/index';
import planningExtension from 'superdesk-planning/client/planning-extension/dist/src/extension';

setTimeout(() => {
    startApp(
        [planningExtension],
        {},
    );
});

export default angular.module('anp', [
    photo.name,
]);

