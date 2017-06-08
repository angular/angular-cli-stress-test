/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service745Service } from './service-745.service';

describe('Service745Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service745Service]
    });
  });

  it('should ...', inject([Service745Service], (service: Service745Service) => {
    expect(service).toBeTruthy();
  }));
});
