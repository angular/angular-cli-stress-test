/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service867Service } from './service-867.service';

describe('Service867Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service867Service]
    });
  });

  it('should ...', inject([Service867Service], (service: Service867Service) => {
    expect(service).toBeTruthy();
  }));
});
