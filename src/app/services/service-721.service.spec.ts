/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service721Service } from './service-721.service';

describe('Service721Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service721Service]
    });
  });

  it('should ...', inject([Service721Service], (service: Service721Service) => {
    expect(service).toBeTruthy();
  }));
});
