/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service669Service } from './service-669.service';

describe('Service669Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service669Service]
    });
  });

  it('should ...', inject([Service669Service], (service: Service669Service) => {
    expect(service).toBeTruthy();
  }));
});
