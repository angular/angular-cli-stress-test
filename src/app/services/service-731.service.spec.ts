/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service731Service } from './service-731.service';

describe('Service731Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service731Service]
    });
  });

  it('should ...', inject([Service731Service], (service: Service731Service) => {
    expect(service).toBeTruthy();
  }));
});
