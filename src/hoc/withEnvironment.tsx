import React from 'react';

export function withEnvironment(WrappedComponent: any, Environment: any) {
  return class extends React.Component<any, any> {
    public render() {
      return <WrappedComponent {...this.props} environment={Environment} />;
    }
  };
}
