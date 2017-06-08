/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service654Service } from './service-654.service';

describe('Service654Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service654Service]
    });
  });

  it('should ...', inject([Service654Service], (service: Service654Service) => {
    expect(service).toBeTruthy();
  }));
});
