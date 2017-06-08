/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service70Service } from './service-70.service';

describe('Service70Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service70Service]
    });
  });

  it('should ...', inject([Service70Service], (service: Service70Service) => {
    expect(service).toBeTruthy();
  }));
});
