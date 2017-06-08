/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service910Service } from './service-910.service';

describe('Service910Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service910Service]
    });
  });

  it('should ...', inject([Service910Service], (service: Service910Service) => {
    expect(service).toBeTruthy();
  }));
});
