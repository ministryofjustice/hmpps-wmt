# WMT Rules

A key design premise of the WMT application refresh is to to modularise business logic so that it is more clearly defined and more easily extensible with new rules as business requirements change.

To this end we will the approach of implementing business rules within npm modules.

This module is a proof-of-concept to illustrate the approach. 

The alpha code for the WMT Worker application includes this npm module as a local dependency, however we will likely expand upon this by separating the module into a new git repository.
