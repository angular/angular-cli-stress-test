/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service180Service } from './service-180.service';

describe('Service180Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service180Service]
    });
  });

  it('should ...', inject([Service180Service], (service: Service180Service) => {
    expect(service).toBeTruthy();
  }));
});
