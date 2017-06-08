/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service454Service } from './service-454.service';

describe('Service454Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service454Service]
    });
  });

  it('should ...', inject([Service454Service], (service: Service454Service) => {
    expect(service).toBeTruthy();
  }));
});
