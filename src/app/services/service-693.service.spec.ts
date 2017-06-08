/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service693Service } from './service-693.service';

describe('Service693Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service693Service]
    });
  });

  it('should ...', inject([Service693Service], (service: Service693Service) => {
    expect(service).toBeTruthy();
  }));
});
