/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service840Service } from './service-840.service';

describe('Service840Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service840Service]
    });
  });

  it('should ...', inject([Service840Service], (service: Service840Service) => {
    expect(service).toBeTruthy();
  }));
});
