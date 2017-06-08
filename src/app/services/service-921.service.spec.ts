/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service921Service } from './service-921.service';

describe('Service921Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service921Service]
    });
  });

  it('should ...', inject([Service921Service], (service: Service921Service) => {
    expect(service).toBeTruthy();
  }));
});
