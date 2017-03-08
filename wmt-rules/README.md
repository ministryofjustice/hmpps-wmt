# WMT Rules

A key design premise of the WMT application refresh is to modularise business logic so that it is more clearly defined and more easily extensible with new rules as business requirements change.

To this end, we will take the approach of implementing business rules within npm modules and this module illustrates the concept.

The alpha code for the WMT Worker application requires this npm module as a local dependency, however we will likely expand upon this by separating the module into a new git repository for Beta.
