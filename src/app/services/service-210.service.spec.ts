/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service210Service } from './service-210.service';

describe('Service210Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service210Service]
    });
  });

  it('should ...', inject([Service210Service], (service: Service210Service) => {
    expect(service).toBeTruthy();
  }));
});
