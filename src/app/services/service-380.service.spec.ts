/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service380Service } from './service-380.service';

describe('Service380Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service380Service]
    });
  });

  it('should ...', inject([Service380Service], (service: Service380Service) => {
    expect(service).toBeTruthy();
  }));
});
