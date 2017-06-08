/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service164Service } from './service-164.service';

describe('Service164Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service164Service]
    });
  });

  it('should ...', inject([Service164Service], (service: Service164Service) => {
    expect(service).toBeTruthy();
  }));
});
