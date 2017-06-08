/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service719Service } from './service-719.service';

describe('Service719Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service719Service]
    });
  });

  it('should ...', inject([Service719Service], (service: Service719Service) => {
    expect(service).toBeTruthy();
  }));
});
