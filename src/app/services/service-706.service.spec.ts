/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service706Service } from './service-706.service';

describe('Service706Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service706Service]
    });
  });

  it('should ...', inject([Service706Service], (service: Service706Service) => {
    expect(service).toBeTruthy();
  }));
});
