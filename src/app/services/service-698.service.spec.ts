/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service698Service } from './service-698.service';

describe('Service698Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service698Service]
    });
  });

  it('should ...', inject([Service698Service], (service: Service698Service) => {
    expect(service).toBeTruthy();
  }));
});
