/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service516Service } from './service-516.service';

describe('Service516Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service516Service]
    });
  });

  it('should ...', inject([Service516Service], (service: Service516Service) => {
    expect(service).toBeTruthy();
  }));
});
