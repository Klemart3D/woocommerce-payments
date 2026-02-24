/**
 * pnpm hook to fix peer dependency resolution issues.
 *
 * With pnpm, peer dependencies resolve to the consumer's version. This causes
 * issues in Jest tests where `jest.mock('@wordpress/data', factory)` replaces
 * the module for ALL importers, including @woocommerce/components which needs
 * the real `createReduxStore` function.
 *
 * By converting the peer dep to a regular dep, pnpm installs a separate copy
 * for @woocommerce/components, matching npm's nested resolution behavior.
 */
function readPackage( pkg ) {
	if ( pkg.name === '@woocommerce/components' ) {
		if (
			pkg.peerDependencies &&
			pkg.peerDependencies[ '@wordpress/data' ]
		) {
			pkg.dependencies = pkg.dependencies || {};
			pkg.dependencies[ '@wordpress/data' ] =
				pkg.peerDependencies[ '@wordpress/data' ];
			delete pkg.peerDependencies[ '@wordpress/data' ];
		}
	}
	return pkg;
}

module.exports = {
	hooks: {
		readPackage,
	},
};
