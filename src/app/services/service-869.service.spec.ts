/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service869Service } from './service-869.service';

describe('Service869Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service869Service]
    });
  });

  it('should ...', inject([Service869Service], (service: Service869Service) => {
    expect(service).toBeTruthy();
  }));
});
