/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service672Service } from './service-672.service';

describe('Service672Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service672Service]
    });
  });

  it('should ...', inject([Service672Service], (service: Service672Service) => {
    expect(service).toBeTruthy();
  }));
});
