/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service855Service } from './service-855.service';

describe('Service855Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service855Service]
    });
  });

  it('should ...', inject([Service855Service], (service: Service855Service) => {
    expect(service).toBeTruthy();
  }));
});
