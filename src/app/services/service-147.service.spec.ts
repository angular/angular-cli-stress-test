/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service147Service } from './service-147.service';

describe('Service147Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service147Service]
    });
  });

  it('should ...', inject([Service147Service], (service: Service147Service) => {
    expect(service).toBeTruthy();
  }));
});
