/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service511Service } from './service-511.service';

describe('Service511Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service511Service]
    });
  });

  it('should ...', inject([Service511Service], (service: Service511Service) => {
    expect(service).toBeTruthy();
  }));
});
