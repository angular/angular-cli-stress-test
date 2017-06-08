/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service190Service } from './service-190.service';

describe('Service190Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service190Service]
    });
  });

  it('should ...', inject([Service190Service], (service: Service190Service) => {
    expect(service).toBeTruthy();
  }));
});
