/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service999Service } from './service-999.service';

describe('Service999Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service999Service]
    });
  });

  it('should ...', inject([Service999Service], (service: Service999Service) => {
    expect(service).toBeTruthy();
  }));
});
