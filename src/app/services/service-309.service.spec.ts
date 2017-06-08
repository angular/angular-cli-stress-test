/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service309Service } from './service-309.service';

describe('Service309Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service309Service]
    });
  });

  it('should ...', inject([Service309Service], (service: Service309Service) => {
    expect(service).toBeTruthy();
  }));
});
