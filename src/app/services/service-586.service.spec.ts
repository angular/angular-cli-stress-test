/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service586Service } from './service-586.service';

describe('Service586Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service586Service]
    });
  });

  it('should ...', inject([Service586Service], (service: Service586Service) => {
    expect(service).toBeTruthy();
  }));
});
