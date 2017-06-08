/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service411Service } from './service-411.service';

describe('Service411Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service411Service]
    });
  });

  it('should ...', inject([Service411Service], (service: Service411Service) => {
    expect(service).toBeTruthy();
  }));
});
