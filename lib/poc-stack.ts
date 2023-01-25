import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as ecs_patterns from 'aws-cdk-lib/aws-ecs-patterns';
import { Construct } from 'constructs';

export class PocStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new ec2.Vpc(this, 'MyVPc'), {
      cidr: "10.0.0.0/16",
      maxAzs: "5",
      vpcName: "cdk-vpc",
      natGateways : "0"

    }


  }
}


