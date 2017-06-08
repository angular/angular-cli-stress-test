/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service833Service } from './service-833.service';

describe('Service833Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service833Service]
    });
  });

  it('should ...', inject([Service833Service], (service: Service833Service) => {
    expect(service).toBeTruthy();
  }));
});
