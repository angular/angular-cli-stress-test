/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service214Service } from './service-214.service';

describe('Service214Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service214Service]
    });
  });

  it('should ...', inject([Service214Service], (service: Service214Service) => {
    expect(service).toBeTruthy();
  }));
});
