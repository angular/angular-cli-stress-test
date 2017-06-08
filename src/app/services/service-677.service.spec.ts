/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service677Service } from './service-677.service';

describe('Service677Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service677Service]
    });
  });

  it('should ...', inject([Service677Service], (service: Service677Service) => {
    expect(service).toBeTruthy();
  }));
});
