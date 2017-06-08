/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service310Service } from './service-310.service';

describe('Service310Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service310Service]
    });
  });

  it('should ...', inject([Service310Service], (service: Service310Service) => {
    expect(service).toBeTruthy();
  }));
});
