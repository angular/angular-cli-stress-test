/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service510Service } from './service-510.service';

describe('Service510Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service510Service]
    });
  });

  it('should ...', inject([Service510Service], (service: Service510Service) => {
    expect(service).toBeTruthy();
  }));
});
