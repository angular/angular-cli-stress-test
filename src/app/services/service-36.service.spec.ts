/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service36Service } from './service-36.service';

describe('Service36Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service36Service]
    });
  });

  it('should ...', inject([Service36Service], (service: Service36Service) => {
    expect(service).toBeTruthy();
  }));
});
